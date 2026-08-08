import React from 'react';
import { TrendingUp, Search, BarChart, Target, ArrowRight } from 'lucide-react';

export default function PerformanceGrowthPage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Core Vertical</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Digital Marketing & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">GEO Optimization</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Dominate traditional search and next-generation AI discovery engines. We combine data-driven performance media with programmatic SEO to drive high-intent enterprise leads.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4">
            <Search className="w-8 h-8 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Generative Engine Optimization (GEO)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Optimize your digital footprint for AI platforms like ChatGPT, Perplexity, and Gemini using structured JSON-LD schemas and semantic knowledge graph integrations.
            </p>
          </div>

          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4">
            <Target className="w-8 h-8 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Performance Media & PPC</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Highly targeted Google Ads and LinkedIn B2B campaigns designed to capture bottom-of-funnel decision-makers and minimize customer acquisition costs (CAC).
            </p>
          </div>

          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4 md:col-span-2">
            <BarChart className="w-8 h-8 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Programmatic SEO Frameworks</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
              We engineer dynamic, database-driven page templates that generate thousands of highly relevant, search-optimized landing pages to capture long-tail enterprise search traffic at scale.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold">Ready to multiply your organic growth?</h4>
            <p className="text-slate-400 text-sm">Let's audit your current digital footprint and map out a growth strategy.</p>
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