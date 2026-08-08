'use client';

import React from 'react';
import { Cpu, ShieldCheck, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-obsidian)] border-t border-slate-800 text-slate-400 text-sm">
      {/* ... rest of your footer code ... */}
      <div className="border-t border-slate-800/80 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono">
        <p>© 2026 Webersol Enterprise IT Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};