'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Lock,
  Server,
  Shield,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SpotlightCard } from '@/components/SpotlightCard';
import { GlowIcon } from '@/components/GlowIcon';
import { SignatureOrbit } from '@/components/motifs/SignatureOrbit';

const capabilities = [
  {
    icon: Cloud,
    label: 'Cloud Architecture',
    title: 'Cloud-Native Infrastructure',
    description:
      'Design and deploy resilient cloud infrastructure across AWS, GCP, or Azure with containerization, orchestration, auto-scaling, and intelligent resource management.',
    features: [
      'AWS, GCP & Azure architecture',
      'Docker & Kubernetes',
      'Auto-scaling infrastructure',
      'Load balancing & fault tolerance',
    ],
  },
  {
    icon: Database,
    label: 'Data Engineering',
    title: 'High-Concurrency Data Systems',
    description:
      'Engineer optimized data layers capable of supporting high-volume workloads with intelligent caching, indexing, replication, and scalable database architecture.',
    features: [
      'PostgreSQL & NoSQL architecture',
      'Redis caching strategies',
      'Query & index optimization',
      'Replication & data scalability',
    ],
  },
  {
    icon: Shield,
    label: 'Enterprise Security',
    title: 'Security & Compliance Architecture',
    description:
      'Build security into the application and infrastructure lifecycle with defense-in-depth architecture, secure CI/CD, access controls, and compliance-ready engineering practices.',
    features: [
      'Security-first architecture',
      'CI/CD security controls',
      'Identity & access management',
      'Compliance-ready infrastructure',
    ],
  },
];

const architectureLayers = [
  {
    icon: Code2,
    title: 'Application Layer',
    description: 'Modern web applications, APIs, microservices, and business logic engineered for reliability and maintainability.',
  },
  {
    icon: Server,
    title: 'Infrastructure Layer',
    description: 'Containerized and automated infrastructure designed for predictable deployments and horizontal scalability.',
  },
  {
    icon: Database,
    title: 'Data Layer',
    description: 'Reliable database, caching, storage, and messaging systems optimized for performance and availability.',
  },
  {
    icon: Lock,
    title: 'Security Layer',
    description: 'Authentication, authorization, secrets management, monitoring, and security controls embedded across the stack.',
  },
];

const engineeringMetrics = [
  { value: '99.99%', label: 'Target Availability', description: 'High-availability architecture' },
  { value: '<1s', label: 'Performance Target', description: 'Optimized application response' },
  { value: '24/7', label: 'Observability', description: 'Monitoring & system visibility' },
  { value: 'Zero', label: 'Manual Deployments', description: 'Automated CI/CD workflows' },
];

const ORBIT_ITEMS = [
  { icon: Cloud, label: 'Infrastructure' },
  { icon: Database, label: 'Data' },
  { icon: Shield, label: 'Security' },
  { icon: Lock, label: 'Access Control' },
];

