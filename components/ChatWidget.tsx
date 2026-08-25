'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, X, Send, MessageSquare } from 'lucide-react';
import { FAQ_TOPICS, FAQ_ROOT_TOPICS, GREETING, FaqTopic } from '@/lib/faqData';

type ChatMessage = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  quickReplies?: string[];
  link?: { href: string; label: string };
};

type ChatWidgetProps = {
  open: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
};

let idCounter = 0;
const nextId = () => `msg-${++idCounter}`;

export const ChatWidget = ({ open, onClose, triggerRef }: ChatWidgetProps) => {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!open || messages.length !== 0) return;

    const showTypingTimer = setTimeout(() => setTyping(true), 0);
    const replyTimer = setTimeout(() => {
      setMessages([
        {
          id: nextId(),
          sender: 'bot',
          text: GREETING,
          quickReplies: FAQ_ROOT_TOPICS,
        },
      ]);
      setTyping(false);
    }, 600);

    return () => {
      clearTimeout(showTypingTimer);
      clearTimeout(replyTimer);
    };
  }, [open, messages.length]);

  const prevOpenRef = useRef(open);
  useEffect(() => {
    // Only move focus on an actual open/close transition — comparing against
    // the previous value (rather than an invocation-count guard) survives
    // React Strict Mode's double effect-invocation in dev. Without this,
    // mount would stamp a default focus ring on the floating trigger button
    // before the user ever interacts with it.
    if (prevOpenRef.current === open) return;
    prevOpenRef.current = open;

    if (open) {
      panelRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open, triggerRef]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [messages, typing, reduceMotion]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const handleTopicClick = (topicId: string) => {
    const topic: FaqTopic | undefined = FAQ_TOPICS[topicId];
    if (!topic) return;

    setMessages((prev) => [...prev, { id: nextId(), sender: 'user', text: topic.label }]);
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), sender: 'bot', text: topic.answer, quickReplies: topic.followUps, link: topic.link },
      ]);
      setTyping(false);

      if (topicId === 'estimator') {
        setTimeout(() => {
          document.getElementById('estimator')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
        }, 400);
      }
    }, 650);
  };

  const handleTalkToHuman = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }, 100);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="chat-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-40 bg-obsidian/40 sm:hidden"
            onClick={onClose}
          />
          <motion.div
            key="chat-panel"
            id="webersol-chat-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Webersol assistant chat"
            tabIndex={-1}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.25, ease: 'easeOut' }}
            className="fixed z-50 bottom-0 left-0 right-0 sm:bottom-6 sm:right-6 sm:left-auto w-full sm:w-[380px] max-h-[80vh] sm:max-h-[560px] flex flex-col rounded-t-2xl sm:rounded-2xl border border-slate-800 bg-surface shadow-2xl shadow-black/40 overflow-hidden outline-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-800 bg-slateGraphite/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-steel/15 border border-steel/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-steelBright" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Webersol Assistant</p>
                  <p className="text-[10px] font-mono text-slate-500">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message log */}
            <div
              ref={logRef}
              aria-live="polite"
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.sender === 'bot'
                        ? 'bg-steel/10 border border-steel/20 text-slate-200 rounded-bl-sm'
                        : 'bg-amber/15 border border-amber/30 text-amber rounded-br-sm'
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.link && (
                      <Link
                        href={m.link.href}
                        onClick={onClose}
                        className="mt-2 inline-flex items-center gap-1.5 text-steelBright hover:text-white font-semibold transition-colors"
                      >
                        {m.link.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-steel/10 border border-steel/20 px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-steelBright animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-steelBright animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-steelBright animate-bounce" />
                  </div>
                </div>
              )}

              {!typing && messages.length > 0 && messages[messages.length - 1].sender === 'bot' && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {messages[messages.length - 1].quickReplies?.map((topicId) => {
                    const topic = FAQ_TOPICS[topicId];
                    if (!topic) return null;
                    return (
                      <button
                        key={topicId}
                        onClick={() => handleTopicClick(topicId)}
                        className="px-3 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300 hover:border-steelBright hover:text-steelBright transition-colors"
                      >
                        {topic.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer: talk to a human */}
            <div className="p-3 border-t border-slate-800 bg-slateGraphite/30">
              <button
                onClick={handleTalkToHuman}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber hover:bg-amberBright text-onAccent text-sm font-semibold transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                Talk to a human
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
