'use client';

import React from 'react';
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
  {
    icon: Search,
    title: 'Discover',
    description:
      'Identify search demand, audience intent, competitors, and AI discovery opportunities.',
  },
  {
    icon: Zap,
    title: 'Attract',
    description:
      'Create content, campaigns, and experiences designed to capture high-intent traffic.',
  },
  {
    icon: Users,
    title: 'Convert',
    description:
      'Optimize landing experiences and conversion paths to turn traffic into qualified opportunities.',
  },
  {
    icon: LineChart,
    title: 'Measure',
    description:
      'Track acquisition, conversion, CAC, pipeline contribution, and growth efficiency.',
  },
];

export default function PerformanceGrowthPage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* HERO */}
        <section className="max-w-5xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-7"
          >
            <TrendingUp className="w-4 h-4" />
            Growth Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            Be Found.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Be Chosen.
            </span>
            <br />
            Grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-3xl text-lg sm:text-xl text-slate-400 leading-relaxed"
          >
            We engineer digital growth systems across search, AI discovery,
            paid acquisition, and conversion optimization — turning visibility
            into measurable business opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-9"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              Request a Growth Audit
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-white/[0.03] text-slate-300 font-semibold transition-all"
            >
              Explore Growth Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-xs font-mono text-slate-500"
          >
            {[
              'AI Search Visibility',
              'Enterprise SEO',
              'Performance Marketing',
              'Conversion Optimization',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="mb-24">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              Growth Capabilities
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Growth engineered around measurable outcomes.
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              We combine technical SEO, AI discovery optimization, paid
              acquisition, and performance analytics into one connected growth
              system.
            </p>
          </div>

          {/* CAPABILITY CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                      ease: 'easeOut',
                    },
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    p-7
                    rounded-2xl
                    border
                    border-slate-800
                    bg-[var(--color-slateGraphite)]/30
                    transition-all
                    duration-300
                    hover:border-blue-500/40
                    hover:bg-blue-500/[0.03]
                  "
                >
                  {/* TOP GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -inset-px
                      rounded-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_55%)]
                    "
                  />

                  {/* BOTTOM GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-24
                      left-1/2
                      -translate-x-1/2
                      w-48
                      h-48
                      rounded-full
                      bg-blue-500/10
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  <div className="relative z-10">

                    {/* ICON */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 2,
                      }}
                      transition={{ duration: 0.25 }}
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        flex
                        items-center
                        justify-center
                        mb-6
                        transition-all
                        duration-300
                        group-hover:bg-cyan-400/10
                        group-hover:border-cyan-400/30
                        group-hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]
                      "
                    >
                      <Icon
                        className="
                          w-5
                          h-5
                          text-cyan-400
                          transition-all
                          duration-300
                          group-hover:text-cyan-300
                          group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                        "
                      />
                    </motion.div>

                    {/* LABEL */}
                    <p
                      className="
                        text-[10px]
                        font-mono
                        uppercase
                        tracking-widest
                        text-blue-400
                        mb-2
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400
                      "
                    >
                      {item.label}
                    </p>

                    {/* TITLE */}
                    <h3
                      className="
                        text-xl
                        font-bold
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-cyan-50
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-sm
                        text-slate-400
                        leading-relaxed
                        mt-4
                        transition-colors
                        duration-300
                        group-hover:text-slate-300
                      "
                    >
                      {item.description}
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                      {item.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-2.5
                            text-xs
                            text-slate-400
                            transition-colors
                            duration-300
                            group-hover:text-slate-300
                          "
                        >
                          <CheckCircle2
                            className="
                              w-3.5
                              h-3.5
                              text-cyan-400
                              shrink-0
                              transition-all
                              duration-300
                              group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]
                            "
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* EXPLORE */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-7
                        text-xs
                        font-semibold
                        text-slate-500
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400
                      "
                    >
                      <span>Explore capability</span>

                      <ArrowRight
                        className="
                          w-3.5
                          h-3.5
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* GROWTH ENGINE */}
        <section className="mb-24">
          <div className="rounded-3xl border border-slate-800 bg-[#0B111B] overflow-hidden">

            <div className="p-7 sm:p-10 border-b border-slate-800">
              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                    Growth Engine
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                    From discovery to qualified demand.
                  </h2>

                  <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
                    Every growth initiative connects acquisition activity to
                    measurable business outcomes instead of optimizing vanity
                    metrics in isolation.
                  </p>
                </div>

              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {growthEngine.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ backgroundColor: 'rgba(59,130,246,0.04)' }}
                    className="
                      relative
                      p-7
                      border-b
                      lg:border-b-0
                      lg:border-r
                      last:border-r-0
                      border-slate-800
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex items-center justify-between mb-6">
                      <Icon className="w-5 h-5 text-cyan-400" />

                      <span className="text-[10px] font-mono text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* PERFORMANCE METRICS */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
                Performance Intelligence
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                Measure what actually moves the business.
              </h2>

              <p className="mt-5 text-slate-400 leading-relaxed">
                Traffic is only the beginning. We connect marketing activity
                with the metrics that matter to revenue, including qualified
                leads, conversion rates, acquisition cost, and pipeline
                contribution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  ['Organic Visibility', 'Search & AI discovery'],
                  ['Qualified Traffic', 'Intent-driven acquisition'],
                  ['Conversion Rate', 'Visitor-to-lead optimization'],
                  ['CAC & ROAS', 'Acquisition efficiency'],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="
                      p-4
                      rounded-xl
                      border
                      border-slate-800
                      bg-white/[0.02]
                      hover:border-blue-500/30
                      hover:bg-blue-500/[0.03]
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />

                      <span className="text-sm font-semibold">
                        {title}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mt-2">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* METRICS PANEL */}
            <div className="relative rounded-3xl border border-slate-800 bg-[#090E17] p-6 sm:p-8">

              <div className="flex items-center justify-between mb-7">
                <span className="text-xs font-mono text-slate-500">
                  GROWTH_METRICS
                </span>

                <span className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  TRACKING
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: 'Organic Visibility',
                    value: 'SEARCH',
                    width: '82%',
                  },
                  {
                    label: 'AI Discovery',
                    value: 'GEO',
                    width: '68%',
                  },
                  {
                    label: 'Paid Acquisition',
                    value: 'PPC',
                    width: '74%',
                  },
                  {
                    label: 'Conversion Optimization',
                    value: 'CRO',
                    width: '88%',
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl border border-slate-800 bg-[#0D131E]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-slate-300">
                        {metric.label}
                      </span>

                      <span className="text-[10px] font-mono text-cyan-400">
                        {metric.value}
                      </span>
                    </div>

                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: metric.width }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-white font-semibold">
                    Unified reporting:
                  </span>{' '}
                  connect search visibility, acquisition, conversion, and
                  pipeline performance in one measurable growth framework.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 via-[#0B111B] to-cyan-900/10 p-8 sm:p-12">

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[90px] rounded-full" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
                <BarChart3 className="w-4 h-4" />
                Growth Assessment
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold">
                Find your next source of qualified growth.
              </h2>

              <p className="text-slate-400 mt-3 leading-relaxed">
                We'll audit your current search visibility, acquisition
                channels, competitive position, and conversion journey to
                identify the highest-impact growth opportunities.
              </p>
            </div>

            <a
              href="/#contact"
              className="
                group
                shrink-0
                inline-flex
                items-center
                gap-3
                px-7
                py-4
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                text-white
                font-semibold
                transition-all
                shadow-lg
                shadow-blue-600/20
              "
            >
              Request a Growth Audit

              <ArrowRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>
        </section>

      </div>
    </main>
  );
}