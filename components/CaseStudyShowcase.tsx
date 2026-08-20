'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './motion/Reveal';

const caseStudies = [
  {
    id: 1,
    client: 'Global Logistics SaaS',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    metric: '65%',
    metricLabel: 'Lower Processing Costs',
    title: 'Autonomous Invoice Processing & Fleet Operations',
    description:
      'Transformed manual finance and fleet workflows into an autonomous AI pipeline, reducing invoice processing time from 4 hours to just 45 seconds while minimizing human intervention.',
    impact: [
      '65% reduction in processing costs',
      '99%+ faster invoice processing',
      'Automated operational decision-making',
    ],
    tags: ['Next.js', 'Python', 'Agentic AI', 'AWS Lambda'],
    cta: 'Explore Case Study',
  },
  {
    id: 2,
    client: 'FinTech Capital Portal',
    category: 'custom-engineering',
    categoryLabel: 'Enterprise Engineering',
    metric: '99.99%',
    metricLabel: 'Platform Uptime',
    title: 'High-Performance Trading Platform Built for Scale',
    description:
      'Architected a low-latency financial platform capable of supporting high-volume transactions and real-time trading activity, processing more than $120M in monthly transaction volume.',
    impact: [
      '99.99% platform uptime',
      '$120M+ monthly transaction volume',
      'Sub-second dashboard response times',
    ],
    tags: ['Next.js', 'TypeScript', 'Redis', 'AWS'],
    cta: 'Explore Case Study',
  },
  {
    id: 3,
    client: 'B2B Enterprise Health',
    category: 'performance-growth',
    categoryLabel: 'AI Search & Growth',
    metric: '4.2×',
    metricLabel: 'Organic Growth',
    title: 'AI Search Visibility & Generative Engine Optimization',
    description:
      'Built an AI-ready search architecture using structured data, semantic content models, and automated knowledge graph integrations to increase visibility across traditional and generative search platforms.',
    impact: [
      '4.2× organic traffic growth',
      'Improved AI search visibility',
      'Automated structured-data generation',
    ],
    tags: ['GEO', 'JSON-LD', 'Knowledge Graph', 'Programmatic SEO'],
    cta: 'Explore Case Study',
  },
  {
    id: 4,
    client: 'Global Manufacturing & Supply Chain',
    category: 'erp-saas',
    categoryLabel: 'ERP SaaS',
    metric: '3.5x',
    metricLabel: 'Faster Synchronization',
    title: 'Multi-Tenant ERP SaaS & Inventory Core',
    description:
      'Engineered a multi-tenant enterprise resource planning platform managing automated warehouse fulfillment, stock routing, and real-time ledger rollups across 14 international subsidiaries.',
    impact: [
      '3.5x faster data synchronization',
      'Zero-latency subsidiary updates',
      'Automated inventory forecasting',
    ],
    tags: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    cta: 'Explore Case Study',
  },
  {
    id: 5,
    client: 'Enterprise FinTech Core',
    category: 'financial-erp',
    categoryLabel: 'Financial Systems',
    metric: '100%',
    metricLabel: 'Audit Transparency',
    title: 'Immutable Double-Entry Financial Ledger & ERP Engine',
    description:
      'Architected a robust core accounting and multi-currency reconciliation engine capable of processing hundreds of thousands of ledger entries daily with strict mathematical certainty and zero data drift.',
    impact: [
      '100% audit trail transparency',
      'Sub-millisecond multi-currency rates',
      'Zero-discrepancy transactional integrity',
    ],
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    cta: 'Explore Case Study',
  },
];

export const CaseStudyShowcase = () => {
  const [filter, setFilter] = useState('all');
  const filteredStudies = filter === 'all' ? caseStudies : caseStudies.filter(study => study.category === filter);

  return (
    <section id="case-studies" className="py-24 bg-obsidian text-white px-6 lg:px-12 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto space-y-12">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-xs font-mono text-steelBright uppercase tracking-widest">Verified Case Studies</h2>
            <h3 className="font-display text-3xl sm:text-4xl font-bold">Measurable Technical Outcomes</h3>
          </div>

          <div
            role="group"
            aria-label="Filter case studies by category"
            className="flex flex-wrap gap-2 bg-slateGraphite/40 p-1.5 rounded-xl border border-slate-800"
          >
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'erp-saas', label: 'ERP SaaS' },
              { id: 'financial-erp', label: 'Financial' },
              { id: 'ai-automation', label: 'AI & Automation' },
              { id: 'custom-engineering', label: 'Engineering' },
              { id: 'performance-growth', label: 'Growth' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  filter === f.id ? 'bg-steel text-white shadow-md shadow-steel/20' : 'text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredStudies.map((study) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={study.id}
                  className="bg-slateGraphite/30 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-slate-400">{study.client}</span>
                      <span className="px-2.5 py-1 bg-amber/10 border border-amber/20 text-amber font-mono text-xs font-bold rounded-md">
                        {study.metric}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-steelBright transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono bg-obsidian text-slate-400 px-2 py-1 rounded border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};