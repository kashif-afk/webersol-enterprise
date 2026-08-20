'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Code2,
  TrendingUp,
  Landmark,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { Reveal } from './motion/Reveal';

const services = [
  {
    id: 'ai-automation',
    title: 'Generative AI & Enterprise Automation',
    shortTitle: 'AI Automation',
    icon: Cpu,
    tagline: 'Streamline complex operations with custom agentic workflows.',
    description:
      'We build enterprise LLM systems, custom agent workflows, and automated QA/data pipelines that eliminate manual operational bottlenecks.',
    features: [
      'Custom LLM Fine-Tuning & RAG Frameworks',
      'Autonomous Process Agents',
      'Automated QA & Self-Healing Testing',
      'API Interoperability Middleware',
    ],
    stats: '60% Average Operational Cost Reduction',
    metric: '60%',
    metricLabel: 'Operational Cost Reduction',
  },
  {
    id: 'custom-engineering',
    title: 'Full-Stack Software & Cloud Architecture',
    shortTitle: 'Custom Engineering',
    icon: Code2,
    tagline: 'High-throughput platforms built for global scale.',
    description:
      'From modern React/Next.js frontends to microservices backend architectures, we build resilient software that handles peak traffic smoothly.',
    features: [
      'Next.js App Router & Micro-frontends',
      'Cloud-Native AWS/GCP Infrastructure',
      'High-Concurrency Database Systems',
      'Zero-Downtime CI/CD Pipelines',
    ],
    stats: 'Sub-second Global Latency Standards',
    metric: '<1s',
    metricLabel: 'Target Response Time',
  },
  {
    id: 'performance-growth',
    title: 'Digital Marketing & GEO Optimization',
    shortTitle: 'Performance Growth',
    icon: TrendingUp,
    tagline: 'Dominate traditional search engines and AI discovery tools.',
    description:
      'Our growth engine combines traditional SEO with modern Generative Engine Optimization (GEO) to keep your brand discoverable across search and AI platforms.',
    features: [
      'Generative Engine Optimization (GEO)',
      'Data-Driven PPC & Performance Media',
      'Programmatic SEO Frameworks',
      'Conversion Rate Optimization (CRO)',
    ],
    stats: '3.4x Average Organic Traffic Uplift',
    metric: '3.4x',
    metricLabel: 'Organic Traffic Uplift',
  },
  {
    id: 'financial-erp',
    title: 'Financial ERP-Level Architecture & Core Systems',
    shortTitle: 'Financial ERP',
    icon: Landmark,
    tagline: 'Mission-critical financial ledger systems and enterprise resource planning.',
    description:
      'We architect secure, multi-currency financial engines, automated general ledgers, and real-time compliance pipelines designed for enterprise transaction volumes.',
    features: [
      'Immutable Double-Entry General Ledger Engines',
      'Multi-Currency & Real-Time Tax Computation',
      'High-Throughput Reconciliation Pipelines',
      'Strict Regulatory & Audit-Trail Compliance',
    ],
    stats: '99.999% Ledger Transaction Integrity',
    metric: '100%',
    metricLabel: 'Audit Transparency & Traceability',
  },
];

