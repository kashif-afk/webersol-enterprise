'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { MarketingService } from '@/lib/marketingServices';
import { Reveal } from './motion/Reveal';
import { PulseRings } from './motifs/PulseRings';
import { FloatingNodes } from './motifs/FloatingNodes';
import { FlowLine } from './motifs/FlowLine';
import { ClimbingBars } from './motifs/ClimbingBars';
import { Funnel } from './motifs/Funnel';

const MOTIFS = {
  'pulse-rings': PulseRings,
  'floating-nodes': FloatingNodes,
  'flow-line': FlowLine,
  'climbing-bars': ClimbingBars,
  funnel: Funnel,
};

type Props = {
  service: MarketingService;
  index: number;
  onRequest: (title: string) => void;
};

export const MarketingServiceSection = ({ service, index, onRequest }: Props) => {
  const Icon = service.icon;
  const Motif = MOTIFS[service.motif];

  return (
    <Reveal delay={(index % 2) * 0.08} className="rounded-2xl border border-slate-800 bg-surface p-6 sm:p-8 flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-steel/20 bg-steel/10 text-steelBright">
            <span className="absolute inset-0 rounded-xl bg-steelBright/20 blur-md" aria-hidden="true" />
            <Icon className="relative h-5 w-5 drop-shadow-[0_0_6px_rgba(79,179,222,0.8)]" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white">{service.title}</h3>
            <p className="text-xs text-slate-500">{service.tagline}</p>
          </div>
        </div>
        <div className="hidden sm:block shrink-0 opacity-90">
          <Motif size={90} />
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.description}</p>

      <ul className="space-y-2 mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 className="h-4 w-4 text-steelBright shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {service.process.map((step, i) => (
          <span
            key={step}
            className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wide text-slate-500 bg-obsidian px-2 py-1 rounded border border-slate-800"
          >
            <span className="text-steelBright">{i + 1}</span>
            {step}
          </span>
        ))}
      </div>

      <button
        onClick={() => onRequest(service.title)}
        className="mt-auto group inline-flex items-center justify-center gap-2 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold text-sm px-5 py-3 transition-all shadow-lg shadow-amber/20"
      >
        Request This Service
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </Reveal>
  );
};
