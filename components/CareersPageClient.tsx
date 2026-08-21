'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, Users, Heart, TrendingUp, Globe2, Award, MapPin, Briefcase } from 'lucide-react';
import { openPositions } from '@/lib/openPositions';
import { Reveal } from './motion/Reveal';
import { SpotlightCard } from './SpotlightCard';
import { GlowIcon } from './GlowIcon';
import { SignatureOrbit } from './motifs/SignatureOrbit';
import { ContactSection } from './ContactSection';

const CULTURE = [
  {
    icon: Heart,
    title: 'Craft Over Churn',
    description: 'We’d rather ship one thing well than three things fast and forgettable.',
  },
  {
    icon: TrendingUp,
    title: 'Real Ownership',
    description: 'You scope it, you build it, you see how it performs in production.',
  },
  {
    icon: Globe2,
    title: 'Remote-Friendly',
    description: 'Distributed across the US and Pakistan — async by default, sync when it matters.',
  },
  {
    icon: Award,
    title: 'Direct Feedback',
    description: 'No layers between you and the people deciding what gets built next.',
  },
];

const ORBIT_ITEMS = [
  { icon: Heart, label: 'Culture' },
  { icon: TrendingUp, label: 'Growth' },
  { icon: Globe2, label: 'Remote-friendly' },
  { icon: Award, label: 'Ownership' },
];

export const CareersPageClient = () => {
  const [selectedPosition, setSelectedPosition] = useState(openPositions[0].title);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApply = (title: string) => {
    setSelectedPosition(title);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen bg-obsidian text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 sm:px-8 lg:px-14 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-steel/10 blur-[130px]" />
          <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-amber/5 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slateGraphite/90 border border-slate-700/80 text-xs font-mono text-steelBright mb-6">
              <Users className="h-4 w-4" />
              <span>Careers at Webersol</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Build Systems That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
                Actually Ship
              </span>
            </h1>
            <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
              We&apos;re a small, distributed team working on hard, real problems for enterprise clients. If you&apos;d rather own outcomes than tickets, take a look below.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <SignatureOrbit centerIcon={Users} items={ORBIT_ITEMS} size={300} />
          </Reveal>
        </div>
      </section>

      {/* CULTURE */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-24">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">How We Work Together</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">What it&apos;s actually like here.</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CULTURE.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === CULTURE.length - 1;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <SpotlightCard
                  glowColor={isLast ? '#F5920D' : undefined}
                  className="h-full rounded-2xl border border-slate-800 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-lg hover:shadow-steel/10"
                >
                  <GlowIcon icon={Icon} className="mb-5" />
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="relative border-y border-slate-800/60 bg-abyss py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-14">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">Open Positions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Current openings.</h2>
          </Reveal>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <Reveal key={position.id} delay={(index % 4) * 0.06}>
                <SpotlightCard className="rounded-2xl border border-slate-800 bg-surface p-6 flex flex-col sm:flex-row sm:items-center gap-5 transition-all duration-300 hover:border-steel/30">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-display text-lg font-bold text-white">{position.title}</h3>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-steelBright bg-steel/10 border border-steel/25 px-2 py-0.5 rounded-full">
                        {position.department}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-mono text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply(position.title)}
                    className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold text-sm px-5 py-3 transition-all shadow-lg shadow-amber/20"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <div ref={formRef}>
        <ContactSection
          serviceOptions={openPositions.map((p) => p.title)}
          defaultService={selectedPosition}
          heading={`Apply: ${selectedPosition}`}
          key={selectedPosition}
        />
      </div>
    </main>
  );
};
