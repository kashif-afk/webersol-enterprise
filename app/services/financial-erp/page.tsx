'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Landmark,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  FileSpreadsheet,
  TrendingUp,
  Lock,
  Zap,
  Activity,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SpotlightCard } from '@/components/SpotlightCard';
import { GlowIcon } from '@/components/GlowIcon';
import { SignatureOrbit } from '@/components/motifs/SignatureOrbit';

const specs = [
  {
    title: 'Double-Entry Ledger Integrity',
    desc: 'Immutable append-only transaction ledgers enforcing strict atomic commits and zero discrepancy thresholds.',
    icon: Database,
    highlight: 'Zero Data Drift',
  },
  {
    title: 'Multi-Currency & Real-Time FX',
    desc: 'Automated live currency conversion tracking with historical exchange rate matrices and algorithmic hedging calculations.',
    icon: FileSpreadsheet,
    highlight: 'Sub-millisecond Rates',
  },
  {
    title: 'High-Volume Reconciliation',
    desc: 'Machine-learning aided automated bank statement matching processing hundreds of thousands of ledger lines per minute.',
    icon: Cpu,
    highlight: '500k+ TPS Engine',
  },
  {
    title: 'Enterprise Compliance & Audit Trails',
    desc: 'Built-in cryptographic logs satisfying GAAP, IFRS, and SOC2 financial reporting stipulations effortlessly.',
    icon: ShieldCheck,
    highlight: 'Cryptographic Proof',
  },
  {
    title: 'Global Multi-Subsidiary Consolidation',
    desc: 'Unified holding company financial views with automated inter-company elimination and localized tax structures.',
    icon: TrendingUp,
    highlight: 'Instant Rollups',
  },
  {
    title: 'Zero-Trust Role-Based Access Control',
    desc: 'Granular tokenized authorization ensuring segregation of duties and complete protection against unauthorized financial alterations.',
    icon: Lock,
    highlight: 'SOC2 Type II Ready',
  },
];

const ORBIT_ITEMS = [
  { icon: Database, label: 'Ledger' },
  { icon: ShieldCheck, label: 'Compliance' },
  { icon: TrendingUp, label: 'Consolidation' },
  { icon: Lock, label: 'Access Control' },
];

export default function FinancialERPPage() {
  return (
    <div className="min-h-screen bg-obsidian text-white py-16 px-6 sm:px-8 lg:px-14 selection:bg-steel selection:text-onAccentLight">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Back Link */}
        <div>
          <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-mono text-steelBright hover:text-steel transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Enterprise Capabilities</span>
          </Link>
        </div>

        {/* HERO */}
        <section className="relative grid lg:grid-cols-2 gap-12 items-center overflow-hidden pb-12 border-b border-slate-800/80">
          <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-steel/10 blur-[130px]" />
            <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-amber/5 blur-[110px]" />
          </div>

          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-steel/10 border border-steel/20 text-steelBright rounded-lg text-xs font-mono uppercase tracking-widest">
              <Landmark className="w-4 h-4" />
              <span>Financial ERP Architecture & Core Systems</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Mission-Critical Financial Core &{' '}
              <span className="bg-gradient-to-r from-steel via-steelBright to-white bg-clip-text text-transparent">
                Ledger Systems
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Modern enterprises cannot scale on legacy fragmented accounting scripts. We engineer resilient, high-throughput ERP financial backbones capable of processing deep multi-subsidiary ledgers with absolute mathematical certainty.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <SignatureOrbit centerIcon={Landmark} items={ORBIT_ITEMS} size={300} />
          </Reveal>
        </section>

        {/* Live System Performance Visualizer */}
        <Reveal delay={0.1} className="rounded-3xl border border-slate-800 bg-surface/60 p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-steel/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-steelBright text-xs font-mono uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4 animate-pulse text-steelBright" />
                <span>Engine Telemetry & Benchmarks</span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight">Real-Time Core Throughput Simulation</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                System Operational: 99.999%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <SpotlightCard className="p-5 rounded-2xl bg-obsidian/80 border border-slate-800/80 space-y-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30">
              <span className="text-xs text-slate-400 font-mono">Transaction Processing Speed</span>
              <div className="text-3xl font-extrabold font-mono text-white flex items-baseline gap-2">
                480,210 <span className="text-xs text-steelBright font-normal">TPS</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-steel to-steelBright h-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '88%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-5 rounded-2xl bg-obsidian/80 border border-slate-800/80 space-y-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30">
              <span className="text-xs text-slate-400 font-mono">Reconciliation Latency</span>
              <div className="text-3xl font-extrabold font-mono text-white flex items-baseline gap-2">
                &lt; 12 <span className="text-xs text-steelBright font-normal">ms</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-steel to-steelBright h-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                />
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-5 rounded-2xl bg-obsidian/80 border border-slate-800/80 space-y-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30">
              <span className="text-xs text-slate-400 font-mono">Audit Log Verification</span>
              <div className="text-3xl font-extrabold font-mono text-white flex items-baseline gap-2">
                100% <span className="text-xs text-success font-normal">Verified</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-success to-steelBright h-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                />
              </div>
            </SpotlightCard>
          </div>

          <div className="p-4 rounded-xl bg-abyss border border-slate-900 flex items-end justify-between h-28 gap-2 px-6">
            {[45, 60, 35, 80, 95, 70, 85, 60, 75, 90, 100, 85, 70, 90, 95, 80, 65, 85, 95, 90].map((height, i) => (
              <div key={i} className="w-full bg-slate-800/50 hover:bg-steelBright/40 rounded-t transition-all duration-300 relative group" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-[10px] font-mono px-2 py-1 rounded border border-slate-700 whitespace-nowrap transition-opacity">
                  Load: {height}%
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Architecture Specs Grid */}
        <div className="space-y-8">
          <Reveal className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-steelBright">Technical Capabilities</h2>
            <h3 className="font-display text-3xl font-bold tracking-tight">Core Architectural Subsystems</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => {
              const Icon = spec.icon;
              const isLast = idx === specs.length - 1;
              return (
                <Reveal key={spec.title} delay={(idx % 3) * 0.08}>
                  <SpotlightCard
                    glowColor={isLast ? '#F5920D' : undefined}
                    className="h-full p-8 rounded-2xl border border-slate-800 bg-surface/60 space-y-4 hover:border-steel/40 hover:bg-surface hover:shadow-lg hover:shadow-steel/10 transition-all flex flex-col justify-between hover:-translate-y-1 duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <GlowIcon icon={Icon} />
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md border bg-steel/10 text-steelBright border-steel/20">
                          {spec.highlight}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white">{spec.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{spec.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-steelBright" />
                      <span>Enterprise Grade Ready</span>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <Reveal>
          <div className="p-10 sm:p-14 rounded-3xl border border-amber/20 bg-gradient-to-br from-amber/10 via-surface to-obsidian flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-amber/5 blur-3xl pointer-events-none" />

            <div className="space-y-3 text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 text-amber text-xs font-mono uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                <span>Initiate Architectural Review</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to modernize your financial architecture?</h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">Schedule a technical discovery session with our Lead Systems Architects to review your transaction ledger pipelines.</p>
            </div>

            <Link
              href="/#contact"
              className="group relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold text-sm transition-all shadow-lg shadow-amber/20 shrink-0 hover:-translate-y-0.5"
            >
              Request ERP Blueprint
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
