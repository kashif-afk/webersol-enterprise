'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'ai-automation',
    title: 'Generative AI & Enterprise Automation',
    icon: Cpu,
    tagline: 'Streamline complex operations with custom agentic workflows.',
    description: 'We build enterprise LLM systems, custom agent workflows, and automated QA/data pipelines that eliminate manual operational bottlenecks.',
    features: ['Custom LLM Fine-Tuning & RAG Frameworks', 'Autonomous Process Agents', 'Automated QA & Self-Healing Testing', 'API Interoperability Middleware'],
    stats: '60% Average Operational Cost Reduction'
  },
  {
    id: 'custom-engineering',
    title: 'Full-Stack Software & Cloud Architecture',
    icon: Code2,
    tagline: 'High-throughput platforms built for global scale.',
    description: 'From modern React/Next.js frontends to microservices backend architectures, we build resilient software that handles peak traffic smoothly.',
    features: ['Next.js App Router & Micro-frontends', 'Cloud-Native AWS/GCP Infrastructure', 'High-Concurrency Database Systems', 'Zero-Downtime CI/CD Pipelines'],
    stats: 'Sub-second Global Latency Standards'
  },
  {
    id: 'performance-growth',
    title: 'Digital Marketing & GEO Optimization',
    icon: TrendingUp,
    tagline: 'Dominate traditional search engines and AI discovery tools.',
    description: 'Our growth engine combines traditional SEO with modern Generative Engine Optimization (GEO) to keep your brand recommended by Perplexity, ChatGPT, and Google.',
    features: ['Generative Engine Optimization (GEO)', 'Data-Driven PPC & Performance Media', 'Programmatic SEO Frameworks', 'Conversion Rate Optimization (CRO)'],
    stats: '3.4x Average Organic Traffic Uplift'
  }
];

export const ServiceSwitcher = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const selectedService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="services" className="py-24 bg-[var(--color-obsidian)] text-white px-6 lg:px-12 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Enterprise Core Capabilities</h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Engineered for Technical Dominance</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3 p-1.5 bg-[var(--color-slateGraphite)]/50 border border-slate-800 rounded-2xl">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{service.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-[var(--color-slateGraphite)]/40 border border-slate-800 rounded-2xl p-8 lg:p-12 min-h-[380px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-md text-xs font-mono">
                  {selectedService.stats}
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold">{selectedService.title}</h4>
                <p className="text-slate-400 leading-relaxed">{selectedService.description}</p>
                <div className="pt-2">
                  <a href="#contact" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group">
                    Request Architectural Blueprint
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-[var(--color-obsidian)]/80 p-6 sm:p-8 rounded-xl border border-slate-800 space-y-4">
                <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">Core Deliverables</h5>
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-200 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};