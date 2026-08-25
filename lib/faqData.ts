export type FaqTopic = {
  id: string;
  label: string;
  answer: string;
  link?: { href: string; label: string };
  followUps?: string[];
};

// Content mirrors what's already on the site (About, Services, Marketing pages) —
// no facts invented here, just summarized for a chat format. Every service topic
// carries a link back to its full page so the bot can redirect instead of guessing.
export const FAQ_TOPICS: Record<string, FaqTopic> = {
  about: {
    id: 'about',
    label: 'About us',
    answer:
      "Webersol is an enterprise engineering house — we build generative AI systems, custom software & cloud architecture, financial ERP platforms, and performance growth marketing for teams that need production-grade work. Here's everything we offer:",
    followUps: ['ai-automation', 'custom-engineering', 'financial-erp', 'performance-growth', 'marketing', 'contact'],
  },
  'ai-automation': {
    id: 'ai-automation',
    label: 'AI & Automation',
    answer:
      'We build custom LLM & RAG systems, AI-powered QA with self-healing automation, and autonomous process agents that reason, orchestrate, and act across your enterprise systems.',
    link: { href: '/services/ai-automation', label: 'View AI & Automation services' },
    followUps: ['contact', 'about'],
  },
  'custom-engineering': {
    id: 'custom-engineering',
    label: 'Custom Engineering',
    answer:
      'Full-stack custom software and cloud architecture — scalable platforms, APIs, and infrastructure engineered for reliability at enterprise scale.',
    link: { href: '/services/custom-engineering', label: 'View Custom Engineering services' },
    followUps: ['contact', 'about'],
  },
  'financial-erp': {
    id: 'financial-erp',
    label: 'Financial ERP',
    answer:
      'Financial ERP-level systems — immutable ledgers, multi-currency reconciliation, and audit-ready accounting engines built for zero-drift accuracy.',
    link: { href: '/services/financial-erp', label: 'View Financial ERP services' },
    followUps: ['contact', 'about'],
  },
  'performance-growth': {
    id: 'performance-growth',
    label: 'Performance & Growth',
    answer:
      'AI search visibility and GEO, structured data, and performance marketing systems that grow organic and paid reach across traditional and generative search.',
    link: { href: '/services/performance-growth', label: 'View Performance & Growth services' },
    followUps: ['contact', 'about'],
  },
  marketing: {
    id: 'marketing',
    label: 'Marketing',
    answer:
      'Full-service marketing: SEO & GEO, PPC, social media, LinkedIn marketing, content, email, influencer, video, marketing automation, and conversion rate optimization.',
    link: { href: '/marketing', label: 'View Marketing services' },
    followUps: ['contact', 'about'],
  },
  contact: {
    id: 'contact',
    label: 'How do I get in touch?',
    answer:
      'You can reach us directly at info@webersol.com or +1 872 284 3026, or use the consultation form below — our lead architects and CTO review every request personally.',
  },
};

export const FAQ_ROOT_TOPICS = ['about'];

export const GREETING =
  "Hi, I'm the Webersol assistant. I can tell you about us or what we do — or connect you with the team.";
