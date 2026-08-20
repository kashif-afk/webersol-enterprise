'use client';

import { RefObject, useEffect, useState } from 'react';

/**
 * Tracks whether an element is near the viewport, so expensive children (WebGL canvases)
 * can be unmounted — not just hidden — once the user scrolls far past them.
 */
export function useInViewMount<T extends HTMLElement>(
  ref: RefObject<T | null>,
  rootMargin = '50% 0px 50% 0px'
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}
