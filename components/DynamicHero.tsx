'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const DynamicHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-[var(--color-obsidian)] text-white flex items-center justify-center overflow-hidden px-6 lg:px-12 py-20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B15_1px,transparent_1px),linear-gradient(to_bottom,#1E293B15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-slateGraphite)]/80 border border-slate-700/60 backdrop-blur-md text-xs font-mono text-cyan-400"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Architecting Autonomous AI & Enterprise Web Infrastructure.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
        >
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400">Autonomous AI</span> <br />
          & Enterprise Web Infrastructure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-slate-400 text-lg sm:text-xl font-normal leading-relaxed"
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
          >
            Launch ROI Estimator
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--color-slateGraphite)] hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold flex items-center justify-center gap-2 transition-all duration-200"
          >
            Book Strategy Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-800/80 max-w-4xl mx-auto text-left"
        >
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/30 border border-slate-800">
            <p className="text-2xl font-bold font-mono text-white">99.99%</p>
            <p className="text-xs text-slate-400 mt-1">SLA System Uptime</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/30 border border-slate-800">
            <p className="text-2xl font-bold font-mono text-cyan-400">10x</p>
            <p className="text-xs text-slate-400 mt-1">Process Efficiency via AI</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/30 border border-slate-800">
            <p className="text-2xl font-bold font-mono text-white">&lt;1.0s</p>
            <p className="text-xs text-slate-400 mt-1">Core Web Vitals LCP</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-slateGraphite)]/30 border border-slate-800">
            <p className="text-2xl font-bold font-mono text-blue-400">SOC-2</p>
            <p className="text-xs text-slate-400 mt-1">Security Compliant Architecture</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};