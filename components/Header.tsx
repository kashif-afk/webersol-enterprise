'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

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

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="relative z-50 w-full backdrop-blur-xl bg-[var(--color-obsidian)]/80 border-b border-slate-800/85 transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
       {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-19 w-52 sm:w-65 ">
            <Image
              src="/logo.png"
              alt="Webersol Logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 192px, 240px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/#services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/#estimator" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span>ROI Estimator</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-blue-500/20 text-blue-400 rounded-full font-mono border border-blue-500/30">Interactive</span>
          </Link>
          <Link href="/#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-md shadow-blue-600/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Estimate Project</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            className="md:hidden bg-[var(--color-obsidian)] border-b border-slate-800 px-6 py-6 space-y-4 overflow-hidden"
          >
            <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1.5">Services</Link>
            <Link href="/#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1.5">ROI Estimator</Link>
            <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1.5">Case Studies</Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-center block"
            >
              Estimate Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};