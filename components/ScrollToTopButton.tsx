'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ChevronUp } from 'lucide-react';

const SHOW_AFTER_PX = 480;

const getScrollY = () =>
  window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

export const ScrollToTopButton = () => {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      setVisible(getScrollY() > SHOW_AFTER_PX);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(checkScroll);
    };

    checkScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Client-side route changes don't always fire a 'scroll' event even though
  // the new page starts back at the top — re-check explicitly on navigation.
  useEffect(() => {
    setVisible(getScrollY() > SHOW_AFTER_PX);
  }, [pathname]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.2 }}
          className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-slateGraphite/80 backdrop-blur-md border border-slate-700 text-slate-300 flex items-center justify-center shadow-lg shadow-black/20 hover:text-steelBright hover:border-steelBright/60 transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
