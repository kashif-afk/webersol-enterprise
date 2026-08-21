'use client';

import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  Cloud,
  Clock3,
  Cpu,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Reveal } from './motion/Reveal';

type Scope = 'mvp' | 'growth' | 'enterprise';

export const InteractiveEstimator = () => {
  const [scope, setScope] = useState<Scope>('growth');
  const [aiIntegration, setAiIntegration] = useState(true);
  const [cloudScale, setCloudScale] = useState(true);
  const [timelineWeeks, setTimelineWeeks] = useState(8);

  const scopeConfig = {
    mvp: {
      name: 'Launch',
      title: 'Standard MVP',
      description: 'Core web product & validated workflows',
      base: 4500,
      hours: 120,
      complexity: 'Focused',
      color: 'steel',
    },
    growth: {
      name: 'Scale',
      title: 'Growth Platform',
      description: 'High-performance software built for scale',
      base: 12500,
      hours: 450,
      complexity: 'Advanced',
      color: 'steelBright',
    },
    enterprise: {
      name: 'Enterprise',
      title: 'Autonomous AI',
      description: 'Complex AI systems & enterprise infrastructure',
      base: 28000,
      hours: 1200,
      complexity: 'Enterprise',
      color: 'amber',
    },
  };

  const currentScope = scopeConfig[scope];

  const tierAccent: Record<string, { ring: string; dot: string; label: string }> = {
    steel: { ring: 'border-steel/70 bg-steel/10 shadow-lg shadow-steel/10', dot: 'bg-steel', label: 'text-steel' },
    steelBright: { ring: 'border-steelBright/70 bg-steelBright/10 shadow-lg shadow-steelBright/10', dot: 'bg-steelBright', label: 'text-steelBright' },
    amber: { ring: 'border-amber/70 bg-amber/10 shadow-lg shadow-amber/10', dot: 'bg-amber', label: 'text-amber' },
  };

  /*
   * Timeline adjustment:
   * Faster delivery generally requires additional engineering capacity.
   * Longer timelines receive a small efficiency adjustment.
   */
  const timelineMultiplier = useMemo(() => {
    if (timelineWeeks <= 4) return 1.2;
    if (timelineWeeks <= 6) return 1.1;
    if (timelineWeeks <= 8) return 1;
    if (timelineWeeks <= 12) return 0.95;
    return 0.9;
  }, [timelineWeeks]);

  const aiAddon = aiIntegration ? 3500 : 0;
  const cloudAddon = cloudScale ? 2000 : 0;

  const estimatedInvestment = Math.round(
    (currentScope.base + aiAddon + cloudAddon) * timelineMultiplier
  );

  /*
   * Give visitors a range instead of presenting an exact quote.
   * This is more credible for an estimator.
   */
  const minEstimate = Math.round(estimatedInvestment * 0.9);
  const maxEstimate = Math.round(estimatedInvestment * 1.15);

  const monthlyHoursSaved =
    currentScope.hours +
    (aiIntegration ? 120 : 0) +
    (cloudScale ? 40 : 0);

  const annualHoursSaved = monthlyHoursSaved * 12;

  /*
   * Illustrative productivity impact.
   * This intentionally avoids presenting a financial ROI as guaranteed.
   */
  const productivityGain =
    scope === 'mvp'
      ? 35
      : scope === 'growth'
        ? 55
        : 75;

  const deliveryConfidence =
    timelineWeeks <= 6
      ? 'Accelerated'
      : timelineWeeks <= 10
        ? 'Optimal'
        : 'Flexible';

  return (
    <section
      id="estimator"
      className="relative overflow-hidden py-24 bg-abyss"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-steel/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14">

        {/* Header */}
        <Reveal className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-steel/20 bg-steel/5 text-steelBright text-xs font-mono uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            Interactive Project Intelligence
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Model Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
              Project & ROI
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Configure your architecture requirements and get an indicative
            investment range, delivery timeline, and potential automation
            impact in seconds.
          </p>
        </Reveal>

        {/* Main Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT — Configuration */}
          <Reveal delay={0.1} className="lg:col-span-7 rounded-3xl border border-slate-800 bg-surface/90 backdrop-blur-xl p-6 sm:p-8">

            {/* Step 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-steel/10 border border-steel/20 flex items-center justify-center">
                  <Layers3 className="w-4 h-4 text-steelBright" />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    Step 01
                  </p>
                  <h3 className="text-sm font-bold text-white">
                    Architecture Tier
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="group" aria-label="Architecture tier">
                {(
                  Object.entries(scopeConfig) as [
                    Scope,
                    typeof scopeConfig.mvp
                  ][]
                ).map(([id, tier]) => {
                  const active = scope === id;
                  const accent = tierAccent[tier.color];

                  return (
                    <button
                      key={id}
                      onClick={() => setScope(id)}
                      aria-pressed={active}
                      aria-label={tier.title}
                      className={`relative text-left p-4 rounded-2xl border transition-all duration-300 ${
                        active
                          ? accent.ring
                          : 'border-slate-800 bg-surfaceInset hover:border-slate-700'
                      }`}
                    >
                      {active && (
                        <div className={`absolute top-3 right-3 w-5 h-5 rounded-full ${accent.dot} flex items-center justify-center`}>
                          <Check className="w-3 h-3 text-onAccent" />
                        </div>
                      )}

                      <p
                        className={`text-xs font-mono uppercase tracking-wider mb-2 ${
                          active ? accent.label : 'text-slate-500'
                        }`}
                      >
                        {tier.name}
                      </p>

                      <p className="text-sm font-bold text-white">
                        {tier.title}
                      </p>

                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {tier.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-steelBright/10 border border-steelBright/20 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-steelBright" />
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    Step 02
                  </p>
                  <h3 className="text-sm font-bold text-white">
                    Intelligence & Infrastructure
                  </h3>
                </div>
              </div>

              <div className="space-y-3">

                {/* AI */}
                <label
                  className={`flex items-center justify-between gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                    aiIntegration
                      ? 'border-steelBright/30 bg-steelBright/5'
                      : 'border-slate-800 bg-surfaceInset'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-steelBright/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-steelBright" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Autonomous AI Workflows
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        Agents, RAG, LLM orchestration & intelligent QA
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={aiIntegration}
                    onChange={(e) => setAiIntegration(e.target.checked)}
                    className="w-5 h-5 accent-steelBright"
                  />
                </label>

                {/* Cloud */}
                <label
                  className={`flex items-center justify-between gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                    cloudScale
                      ? 'border-steel/30 bg-steel/5'
                      : 'border-slate-800 bg-surfaceInset'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-steel/10 flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-steel" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Scalable Cloud Infrastructure
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        AWS/GCP, autoscaling, observability & resilience
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={cloudScale}
                    onChange={(e) => setCloudScale(e.target.checked)}
                    className="w-5 h-5 accent-steel"
                  />
                </label>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex justify-between items-end mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-steel/10 border border-steel/20 flex items-center justify-center">
                    <Clock3 className="w-4 h-4 text-steelBright" />
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                      Step 03
                    </p>
                    <h3 className="text-sm font-bold text-white">
                      Target Delivery
                    </h3>
                  </div>
                </div>

                <span className="text-lg font-mono font-bold text-steelBright">
                  {timelineWeeks} weeks
                </span>
              </div>

              <input
                type="range"
                min="4"
                max="16"
                step="2"
                value={timelineWeeks}
                onChange={(e) =>
                  setTimelineWeeks(Number(e.target.value))
                }
                aria-label="Target delivery timeline in weeks"
                aria-valuetext={`${timelineWeeks} weeks`}
                className="w-full accent-steel cursor-pointer"
              />

              <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-600">
                <span>4 WEEKS</span>
                <span>8 WEEKS</span>
                <span>12 WEEKS</span>
                <span>16 WEEKS</span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Results */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative h-full rounded-3xl border border-steel/20 bg-gradient-to-b from-surface via-abyss to-abyss p-6 sm:p-8 overflow-hidden">

              {/* Glow */}
              <div className="absolute -top-32 -right-32 w-72 h-72 bg-steel/10 blur-[100px] rounded-full" />

              <div className="relative">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                      Your Project Profile
                    </p>

                    <h3 className="font-display text-xl font-bold text-white mt-1">
                      {currentScope.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-steel/10 border border-steel/20 flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-steelBright" />
                  </div>
                </div>

                {/* Investment */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-slate-800 mb-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    Indicative Investment
                  </p>

                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-amber">
                      ${minEstimate.toLocaleString()}
                    </span>

                    <span className="text-slate-500 mb-2">
                      – ${maxEstimate.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mt-3">
                    Preliminary estimate. Final scope is confirmed during
                    technical discovery.
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">

                  <div className="p-4 rounded-2xl bg-surfaceInset border border-slate-800">
                    <Clock3 className="w-4 h-4 text-steelBright mb-3" />

                    <p className="text-2xl font-bold text-white font-mono">
                      {timelineWeeks}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Target weeks
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surfaceInset border border-slate-800">
                    <Zap className="w-4 h-4 text-amber mb-3" />

                    <p className="text-2xl font-bold text-white font-mono">
                      {monthlyHoursSaved}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Hrs recovered / month
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surfaceInset border border-slate-800">
                    <TrendingUp className="w-4 h-4 text-success mb-3" />

                    <p className="text-2xl font-bold text-white font-mono">
                      {productivityGain}%
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Potential efficiency
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surfaceInset border border-slate-800">
                    <Gauge className="w-4 h-4 text-steel mb-3" />

                    <p className="text-lg font-bold text-white">
                      {deliveryConfidence}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Delivery profile
                    </p>
                  </div>
                </div>

                {/* Architecture Summary */}
                <div className="border-t border-slate-800 pt-5 mb-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
                    Architecture Configuration
                  </p>

                  <div className="space-y-3">

                    <div className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-steelBright" />
                      <span className="text-slate-300">
                        {currentScope.complexity} architecture
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-steelBright" />
                      <span className="text-slate-300">
                        {aiIntegration
                          ? 'Agentic AI enabled'
                          : 'Traditional application workflow'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-steelBright" />
                      <span className="text-slate-300">
                        {cloudScale
                          ? 'Cloud scalability enabled'
                          : 'Standard cloud deployment'}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-steelBright" />
                      <span className="text-slate-300">
                        ~{annualHoursSaved.toLocaleString()} hrs/year
                        capacity recovery potential
                      </span>
                    </div>

                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group w-full py-4 px-5 bg-amber hover:bg-amberBright text-onAccent font-semibold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-amber/20"
                >
                  <span>Get My Detailed Estimate</span>

                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>No commitment • Technical discovery included</span>
                </div>

              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Trust Bar */}
        <Reveal delay={0.3} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-800 bg-surface">
            <ShieldCheck className="w-5 h-5 text-steel" />
            <div>
              <p className="text-sm font-semibold text-white">
                Enterprise-Ready
              </p>
              <p className="text-xs text-slate-500">
                Security & scalable architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-800 bg-surface">
            <Cpu className="w-5 h-5 text-steelBright" />
            <div>
              <p className="text-sm font-semibold text-white">
                AI-Native Engineering
              </p>
              <p className="text-xs text-slate-500">
                Agents, automation & intelligent systems
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-800 bg-surface">
            <TrendingUp className="w-5 h-5 text-success" />
            <div>
              <p className="text-sm font-semibold text-white">
                Built for Scale
              </p>
              <p className="text-xs text-slate-500">
                Architecture designed for growth
              </p>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
};