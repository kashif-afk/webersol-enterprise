'use client';

import React, { useRef, useState } from 'react';
import { Search, Compass, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { marketingServices } from '@/lib/marketingServices';
import { MarketingServiceSection } from './MarketingServiceSection';
import { ContactSection } from './ContactSection';
import { Reveal } from './motion/Reveal';
import { SpotlightCard } from './SpotlightCard';
import { OrbitSystem } from './motifs/OrbitSystem';

const PROCESS_STEPS = [
  { label: 'Discover', icon: Search, detail: 'Audit channels, audience, and current performance.' },
  { label: 'Strategy', icon: Compass, detail: 'Map the channel mix and priorities to your goals.' },
  { label: 'Execute', icon: Zap, detail: 'Launch campaigns, content, and creative on schedule.' },
  { label: 'Report', icon: BarChart3, detail: 'Track what worked and feed it back into the plan.' },
];

export const MarketingPageClient = () => {
  const [selectedService, setSelectedService] = useState(marketingServices[0].title);
  const formRef = useRef<HTMLDivElement>(null);

  const handleRequest = (title: string) => {
    setSelectedService(title);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen bg-obsidian text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 sm:px-8 lg:px-14 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-steel/10 blur-[130px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-amber/5 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slateGraphite/90 border border-slate-700/80 text-xs font-mono text-steelBright mb-6">
              <span>Full-Service Marketing</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Every Marketing Channel,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
                One Accountable Team
              </span>
            </h1>
            <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
              From technical SEO to LinkedIn outreach to paid media — explore what we run, how we run it, and request the service that fits where you are today.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <OrbitSystem size={280} />
          </Reveal>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative border-y border-slate-800/60 bg-abyss py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel/5 blur-[120px]" />
        </div>
        <Reveal className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-14">
          <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-8 text-center">How We Work</p>
          <div className="grid grid-cols-2 gap-4 lg:flex lg:items-stretch lg:gap-0">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              const isAmber = i === PROCESS_STEPS.length - 1;
              return (
                <React.Fragment key={step.label}>
                  <SpotlightCard
                    glowColor={isAmber ? '#F5920D' : '#4FB3DE'}
                    className="lg:flex-1 rounded-xl border border-slate-800 bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg hover:shadow-steel/10"
                  >
                    <div
                      className={`relative mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border ${
                        isAmber ? 'border-amber/25 bg-amber/10 text-amber' : 'border-steel/25 bg-steel/10 text-steelBright'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`block font-mono text-xs mb-1 ${isAmber ? 'text-amber' : 'text-steelBright'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-sm font-bold text-white block mb-1.5">{step.label}</span>
                    <span className="text-xs text-slate-500 leading-relaxed hidden lg:block">{step.detail}</span>
                  </SpotlightCard>
                  {i < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block h-4 w-4 text-slate-700 self-center mx-3 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Service grid */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-24">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Marketing Services</h2>
          <p className="mt-4 text-slate-400">
            Ten channels, one strategy. Pick what you need — or let us run the whole stack.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketingServices.map((service, i) => (
            <MarketingServiceSection key={service.id} service={service} index={i} onRequest={handleRequest} />
          ))}
        </div>
      </section>

      {/* Request form */}
      <div ref={formRef}>
        <ContactSection
          serviceOptions={marketingServices.map((s) => s.title)}
          defaultService={selectedService}
          heading={`Request: ${selectedService}`}
          key={selectedService}
        />
      </div>
    </main>
  );
};
