import { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [reducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.innerWidth < 768
    );
  });

  useEffect(() => {
    const mouse = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let animFrame;

    // ── Particle System (desktop only, reduced on tablet) ───────
    const particles = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.style.opacity = isMobile ? '0.35' : '0.55';

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          originX: Math.random() * canvas.width,
          originY: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.2 + 0.4,
          opacity: Math.random() * 0.12 + 0.04
        });
      }
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);

    // ── Listeners ─────────────────────────────────────────────
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const updateInteractives = () => {
      document.querySelectorAll('a, button, [role="button"], .interactive-card').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateInteractives();

    let particleRgb = getComputedStyle(document.documentElement).getPropertyValue('--particle-rgb').trim() || '17, 17, 16';
    const updateThemeColor = () => {
      particleRgb = getComputedStyle(document.documentElement).getPropertyValue('--particle-rgb').trim() || '17, 17, 16';
    };

    const observer = new MutationObserver(updateInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    const themeObserver = new MutationObserver(updateThemeColor);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ── Animation Loop ───────────────────────────────────────
    const animate = () => {
      // Smooth ring — slightly slower for calmer feel
      ringPos.x += (mouse.x - ringPos.x) * 0.1;
      ringPos.y += (mouse.y - ringPos.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      }

      // Canvas particles — skip if reduced motion
      if (!reducedMotion) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 160;

          if (dist < radius) {
            const force = (radius - dist) / radius;
            p.x -= dx * force * 0.015;
            p.y -= dy * force * 0.015;
          }

          p.x += (p.originX - p.x) * 0.008;
          p.y += (p.originY - p.y) * 0.008;

          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particleRgb}, ${p.opacity})`;
          ctx.fill();
        });
      }

      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, [reducedMotion]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'cursor-hover' : ''}`}
      />
    </>
  );
};

export default Cursor;
