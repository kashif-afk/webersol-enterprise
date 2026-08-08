'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-obsidian)] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative h-10 w-40">
            <Image
              src="/logo.png"
              alt="Webersol Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Enterprise Generative AI & Autonomous Software Architecture. Empowering global enterprises with sub-second performance, high-concurrency systems, and AI automation.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-[var(--color-slateGraphite)]/50 border border-slate-800 p-2.5 rounded-lg w-fit">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>SOC2 Type II Compliant Architecture</span>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">Capabilities</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services/ai-automation" className="hover:text-cyan-400 transition-colors">Generative AI Agents</Link></li>
            <li><Link href="/services/custom-engineering" className="hover:text-cyan-400 transition-colors">Cloud Architecture</Link></li>
            <li><Link href="/services/performance-growth" className="hover:text-cyan-400 transition-colors">Generative Engine SEO</Link></li>
          </ul>
        </div>

        {/* Platform */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">Platform</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/#estimator" className="hover:text-cyan-400 transition-colors">ROI Estimator</Link></li>
            <li><Link href="/#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
            <li><Link href="/#contact" className="hover:text-cyan-400 transition-colors">Strategy Call</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs font-mono uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2.5 text-xs font-mono">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Johar Town, Lahore, Pakistan</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>info@webersol.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>+92 335 4654941</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800/80 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono">
        <p>© 2026 Webersol Enterprise IT Solutions. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Core Web Vitals Engine | Next.js App Router</p>
      </div>
    </footer>
  );
};