export type BlogCategory =
  | 'ai-automation'
  | 'custom-engineering'
  | 'financial-erp'
  | 'performance-growth';

export type ContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; style: 'bullet' | 'number'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'code'; language?: string; code: string }
  | { type: 'callout'; tone: 'info' | 'warning'; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  author: { name: string; role: string };
  body: ContentBlock[];
}

export const blogCategories: { id: BlogCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Posts' },
  { id: 'performance-growth', label: 'Performance & Growth' },
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'custom-engineering', label: 'Custom Engineering' },
  { id: 'financial-erp', label: 'Financial ERP' },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'generative-engine-optimization-technical-seo-2026',
    title: 'How Generative Engine Optimization Changes Technical SEO in 2026',
    excerpt:
      'Traditional ranking signals still matter, but AI answer engines now reward structured, entity-rich, machine-readable content just as much as backlinks.',
    category: 'performance-growth',
    categoryLabel: 'Performance & Growth',
    publishedAt: '2026-06-02',
    tags: ['GEO', 'Technical SEO', 'AI Search'],
    author: { name: 'Webersol Growth Team', role: 'Performance & Growth' },
    body: [
      {
        type: 'paragraph',
        text: 'Generative Engine Optimization (GEO) is not a rebrand of SEO — it is a parallel discipline that determines whether your brand gets cited inside an AI-generated answer at all. Search engines rank pages; answer engines synthesize them. That difference changes what "optimized" means.',
      },
      { type: 'heading', level: 2, text: 'Ranking signals still matter, but they are no longer sufficient' },
      {
        type: 'paragraph',
        text: 'Backlinks, page speed, and keyword relevance remain foundational — they still determine whether your content gets crawled and indexed in the first place. What changes is what happens after that: generative engines extract, summarize, and re-attribute content, which rewards clarity of structure over density of keywords.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Content organized around clear, answerable questions is easier for an LLM to extract and cite accurately.',
          'Entity-rich language (naming products, people, and organizations explicitly) improves how confidently a model attributes a claim to your brand.',
          'Machine-readable structure — headings, schema, structured data — reduces the model\'s need to infer meaning, which reduces misattribution.',
        ],
      },
      { type: 'heading', level: 2, text: 'What this means for engineering, not just content' },
      {
        type: 'paragraph',
        text: 'GEO is increasingly an engineering problem: structured data pipelines, consistent entity naming across a site, and content architecture that scales without producing thin or duplicate pages. That is the intersection where a software team, not just a content team, earns its keep.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'We treat GEO as an architecture decision, not a content checklist — see how our Performance & Growth practice approaches structured data at scale below.',
      },
    ],
  },
  {
    slug: 'programmatic-seo-structured-data-at-scale',
    title: 'Programmatic SEO at Scale: Turning Structured Data Into Thousands of Relevant Pages',
    excerpt:
      'A practical framework for generating high-quality, intent-matched landing pages from structured business data without triggering thin-content penalties.',
    category: 'performance-growth',
    categoryLabel: 'Performance & Growth',
    publishedAt: '2026-05-18',
    tags: ['Programmatic SEO', 'Structured Data', 'Next.js'],
    author: { name: 'Webersol Growth Team', role: 'Performance & Growth' },
    body: [
      {
        type: 'paragraph',
        text: 'Programmatic SEO has a bad reputation because most implementations are template-fill exercises: swap a city name into a boilerplate paragraph and call it a landing page. Done well, it is the opposite — a data architecture problem where every generated page earns its existence by answering a real, distinct intent.',
      },
      { type: 'heading', level: 2, text: 'The three failure modes to design against' },
      {
        type: 'list',
        style: 'number',
        items: [
          'Thin content: pages that differ only in a swapped noun, with no unique value beneath the template.',
          'Cannibalization: dozens of pages competing for the same query because the data model did not enforce intent uniqueness.',
          'Index bloat: generating far more pages than your crawl budget or content-quality bar can support.',
        ],
      },
      { type: 'heading', level: 2, text: 'A data-first approach' },
      {
        type: 'paragraph',
        text: 'We start from the structured data, not the template. If the underlying dataset cannot support a genuinely unique, useful answer per row, the page should not exist. Static generation via Next.js\'s generateStaticParams is a natural fit here — every page is pre-built at deploy time, verifiably distinct, and fast by default.',
      },
      {
        type: 'quote',
        text: 'If you cannot describe what makes page #4,000 different from page #3,999 in one sentence, you have a template — not a programmatic SEO strategy.',
      },
    ],
  },
  {
    slug: 'schema-markup-knowledge-graphs-ai-search-visibility',
    title: 'Schema Markup and Knowledge Graphs: The New Foundation of AI Search Visibility',
    excerpt:
      'Why JSON-LD, entity linking, and knowledge-graph alignment are becoming prerequisites for showing up in generative search results, not just nice-to-haves.',
    category: 'performance-growth',
    categoryLabel: 'Performance & Growth',
    publishedAt: '2026-04-27',
    tags: ['Schema.org', 'JSON-LD', 'Knowledge Graph'],
    author: { name: 'Webersol Growth Team', role: 'Performance & Growth' },
    body: [
      {
        type: 'paragraph',
        text: 'Schema markup used to be an optional enhancement — a way to earn a rich snippet if you had the time. In an environment where AI systems are building their own internal knowledge graphs from crawled content, structured data has quietly become closer to a requirement than a bonus.',
      },
      { type: 'heading', level: 2, text: 'What actually gets used' },
      {
        type: 'paragraph',
        text: 'Article and Organization schema establish authorship and provenance. Product and FAQ schema give models a low-ambiguity source to extract facts from directly, instead of parsing prose. BreadcrumbList schema helps establish site hierarchy and topical authority for a domain as a whole, not just a single page.',
      },
      {
        type: 'code',
        language: 'json',
        code: `{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Example Post",
  "author": { "@type": "Organization", "name": "Your Company" }
}`,
      },
      {
        type: 'paragraph',
        text: 'None of this requires a new framework or a paid tool — it is plain JSON-LD embedded in the page. The engineering discipline is in keeping it accurate and synchronized with the content it describes, which is where a lot of implementations quietly rot.',
      },
    ],
  },
  {
    slug: 'agentic-ai-enterprise-workflows-worth-automating',
    title: 'Where Agentic AI Actually Pays Off: Five Enterprise Workflows Worth Automating First',
    excerpt:
      'A field-tested checklist for identifying which manual processes deliver the fastest ROI when handed to autonomous agents.',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    publishedAt: '2026-06-15',
    tags: ['Agentic AI', 'Automation', 'ROI'],
    author: { name: 'Webersol Engineering Team', role: 'AI Automation' },
    body: [
      {
        type: 'paragraph',
        text: 'Not every manual process is a good candidate for agentic automation. The ones that pay off fastest share a few traits: high repetition, clear rules with occasional exceptions, and a cost of error that is annoying but not catastrophic while the system is still earning trust.',
      },
      { type: 'heading', level: 2, text: 'Five patterns we see win consistently' },
      {
        type: 'list',
        style: 'number',
        items: [
          'Document-to-action pipelines — invoices, purchase orders, and contracts that trigger downstream system updates.',
          'Multi-system reconciliation — comparing records across two or more platforms that were never designed to talk to each other.',
          'Tier-one support triage — classifying and routing inbound requests before a human ever sees them.',
          'QA and regression coverage — self-healing test suites that adapt to UI changes instead of breaking on every deploy.',
          'Structured data extraction from unstructured sources — turning PDFs, emails, and scanned forms into queryable records.',
        ],
      },
      { type: 'heading', level: 2, text: 'What to avoid automating first' },
      {
        type: 'paragraph',
        text: 'Processes with high ambiguity, low repetition, or severe consequences for a wrong decision are poor first targets — not because agents cannot eventually handle them, but because the trust-building period is expensive when errors are costly. Start where being wrong is cheap and being right is measurable.',
      },
      {
        type: 'callout',
        tone: 'info',
        text: 'Every automation we ship keeps a human-in-the-loop checkpoint until the system has demonstrated reliability in production — not just in a demo.',
      },
    ],
  },
  {
    slug: 'rag-vs-fine-tuning-enterprise-knowledge-systems',
    title: 'RAG vs Fine-Tuning: Choosing the Right Architecture for Enterprise Knowledge Systems',
    excerpt:
      'Breaking down when retrieval-augmented generation beats fine-tuning for grounding LLMs in proprietary enterprise data, and when the two should be combined.',
    category: 'ai-automation',
    categoryLabel: 'AI Automation',
    publishedAt: '2026-05-30',
    tags: ['RAG', 'LLM', 'Enterprise AI'],
    author: { name: 'Webersol Engineering Team', role: 'AI Automation' },
    body: [
      {
        type: 'paragraph',
        text: 'The RAG-versus-fine-tuning question comes up in nearly every enterprise AI engagement, and the honest answer is usually "it depends on how your data changes over time" — not which technique is inherently superior.',
      },
      { type: 'heading', level: 2, text: 'Choose RAG when' },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Your knowledge base changes frequently and retraining on every update is impractical.',
          'You need traceable citations back to a source document for compliance or trust reasons.',
          'The domain is broad and the model\'s general reasoning ability is already strong — it just needs current facts.',
        ],
      },
      { type: 'heading', level: 2, text: 'Choose fine-tuning when' },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'You need the model to consistently follow a narrow output format, tone, or domain-specific vocabulary.',
          'The knowledge is stable and the value is in behavior, not fact retrieval.',
          'Latency budgets do not allow for a retrieval round-trip.',
        ],
      },
      {
        type: 'paragraph',
        text: 'In practice, most production systems we build combine both: fine-tuning shapes how the model behaves and communicates, while a retrieval layer keeps it grounded in whatever changed since the last training run. Treating this as an either/or decision usually means picking the wrong architecture.',
      },
    ],
  },
  {
    slug: 'sub-second-latency-high-concurrency-platform-builds',
    title: 'Designing for Sub-Second Latency: Lessons From High-Concurrency Platform Builds',
    excerpt:
      'Architectural patterns — caching layers, connection pooling, edge rendering — that keep dashboards fast under real production load.',
    category: 'custom-engineering',
    categoryLabel: 'Custom Engineering',
    publishedAt: '2026-05-05',
    tags: ['Performance', 'Cloud Architecture', 'Next.js'],
    author: { name: 'Webersol Engineering Team', role: 'Custom Engineering' },
    body: [
      {
        type: 'paragraph',
        text: 'Sub-second latency targets are easy to hit in a demo and hard to hold onto under real concurrent load. The gap between the two is almost always architectural, not a matter of writing faster code.',
      },
      { type: 'heading', level: 2, text: 'Where the time actually goes' },
      {
        type: 'paragraph',
        text: 'In most systems we profile, the bottleneck is rarely compute — it is round trips: database connection churn under load, uncached repeated queries, and synchronous calls to services that could be parallelized or pre-fetched.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Connection pooling sized for peak concurrency, not average load, prevents queueing at the database layer.',
          'A caching layer in front of expensive aggregate queries turns O(n) database work into O(1) reads for repeat requests.',
          'Edge rendering pushes static and semi-static content closer to the user, so only genuinely dynamic data crosses the full network path.',
        ],
      },
      {
        type: 'quote',
        text: 'A system that is fast at 10 concurrent users and falls over at 1,000 was never actually fast — it was untested.',
      },
      {
        type: 'paragraph',
        text: 'Load testing against realistic concurrency, not just correctness testing, is what separates architectures that survive launch day from ones that need an emergency rewrite three weeks in.',
      },
    ],
  },
  {
    slug: 'micro-frontends-nextjs-app-router-in-practice',
    title: 'Micro-Frontends in Practice: When Next.js App Router Architecture Actually Helps',
    excerpt:
      'A pragmatic look at when splitting a monolithic frontend into independently deployable modules is worth the added complexity.',
    category: 'custom-engineering',
    categoryLabel: 'Custom Engineering',
    publishedAt: '2026-04-11',
    tags: ['Micro-Frontends', 'Next.js', 'App Router'],
    author: { name: 'Webersol Engineering Team', role: 'Custom Engineering' },
    body: [
      {
        type: 'paragraph',
        text: 'Micro-frontends solve an organizational problem more often than a technical one. Before reaching for the pattern, it is worth being honest about whether the constraint is team autonomy or something else entirely.',
      },
      { type: 'heading', level: 2, text: 'Good reasons to split' },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Multiple teams need to ship independently without coordinating a shared release train.',
          'Different parts of the product have genuinely different technical requirements or lifecycles.',
          'A legacy module needs to be incrementally replaced without a big-bang rewrite.',
        ],
      },
      { type: 'heading', level: 2, text: 'Weak reasons to split' },
      {
        type: 'paragraph',
        text: '"It felt like the modern way to do it" is not a reason. Neither is anticipating a team split that has not happened yet. The App Router\'s route groups and parallel routes already give a single Next.js application enough structural separation for most mid-size products without paying the runtime cost of module federation.',
      },
      {
        type: 'callout',
        tone: 'warning',
        text: 'Micro-frontends trade deployment coupling for runtime and consistency complexity — shared design systems, versioning, and cross-app navigation all get harder. Make sure the trade is worth it before committing.',
      },
    ],
  },
  {
    slug: 'immutable-ledger-double-entry-accounting-modern-erp',
    title: 'Building an Immutable Ledger: Why Double-Entry Accounting Still Matters in Modern ERP',
    excerpt:
      'How append-only, double-entry data models prevent silent data drift and simplify audit trails in high-volume financial systems.',
    category: 'financial-erp',
    categoryLabel: 'Financial ERP',
    publishedAt: '2026-03-22',
    tags: ['Financial Systems', 'Ledger Design', 'Audit'],
    author: { name: 'Webersol Engineering Team', role: 'Financial ERP' },
    body: [
      {
        type: 'paragraph',
        text: 'Double-entry accounting is centuries old, but it remains one of the more elegant data-integrity patterns available — and modern ERP systems that skip it, in favor of simple mutable balance fields, tend to pay for that decision later in the form of unexplainable discrepancies.',
      },
      { type: 'heading', level: 2, text: 'Why "just update the balance" fails at scale' },
      {
        type: 'paragraph',
        text: 'A mutable balance field has no memory of how it got there. Under concurrent writes, race conditions, and retried failed transactions, small drifts accumulate invisibly until a reconciliation surfaces a number nobody can explain. An append-only ledger of debits and credits makes every state the sum of an auditable history, not a trusted snapshot.',
      },
      {
        type: 'list',
        style: 'number',
        items: [
          'Every transaction is recorded as a balanced pair of entries — nothing is ever overwritten.',
          'Current balances are derived, not stored, computed as a query over the entry history.',
          'Corrections are new entries that reverse and restate, never edits to the past.',
        ],
      },
      { type: 'heading', level: 2, text: 'What this buys you operationally' },
      {
        type: 'paragraph',
        text: 'Beyond audit trail integrity, this pattern makes reconciliation, multi-currency handling, and point-in-time reporting dramatically simpler — every historical balance is just a query with a date filter, not a separately maintained snapshot table that can drift out of sync with reality.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function estimateReadingTime(body: ContentBlock[]): string {
  const wordsIn = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

  const words = body.reduce((total, block) => {
    switch (block.type) {
      case 'paragraph':
      case 'heading':
      case 'code':
        return total + wordsIn(block.type === 'code' ? block.code : block.text);
      case 'quote':
        return total + wordsIn(block.text) + (block.attribution ? wordsIn(block.attribution) : 0);
      case 'callout':
        return total + wordsIn(block.text);
      case 'list':
        return total + wordsIn(block.items.join(' '));
      default:
        return total;
    }
  }, 0);

  return `${Math.max(1, Math.round(words / 200))} min read`;
}
