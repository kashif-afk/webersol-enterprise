'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  LineChart,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SpotlightCard } from '@/components/SpotlightCard';
import { GlowIcon } from '@/components/GlowIcon';
import { SignatureOrbit } from '@/components/motifs/SignatureOrbit';

const capabilities = [
  {
    icon: Search,
    label: 'AI Search',
    title: 'Generative Engine Optimization',
    description:
      'Prepare your digital presence for AI-driven discovery across generative search and answer engines by building structured, authoritative, and machine-readable content ecosystems.',
    features: [
      'AI search visibility strategy',
      'Entity & knowledge optimization',
      'Structured data & JSON-LD',
      'Content authority signals',
    ],
  },
  {
    icon: Target,
    label: 'Paid Acquisition',
    title: 'Performance Media & PPC',
    description:
      'Build high-intent acquisition campaigns across Google and LinkedIn with audience segmentation, conversion tracking, landing-page optimization, and continuous performance analysis.',
    features: [
      'Google Ads & search campaigns',
      'LinkedIn B2B acquisition',
      'Conversion tracking',
      'CAC & ROAS optimization',
    ],
  },
  {
    icon: Globe2,
    label: 'Organic Growth',
    title: 'Programmatic SEO Systems',
    description:
      'Engineer scalable SEO infrastructure that turns structured business data into highly relevant landing pages without sacrificing quality, search intent, or technical performance.',
    features: [
      'Dynamic landing-page systems',
      'Long-tail keyword coverage',
      'Internal linking architecture',
      'Automated metadata & schemas',
    ],
  },
];

const growthEngine = [
  { icon: Search, title: 'Discover', description: 'Identify search demand, audience intent, competitors, and AI discovery opportunities.' },
  { icon: Zap, title: 'Attract', description: 'Create content, campaigns, and experiences designed to capture high-intent traffic.' },
  { icon: Users, title: 'Convert', description: 'Optimize landing experiences and conversion paths to turn traffic into qualified opportunities.' },
  { icon: LineChart, title: 'Measure', description: 'Track acquisition, conversion, CAC, pipeline contribution, and growth efficiency.' },
];

const ORBIT_ITEMS = [
  { icon: Search, label: 'AI Search' },
  { icon: Target, label: 'Paid Media' },
  { icon: Globe2, label: 'Organic' },
  { icon: LineChart, label: 'Measurement' },
];

