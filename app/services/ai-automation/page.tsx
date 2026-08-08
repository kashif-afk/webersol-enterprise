import React from 'react';
import { Bot, Cpu, GitBranch, Network, ArrowRight } from 'lucide-react';

export default function AiAutomationPage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <Bot className="w-4 h-4" />
            <span>Core Vertical</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Generative AI & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Agentic Automation</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We architect self-healing workflows, custom Large Language Model (LLM) integrations, and autonomous QA agents that eliminate operational bottlenecks and scale your enterprise bandwidth.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4">
            <Cpu className="w-8 h-8 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Custom LLM & RAG Systems</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Securely deploy local or cloud-based AI models integrated directly with your proprietary enterprise data using Retrieval-Augmented Generation (RAG) architectures.
            </p>
          </div>

          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4">
            <Network className="w-8 h-8 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Automated QA & Self-Healing Tests</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Replace brittle test scripts with intelligent QA agents that adapt to UI changes in real-time, ensuring zero-downtime CI/CD pipelines.
            </p>
          </div>

          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4 md:col-span-2">
            <GitBranch className="w-8 h-8 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Autonomous Process Agents</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
              From automated invoice processing to intelligent customer support middleware, we build multi-agent systems that communicate, reason, and execute complex workflows without human intervention.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold">Ready to modernize your infrastructure?</h4>
            <p className="text-slate-400 text-sm">Schedule a technical review with our AI architects today.</p>
          </div>
          <a
            href="/#contact"
            className="shrink-0 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </main>
  );
}