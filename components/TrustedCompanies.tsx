'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, Cloud, Terminal } from 'lucide-react';

const partners = [
  { name: 'Odoo Enterprise', icon: Globe, badge: 'Official Partner' },
  { name: 'AWS Cloud', icon: Cloud, badge: 'Advanced Tier' },
  { name: 'Vercel Infrastructure', icon: Zap, badge: 'Edge Network' },
  { name: 'Google Cloud AI', icon: Cpu, badge: 'LLM Integrator' },
  { name: 'Next.js Ecosystem', icon: Terminal, badge: 'Core Stack' },
  { name: 'SOC2 Security', icon: Shield, badge: 'Type II Compliant' },
];

export const TrustedCompanies = () => {
  return (
    <section className="py-16 bg-[var(--color-obsidian)] border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
          Trusted by Innovative Engineering Teams & Global Standards
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient masks for smooth fade edges */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[var(--color-obsidian)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[var(--color-obsidian)] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 shrink-0 items-center min-w-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {/* Duplicate array to create a seamless infinite loop */}
          {[...partners, ...partners].map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl border border-slate-800/80 bg-[var(--color-slateGraphite)]/30 backdrop-blur-md shrink-0 hover:border-slate-700 transition-colors"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white tracking-wide block">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    {partner.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};