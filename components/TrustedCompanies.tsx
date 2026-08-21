'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Cloud } from 'lucide-react';
import { siOdoo, siVercel, siGooglecloud, siNextdotjs } from 'simple-icons';

// Renders a simple-icons brand mark as a monochrome SVG (fill="currentColor"),
// matching the lucide icons it sits alongside — never the brand's own color,
// per the "no colored logo" requirement for this slider.
const BrandMark = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
);

const partners = [
  { name: 'Odoo Enterprise', icon: <BrandMark path={siOdoo.path} />, badge: 'Official Partner' },
  { name: 'AWS Cloud', icon: <Cloud className="w-4 h-4" />, badge: 'Advanced Tier' },
  { name: 'Vercel Infrastructure', icon: <BrandMark path={siVercel.path} />, badge: 'Edge Network' },
  { name: 'Google Cloud AI', icon: <BrandMark path={siGooglecloud.path} />, badge: 'LLM Integrator' },
  { name: 'Next.js Ecosystem', icon: <BrandMark path={siNextdotjs.path} />, badge: 'Core Stack' },
  { name: 'SOC2 Security', icon: <Shield className="w-4 h-4" />, badge: 'Type II Compliant' },
];

export const TrustedCompanies = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 bg-obsidian border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 mb-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
          Trusted by Innovative Engineering Teams & Global Standards
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient masks for smooth fade edges */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 shrink-0 items-center min-w-full"
          animate={reduceMotion ? { x: '0%' } : { x: ['0%', '-50%'] }}
          transition={reduceMotion ? { duration: 0 } : { repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {/* Duplicate array to create a seamless infinite loop; second half is decorative for screen readers */}
          {[...partners, ...partners].map((partner, index) => {
            const isDuplicate = index >= partners.length;
            return (
              <div
                key={index}
                aria-hidden={isDuplicate ? true : undefined}
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl border border-slate-800/80 bg-slateGraphite/30 backdrop-blur-md shrink-0 hover:border-slate-700 transition-colors"
              >
                <div className="p-2 rounded-lg bg-steel/10 border border-steel/20 text-steelBright">
                  {partner.icon}
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