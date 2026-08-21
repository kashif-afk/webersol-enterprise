'use client';

import React from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  Search,
  Layers3,
  Code2,
  ShieldCheck,
  Cloud,
  TrendingUp,
} from 'lucide-react';
import { Reveal } from './motion/Reveal';

type Stage = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  tags: string[];
  deliverables: string[];
  color: string;
};

const STAGES: Stage[] = [
  {
    id: 'discover',
    title: 'Discover',
    icon: Search,
    tags: ['Technical Discovery'],
    deliverables: ['Requirements audit', 'Architecture feasibility', 'Success metrics'],
    color: '#2B84AD',
  },
  {
    id: 'design',
    title: 'Design',
    icon: Layers3,
    tags: ['System Architecture'],
    deliverables: ['System design', 'Data & API contracts', 'UX flows'],
    color: '#4FB3DE',
  },
  {
    id: 'build',
    title: 'Build',
    icon: Code2,
    tags: ['AI Automation', 'Custom Engineering'],
    deliverables: ['Agentic workflows', 'Application code', 'Integrations'],
    color: '#2B84AD',
  },
  {
    id: 'test',
    title: 'Test',
    icon: ShieldCheck,
    tags: ['Automated QA'],
    deliverables: ['Self-healing test suites', 'Load & security testing', 'CI/CD gates'],
    color: '#4FB3DE',
  },
  {
    id: 'deploy',
    title: 'Deploy',
    icon: Cloud,
    tags: ['Cloud Infra', 'Financial ERP'],
    deliverables: ['Zero-downtime rollout', 'Observability', 'Compliance handoff'],
    color: '#2B84AD',
  },
  {
    id: 'iterate',
    title: 'Iterate',
    icon: TrendingUp,
    tags: ['Performance & Growth'],
    deliverables: ['GEO/SEO tuning', 'Performance analytics', 'Roadmap for next cycle'],
    color: '#F5920D',
  },
];

const VB_W = 900;
const VB_H = 480;
const CY = 240;
const R = 118;
const CX_LEFT = 285;
const CX_RIGHT = 515;
const SATELLITE_R = R + 78;
const GAP_DEG = 4; // small visual gap between segments

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = polar(cx, cy, r, startDeg);
  const end = polar(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

// Segments are laid out across the outer 300° of each ring, leaving the inner-facing
// 60° (where the two rings overlap) clear — matching the reference, which keeps that
// crossing zone free of labels instead of crowding two satellites together there.
function ringSegments(cx: number, stages: Stage[], startAngle: number) {
  const span = 260;
  const step = span / stages.length;
  return stages.map((stage, i) => {
    const start = startAngle + i * step + GAP_DEG / 2;
    const end = startAngle + (i + 1) * step - GAP_DEG / 2;
    const mid = (start + end) / 2;
    const satellite = polar(cx, CY, SATELLITE_R, mid);
    const onRing = polar(cx, CY, R, mid);
    return { stage, path: arcPath(cx, CY, R, start, end), satellite, onRing, mid, cx };
  });
}

export const SDLCDiagram = () => {
  const reduceMotion = useReducedMotion();
  const leftStages = STAGES.slice(0, 3);
  const rightStages = STAGES.slice(3, 6);
  const leftSegs = ringSegments(CX_LEFT, leftStages, 140);
  const rightSegs = ringSegments(CX_RIGHT, rightStages, 320);
  const allSegs = [...leftSegs, ...rightSegs];

  return (
    <section id="process" className="relative overflow-hidden bg-abyss py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-steel/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-amber/5 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-14">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-steel/20 bg-steel/10 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-steelBright">
            <span>Engineering Process</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            A Delivery Cycle{' '}
            <span className="bg-gradient-to-r from-steel via-steelBright to-white bg-clip-text text-transparent">
              Built to Repeat
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Every engagement moves through the same disciplined lifecycle — and the loop back into Discover is deliberate, not decorative.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full" style={{ maxWidth: VB_W, aspectRatio: `${VB_W} / ${VB_H}` }}>
            <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                {allSegs.map(({ stage }) => (
                  <filter key={`glow-${stage.id}`} id={`glow-${stage.id}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                ))}
              </defs>

              {/* Connector lines from ring to satellite icons */}
              {allSegs.map(({ stage, onRing, satellite }) => (
                <line
                  key={`line-${stage.id}`}
                  x1={onRing.x}
                  y1={onRing.y}
                  x2={satellite.x}
                  y2={satellite.y}
                  stroke={stage.color}
                  strokeOpacity={0.4}
                  strokeWidth={1.5}
                />
              ))}

              {/* Ring arcs — static tube, with a flowing highlight animated along the stroke
                  to read as fluid/energy moving through the loop rather than the ring spinning. */}
              {allSegs.map(({ stage, path }) => (
                <path
                  key={stage.id}
                  d={path}
                  fill="none"
                  stroke={stage.color}
                  strokeWidth={34}
                  strokeLinecap="round"
                  filter={`url(#glow-${stage.id})`}
                />
              ))}
              {!reduceMotion &&
                allSegs.map(({ stage, path }) => (
                  <path
                    key={`flow-${stage.id}`}
                    d={path}
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity={0.55}
                    strokeWidth={10}
                    strokeLinecap="round"
                    strokeDasharray="6 34"
                    className="sdlc-flow"
                  />
                ))}

              {/* Center hub labels */}
              <circle cx={CX_LEFT} cy={CY} r={56} fill="#101724" stroke="#1E293B" strokeWidth={1.5} />
              <circle cx={CX_RIGHT} cy={CY} r={56} fill="#101724" stroke="#1E293B" strokeWidth={1.5} />
              <text x={CX_LEFT} y={CY + 6} textAnchor="middle" className="fill-white font-display" fontSize={22} fontWeight={700}>
                Create
              </text>
              <text x={CX_RIGHT} y={CY + 6} textAnchor="middle" className="fill-white font-display" fontSize={22} fontWeight={700}>
                Operate
              </text>
            </svg>

            {/* Icon + label overlays, positioned from the same polar math as the SVG */}
            {allSegs.map(({ stage, satellite, cx }) => {
              const Icon = stage.icon;
              const pointsRight = satellite.x >= cx;
              return (
                <div
                  key={stage.id}
                  className="absolute flex items-center gap-2"
                  style={{
                    left: `${(satellite.x / VB_W) * 100}%`,
                    top: `${(satellite.y / VB_H) * 100}%`,
                    transform: `translate(-50%, -50%)`,
                    flexDirection: pointsRight ? 'row' : 'row-reverse',
                  }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 shadow-lg"
                    style={{ borderColor: stage.color, backgroundColor: '#101724', boxShadow: `0 0 14px ${stage.color}66` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: stage.color }} />
                  </div>
                  <div className={pointsRight ? 'text-left' : 'text-right'}>
                    <p className="font-display text-sm font-bold text-white whitespace-nowrap">{stage.title}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-slate-500 whitespace-nowrap">
                      {stage.tags[0]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Deliverables grid beneath the loop — keeps the detail without cluttering the diagram */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 0.04} className="rounded-xl border border-slate-800 bg-surface p-4">
              <div
                className="mb-2 h-1 w-8 rounded-full"
                style={{ backgroundColor: stage.color }}
              />
              <h4 className="font-display text-sm font-bold text-white">{stage.title}</h4>
              <ul className="mt-1.5 space-y-1 text-xs text-slate-400">
                {stage.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