export default function CustomEngineeringPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-20 lg:py-28">

        {/* HERO */}
        <section className="relative mb-24 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-steel/10 blur-[130px]" />
            <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-amber/5 blur-[110px]" />
          </div>

          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-steel/10 border border-steel/20 text-steelBright text-xs font-mono uppercase tracking-wider mb-7">
              <Code2 className="w-4 h-4" />
              Custom Engineering
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Build for Scale.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
                Engineer for Reliability.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-slate-400 leading-relaxed">
              We architect high-performance software platforms, cloud infrastructure, and resilient data systems designed to handle complex workloads, rapid growth, and enterprise-scale demands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-steel hover:bg-steelBright text-onAccentLight font-semibold transition-all shadow-lg shadow-steel/20"
              >
                Request Architecture Review
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-white/[0.03] text-slate-300 font-semibold transition-all"
              >
                Explore Engineering Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 text-xs font-mono text-slate-500">
              {['Cloud-Native Architecture', 'High-Performance Systems', 'Enterprise Security', 'Automated Infrastructure'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-steelBright" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <SignatureOrbit centerIcon={Server} items={ORBIT_ITEMS} size={300} />
          </Reveal>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="mb-24">
          <Reveal className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">
              Engineering Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Infrastructure engineered around your workload.
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              From cloud infrastructure and data architecture to enterprise security, we build the technical foundation required to support reliable digital products at scale.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === capabilities.length - 1;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <SpotlightCard
                    glowColor={isLast ? '#F5920D' : undefined}
                    className="h-full rounded-2xl border border-slate-800 bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-lg hover:shadow-steel/10"
                  >
                    <GlowIcon icon={Icon} className="mb-6" />
                    <p className="text-[10px] font-mono uppercase tracking-widest mb-2 text-steelBright">{item.label}</p>
                    <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mt-4">{item.description}</p>
                    <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-steelBright" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ARCHITECTURE STACK */}
        <section className="mb-24">
          <Reveal className="rounded-3xl border border-slate-800 bg-abyss overflow-hidden">
            <div className="p-7 sm:p-10 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <GlowIcon icon={Layers3} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-steelBright">Architecture Stack</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2">Every layer engineered to work together.</h2>
                  <p className="text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
                    We approach software architecture as a connected system — application, infrastructure, data, and security working together instead of isolated technical components.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {architectureLayers.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === architectureLayers.length - 1;
                return (
                  <SpotlightCard
                    key={item.title}
                    glowColor={isLast ? '#F5920D' : undefined}
                    className="group relative p-7 border-b sm:border-b-0 lg:border-r last:border-r-0 border-slate-800 transition-colors duration-300 hover:bg-steel/[0.04]"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <GlowIcon icon={Icon} size="sm" />
                      <span className="text-[10px] font-mono text-slate-600">0{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-white transition-colors group-hover:text-steelBright">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">{item.description}</p>
                  </SpotlightCard>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* ENGINEERING METRICS */}
        <section className="mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringMetrics.map((metric, index) => {
              const isLast = index === engineeringMetrics.length - 1;
              return (
                <Reveal key={metric.label} delay={index * 0.08}>
                  <SpotlightCard
                    glowColor={isLast ? '#F5920D' : undefined}
                    className="group relative h-full overflow-hidden p-5 rounded-2xl border border-slate-800 bg-surface/60 hover:border-steel/40 hover:shadow-lg hover:shadow-steel/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="text-2xl sm:text-3xl font-bold font-mono text-white">{metric.value}</p>
                    <p className="text-xs font-semibold text-slate-300 mt-2">{metric.label}</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{metric.description}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* SECURITY / DELIVERY */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-3">Engineering Discipline</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Reliability is designed in — not added later.</h2>
              <p className="mt-5 text-slate-400 leading-relaxed">
                Our engineering approach considers performance, security, observability, deployment automation, and operational resilience from the beginning of the architecture process.
              </p>
              <div className="space-y-3 mt-8">
                {[
                  'Infrastructure as Code',
                  'Automated CI/CD pipelines',
                  'Centralized logging & monitoring',
                  'Secrets & access management',
                  'Performance & load optimization',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-steelBright shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative rounded-3xl border border-slate-800 bg-abyss p-7 sm:p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <GlowIcon icon={Shield} />
                <div>
                  <p className="text-xs font-mono text-steelBright uppercase tracking-widest">Security by Design</p>
                  <h3 className="text-lg font-bold mt-1">Protected at every layer.</h3>
                </div>
              </div>

              <div className="relative space-y-3">
                {[
                  { icon: Lock, title: 'Identity & Access', text: 'Controlled access across applications and infrastructure.' },
                  { icon: GitBranch, title: 'Secure Delivery', text: 'Security controls integrated into CI/CD workflows.' },
                  { icon: Zap, title: 'Observability', text: 'Continuous visibility into application and infrastructure health.' },
                ].map((item, index, arr) => {
                  const Icon = item.icon;
                  const isLast = index === arr.length - 1;
                  return (
                    <SpotlightCard
                      key={item.title}
                      glowColor={isLast ? '#F5920D' : undefined}
                      className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30"
                    >
                      <GlowIcon icon={Icon} size="sm" />
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.text}</p>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <Reveal>
          <section className="relative overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br from-amber/10 via-abyss to-steel/10 p-8 sm:p-12">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber/10 blur-[90px] rounded-full" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-amber text-xs font-mono uppercase tracking-widest mb-4">
                  <Code2 className="w-4 h-4" />
                  Architecture Review
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">Have a complex system to build or scale?</h2>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  Let&apos;s review your current architecture, technical constraints, scalability requirements, and roadmap — then define the engineering foundation required to move forward.
                </p>
              </div>

              <Link
                href="/#contact"
                className="group shrink-0 inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold transition-all shadow-lg shadow-amber/20"
              >
                Book Architecture Review
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </Reveal>

      </div>
    </main>
  );
}
