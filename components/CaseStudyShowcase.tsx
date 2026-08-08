'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    client: 'Global Logistics SaaS',
    category: 'ai-automation',
    metric: '65% Cost Reduction',
    title: 'Autonomous AI Invoice Processing & Fleet Routing',
    description: 'Replaced manual operational workflows with a fine-tuned agentic LLM system, lowering processing times from 4 hours to 45 seconds.',
    tags: ['Next.js', 'Python Agent', 'AWS Lambda'],
  },
  {
    id: 2,
    client: 'FinTech Capital Portal',
    category: 'custom-engineering',
    metric: '99.99% Uptime',
    title: 'Sub-Second Trading Dashboard & Architecture',
    description: 'Architected high-throughput web architecture handling over $120M in monthly transactional volume with zero downtime SLA.',
    tags: ['Next.js', 'TypeScript', 'Redis'],
  },
  {
    id: 3,
    client: 'B2B Enterprise Health',
    category: 'performance-growth',
    metric: '4.2x Organic Growth',
    title: 'Generative Engine Optimization (GEO) & Search',
    description: 'Structured semantic JSON-LD schemas and automated knowledge graph integrations, dominating ChatGPT and Perplexity search.',
    tags: ['GEO', 'JSON-LD', 'Programmatic SEO'],
  },
];

export const CaseStudyShowcase = () => {
  const [filter, setFilter] = useState('all');
  const filteredStudies = filter === 'all' ? caseStudies : caseStudies.filter(study => study.category === filter);

  return (
    <section id="case-studies" className="py-24 bg-[var(--color-obsidian)] text-white px-6 lg:px-12 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Verified Case Studies</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">Measurable Technical Outcomes</h3>
          </div>

          <div className="flex flex-wrap gap-2 bg-[var(--color-slateGraphite)]/40 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai-automation', label: 'AI & Automation' },
              { id: 'custom-engineering', label: 'Engineering' },
              { id: 'performance-growth', label: 'Growth' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  filter === f.id ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              key={study.id}
              className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-slate-400">{study.client}</span>
                  <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-bold rounded-md">
                    {study.metric}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {study.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono bg-[var(--color-obsidian)] text-slate-400 px-2 py-1 rounded border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};