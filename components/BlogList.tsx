'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { blogCategories, blogPosts, estimateReadingTime, type BlogCategory } from '@/lib/blogPosts';
import { formatDate } from '@/lib/utils';
import { Reveal } from './motion/Reveal';
import { SpotlightCard } from './SpotlightCard';
import { FlowLine } from './motifs/FlowLine';

export const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const filteredPosts = useMemo(
    () => (activeCategory === 'all' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <main className="min-h-screen bg-obsidian text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 sm:px-8 lg:px-14 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-steel/10 blur-[130px]" />
          <div className="absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-amber/5 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slateGraphite/90 border border-slate-700/80 text-xs font-mono text-steelBright mb-6">
              <span>Field Notes</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Engineering, AI, and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel via-steelBright to-white">
                Growth, Explained
              </span>
            </h1>
            <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
              Notes from the teams building agentic automation, high-concurrency platforms, financial ledgers, and AI-era growth systems.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center justify-center">
            <FlowLine size={220} />
          </Reveal>
        </div>
      </section>

      {/* Category filters */}
      <section className="relative border-y border-slate-800/60 bg-abyss py-8">
        <Reveal className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-14 flex flex-wrap items-center gap-3">
          {blogCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wide border transition-all ${
                  isActive
                    ? 'bg-steel border-steel text-onAccentLight'
                    : 'bg-surface border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </Reveal>
      </section>

      {/* Post grid */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <SpotlightCard className="h-full rounded-2xl border border-slate-800 bg-surface p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-slate-700">
                  <span className="inline-flex w-fit items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-steelBright bg-steel/10 border border-steel/25 px-2.5 py-1 rounded-full mb-4">
                    {post.categoryLabel}
                  </span>
                  <h2 className="font-display text-lg font-bold text-white mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-4 border-t border-slate-800/80">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {estimateReadingTime(post.body)}
                    </span>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};