export default function PerformanceGrowthPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-20 lg:py-28">

        {/* HERO */}
        <section className="relative mb-24 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-steel/10 blur-[130px]" />
            <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-amber/5 blur-[110px]" />
          </div>

          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-steel/10 border border-steel/20 text-steelBright text-xs font-mono uppercase tracking-wider mb-7">
              <TrendingUp className="w-4 h-4" />
              Growth Engineering
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Be Found.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
                Be Chosen.
              </span>
              <br />
              Grow.
            </h1>

            <p className="mt-7 max-w-xl text-lg text-slate-400 leading-relaxed">
              We engineer digital growth systems across search, AI discovery, paid acquisition, and conversion optimization — turning visibility into measurable business opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-steel hover:bg-steelBright text-onAccentLight font-semibold transition-all shadow-lg shadow-steel/20"
              >
                Request a Growth Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-white/[0.03] text-slate-300 font-semibold transition-all"
              >
                Explore Growth Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-xs font-mono text-slate-500">
              {['AI Search Visibility', 'Enterprise SEO', 'Performance Marketing', 'Conversion Optimization'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-steelBright" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <SignatureOrbit centerIcon={TrendingUp} items={ORBIT_ITEMS} size={300} />
          </Reveal>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="mb-24">
          <Reveal className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">
              Growth Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Growth engineered around measurable outcomes.
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We combine technical SEO, AI discovery optimization, paid acquisition, and performance analytics into one connected growth system.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === capabilities.length - 1;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <SpotlightCard
                    glowColor={isLast ? '#F5920D' : undefined}
                    className="h-full rounded-2xl border border-slate-800 bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-lg hover:shadow-steel/10"
                  >
                    <GlowIcon icon={Icon} className="mb-6" />
                    <p className="text-[10px] font-mono uppercase tracking-widest mb-2 text-steelBright">{item.label}</p>
                    <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mt-4">{item.description}</p>
                    <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-steelBright" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* GROWTH ENGINE */}
        <section className="mb-24">
          <Reveal className="rounded-3xl border border-slate-800 bg-abyss overflow-hidden">
            <div className="p-7 sm:p-10 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <GlowIcon icon={BarChart3} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-steelBright">Growth Engine</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2">From discovery to qualified demand.</h2>
                  <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
                    Every growth initiative connects acquisition activity to measurable business outcomes instead of optimizing vanity metrics in isolation.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {growthEngine.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === growthEngine.length - 1;
                return (
                  <SpotlightCard
                    key={item.title}
                    glowColor={isLast ? '#F5920D' : undefined}
                    className="group relative p-7 border-b lg:border-b-0 lg:border-r last:border-r-0 border-slate-800 transition-colors duration-300 hover:bg-steel/[0.04]"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <GlowIcon icon={Icon} size="sm" />
                      <span className="text-[10px] font-mono text-slate-600">0{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-white transition-colors group-hover:text-steelBright">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">{item.description}</p>
                  </SpotlightCard>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* PERFORMANCE METRICS */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">Performance Intelligence</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Measure what actually moves the business.</h2>
              <p className="mt-5 text-slate-400 leading-relaxed">
                Traffic is only the beginning. We connect marketing activity with the metrics that matter to revenue, including qualified leads, conversion rates, acquisition cost, and pipeline contribution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  ['Organic Visibility', 'Search & AI discovery'],
                  ['Qualified Traffic', 'Intent-driven acquisition'],
                  ['Conversion Rate', 'Visitor-to-lead optimization'],
                  ['CAC & ROAS', 'Acquisition efficiency'],
                ].map(([title, description], index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <SpotlightCard
                      key={title}
                      glowColor={isLast ? '#F5920D' : undefined}
                      className="p-4 rounded-xl border border-slate-800 bg-white/[0.02] hover:border-steel/30 hover:bg-steel/[0.03] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-steelBright" />
                        <span className="text-sm font-semibold">{title}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">{description}</p>
                    </SpotlightCard>
                  );
                })}
              </div>
            </Reveal>

            {/* METRICS PANEL */}
            <Reveal delay={0.1} className="relative rounded-3xl border border-slate-800 bg-abyss p-6 sm:p-8">
              <div className="flex items-center justify-between mb-7">
                <span className="text-xs font-mono text-slate-500">GROWTH_METRICS</span>
                <span className="flex items-center gap-2 text-[10px] font-mono text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  TRACKING
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Organic Visibility', value: 'SEARCH', width: '82%' },
                  { label: 'AI Discovery', value: 'GEO', width: '68%' },
                  { label: 'Paid Acquisition', value: 'PPC', width: '74%' },
                  { label: 'Conversion Optimization', value: 'CRO', width: '88%' },
                ].map((metric, index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <SpotlightCard
                      key={metric.label}
                      glowColor={isLast ? '#F5920D' : undefined}
                      className="p-4 rounded-xl border border-slate-800 bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-slate-300">{metric.label}</span>
                        <span className="text-[10px] font-mono text-steelBright">{metric.value}</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-steel to-steelBright"
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-steel/5 border border-steel/10">
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-white font-semibold">Unified reporting:</span>{' '}
                  connect search visibility, acquisition, conversion, and pipeline performance in one measurable growth framework.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="relative overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br from-amber/10 via-abyss to-steel/10 p-8 sm:p-12">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber/10 blur-[90px] rounded-full" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-amber text-xs font-mono uppercase tracking-widest mb-4">
                  <BarChart3 className="w-4 h-4" />
                  Growth Assessment
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">Find your next source of qualified growth.</h2>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  We&apos;ll audit your current search visibility, acquisition channels, competitive position, and conversion journey to identify the highest-impact growth opportunities.
                </p>
              </div>

              <Link
                href="/#contact"
                className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold transition-all shadow-lg shadow-amber/20"
              >
                Request a Growth Audit
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </Reveal>

      </div>
    </main>
  );
}
