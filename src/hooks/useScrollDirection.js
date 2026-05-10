import { useEffect, useRef } from 'react';

let scrollY = 0;

/**
 * Tracks global scroll direction.
 * Sets `data-scroll-dir="up"` or `data-scroll-dir="down"` on <html>.
 */
export function useScrollDirection() {
  useEffect(() => {
    const handleScroll = () => {
      const dir = window.scrollY > scrollY ? 'down' : 'up';
      document.documentElement.setAttribute('data-scroll-dir', dir);
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
