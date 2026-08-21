export interface OpenPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const openPositions: OpenPosition[] = [
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Custom Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Build high-concurrency Next.js and Node platforms for enterprise clients — from API design through cloud deployment.',
  },
  {
    id: 'ai-automation-engineer',
    title: 'AI Automation Engineer',
    department: 'AI Automation',
    location: 'Lahore, PK',
    type: 'Full-time',
    description:
      'Design and ship RAG pipelines, agentic workflows, and evaluation harnesses for production LLM systems.',
  },
  {
    id: 'growth-marketing-strategist',
    title: 'Growth Marketing Strategist',
    department: 'Performance & Growth',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Own GEO, SEO, and paid acquisition strategy across client accounts, from audit through measurable execution.',
  },
  {
    id: 'financial-systems-engineer',
    title: 'Financial Systems Engineer',
    department: 'Financial ERP',
    location: 'New York, NY',
    type: 'Full-time',
    description:
      'Architect double-entry ledger systems, reconciliation pipelines, and audit-grade financial infrastructure.',
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract',
    description:
      'Shape interaction design and visual systems across client-facing platforms and Webersol’s own product surfaces.',
  },
];
