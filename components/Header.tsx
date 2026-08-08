'use client';

import React, { useState } from 'react';
import { Cpu, Menu, X, Sparkles } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[var(--color-obsidian)]/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
              WEBERSOL <span className="text-cyan-400 text-xs font-mono font-normal border border-cyan-500/30 px-1.5 py-0.5 rounded bg-cyan-500/10">AI</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Enterprise Systems</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#estimator" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <span>ROI Estimator</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-blue-500/20 text-blue-400 rounded-full font-mono border border-blue-500/30">Interactive</span>
          </a>
          <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-md shadow-blue-600/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Estimate Project</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-obsidian)] border-b border-slate-800 px-6 py-6 space-y-4">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">Services</a>
          <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">ROI Estimator</a>
          <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">Case Studies</a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-4 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-center block"
          >
            Estimate Project
          </a>
        </div>
      )}
    </header>
  );
};