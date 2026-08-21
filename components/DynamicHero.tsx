'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useInViewMount } from '@/lib/useInViewMount';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false, loading: () => null });

export const DynamicHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroInView = useInViewMount(heroRef);

  const glowOneY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);
  const glowTwoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0]);
  const driftProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [canRender3D, setCanRender3D] = useState(false);
  const [sceneKey, setSceneKey] = useState(0);
  const contextLossTimestamps = useRef<number[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 768) return; // keep the lighter fallback on mobile — WebGL is expensive there

    const timer = setTimeout(() => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        setCanRender3D(!!gl);
      } catch {
        setCanRender3D(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // A lost WebGL context (GPU driver hiccup, resource pressure, a stray readPixels
  // stall) is usually recoverable — remounting the Canvas creates a fresh context.
  // Only fall back to the flat CSS glow permanently if it keeps happening, which
  // signals a genuinely broken GPU/driver rather than a one-off transient loss.
  const handleContextLost = () => {
    const now = Date.now();
    const recent = contextLossTimestamps.current.filter((t) => now - t < 30000);
    recent.push(now);
    contextLossTimestamps.current = recent;

    if (recent.length >= 3) {
      setCanRender3D(false);
    } else {
      setSceneKey((k) => k + 1);
    }
  };

  return (
    <section id="hero-section" ref={heroRef} className="relative min-h-[90vh] bg-obsidian text-white flex items-center overflow-hidden px-6 sm:px-8 lg:px-14 py-20">

      {/* Ambient lighting glows */}
      <motion.div
        style={{ y: glowOneY, opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel/15 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: glowTwoY, opacity: glowOpacity }}
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Deep Contrast Vignette Overlay so Headings and Text Stand Out Clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/60 to-obsidian/90 pointer-events-none z-0" />

      {/* Vector Constellation Mesh Texture Overlay */}
      <div
        className="hero-mesh-overlay absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.25' stroke-width='0.75'%3E%3Cpath d='M50 50 L150 30 L220 120 L90 180 Z' /%3E%3Cpath d='M150 30 L320 80 L280 200 L220 120 Z' /%3E%3Cpath d='M320 80 L380 150 L350 280 L280 200 Z' /%3E%3Cpath d='M90 180 L220 120 L180 290 L50 250 Z' /%3E%3Cpath d='M220 120 L280 200 L310 320 L180 290 Z' /%3E%3Cpath d='M280 200 L350 280 L380 380 L310 320 Z' /%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='150' cy='30' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='220' cy='120' r='3' fill='%23ffffff' fill-opacity='0.55'/%3E%3Ccircle cx='320' cy='80' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='90' cy='180' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='280' cy='200' r='3' fill='%23ffffff' fill-opacity='0.55'/%3E%3Ccircle cx='350' cy='280' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='180' cy='290' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3Ccircle cx='310' cy='320' r='2.5' fill='%23ffffff' fill-opacity='0.45'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — Copy */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slateGraphite/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-steelBright shadow-xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-steelBright animate-pulse" />
              <span>Architecting Autonomous AI &amp; Enterprise Web Infrastructure.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] drop-shadow-md"
            >
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">Autonomous AI</span> &amp; Enterprise Web Infrastructure.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl mx-auto lg:mx-0 text-slate-300 text-lg sm:text-xl font-normal leading-relaxed drop-shadow"
            >
              Webersol engineers high-performance software architectures, agentic workflow automation, and scalable digital platforms designed to accelerate and scale modern enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#estimator"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-amber/30 hover:shadow-amberBright/50"
              >
                Launch ROI Estimator
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slateGraphite/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md backdrop-blur-md"
              >
                Book Strategy Call
              </a>
            </motion.div>
          </div>

          {/* RIGHT — 3D artwork (falls back to the ambient glow orbs on mobile / no-WebGL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[320px] sm:h-[420px] lg:h-[560px] pointer-events-none"
          >
            {canRender3D && heroInView ? (
              <Suspense fallback={null}>
                <HeroScene key={sceneKey} driftProgress={driftProgress} reduceMotion={!!reduceMotion} onContextLost={handleContextLost} />
              </Suspense>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-steel/20 blur-[90px]" />
                <div className="absolute w-40 h-40 rounded-full bg-amber/25 blur-[70px]" />
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-12 mt-12 border-t border-slate-800/90 max-w-6xl mx-auto lg:mx-0 text-left"
        >
          <div className="p-4 rounded-lg bg-slateGraphite/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-white">99.99%</p>
            <p className="text-xs text-slate-400 mt-1">SLA System Uptime</p>
          </div>
          <div className="p-4 rounded-lg bg-slateGraphite/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-amber">10x</p>
            <p className="text-xs text-slate-400 mt-1">Process Efficiency via AI</p>
          </div>
          <div className="p-4 rounded-lg bg-slateGraphite/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-white">&lt;1.0s</p>
            <p className="text-xs text-slate-400 mt-1">Core Web Vitals LCP</p>
          </div>
          <div className="p-4 rounded-lg bg-slateGraphite/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-steelBright">SOC-2</p>
            <p className="text-xs text-slate-400 mt-1">Security Compliant Architecture</p>
          </div>
          <div className="p-4 rounded-lg bg-slateGraphite/50 backdrop-blur-md border border-slate-700/60 shadow-xl">
            <p className="text-2xl font-bold font-mono text-white">2</p>
            <p className="text-xs text-slate-400 mt-1">Global Delivery Hubs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
