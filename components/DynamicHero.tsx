'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const DynamicHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-[var(--color-obsidian)] text-white flex items-center justify-center overflow-hidden px-6 lg:px-12 py-20">
      
      {/* Ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Deep Contrast Vignette Overlay so Headings and Text Stand Out Clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-obsidian)]/90 via-[var(--color-obsidian)]/60 to-[var(--color-obsidian)]/90 pointer-events-none z-0" />

      {/* Vector Constellation Mesh Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.25' stroke-width='0.75'%3E%3Cpath d='M50 50 L150 30 L220 120 L90 180 Z' /%3E%3Cpath d='M150 30 L320 80 L280 200 L220 120 Z' /%3E%3Cpath d='M320 80 L380 150 L350 280 L280 200 Z' /%3E%3Cpath d='M90 180 L220 120 L180 290 L50 250 Z' /%3E%3Cpath d='M220 120 L280 200 L310 320 L180 290 Z' /%3E%3Cpath d='M280 200 L350 280 L380 380 L310 320 Z' /%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='150' cy='30' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='220' cy='120' r='3' fill='%23ffffff' fill-opacity='0.55'/%3E%3Ccircle cx='320' cy='80' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='90' cy='180' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='280' cy='200' r='3' fill='%23ffffff' fill-opacity='0.55'/%3E%3Ccircle cx='350' cy='280' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='180' cy='290' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='310' cy='320' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-slateGraphite)]/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-cyan-400 shadow-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Architecting Autonomous AI & Enterprise Web Infrastructure.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md"
        >
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">Autonomous AI</span> <br />
          & Enterprise Web Infrastructure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-slate-300 text-lg sm:text-xl font-normal leading-relaxed drop-shadow"
        >
          Webersol engineers high-performance software architectures, agentic workflow automation, and scalable digital platforms designed to accelerate and scale modern enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#estimator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50"
          >
            Launch ROI Estimator
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--color-slateGraphite)]/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md backdrop-blur-md"
          >
            Book Strategy Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-800/90 max-w-4xl mx-auto text-left"
        >
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-white">99.99%</p>
            <p className="text-xs text-slate-400 mt-1">SLA System Uptime</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-cyan-400">10x</p>
            <p className="text-xs text-slate-400 mt-1">Process Efficiency via AI</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-white">&lt;1.0s</p>
            <p className="text-xs text-slate-400 mt-1">Core Web Vitals LCP</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-blue-400">SOC-2</p>
            <p className="text-xs text-slate-400 mt-1">Security Compliant Architecture</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};