'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Info, AlertTriangle } from 'lucide-react';
import { blogPosts, estimateReadingTime, type BlogPost, type ContentBlock } from '@/lib/blogPosts';
import { formatDate } from '@/lib/utils';
import { Reveal } from './motion/Reveal';
import { SpotlightCard } from './SpotlightCard';

const CLOSING_CTA: Record<BlogPost['category'], { href: string; label: string }> = {
  'performance-growth': { href: '/marketing', label: 'Explore Marketing Services' },
  'ai-automation': { href: '/#contact', label: 'Talk to Our Engineering Team' },
  'custom-engineering': { href: '/#contact', label: 'Talk to Our Engineering Team' },
  'financial-erp': { href: '/#contact', label: 'Talk to Our Engineering Team' },
};

const renderBlock = (block: ContentBlock, i: number) => {
  switch (block.type) {
    case 'heading':
      return block.level === 2 ? (
        <h2 key={i} className="font-display text-2xl sm:text-3xl font-bold text-white mt-12 mb-4">
          {block.text}
        </h2>
      ) : (
        <h3 key={i} className="font-display text-xl font-bold text-white mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={i} className="text-slate-300 leading-relaxed mb-5">
          {block.text}
        </p>
      );
    case 'list':
      return block.style === 'bullet' ? (
        <ul key={i} className="space-y-2.5 mb-6 pl-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-slate-300 leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-steelBright shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ol key={i} className="space-y-2.5 mb-6 pl-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-slate-300 leading-relaxed">
              <span className="font-mono text-xs text-steelBright shrink-0 mt-0.5">{String(j + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'quote':
      return (
        <blockquote key={i} className="border-l-2 border-amber pl-5 my-8">
          <p className="text-lg text-white font-display leading-relaxed italic">&ldquo;{block.text}&rdquo;</p>
          {block.attribution && <cite className="block mt-2 text-xs font-mono text-slate-500 not-italic">— {block.attribution}</cite>}
        </blockquote>
      );
    case 'code':
      return (
        <pre key={i} className="rounded-xl border border-slate-800 bg-abyss p-5 overflow-x-auto mb-6 text-xs font-mono text-slate-300 leading-relaxed">
          <code>{block.code}</code>
        </pre>
      );
    case 'callout': {
      const isWarning = block.tone === 'warning';
      const Icon = isWarning ? AlertTriangle : Info;
      return (
        <div
          key={i}
          className={`flex items-start gap-3 rounded-xl border p-5 mb-6 ${
            isWarning ? 'border-amber/25 bg-amber/5 text-amber' : 'border-steel/25 bg-steel/5 text-steelBright'
          }`}
        >
          <Icon className="h-5 w-5 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    }
    default:
      return null;
  }
};

type Props = { post: BlogPost };

export const BlogPostBody = ({ post }: Props) => {
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  const cta = CLOSING_CTA[post.category];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: post.author.name },
  };

  return (
    <main className="min-h-screen bg-obsidian text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-steelBright transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <span className="inline-flex w-fit items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-steelBright bg-steel/10 border border-steel/25 px-2.5 py-1 rounded-full mb-5">
            {post.categoryLabel}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-500 pb-8 border-b border-slate-800/80">
            <span>{post.author.name} · {post.author.role}</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {estimateReadingTime(post.body)}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {post.body.map(renderBlock)}
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap gap-2 mt-4 mb-16">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono uppercase tracking-wide text-slate-500 bg-surface px-2.5 py-1 rounded-full border border-slate-800">
              {tag}
            </span>
          ))}
        </Reveal>

        <Reveal>
          <Link
            href={cta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber hover:bg-amberBright text-onAccent font-semibold text-sm px-6 py-3.5 transition-all shadow-lg shadow-amber/20"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {relatedPosts.length > 0 && (
          <Reveal className="mt-20 pt-10 border-t border-slate-800/80">
            <p className="text-xs font-mono uppercase tracking-widest text-steelBright mb-6">Related Reading</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <SpotlightCard className="h-full rounded-xl border border-slate-800 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700">
                    <h3 className="font-display text-sm font-bold text-white leading-snug mb-2">{related.title}</h3>
                    <p className="text-xs text-slate-500">{formatDate(related.publishedAt)}</p>
                  </SpotlightCard>
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </article>
    </main>
  );
};
