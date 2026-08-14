'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Cpu, 
  Database, 
  FileSpreadsheet, 
  TrendingUp, 
  Lock, 
  Zap,
  BarChart3,
  Activity
} from 'lucide-react';

export default function FinancialERPPage() {
  const specs = [
    {
      title: 'Double-Entry Ledger Integrity',
      desc: 'Immutable append-only transaction ledgers enforcing strict atomic commits and zero discrepancy thresholds.',
      icon: Database,
      highlight: 'Zero Data Drift'
    },
    {
      title: 'Multi-Currency & Real-Time FX',
      desc: 'Automated live currency conversion tracking with historical exchange rate matrices and algorithmic hedging calculations.',
      icon: FileSpreadsheet,
      highlight: 'Sub-millisecond Rates'
    },
    {
      title: 'High-Volume Reconciliation',
      desc: 'Machine-learning aided automated bank statement matching processing hundreds of thousands of ledger lines per minute.',
      icon: Cpu,
      highlight: '500k+ TPS Engine'
    },
    {
      title: 'Enterprise Compliance & Audit Trails',
      desc: 'Built-in cryptographic logs satisfying GAAP, IFRS, and SOC2 financial reporting stipulations effortlessly.',
      icon: ShieldCheck,
      highlight: 'Cryptographic Proof'
    },
    {
      title: 'Global Multi-Subsidiary Consolidation',
      desc: 'Unified holding company financial views with automated inter-company elimination and localized tax structures.',
      icon: TrendingUp,
      highlight: 'Instant Rollups'
    },
    {
      title: 'Zero-Trust Role-Based Access Control',
      desc: 'Granular tokenized authorization ensuring segregation of duties and complete protection against unauthorized financial alterations.',
      icon: Lock,
      highlight: 'SOC2 Type II Ready'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-obsidian)] text-white py-16 px-6 lg:px-12 selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Back Link */}
        <div>
          <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Enterprise Capabilities</span>
          </Link>
        </div>

        {/* Header Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 border-b border-slate-800/80 pb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-cyan-400 rounded-lg text-xs font-mono uppercase tracking-widest">
            <Landmark className="w-4 h-4" />
            <span>Financial ERP Architecture & Core Systems</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Mission-Critical Financial Core & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Ledger Systems</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-4xl">
            Modern enterprises cannot scale on legacy fragmented accounting scripts. We engineer resilient, high-throughput ERP financial backbones capable of processing deep multi-subsidiary ledgers with absolute mathematical certainty.
          </p>
        </motion.div>

        {/* Live System Performance Visualizer (Interactive-style Dashboard Graphic) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl border border-slate-800 bg-[var(--color-slateGraphite)]/40 p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4 animate-pulse text-cyan-400" />
                <span>Engine Telemetry & Benchmarks</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Real-Time Core Throughput Simulation</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                System Operational: 99.999%
              </span>
            </div>
          </div>

          {/* Graph Simulation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-[var(--color-obsidian)]/80 border border-slate-800/80 space-y-2">
              <span className="text-xs text-slate-400 font-mono">Transaction Processing Speed</span>
              <div className="text-3xl font-extrabold font-mono text-white flex items-baseline gap-2">
                480,210 <span className="text-xs text-cyan-400 font-normal">TPS</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[88%]" />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--color-obsidian)]/80 border border-slate-800/80 space-y-2">
              <span className="text-xs text-slate-400 font-mono">Reconciliation Latency</span>
              <div className="text-3xl font-extrabold font-mono text-white flex items-baseline gap-2">
                &lt; 12 <span className="text-xs text-cyan-400 font-normal">ms</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[95%]" />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--color-obsidian)]/80 border border-slate-800/80 space-y-2">
              <span className="text-xs text-slate-400 font-mono">Audit Log Verification</span>
              <div className="text-3xl font-extrabold font-mono text-white flex items-baseline gap-2">
                100% <span className="text-xs text-emerald-400 font-normal">Verified</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-full" />
              </div>
            </div>
          </div>

          {/* Visual Activity Mock Graph bars */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 flex items-end justify-between h-28 gap-2 px-6">
            {[45, 60, 35, 80, 95, 70, 85, 60, 75, 90, 100, 85, 70, 90, 95, 80, 65, 85, 95, 90].map((height, i) => (
              <div key={i} className="w-full bg-slate-800/50 hover:bg-cyan-400/40 rounded-t transition-all duration-300 relative group" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-[10px] font-mono px-2 py-1 rounded border border-slate-700 whitespace-nowrap transition-opacity">
                  Load: {height}%
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Specs Grid */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Technical Capabilities
            </h2>
            <h3 className="text-3xl font-bold tracking-tight">Core Architectural Subsystems</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-8 rounded-2xl border border-slate-800 bg-[var(--color-slateGraphite)]/30 space-y-4 hover:border-slate-700 hover:bg-[var(--color-slateGraphite)]/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                        {spec.highlight}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white">{spec.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{spec.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Enterprise Grade Ready</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="p-10 sm:p-14 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-[var(--color-obsidian)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-600/5 blur-3xl pointer-events-none" />
          
          <div className="space-y-3 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Zap className="w-4 h-4" />
              <span>Initiate Architectural Review</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to modernize your financial architecture?</h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">Schedule a technical discovery session with our Lead Systems Architects to review your transaction ledger pipelines.</p>
          </div>
          
          <Link
            href="/#contact"
            className="relative z-10 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/25 shrink-0 hover:-translate-y-0.5"
          >
            Request ERP Blueprint
          </Link>
        </div>

      </div>
    </div>
  );
}