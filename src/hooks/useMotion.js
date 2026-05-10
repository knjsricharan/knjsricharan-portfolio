import { useEffect, useRef, useCallback } from 'react';

/**
 * useScrollReveal
 * Provides intersection-observer-based reveal behavior for sections.
 * Consistent timing, once-only, GPU-friendly via CSS classes.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -40px 0px',
    once = true,
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('section-reveal');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * useScrollProgress
 * Tracks scroll progress (0–1) via requestAnimationFrame.
 * Returns a ref to attach to a progress bar element's width style.
 */
export function useScrollProgress() {
  const progressRef = useRef(0);

  useEffect(() => {
    let raf;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = docHeight > 0 ? scrollTop / docHeight : 0;
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return progressRef;
}

/**
 * useReducedMotion
 * Returns true if user prefers reduced motion.
 */
export function useReducedMotion() {
  return useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current;
}
