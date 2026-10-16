import React, { useEffect, useRef } from 'react';

const generateParticles = () => {
  const particles = [];
  const count = 320; // galaxy-density star field across the full screen

  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    const dx = (Math.random() - 0.5) * 40 + 'px';
    const dy = (Math.random() - 0.5) * 40 + 'px';
    const duration = (20 + Math.random() * 40) + 's';
    const delay = `-${Math.random() * 60}s`;

    particles.push({
      x: `${x}%`,
      y: `${y}%`,
      dx,
      dy,
      duration,
      delay,
      blue: Math.random() > 0.75,
    });
  }

  return particles;
};

const ALL_PARTICLES = generateParticles();
const GOLDEN = 0.618033988749895;

// Interaction tuning (kept deliberately subtle)
const HOVER_STRENGTH = 0.8;
const RING_EASE = 0.13;     // cursor → ring centre delay
const HOVER_EASE = 0.16;    // dots → hover ring
const GATHER_EASE = 0.14;   // dots → click/tap circle
const DISSOLVE_EASE = 0.055; // dots → rest (gentle)
const SCROLL_EASE = 0.06;
const PARALLAX_MAX = 40;
const HOLD_MS = 650;        // quick tap keeps the circle visible briefly
const RELEASE_TAIL = 120;   // keep easing while pointer is held

