import { useEffect, useRef } from 'react';

/**
 * useDirectionalReveal
 *
 * Sets data-reveal-dir="up|down" on the element ref as you scroll.
 * Also tracks when the element leaves the viewport and applies
 * a data-exiting="true" attribute so CSS can animate the exit direction.
 *
 * Usage:
 *   const { ref, direction } = useDirectionalReveal();
 *   // direction.current === 'up' | 'down'
 *
 * CSS reads [data-reveal-dir] and [data-exiting] to animate exits.
 */
export function useDirectionalReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options;
  const containerRef = useRef(null);
  const direction = useRef('down');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let lastScrollY = window.scrollY;

    // 1. Track scroll direction
    const handleScroll = () => {
      direction.current = window.scrollY >= lastScrollY ? 'down' : 'up';
      lastScrollY = window.scrollY;
      el.setAttribute('data-reveal-dir', direction.current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    el.setAttribute('data-reveal-dir', 'down');

    // 2. Observer: mark element as entering viewport
    const entryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('is-exiting', 'is-hidden');
          el.classList.add('is-visible');
          el.removeAttribute('data-exiting');
        }
      },
      { threshold, rootMargin }
    );

    // 3. Observer: mark element as exiting viewport (top or bottom edge)
    const exitObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          // Element left from the TOP — we scrolled down past it
          el.classList.remove('is-visible');
          el.classList.add('is-exiting');
          el.setAttribute('data-exiting', 'true');
          // Fade OUT upward (opposite to scroll direction)
          el.setAttribute('data-exit-dir', 'up');
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          // Element left from the BOTTOM — we scrolled up past it
          el.classList.remove('is-visible');
          el.classList.add('is-exiting');
          el.setAttribute('data-exiting', 'true');
          // Fade OUT downward (opposite to scroll direction)
          el.setAttribute('data-exit-dir', 'down');
        }
      },
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    );

    entryObserver.observe(el);
    exitObserver.observe(el);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      entryObserver.disconnect();
      exitObserver.disconnect();
    };
  }, [threshold, rootMargin]);

  return containerRef;
}
