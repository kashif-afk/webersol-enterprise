import React from 'react';
import { Code2, Cloud, Database, Shield, ArrowRight } from 'lucide-react';

export default function CustomEngineeringPage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            <span>Core Vertical</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Full-Stack Software & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cloud Architecture</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We engineer resilient, high-throughput web applications and microservices designed for global scale, ensuring sub-second latency and zero-downtime deployments.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4">
            <Cloud className="w-8 h-8 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Cloud-Native Infrastructure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Deployments managed across AWS, GCP, or Azure using Docker and Kubernetes for auto-scaling, load balancing, and maximum cost-efficiency.
            </p>
          </div>

          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4">
            <Database className="w-8 h-8 text-blue-400" />
            <h3 className="text-xl font-bold text-white">High-Concurrency Databases</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Optimized PostgreSQL, Redis, and NoSQL data layers designed to handle millions of simultaneous read/write operations without bottlenecking.
            </p>
          </div>

          <div className="bg-[var(--color-slateGraphite)]/30 border border-slate-800 p-8 rounded-2xl space-y-4 md:col-span-2">
            <Shield className="w-8 h-8 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Enterprise-Grade Security & Compliance</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
              We bake security into the CI/CD pipeline from day one. Our architectures are designed to meet strict SOC2 Type II, HIPAA, and ISO-27001 compliance standards, protecting your sensitive business data.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/20 p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-bold">Need a scalable software solution?</h4>
            <p className="text-slate-400 text-sm">Request a custom architectural blueprint from our engineering team.</p>
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