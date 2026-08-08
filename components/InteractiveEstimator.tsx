'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight } from 'lucide-react';

export const InteractiveEstimator = () => {
  const [scope, setScope] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [aiIntegration, setAiIntegration] = useState(true);
  const [cloudScale, setCloudScale] = useState(true);
  const [timelineWeeks, setTimelineWeeks] = useState(6);

  // Pricing Logic Calculation
  const baseCost = scope === 'mvp' ? 4500 : scope === 'growth' ? 12500 : 28000;
  const aiAddon = aiIntegration ? 3500 : 0;
  const cloudAddon = cloudScale ? 2000 : 0;
  const totalCost = baseCost + aiAddon + cloudAddon;
  const estimatedHoursSavedMonth = scope === 'mvp' ? 120 : scope === 'growth' ? 450 : 1200;

  return (
    <section id="estimator" className="py-24 bg-[var(--color-obsidian)] text-white px-6 lg:px-12 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Scope & Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Estimate Your Engineering Budget & Impact</h2>
          <p className="text-slate-400 text-sm">Select your architecture requirements to simulate development budget, timeline, and ROI.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[var(--color-slateGraphite)]/40 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400">1. Architecture Tier</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mvp', name: 'Standard MVP', desc: 'Core Web Platform' },
                  { id: 'growth', name: 'Growth Stack', desc: 'High-Scale Software' },
                  { id: 'enterprise', name: 'Enterprise AI', desc: 'Custom Autonomous Agents' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setScope(tier.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      scope === tier.id
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-[var(--color-obsidian)]/50 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <p className="text-sm font-bold">{tier.name}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400">2. Technical Modules</label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-[var(--color-obsidian)]/50 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={aiIntegration}
                      onChange={(e) => setAiIntegration(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-0"
                    />
                    <div>
                      <p className="text-sm font-semibold">Autonomous AI Agent Workflows</p>
                      <p className="text-xs text-slate-400">Custom RAG, fine-tuned LLMs & QA</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">+$3,500</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-[var(--color-obsidian)]/50 cursor-pointer hover:border-slate-700">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={cloudScale}
                      onChange={(e) => setCloudScale(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-0"
                    />
                    <div>
                      <p className="text-sm font-semibold">Multi-Region Cloud Infrastructure</p>
                      <p className="text-xs text-slate-400">AWS/GCP Auto-scaling</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">+$2,000</span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="uppercase text-slate-400">3. Target Delivery Sprint</span>
                <span className="text-cyan-400 font-bold">{timelineWeeks} Weeks</span>
              </div>
              <input
                type="range"
                min="4"
                max="16"
                step="2"
                value={timelineWeeks}
                onChange={(e) => setTimelineWeeks(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1E293B] to-[#0B0F17] border border-blue-500/30 p-8 rounded-2xl space-y-6 shadow-xl shadow-blue-600/10 relative">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Project Blueprint Summary
            </h3>

            <div className="space-y-4 border-y border-slate-800 py-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Estimated Investment:</span>
                <span className="text-3xl font-extrabold font-mono text-white">${totalCost.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Target Delivery:</span>
                <span className="font-mono text-cyan-400 font-bold">{timelineWeeks} Weeks</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Est. Ops Hours Saved:</span>
                <span className="font-mono text-blue-400 font-bold">~{estimatedHoursSavedMonth} hrs/mo</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="#contact"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20"
              >
                <span>Lock In Estimate & Schedule Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-slate-500 text-center font-mono">Includes 12-month post-deployment SLA maintenance guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};