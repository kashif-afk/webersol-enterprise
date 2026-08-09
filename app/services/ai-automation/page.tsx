'use client';

import React from 'react';
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

export default function AiAutomationPage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* HERO */}
        <section className="max-w-5xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-7">
            <Bot className="w-4 h-4" />
            AI Engineering & Automation
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Build AI Systems That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Actually Execute.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg sm:text-xl text-slate-400 leading-relaxed">
            We engineer agentic AI systems, intelligent automation, and
            enterprise-grade LLM infrastructure that connect reasoning with
            real-world execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <a
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              Discuss Your AI System
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-white/[0.03] text-slate-300 font-semibold transition-all"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Enterprise AI
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Agentic Automation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              AI-Powered QA
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Production Infrastructure
            </span>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="mb-24">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              What We Engineer
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              From AI models to autonomous workflows.
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              We don't simply integrate an LLM into your application. We
              engineer the surrounding systems required to make AI useful,
              reliable, observable, and production-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative p-7 rounded-2xl border border-slate-800 bg-[var(--color-slateGraphite)]/30 hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  <p className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">
                    {item.label}
                  </p>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mt-4">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mb-24">
          <div className="rounded-3xl border border-slate-800 bg-[#0B111B] overflow-hidden">

            <div className="p-7 sm:p-10 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                    Agentic Architecture
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                    Intelligence connected to execution.
                  </h2>

                  <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
                    Our AI systems are designed as production architectures,
                    not isolated chat interfaces. Each layer has a defined
                    responsibility, control mechanism, and observable outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {architecture.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative p-7 border-b sm:border-b-0 lg:border-r last:border-r-0 border-slate-800"
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ENGINEERING STACK */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                Production Engineering
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold">
                Built beyond the prototype.
              </h2>

              <p className="mt-5 text-slate-400 leading-relaxed">
                Enterprise AI requires more than a model. We engineer the
                infrastructure around it—from data pipelines and APIs to
                testing, security, monitoring, and deployment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  ['AI Orchestration', 'Agents, tools & workflows'],
                  ['Data Infrastructure', 'RAG, embeddings & pipelines'],
                  ['Quality Engineering', 'Automated validation & evaluation'],
                  ['Cloud Infrastructure', 'Scalable deployment & observability'],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="p-4 rounded-xl border border-slate-800 bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
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

            {/* Visual Architecture Panel */}
            <div className="relative rounded-3xl border border-slate-800 bg-[#090E17] p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-500">
                  SYSTEM_ARCHITECTURE
                </span>

                <span className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
                ].map(([title, description], index) => (
                  <React.Fragment key={title}>
                    <div className="p-4 rounded-xl border border-slate-800 bg-[#0D131E]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-cyan-400">
                          {title}
                        </span>

                        <span className="text-[10px] text-slate-600">
                          {index + 1}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 mt-1">
                        {description}
                      </p>
                    </div>

                    {index < 4 && (
                      <div className="flex justify-center">
                        <div className="h-3 w-px bg-slate-700" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
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
                <GitBranch className="w-4 h-4" />
                Start Your AI Transformation
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold">
                Have an AI workflow worth automating?
              </h2>

              <p className="text-slate-400 mt-3 leading-relaxed">
                Bring us your process, bottleneck, or product idea. We'll
                assess the opportunity and identify where AI and automation
                can create measurable operational leverage.
              </p>
            </div>

            <a
              href="/#contact"
              className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/20"
            >
              Book an AI Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}