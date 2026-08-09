'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Lock,
  Server,
  Shield,
  Zap,
} from 'lucide-react';

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
    description:
      'Modern web applications, APIs, microservices, and business logic engineered for reliability and maintainability.',
  },
  {
    icon: Server,
    title: 'Infrastructure Layer',
    description:
      'Containerized and automated infrastructure designed for predictable deployments and horizontal scalability.',
  },
  {
    icon: Database,
    title: 'Data Layer',
    description:
      'Reliable database, caching, storage, and messaging systems optimized for performance and availability.',
  },
  {
    icon: Lock,
    title: 'Security Layer',
    description:
      'Authentication, authorization, secrets management, monitoring, and security controls embedded across the stack.',
  },
];

const engineeringMetrics = [
  {
    value: '99.99%',
    label: 'Target Availability',
    description: 'High-availability architecture',
  },
  {
    value: '<1s',
    label: 'Performance Target',
    description: 'Optimized application response',
  },
  {
    value: '24/7',
    label: 'Observability',
    description: 'Monitoring & system visibility',
  },
  {
    value: 'Zero',
    label: 'Manual Deployments',
    description: 'Automated CI/CD workflows',
  },
];

export default function CustomEngineeringPage() {
  return (
    <main className="min-h-screen bg-[var(--color-obsidian)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* ========================================================= */}
        {/* HERO */}
        {/* ========================================================= */}

        <section className="max-w-5xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-lg
              bg-blue-500/10
              border
              border-blue-500/20
              text-blue-400
              text-xs
              font-mono
              uppercase
              tracking-wider
              mb-7
            "
          >
            <Code2 className="w-4 h-4" />
            Custom Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-extrabold
              tracking-tight
              leading-[1.05]
            "
          >
            Build for Scale.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Engineer for Reliability.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              mt-7
              max-w-3xl
              text-lg
              sm:text-xl
              text-slate-400
              leading-relaxed
            "
          >
            We architect high-performance software platforms, cloud
            infrastructure, and resilient data systems designed to handle
            complex workloads, rapid growth, and enterprise-scale demands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-9"
          >
            <a
              href="/#contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-4
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                text-white
                font-semibold
                transition-all
                duration-200
                shadow-lg
                shadow-blue-600/20
                hover:shadow-blue-500/30
              "
            >
              Request Architecture Review
              <ArrowRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="#capabilities"
              className="
                inline-flex
                items-center
                justify-center
                px-7
                py-4
                rounded-xl
                border
                border-slate-700
                hover:border-slate-600
                hover:bg-white/[0.03]
                text-slate-300
                font-semibold
                transition-all
              "
            >
              Explore Engineering Services
            </a>
          </motion.div>

          {/* TRUST POINTS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
              flex
              flex-wrap
              gap-x-6
              gap-y-3
              mt-8
              text-xs
              font-mono
              text-slate-500
            "
          >
            {[
              'Cloud-Native Architecture',
              'High-Performance Systems',
              'Enterprise Security',
              'Automated Infrastructure',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* CAPABILITIES */}
        {/* ========================================================= */}

        <section id="capabilities" className="mb-24">
          <div className="max-w-3xl mb-10">
            <p className="
              text-xs
              font-mono
              uppercase
              tracking-widest
              text-cyan-400
              mb-3
            ">
              Engineering Capabilities
            </p>

            <h2 className="
              text-3xl
              sm:text-4xl
              font-bold
              tracking-tight
            ">
              Infrastructure engineered around your workload.
            </h2>

            <p className="
              mt-4
              text-slate-400
              leading-relaxed
            ">
              From cloud infrastructure and data architecture to enterprise
              security, we build the technical foundation required to support
              reliable digital products at scale.
            </p>
          </div>

          {/* CAPABILITY CARDS */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                      ease: 'easeOut',
                    },
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    p-7
                    rounded-2xl
                    border
                    border-slate-800
                    bg-[var(--color-slateGraphite)]/30
                    transition-all
                    duration-300
                    hover:border-blue-500/40
                    hover:bg-blue-500/[0.03]
                  "
                >
                  {/* TOP GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -inset-px
                      rounded-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_55%)]
                    "
                  />

                  {/* BOTTOM GLOW */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-24
                      left-1/2
                      -translate-x-1/2
                      w-48
                      h-48
                      rounded-full
                      bg-blue-500/10
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  <div className="relative z-10">
                    {/* ICON */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 2,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        flex
                        items-center
                        justify-center
                        mb-6
                        transition-all
                        duration-300
                        group-hover:bg-cyan-400/10
                        group-hover:border-cyan-400/30
                        group-hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]
                      "
                    >
                      <Icon
                        className="
                          w-5
                          h-5
                          text-cyan-400
                          transition-all
                          duration-300
                          group-hover:text-cyan-300
                          group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                        "
                      />
                    </motion.div>

                    {/* LABEL */}
                    <p
                      className="
                        text-[10px]
                        font-mono
                        uppercase
                        tracking-widest
                        text-blue-400
                        mb-2
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400
                      "
                    >
                      {item.label}
                    </p>

                    {/* TITLE */}
                    <h3
                      className="
                        text-xl
                        font-bold
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-cyan-50
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        text-sm
                        text-slate-400
                        leading-relaxed
                        mt-4
                        transition-colors
                        duration-300
                        group-hover:text-slate-300
                      "
                    >
                      {item.description}
                    </p>

                    {/* FEATURES */}
                    <div className="
                      mt-6
                      pt-5
                      border-t
                      border-slate-800/80
                      space-y-2.5
                    ">
                      {item.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-2.5
                            text-xs
                            text-slate-400
                            transition-colors
                            duration-300
                            group-hover:text-slate-300
                          "
                        >
                          <CheckCircle2
                            className="
                              w-3.5
                              h-3.5
                              text-cyan-400
                              shrink-0
                              transition-all
                              duration-300
                              group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]
                            "
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* EXPLORE */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-7
                        text-xs
                        font-semibold
                        text-slate-500
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400
                      "
                    >
                      <span>Explore capability</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ARCHITECTURE STACK */}
        {/* ========================================================= */}

        <section className="mb-24">
          <div className="
            rounded-3xl
            border
            border-slate-800
            bg-[#0B111B]
            overflow-hidden
          ">
            <div className="
              p-7
              sm:p-10
              border-b
              border-slate-800
            ">
              <div className="flex items-start gap-4">
                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <Layers3 className="w-5 h-5 text-cyan-400" />
                </div>

                <div>
                  <p className="
                    text-xs
                    font-mono
                    uppercase
                    tracking-widest
                    text-cyan-400
                  ">
                    Architecture Stack
                  </p>

                  <h2 className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    mt-2
                  ">
                    Every layer engineered to work together.
                  </h2>

                  <p className="
                    text-sm
                    text-slate-400
                    mt-3
                    max-w-2xl
                    leading-relaxed
                  ">
                    We approach software architecture as a connected system —
                    application, infrastructure, data, and security working
                    together instead of isolated technical components.
                  </p>
                </div>
              </div>
            </div>

            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            ">
              {architectureLayers.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      backgroundColor: 'rgba(59,130,246,0.04)',
                    }}
                    className="
                      relative
                      p-7
                      border-b
                      sm:border-b-0
                      lg:border-r
                      last:border-r-0
                      border-slate-800
                      transition-all
                      duration-300
                    "
                  >
                    <div className="
                      flex
                      items-center
                      justify-between
                      mb-6
                    ">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <span className="
                        text-[10px]
                        font-mono
                        text-slate-600
                      ">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="
                      text-xs
                      text-slate-500
                      leading-relaxed
                      mt-2
                    ">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ENGINEERING METRICS */}
        {/* ========================================================= */}

        <section className="mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  relative
                  overflow-hidden
                  p-5
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[var(--color-slateGraphite)]/30
                  hover:border-blue-500/30
                  transition-all
                  duration-300
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_65%)]
                  "
                />

                <div className="relative z-10">
                  <p
                    className="
                      text-2xl
                      sm:text-3xl
                      font-bold
                      font-mono
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-50
                    "
                  >
                    {metric.value}
                  </p>

                  <p
                    className="
                      text-xs
                      font-semibold
                      text-slate-300
                      mt-2
                    "
                  >
                    {metric.label}
                  </p>

                  <p
                    className="
                      text-[11px]
                      text-slate-500
                      mt-1
                      leading-relaxed
                    "
                  >
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECURITY / DELIVERY */}
        {/* ========================================================= */}

        <section className="mb-24">
          <div className="
            grid
            lg:grid-cols-2
            gap-10
            items-center
          ">
            <div>
              <p className="
                text-xs
                font-mono
                uppercase
                tracking-widest
                text-blue-400
                mb-3
              ">
                Engineering Discipline
              </p>

              <h2 className="
                text-3xl
                sm:text-4xl
                font-bold
              ">
                Reliability is designed in — not added later.
              </h2>

              <p className="
                mt-5
                text-slate-400
                leading-relaxed
              ">
                Our engineering approach considers performance, security,
                observability, deployment automation, and operational
                resilience from the beginning of the architecture process.
              </p>

              <div className="space-y-3 mt-8">
                {[
                  'Infrastructure as Code',
                  'Automated CI/CD pipelines',
                  'Centralized logging & monitoring',
                  'Secrets & access management',
                  'Performance & load optimization',
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-slate-300
                    "
                  >
                    <CheckCircle2 className="
                      w-4
                      h-4
                      text-cyan-400
                      shrink-0
                    " />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* SECURITY PANEL */}
            <div className="
              relative
              rounded-3xl
              border
              border-slate-800
              bg-[#090E17]
              p-7
              sm:p-8
              overflow-hidden
            ">
              <div className="flex items-center gap-3 mb-6">
                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <Shield className="
                    w-5
                    h-5
                    text-cyan-400
                  " />
                </div>

                <div>
                  <p className="
                    text-xs
                    font-mono
                    text-cyan-400
                    uppercase
                    tracking-widest
                  ">
                    Security by Design
                  </p>
                  <h3 className="
                    text-lg
                    font-bold
                    mt-1
                  ">
                    Protected at every layer.
                  </h3>
                </div>
              </div>

              <div className="relative space-y-3">
                {[
                  {
                    icon: Lock,
                    title: 'Identity & Access',
                    text: 'Controlled access across applications and infrastructure.',
                  },
                  {
                    icon: GitBranch,
                    title: 'Secure Delivery',
                    text: 'Security controls integrated into CI/CD workflows.',
                  },
                  {
                    icon: Zap,
                    title: 'Observability',
                    text: 'Continuous visibility into application and infrastructure health.',
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        flex
                        gap-4
                        p-4
                        rounded-xl
                        border
                        border-slate-800
                        bg-[#0D131E]
                        hover:border-cyan-500/20
                        transition-all
                        duration-300
                      "
                    >
                      <Icon className="
                        w-4
                        h-4
                        text-cyan-400
                        mt-0.5
                        shrink-0
                      " />

                      <div>
                        <p className="
                          text-sm
                          font-semibold
                        ">
                          {item.title}
                        </p>

                        <p className="
                          text-xs
                          text-slate-500
                          mt-1
                          leading-relaxed
                        ">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CTA */}
        {/* ========================================================= */}

        <section className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-blue-500/20
          bg-gradient-to-br
          from-blue-900/20
          via-[#0B111B]
          to-cyan-900/10
          p-8
          sm:p-12
        ">
          <div className="
            absolute
            -top-24
            -right-24
            w-64
            h-64
            bg-blue-500/10
            blur-[90px]
            rounded-full
          " />

          <div className="
            relative
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-8
          ">
            <div className="max-w-2xl">
              <div className="
                flex
                items-center
                gap-2
                text-cyan-400
                text-xs
                font-mono
                uppercase
                tracking-widest
                mb-4
              ">
                <Code2 className="w-4 h-4" />
                Architecture Review
              </div>

              <h2 className="
                text-2xl
                sm:text-3xl
                font-bold
              ">
                Have a complex system to build or scale?
              </h2>

              <p className="
                text-slate-400
                mt-3
                leading-relaxed
              ">
                Let's review your current architecture, technical constraints,
                scalability requirements, and roadmap — then define the
                engineering foundation required to move forward.
              </p>
            </div>

            <a
              href="/#contact"
              className="
                group
                shrink-0
                inline-flex
                items-center
                gap-3
                px-7
                py-4
                rounded-xl
                bg-blue-600
                hover:bg-blue-500
                text-white
                font-semibold
                transition-all
                shadow-lg
                shadow-blue-600/20
              "
            >
              Book Architecture Review
              <ArrowRight className="
                w-4
                h-4
                transition-transform
                duration-200
                group-hover:translate-x-1
              " />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}