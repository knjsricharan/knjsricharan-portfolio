import React, { useEffect, useRef } from 'react';

const generateParticles = () => {
  const particles = [];
  const groups = [
    { count: 50, radiusX: 30, radiusY: 30, speed: 30 }, // Outer Orbit (more dots)
    { count: 40, radiusX: 15, radiusY: 15, speed: 40 }, // Inner Orbit
    { count: 35, radiusX: 45, radiusY: 10, speed: 25 }, // Wide Horizontal
    { count: 30, radiusX: 10, radiusY: 45, speed: 35 }, // Tall Vertical
  ];

  groups.forEach((group) => {
    for (let i = 0; i < group.count; i++) {
      const angle = (i / group.count) * Math.PI * 2;
      const variance = 0.8 + Math.random() * 0.4;

      const x = 50 + (Math.cos(angle) * group.radiusX * variance);
      const y = 48 + (Math.sin(angle) * group.radiusY * variance);

      const dx = (Math.random() - 0.5) * 30 + 'px';
      const dy = (Math.random() - 0.5) * 30 + 'px';
      const duration = (group.speed + Math.random() * 20) + 's';
      const delay = `-${Math.random() * 40}s`;

      particles.push({
        x: `${x}%`,
        y: `${y}%`,
        dx,
        dy,
        duration,
        delay,
        blue: Math.random() > 0.7,
      });
    }
  });

  return particles;
};

const ALL_PARTICLES = generateParticles();

export default function BackgroundTypography() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleInteraction = (e) => {
      if (!containerRef.current) return;

      // Support both Mouse and Touch
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const particlesEls = containerRef.current.querySelectorAll('.cinematic-particle');

      particlesEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;

        const distC_X = clientX - particleX;
        const distC_Y = clientY - particleY;
        const distance = Math.sqrt(distC_X * distC_X + distC_Y * distC_Y);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          const moveX = (distC_X / distance) * -40 * force;
          const moveY = (distC_Y / distance) * -40 * force;
          el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        } else {
          el.style.transform = '';
        }
      });
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.pageYOffset / 10;
      const particlesEls = containerRef.current.querySelectorAll('.cinematic-particle');
      particlesEls.forEach((el, index) => {
        // Apply a subtle parallax shift based on scroll
        const shiftX = Math.sin(scrolled + index) * 5; // smaller amplitude for subtlety
        const shiftY = Math.cos(scrolled + index) * 5;
        // Combine with any existing transform (e.g., from mouse interaction)
        const existing = el.style.transform || '';
        // If there is a mouse-driven transform (contains 'translate3d'), we replace only the scroll portion.
        // Simpler: set transform to scroll shift; mouse interaction will overwrite when moving.
        el.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0)`;
      });
    };

    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('touchmove', handleInteraction, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('touchmove', handleInteraction);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="cinematic-background" ref={containerRef} aria-hidden="true">
      <span className="cinematic-watermark">CJ08</span>
      {ALL_PARTICLES.map((particle, index) => (
        <span
          key={index}
          className={`cinematic-particle${particle.blue ? ' is-blue' : ''}`}
          style={{
            '--particle-x': particle.x,
            '--particle-y': particle.y,
            '--drift-x': particle.dx,
            '--drift-y': particle.dy,
            '--particle-delay': particle.delay,
            '--particle-duration': particle.duration,
          }}
        />
      ))}
    </div>
  );
}
