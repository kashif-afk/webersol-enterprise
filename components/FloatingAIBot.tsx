'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { ChatWidget } from './ChatWidget';

export const FloatingAIBot = () => {
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [mood, setMood] = useState<'happy' | 'thinking' | 'active'>('happy');
  const [tipIndex, setTipIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Restricted to outer margin pathways (left/right and top/bottom edges)
  const [position, setPosition] = useState({ x: 40, y: 150 });

  const tips = [
    "Scanning enterprise architecture metrics...",
    "Autonomous agentic RAG pipeline active ⚡",
    "Need a custom AI platform? Let's talk!",
    "Analyzing core web vitals performance...",
    "Hello! Welcome to Webersol! 👋"
  ];

  // Randomize positions exclusively within empty side/edge margins.
  // Paused while the chat panel is open or reduced motion is requested.
  useEffect(() => {
    if (chatOpen || reduceMotion) return;

    const moveInterval = setInterval(() => {
      const isLeft = Math.random() > 0.5;
      const marginBuffer = 60;
      const maxWindowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const maxWindowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

      // Keep it strictly in the left or right outer boundary gaps, avoiding center content
      const randomX = isLeft
        ? marginBuffer + Math.random() * 80
        : maxWindowWidth - 160 - Math.random() * 80;

      const randomY = 100 + Math.random() * (maxWindowHeight - 250);

      setPosition({ x: randomX, y: randomY });

      const moods: ('happy' | 'thinking' | 'active')[] = ['happy', 'thinking', 'active'];
      setMood(moods[Math.floor(Math.random() * moods.length)]);

      if (Math.random() > 0.3) {
        setTipIndex((prev) => (prev + 1) % tips.length);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 4500);
      }
    }, 10000);

    return () => clearInterval(moveInterval);
  }, [chatOpen, reduceMotion, tips.length]);

  // Dock to a fixed corner while the chat is open — computed at render time
  // (no effect needed) so opening the chat doesn't trigger an extra render.
  const dockedPosition =
    chatOpen && typeof window !== 'undefined'
      ? { x: window.innerWidth - 140, y: window.innerHeight - 220 }
      : position;

  const roamAnimate = reduceMotion
    ? { x: dockedPosition.x, y: dockedPosition.y, rotate: 0 }
    : {
        x: dockedPosition.x,
        y: chatOpen ? dockedPosition.y : [dockedPosition.y, dockedPosition.y - 25, dockedPosition.y + 15, dockedPosition.y],
        rotate: chatOpen ? 0 : [0, 8, -8, 0],
      };

  const roamTransition = reduceMotion
    ? { duration: 0.3 }
    : {
        x: { duration: 2.5, ease: 'easeInOut' as const },
        y: { duration: 5, repeat: chatOpen ? 0 : Infinity, ease: 'easeInOut' as const },
        rotate: { duration: 6, repeat: chatOpen ? 0 : Infinity, ease: 'easeInOut' as const },
      };

  return (
    <>
      <motion.div
        animate={roamAnimate}
        transition={roamTransition}
        className="fixed z-40 pointer-events-none"
        style={{ left: 0, top: 0 }}
      >
        {/* Speech / Status Bubble */}
        <div className="relative pointer-events-none">
          {showBubble && !chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slateGraphite/95 backdrop-blur-xl border border-steelBright/40 text-[10px] font-mono text-steelBright shadow-xl shadow-steel/20 z-20"
            >
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3 text-steelBright" />
                <span>{tips[tipIndex]}</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Compact Cute Robot Character — real button for a11y */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => {
            if (chatOpen) return;
            setChatOpen(true);
          }}
          aria-haspopup="dialog"
          aria-expanded={chatOpen}
          aria-controls="webersol-chat-panel"
          aria-label="Chat with the Webersol assistant"
          className="relative flex flex-col items-center justify-center scale-75 origin-center pointer-events-auto cursor-pointer group"
        >

          {/* Ambient Glow Aura */}
          <div className={`absolute inset-0 rounded-full bg-steel/15 blur-lg pointer-events-none ${reduceMotion ? '' : 'animate-pulse'}`} />

          {/* Head Unit */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-2.5 w-4 h-7 bg-[#3B4C68] rounded-l-full border border-slate-500/30 shadow-sm" />
            <div className="absolute -right-2.5 w-4 h-7 bg-[#3B4C68] rounded-r-full border border-slate-500/30 shadow-sm" />

            <div className="relative w-20 h-14 bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1] rounded-[2rem] border-2 border-slate-700/65 shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-16 h-8 bg-[#0F172A] rounded-xl flex items-center justify-center gap-3 px-2 relative shadow-inner">
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 bg-steelBright rounded-full shadow-[0_0_8px_#4FB3DE] ${mood === 'thinking' && !reduceMotion ? 'animate-ping' : ''}`} />
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 bg-steelBright rounded-full shadow-[0_0_8px_#4FB3DE] ${mood === 'thinking' && !reduceMotion ? 'animate-ping' : ''}`} />
                </div>
                <div className="absolute bottom-1.5 w-3 h-1.5 bg-amber rounded-b-full shadow-[0_0_6px_#F5920D]" />
              </div>
            </div>
          </div>

          {/* Torso & Limbs */}
          <div className="relative -mt-1.5 flex flex-col items-center z-10">
            <div className="w-3.5 h-2 bg-[#3B4C68] rounded-sm border border-slate-600/50" />
            <div className="relative w-14 h-11 bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1] rounded-2xl border-2 border-slate-700/65 shadow-lg flex items-center justify-center">
              <div className="w-7 h-3.5 bg-[#0F172A] rounded-md border border-steelBright/50 flex items-center justify-center shadow-inner">
                <div className={`w-4 h-1.5 bg-steelBright/80 rounded-xs shadow-[0_0_4px_#4FB3DE] ${reduceMotion ? '' : 'animate-pulse'}`} />
              </div>

              <motion.div
                animate={reduceMotion ? {} : { rotate: [0, -15, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -left-2.5 top-1.5 w-3.5 h-6 bg-gradient-to-b from-[#3B4C68] to-[#CBD5E1] rounded-full origin-top shadow-sm border border-slate-600/40"
              />
              <motion.div
                animate={reduceMotion ? {} : { rotate: [0, 15, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -right-2.5 top-1.5 w-3.5 h-6 bg-gradient-to-b from-[#3B4C68] to-[#CBD5E1] rounded-full origin-top shadow-sm border border-slate-600/40"
              />
            </div>
          </div>

          {/* Thrusters */}
          <div className="relative -mt-0.5 flex items-center gap-2">
            <div className="w-3.5 h-4 bg-gradient-to-b from-[#CBD5E1] to-[#94A3B8] rounded-b-lg border border-slate-700/50 shadow-inner" />
            <div className="w-3.5 h-4 bg-gradient-to-b from-[#CBD5E1] to-[#94A3B8] rounded-b-lg border border-slate-700/50 shadow-inner" />
          </div>

        </button>
      </motion.div>

      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} triggerRef={triggerRef} />
    </>
  );
};
