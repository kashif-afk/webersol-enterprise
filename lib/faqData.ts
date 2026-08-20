export type FaqTopic = {
  id: string;
  label: string;
  answer: string;
  followUps?: string[];
};

// Content mirrors what's already on the homepage (ServiceSwitcher, InteractiveEstimator,
// Footer) — no facts invented here, just summarized for a chat format.
export const FAQ_TOPICS: Record<string, FaqTopic> = {
  services: {
    id: 'services',
    label: 'What do you do?',
    answer:
      "We're a software engineering house working across four verticals: Generative AI & enterprise automation, full-stack custom software & cloud architecture, financial ERP-level systems, and performance/GEO growth marketing.",
    followUps: ['cost', 'timeline', 'contact'],
  },
  cost: {
    id: 'cost',
    label: 'How much does a project cost?',
    answer:
      "It depends on scope — our ROI estimator gives you an indicative investment range in seconds based on your architecture tier, AI/cloud requirements, and timeline.",
    followUps: ['estimator', 'timeline', 'contact'],
  },
  estimator: {
    id: 'estimator',
    label: 'Open the ROI estimator',
    answer:
      "Scrolling you to the estimator now — configure your requirements and you'll get a live investment range and delivery estimate.",
  },
  timeline: {
    id: 'timeline',
    label: 'How long do projects take?',
    answer:
      'Typical delivery windows run 4 to 16 weeks depending on scope — focused MVPs land faster, enterprise AI/ERP builds take longer for the same reason they need more engineering depth.',
    followUps: ['cost', 'contact'],
  },
  contact: {
    id: 'contact',
    label: 'How do I get in touch?',
    answer:
      'You can reach us directly at info@webersol.com or +92 335 4654941, or use the consultation form below — our lead architects and CTO review every request personally.',
  },
};

export const FAQ_ROOT_TOPICS = ['services', 'cost', 'timeline', 'contact'];

export const GREETING =
  "Hi, I'm the Webersol assistant. I can answer a few quick questions about what we do, pricing, and timelines — or connect you with the team.";
