'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

export const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Reading the theme the pre-hydration script already applied to <html> and
  // syncing it into component state is unavoidable here — it's what lets the
  // icon match the real theme without a server/client hydration mismatch.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'light' : 'dark');
    setMounted(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private browsing, etc.) — theme just won't persist
    }
  };

  // Avoid rendering an icon that might not match the script-applied theme
  // until after mount, to prevent a brief mismatched flash.
  if (!mounted) {
    return <div className={`w-9 h-9 rounded-lg ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 bg-slateGraphite/70 text-slate-300 hover:text-steelBright hover:border-steelBright/50 transition-all shrink-0 ${className}`}
    >
      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
};
