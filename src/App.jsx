import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useRef, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundTypography from './components/BackgroundTypography';
import Marquee from './components/Marquee';
import CVInsightsDetail from './pages/CVInsightsDetail';
import CJAssistDetail from './pages/CJAssistDetail';
import CAGDetail from './pages/CAGDetail';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const containerRef = useRef(null);

  const particles = useMemo(() => {
    const pts = [];
    const groups = [
      { count: 40, rx: 30, ry: 30, s: 30 },
      { count: 30, rx: 15, ry: 15, s: 40 },
      { count: 25, rx: 45, ry: 10, s: 25 },
      { count: 20, rx: 10, ry: 45, s: 35 },
    ];
    groups.forEach(g => {
      for (let i = 0; i < g.count; i++) {
        const a = (i / g.count) * Math.PI * 2;
        const v = 0.8 + Math.random() * 0.4;
        pts.push({
          x: 50 + Math.cos(a) * g.rx * v,
          y: 48 + Math.sin(a) * g.ry * v,
          dx: (Math.random() - 0.5) * 30 + 'px',
          dy: (Math.random() - 0.5) * 30 + 'px',
          dur: (g.s + Math.random() * 20) + 's',
          del: `-${Math.random() * 40}s`,
          blue: Math.random() > 0.7,
        });
      }
    });
    return pts;
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      const els = containerRef.current.querySelectorAll('.particle-dot');
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        const px = r.left + r.width / 2;
        const py = r.top + r.height / 2;
        const dx = x - px;
        const dy = y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const f = (200 - dist) / 200;
          el.style.transform = `translate3d(${dx / dist * -40 * f}px, ${dy / dist * -40 * f}px, 0)`;
        } else {
          el.style.transform = '';
        }
      });
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.pageYOffset / 10;
      const els = containerRef.current.querySelectorAll('.particle-dot');
      els.forEach((el, index) => {
        const shiftX = Math.sin(scrolled + index) * 5;
        const shiftY = Math.cos(scrolled + index) * 5;
        el.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="site-shell min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-blue-500 selection:text-white" ref={containerRef}>
      <style>{`
        .particle-container {
          position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; background: #000;
        }
        .particle-dot {
          position: absolute; width: 2px; height: 2px; border-radius: 50%;
          background: rgba(224, 230, 238, 0.6); box-shadow: 0 0 4px rgba(224, 230, 238, 0.3);
          opacity: 0; z-index: 1; pointer-events: none;
          animation: p-drift var(--dur) ease-in-out var(--del) infinite !important;
          will-change: transform, opacity; transition: transform 0.3s ease-out;
        }
        .particle-dot.blue {
          background: rgba(126, 169, 255, 0.7); box-shadow: 0 0 6px rgba(104, 155, 255, 0.4);
        }
        @keyframes p-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(0.8); opacity: 0; }
          20% { opacity: 0.4; }
          50% { transform: translate3d(var(--dx), var(--dy), 0) scale(1); opacity: 0.6; }
          80% { opacity: 0.2; }
        }
      `}</style>
      <div className="particle-container">
        <BackgroundTypography />
        {particles.map((p, i) => (
          <div key={i} className={`particle-dot ${p.blue ? 'blue' : ''}`}
               style={{ '--particle-x': `${p.x}%`, '--particle-y': `${p.y}%`, '--dx': p.dx, '--dy': p.dy, '--dur': p.dur, '--del': p.del, left: `${p.x}%`, top: `${p.y}%`, animation: 'none', opacity: 0.6 }}
          />
        ))}
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/cvinsights" element={<CVInsightsDetail />} />
        <Route path="/projects/cj-assist" element={<CJAssistDetail />} />
        <Route path="/projects/cag-analyzer" element={<CAGDetail />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;


