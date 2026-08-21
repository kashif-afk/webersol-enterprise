'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Target, Users, ShieldCheck, Rocket, MapPin, Compass } from 'lucide-react';
import { Reveal } from './motion/Reveal';
import { SpotlightCard } from './SpotlightCard';
import { GlowIcon } from './GlowIcon';
import { SignatureOrbit } from './motifs/SignatureOrbit';

const VALUES = [
  {
    icon: Target,
    title: 'Outcomes First',
    description: 'Every engagement is scoped around a measurable business result, not a feature checklist.',
  },
  {
    icon: ShieldCheck,
    title: 'Architecture Discipline',
    description: 'We design for the failure modes that show up under real load, not just the happy path.',
  },
  {
    icon: Users,
    title: 'Transparent Partnership',
    description: 'Direct access to the engineers building your system — no account-manager relay.',
  },
  {
    icon: Rocket,
    title: 'Continuous Delivery',
    description: 'Shippable increments over big-bang launches, so value lands early and often.',
  },
];

const PRESENCE = [
  { icon: MapPin, title: 'New York, NY', description: 'US headquarters and client-facing team.' },
  { icon: MapPin, title: 'Lahore, PK', description: 'Core engineering and AI automation team.' },
  { icon: Compass, title: 'Remote-first', description: 'Distributed team collaborating across time zones daily.' },
];

const ORBIT_ITEMS = [
  { icon: Target, label: 'Outcomes' },
  { icon: Users, label: 'Partnership' },
  { icon: ShieldCheck, label: 'Reliability' },
  { icon: Rocket, label: 'Velocity' },
];

export const AboutPageClient = () => {
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
              <Building2 className="h-4 w-4" />
              <span>About Webersol</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Engineers Who Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
                for the Long Run
              </span>
            </h1>
            <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
              We&apos;re a software engineering house working across generative AI, cloud architecture, financial systems, and growth marketing — built by people who&apos;d rather ship something durable than something demo-able.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <SignatureOrbit centerIcon={Building2} items={ORBIT_ITEMS} size={300} />
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-24">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">How We Operate</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">What we hold ourselves to.</h2>
          <p className="mt-4 text-slate-400">
            Four principles that shape how every engagement gets scoped, built, and handed off.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            const isLast = index === VALUES.length - 1;
            return (
              <Reveal key={value.title} delay={index * 0.08}>
                <SpotlightCard
                  glowColor={isLast ? '#F5920D' : undefined}
                  className="h-full rounded-2xl border border-slate-800 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-lg hover:shadow-steel/10"
                >
                  <GlowIcon icon={Icon} className="mb-5" />
                  <h3 className="font-display text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PRESENCE */}
      <section className="relative border-y border-slate-800/60 bg-abyss py-16">
        <Reveal className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-14">
          <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-8 text-center">Where We Work From</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRESENCE.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === PRESENCE.length - 1;
              return (
                <SpotlightCard
                  key={item.title}
                  glowColor={isLast ? '#F5920D' : undefined}
                  className="rounded-xl border border-slate-800 bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-steel/30"
                >
                  <GlowIcon icon={Icon} className="mx-auto mb-3" />
                  <h3 className="font-display text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br from-amber/10 via-abyss to-steel/10 p-8 sm:p-12">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber/10 blur-[90px] rounded-full" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-amber text-xs font-mono uppercase tracking-widest mb-4">
                  <ArrowRight className="w-4 h-4" />
                  Work With Us
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">Have a system worth building right?</h2>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  Tell us what you&apos;re building and we&apos;ll tell you honestly whether we&apos;re the right fit.
                </p>
              </div>
              <Link
                href="/#contact"
                className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold transition-all shadow-lg shadow-amber/20"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};
