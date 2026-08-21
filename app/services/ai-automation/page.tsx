'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Cpu,
  GitBranch,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SpotlightCard } from '@/components/SpotlightCard';
import { GlowIcon } from '@/components/GlowIcon';
import { SignatureOrbit } from '@/components/motifs/SignatureOrbit';

const capabilities = [
  {
    icon: BrainCircuit,
    label: 'AI Engineering',
    title: 'Custom LLM & RAG Systems',
    description:
      'Build secure AI systems grounded in your proprietary data. We design RAG pipelines, model orchestration, embeddings, evaluation, and guardrails around your business requirements.',
    features: [
      'Private enterprise knowledge bases',
      'RAG & semantic retrieval',
      'LLM orchestration',
      'AI evaluation & guardrails',
    ],
  },
  {
    icon: Network,
    label: 'Intelligent QA',
    title: 'AI-Powered QA & Self-Healing Automation',
    description:
      'Transform conventional test automation into intelligent engineering systems that detect changes, recover from UI variations, and continuously validate critical workflows.',
    features: [
      'Self-healing test automation',
      'AI-generated test scenarios',
      'API & UI validation',
      'CI/CD quality gates',
    ],
  },
  {
    icon: Workflow,
    label: 'Agentic Systems',
    title: 'Autonomous Process Agents',
    description:
      'Connect AI agents to your applications, APIs, databases, and business systems to execute multi-step workflows with controlled reasoning and measurable outcomes.',
    features: [
      'Multi-agent workflows',
      'Tool & API integration',
      'Human-in-the-loop controls',
      'Workflow observability',
    ],
  },
];

const architecture = [
  {
    icon: Sparkles,
    title: 'Reason',
    description: 'LLMs interpret requirements, context, and business rules.',
  },
  {
    icon: Network,
    title: 'Orchestrate',
    description: 'Agents coordinate tasks, tools, APIs, and enterprise systems.',
  },
  {
    icon: Zap,
    title: 'Execute',
    description: 'Automations perform actions across your operational stack.',
  },
  {
    icon: ShieldCheck,
    title: 'Validate',
    description: 'Guardrails, testing, and observability keep execution reliable.',
  },
];

const ORBIT_ITEMS = [
  { icon: BrainCircuit, label: 'Reasoning' },
  { icon: Network, label: 'Orchestration' },
  { icon: Workflow, label: 'Execution' },
  { icon: ShieldCheck, label: 'Guardrails' },
];

