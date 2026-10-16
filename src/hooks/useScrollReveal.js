import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * IntersectionObserver-based reveal with directional enter AND exit.
 * Works independently of framer-motion — CSS-driven, GPU-friendly.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = false,
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const dir = window.scrollY >= lastScrollY ? 'down' : 'up';
      lastScrollY = window.scrollY;
      el.setAttribute('data-reveal-dir', dir);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const dir = el.getAttribute('data-reveal-dir') || 'down';

        if (entry.isIntersecting) {
          el.classList.remove('is-hidden');
          el.classList.add('is-visible');

          if (dir === 'up') {
            el.classList.add('reveal-from-above');
          } else {
            el.classList.remove('reveal-from-above');
          }

          if (once) observer.unobserve(el);
        } else {
          // Leaving the viewport — fade out
          el.classList.remove('is-visible');

          if (dir === 'down') {
            // Scrolling down: element left from above → fade up
            el.classList.add('is-hidden', 'hide-to-above');
          } else {
            // Scrolling up: element left from below → fade down
            el.classList.add('is-hidden', 'hide-to-below');
          }

          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    el.setAttribute('data-reveal-dir', 'down');
    observer.observe(el);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return ref;
}
