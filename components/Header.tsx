'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const STORY_SECTION_IDS = ['hero-section', 'services', 'process'];

const headerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

const drawerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeInOut' as const }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2, ease: 'easeInOut' as const }
  }
};

const CHAPTER_LABELS = ['Arrival', 'Capabilities', 'Process'];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  useEffect(() => {
    const elements = STORY_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elements.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveChapter(index);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="relative z-50 w-full backdrop-blur-xl bg-obsidian/80 border-b border-slate-800/85 transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 h-28 sm:h-32 flex items-center justify-between">

       {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32">
            <Image
              src="/logo.png"
              alt="Webersol Logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 112px, 128px"
              priority
            />
          </div>
        </Link>

        {/* Story chapter indicator — tracks Hero / Services / Process */}
        {activeChapter !== null && (
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span className="text-steelBright">{String(activeChapter + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(STORY_SECTION_IDS.length).padStart(2, '0')}</span>
            <span className="ml-1 uppercase tracking-wider">{CHAPTER_LABELS[activeChapter]}</span>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/about" className="hover:text-steelBright transition-colors">About Us</Link>
          <Link href="/marketing" className="hover:text-steelBright transition-colors">Marketing</Link>
          <Link href="/#services" className="hover:text-steelBright transition-colors">Services</Link>
          <Link href="/#estimator" className="hover:text-steelBright transition-colors flex items-center gap-1.5">
            <span>ROI Estimator</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-amber/15 text-amber rounded-full font-mono border border-amber/30">Interactive</span>
          </Link>
          <Link href="/#case-studies" className="hover:text-steelBright transition-colors">Case Studies</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-xl bg-steel hover:bg-steelBright text-onAccentLight font-semibold text-sm flex items-center gap-2 transition-all shadow-md shadow-steel/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Estimate Project</span>
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-2"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-steel via-steelBright to-amber pointer-events-none"
      />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            className="md:hidden bg-obsidian border-b border-slate-800 px-6 py-6 space-y-4 overflow-hidden"
          >
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-steelBright font-medium py-1.5">About Us</Link>
            <Link href="/marketing" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-steelBright font-medium py-1.5">Marketing</Link>
            <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-steelBright font-medium py-1.5">Services</Link>
            <Link href="/#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-steelBright font-medium py-1.5">ROI Estimator</Link>
            <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-steelBright font-medium py-1.5">Case Studies</Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 px-5 py-3 rounded-xl bg-steel text-onAccentLight font-semibold text-center block"
            >
              Estimate Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};