export default function BackgroundTypography() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stopReduced = () => {
      running = false;
      cancelAnimationFrame(rafId);
      resetStyles();
    };
    if (reduceMotion.matches) return; // respect reduced motion: background stays static

    const els = container.querySelectorAll('.cinematic-particle');
    const n = els.length;
    if (!n) return;

    const dots = new Array(n);
    for (let i = 0; i < n; i++) {
      const p = ALL_PARTICLES[i];
      dots[i] = {
        el: els[i],
        bx: parseFloat(p.x),
        by: parseFloat(p.y),
        seed: ((i + 1) * GOLDEN) % 1,
        ox: 0,
        oy: 0,
        lx: 0,
        ly: 0,
      };
    }

    const resetStyles = () => {
      for (let i = 0; i < n; i++) {
        dots[i].el.style.setProperty('--ix', '0px');
        dots[i].el.style.setProperty('--iy', '0px');
      }
    };

    let vw = window.innerWidth || 1;
    let vh = window.innerHeight || 1;
    let docH = Math.max(vh, document.documentElement.scrollHeight);
    let depthUnit = PARALLAX_MAX / Math.max(1, docH - vh);

    let ringR = vw < 700 ? 60 : 92;
    let hoverR = ringR * 2.75;
    let gatherR = ringR * 3.8;

    // pointer / ring state
    const raw = { x: vw / 2, y: vh / 2, active: false };
    const down = { x: raw.x, y: raw.y };
    const ring = { x: raw.x, y: raw.y };
    let pointerDown = false;
    let gather = false;
    let releaseAt = performance.now() + HOLD_MS;

    // scroll state
    let scrollTarget = window.scrollY || 0;
    let scrollSmooth = scrollTarget;
    let lastMeasure = performance.now();

    let running = false;
    let rafId = 0;

    const wake = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const setPoint = (x, y) => {
      raw.x = x;
      raw.y = y;
      wake();
    };

    const onPointerDown = (e) => {
      if (!e.isPrimary) return;
      pointerDown = true;
      gather = true;
      down.x = raw.x;
      down.y = raw.y;
      releaseAt = performance.now() + HOLD_MS;
      setPoint(e.clientX, e.clientY);
    };

    const onPointerMove = (e) => {
      if (!e.isPrimary) return;
      raw.active = true;
      setPoint(e.clientX, e.clientY);
    };

    const onPointerUp = (e) => {
      if (!e.isPrimary) return;
      pointerDown = false;
      const now = performance.now();
      const dx = raw.x - down.x;
      const dy = raw.y - down.y;
      if (dx * dx + dy * dy >= 144) releaseAt = Math.min(releaseAt, now); // drag ends quickly
      if (e.pointerType !== 'mouse') raw.active = false; // touch: no hover linger
      wake();
    };

    const onPointerCancel = (e) => {
      pointerDown = false;
      releaseAt = Math.min(releaseAt, performance.now());
      if (e.pointerType !== 'mouse') raw.active = false;
      wake();
    };

    const onPointerOut = (e) => {
      if (e.pointerType === 'mouse' && !e.relatedTarget) raw.active = false;
    };

    const onScroll = () => {
      scrollTarget = window.scrollY || 0;
      wake();
    };

    const onResize = () => {
      vw = window.innerWidth || 1;
      vh = window.innerHeight || 1;
      docH = Math.max(vh, document.documentElement.scrollHeight);
      depthUnit = PARALLAX_MAX / Math.max(1, docH - vh);
      ringR = vw < 700 ? 60 : 92;
      hoverR = ringR * 2.75;
      gatherR = ringR * 3.8;
      wake();
    };

    const usePointer = !!window.PointerEvent;

    if (usePointer) {
      document.addEventListener('pointerdown', onPointerDown, { passive: true });
      document.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('pointerup', onPointerUp, { passive: true });
      document.addEventListener('pointercancel', onPointerCancel, { passive: true });
      document.addEventListener('pointerout', onPointerOut, { passive: true });
    } else {
      const onMouseMove = (e) => {
        raw.active = true;
        setPoint(e.clientX, e.clientY);
      };
      const onTouchStart = (e) => {
        if (!e.isPrimary) return;
        pointerDown = true;
        gather = true;
        down.x = raw.x;
        down.y = raw.y;
        releaseAt = performance.now() + HOLD_MS;
        if (e.touches && e.touches[0]) setPoint(e.touches[0].clientX, e.touches[0].clientY);
        raw.active = true;
        wake();
      };
      const onTouchMove = (e) => {
        if (e.touches && e.touches[0]) setPoint(e.touches[0].clientX, e.touches[0].clientY);
        raw.active = true;
        wake();
      };
      const onTouchEnd = () => {
        pointerDown = false;
        raw.active = false;
        releaseAt = Math.min(releaseAt, performance.now());
        wake();
      };
      const onMouseOut = (e) => {
        if (!e.relatedTarget) raw.active = false;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('touchstart', onTouchStart, { passive: true });
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onTouchEnd, { passive: true });
      document.addEventListener('mouseout', onMouseOut, { passive: true });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    const tick = () => {
      rafId = 0;
      const now = performance.now();

      if (now - lastMeasure > 600) {
        lastMeasure = now;
        docH = Math.max(vh, document.documentElement.scrollHeight);
        depthUnit = PARALLAX_MAX / Math.max(1, docH - vh);
      }

      if (pointerDown) releaseAt = Math.max(releaseAt, now + RELEASE_TAIL);
      else if (gather && now >= releaseAt) gather = false;

      // ring centre follows cursor/touch with smooth, slight delay
      ring.x += (raw.x - ring.x) * RING_EASE;
      ring.y += (raw.y - ring.y) * RING_EASE;

      scrollSmooth += (scrollTarget - scrollSmooth) * SCROLL_EASE;

      const mode = pointerDown || gather ? 2 : raw.active ? 1 : 0;
      const influenceR = mode === 2 ? gatherR : hoverR;
      const strength = mode === 2 ? 1 : HOVER_STRENGTH;
      const ease = mode === 2 ? GATHER_EASE : mode === 1 ? HOVER_EASE : DISSOLVE_EASE;
      const rInf2 = influenceR * influenceR;

      let busy = Math.abs(scrollTarget - scrollSmooth) > 0.25;
      if (mode && (Math.abs(raw.x - ring.x) > 0.3 || Math.abs(raw.y - ring.y) > 0.3)) busy = true;

      for (let i = 0; i < n; i++) {
        const d = dots[i];
        const px = (d.bx / 100) * vw;
        const py = (d.by / 100) * vh;

        let tx = 0;
        let ty = -scrollSmooth * (0.25 + d.seed * 0.75) * depthUnit; // cinematic scroll parallax
        tx += Math.sin((scrollSmooth + i * 37) * 0.004) * 3.5; // tiny organic wave

        if (mode === 0) {
          // gentle idle float — stars drifting in space
          const t = now * 0.0005;
          tx += Math.sin(t + i * 1.3) * 3;
          ty += Math.cos(t * 0.8 + i * 1.7) * 3;
          busy = true;
        }

        if (mode) {
          const ax = ring.x - px;
          const ay = ring.y - py;
          const d2 = ax * ax + ay * ay;
          if (d2 > 0.01 && d2 < rInf2) {
            const dist = Math.sqrt(d2);
            const force = Math.pow(1 - dist / influenceR, 1.4);
            const halo = ringR * (0.82 + d.seed * 0.42) * (mode === 2 ? 1.05 : 1);
            const push = ((halo - dist) * strength) * force; // signed radial pull onto the ring
            tx += (ax / dist) * push;
            ty += (ay / dist) * push;
          }
        }

        d.ox += (tx - d.ox) * ease;
        d.oy += (ty - d.oy) * ease;

        if (Math.abs(d.ox) > 0.05 || Math.abs(d.oy) > 0.05) busy = true;
        if (Math.abs(d.ox - d.lx) > 0.02) {
          d.lx = d.ox;
          d.el.style.setProperty('--ix', d.ox.toFixed(2) + 'px');
        }
        if (Math.abs(d.oy - d.ly) > 0.02) {
          d.ly = d.oy;
          d.el.style.setProperty('--iy', d.oy.toFixed(2) + 'px');
        }
      }

      if (busy) rafId = requestAnimationFrame(tick);
      else running = false;
    };

    wake();

    reduceMotion.addEventListener('change', stopReduced);

    return () => {
      reduceMotion.removeEventListener('change', stopReduced);
      if (usePointer) {
        document.removeEventListener('pointerdown', onPointerDown);
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
        document.removeEventListener('pointercancel', onPointerCancel);
        document.removeEventListener('pointerout', onPointerOut);
      } else {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        document.removeEventListener('mouseout', onMouseOut);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
      resetStyles();
      running = false;
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