export const ServiceSwitcher = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const selectedService =
    services.find((service) => service.id === activeTab) || services[0];

  const ActiveIcon = selectedService.icon;

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-steel/10 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-amber/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-steel/20 bg-steel/10 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-steelBright">
            <Sparkles className="h-4 w-4" />
            <span>Enterprise Capabilities</span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Engineered for{' '}
            <span className="bg-gradient-to-r from-steel via-steelBright to-white bg-clip-text text-transparent">
              Technical Dominance
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            From autonomous AI systems to robust financial ERP engines and global cloud infrastructure, we engineer technology that creates measurable business impact.
          </p>
        </Reveal>

        {/* SERVICE TABS - Updated to support 4 columns */}
        <Reveal
          delay={0.1}
          className="
            relative
            mx-auto
            mb-6
            grid
            max-w-6xl
            grid-cols-1
            gap-2
            rounded-2xl
            border
            border-slate-800
            bg-slateGraphite/40
            p-2
            backdrop-blur-xl
            md:grid-cols-4
          "
        >
          <div role="tablist" aria-label="Service capabilities" className="contents">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;

            return (
              <motion.button
                key={service.id}
                type="button"
                role="tab"
                id={`service-tab-${service.id}`}
                aria-selected={isActive}
                aria-controls="service-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(service.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  px-4
                  py-4
                  text-left
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? 'border-steel/40 bg-steel/15 text-white shadow-lg shadow-steel/10'
                      : 'border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/50 hover:text-white'
                  }
                `}
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_50%_0%,rgba(79,179,222,0.14),transparent_65%)]
                  "
                />

                {isActive && (
                  <motion.div
                    layoutId="activeServiceGlow"
                    className="
                      absolute
                      inset-x-8
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-steelBright
                      to-transparent
                    "
                  />
                )}

                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className={`
                      relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                      border transition-all duration-300
                      ${
                        isActive
                          ? 'border-steel/30 bg-steel/15 text-steelBright'
                          : 'border-slate-700 bg-slate-900/50 text-slate-500 group-hover:border-steelBright/20 group-hover:text-steelBright'
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg bg-steelBright/25 blur-md" aria-hidden="true" />
                    )}
                    <Icon
                      className={`relative h-5 w-5 transition-all duration-300 ${
                        isActive ? 'drop-shadow-[0_0_6px_rgba(79,179,222,0.8)]' : ''
                      }`}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold truncate">
                      {service.shortTitle}
                    </p>
                    <p className="mt-0.5 truncate text-[10px] text-slate-500 group-hover:text-slate-400">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
          </div>
        </Reveal>

        {/* MAIN SERVICE PANEL */}
        <div
          role="tabpanel"
          id="service-panel"
          aria-labelledby={`service-tab-${selectedService.id}`}
          className="
            group/panel
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-slateGraphite/35
            shadow-2xl
            shadow-black/20
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-700
              group-hover/panel:opacity-100
              bg-[radial-gradient(circle_at_20%_0%,rgba(43,132,173,0.10),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(245,146,13,0.06),transparent_40%)]
            "
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 grid min-h-[440px] grid-cols-1 gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14"
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-steel/20
                      bg-steel/10
                      text-steelBright
                      shadow-lg
                      shadow-steel/10
                    "
                  >
                    <span className="absolute inset-0 rounded-2xl bg-steelBright/20 blur-lg animate-pulse" aria-hidden="true" />
                    <ActiveIcon className="relative h-7 w-7 drop-shadow-[0_0_8px_rgba(79,179,222,0.9)]" />
                  </motion.div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-steelBright">
                      {selectedService.shortTitle}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Enterprise Technology Vertical
                    </p>
                  </div>
                </div>

                <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3">
                  <span className="text-2xl font-bold font-mono text-amber">
                    {selectedService.metric}
                  </span>
                  <span className="h-6 w-px bg-slate-700" />
                  <span className="text-xs font-medium text-slate-400">
                    {selectedService.metricLabel}
                  </span>
                </div>

                <h3 className="font-display max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  {selectedService.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  {selectedService.description}
                </p>

                <p className="mt-3 max-w-2xl text-sm font-medium text-slate-300">
                  {selectedService.tagline}
                </p>

                <div className="mt-8">
                  <Link
                    href={`/services/${selectedService.id}`}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-steel
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-steel/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-steelBright
                      hover:shadow-steelBright/30
                    "
                  >
                    Explore Architecture
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </Link>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex items-center">
                <div
                  className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-800
                    bg-obsidian/80
                    p-6
                    sm:p-8
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-steel/10
                      blur-3xl
                    "
                  />

                  <div className="relative z-10">
                    <div className="mb-7 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500">
                          Core Deliverables
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          What we engineer
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70">
                        <CheckCircle2 className="h-4 w-4 text-steelBright" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.06,
                          }}
                          className="
                            group/feature
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            border
                            border-transparent
                            p-3
                            transition-all
                            duration-300
                            hover:border-slate-800
                            hover:bg-slate-900/60
                          "
                        >
                          <div
                            className="
                              mt-0.5
                              flex
                              h-5
                              w-5
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-steelBright/10
                              text-steelBright
                            "
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </div>

                          <span className="text-sm leading-relaxed text-slate-300 transition-colors group-hover/feature:text-white">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-7 border-t border-slate-800 pt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          Performance Benchmark
                        </span>
                        <span className="text-xs font-mono font-semibold text-steelBright">
                          {selectedService.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM TRUST STRIP */}
        <Reveal
          delay={0.2}
          className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"
        >
          <p className="text-xs text-slate-500">
            Architecture-first engineering • Measurable outcomes • Built to scale
          </p>

          <Link
            href="/#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-slate-400
              transition-colors
              hover:text-steelBright
            "
          >
            Discuss your architecture
            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};