export default function AiAutomationPage() {
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
              <Bot className="w-4 h-4" />
              AI Engineering & Automation
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Build AI Systems That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
                Actually Execute.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-slate-400 leading-relaxed">
              We engineer agentic AI systems, intelligent automation, and enterprise-grade LLM infrastructure that connect reasoning with real-world execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-steel hover:bg-steelBright text-onAccentLight font-semibold transition-all shadow-lg shadow-steel/20"
              >
                Discuss Your AI System
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-white/[0.03] text-slate-300 font-semibold transition-all"
              >
                Explore Capabilities
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-xs font-mono text-slate-500">
              {['Enterprise AI', 'Agentic Automation', 'AI-Powered QA', 'Production Infrastructure'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-steelBright" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <SignatureOrbit centerIcon={Bot} items={ORBIT_ITEMS} size={300} />
          </Reveal>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="mb-24">
          <Reveal className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">
              What We Engineer
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              From AI models to autonomous workflows.
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              We don&apos;t simply integrate an LLM into your application. We engineer the surrounding systems required to make AI useful, reliable, observable, and production-ready.
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
                    className="group h-full p-7 rounded-2xl border border-slate-800 bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-lg hover:shadow-steel/10"
                  >
                    <GlowIcon icon={Icon} className="mb-6" />

                    <p className="text-[10px] font-mono uppercase tracking-widest mb-2 text-steelBright">
                      {item.label}
                    </p>

                    <h3 className="font-display text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mt-4">
                      {item.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-steelBright" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mb-24">
          <Reveal className="rounded-3xl border border-slate-800 bg-abyss overflow-hidden">
            <div className="p-7 sm:p-10 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <GlowIcon icon={Cpu} />

                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-steelBright">
                    Agentic Architecture
                  </p>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2">
                    Intelligence connected to execution.
                  </h2>

                  <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
                    Our AI systems are designed as production architectures, not isolated chat interfaces. Each layer has a defined responsibility, control mechanism, and observable outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {architecture.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === architecture.length - 1;

                return (
                  <SpotlightCard
                    key={item.title}
                    glowColor={isLast ? '#F5920D' : undefined}
                    className="group relative p-7 border-b sm:border-b-0 lg:border-r last:border-r-0 border-slate-800 transition-colors duration-300 hover:bg-steel/[0.04]"
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

        {/* ENGINEERING STACK */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">
                Production Engineering
              </p>

              <h2 className="font-display text-3xl sm:text-4xl font-bold">
                Built beyond the prototype.
              </h2>

              <p className="mt-5 text-slate-400 leading-relaxed">
                Enterprise AI requires more than a model. We engineer the infrastructure around it — from data pipelines and APIs to testing, security, monitoring, and deployment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  ['AI Orchestration', 'Agents, tools & workflows'],
                  ['Data Infrastructure', 'RAG, embeddings & pipelines'],
                  ['Quality Engineering', 'Automated validation & evaluation'],
                  ['Cloud Infrastructure', 'Scalable deployment & observability'],
                ].map(([title, description], index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <SpotlightCard
                      key={title}
                      glowColor={isLast ? '#F5920D' : undefined}
                      className="p-4 rounded-xl border border-slate-800 bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30"
                    >
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-steelBright" />
                        <span className="text-sm font-semibold">{title}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">{description}</p>
                    </SpotlightCard>
                  );
                })}
              </div>
            </Reveal>

            {/* Visual Architecture Panel */}
            <Reveal delay={0.1} className="relative rounded-3xl border border-slate-800 bg-abyss p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-500">SYSTEM_ARCHITECTURE</span>
                <span className="flex items-center gap-2 text-[10px] font-mono text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  PRODUCTION READY
                </span>
              </div>

              <div className="space-y-3">
                {[
                  ['USER / EVENT', 'Input & business intent'],
                  ['AI ORCHESTRATOR', 'Reasoning & task planning'],
                  ['TOOLS / APIS', 'Enterprise system execution'],
                  ['VALIDATION LAYER', 'Rules, tests & guardrails'],
                  ['OBSERVABILITY', 'Metrics, traces & outcomes'],
                ].map(([title, description], index, arr) => {
                  const isLast = index === arr.length - 1;
                  return (
                    <React.Fragment key={title}>
                      <SpotlightCard
                        glowColor={isLast ? '#F5920D' : undefined}
                        className="relative overflow-hidden p-4 rounded-xl border border-slate-800 bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30"
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 text-xs font-mono text-steelBright">
                            <motion.span
                              className="h-1.5 w-1.5 rounded-full bg-steelBright"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' }}
                            />
                            {title}
                          </span>
                          <span className="text-[10px] text-slate-600">{index + 1}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{description}</p>
                      </SpotlightCard>

                      {index < arr.length - 1 && (
                        <div className="flex justify-center">
                          <div className="h-3 w-px bg-slate-700" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
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
                  <GitBranch className="w-4 h-4" />
                  Start Your AI Transformation
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold">
                  Have an AI workflow worth automating?
                </h2>

                <p className="text-slate-400 mt-3 leading-relaxed">
                  Bring us your process, bottleneck, or product idea. We&apos;ll assess the opportunity and identify where AI and automation can create measurable operational leverage.
                </p>
              </div>

              <Link
                href="/#contact"
                className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold transition-all shadow-lg shadow-amber/20"
              >
                Book an AI Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </Reveal>

      </div>
    </main>
  );
}
