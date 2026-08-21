import {
  Search,
  Target,
  Share2,
  Briefcase,
  FileText,
  Mail,
  Users,
  Video,
  Workflow,
  Filter,
  type LucideIcon,
} from 'lucide-react';

export type MotifType = 'pulse-rings' | 'floating-nodes' | 'flow-line' | 'climbing-bars' | 'funnel';

export interface MarketingService {
  id: string;
  title: string;
  icon: LucideIcon;
  motif: MotifType;
  tagline: string;
  description: string;
  features: string[];
  process: string[];
}

export const marketingServices: MarketingService[] = [
  {
    id: 'seo-geo',
    title: 'SEO & GEO',
    icon: Search,
    motif: 'climbing-bars',
    tagline: 'Rank in traditional search and get cited by AI answer engines.',
    description:
      'Technical SEO and Generative Engine Optimization combined — structured data, entity clarity, and content architecture built to be found and correctly cited by both search engines and AI systems.',
    features: ['Technical SEO audits', 'Generative Engine Optimization (GEO)', 'Schema & structured data', 'Keyword & entity strategy'],
    process: ['Audit', 'Structure', 'Publish', 'Track'],
  },
  {
    id: 'ppc-ads',
    title: 'PPC & Paid Ads',
    icon: Target,
    motif: 'climbing-bars',
    tagline: 'Paid acquisition that pays for itself.',
    description:
      'Data-driven paid media across search, social, and display — built around measurable ROI, not vanity impressions.',
    features: ['Google & Meta Ads management', 'Conversion tracking setup', 'A/B tested ad creative', 'Budget & bid optimization'],
    process: ['Research', 'Launch', 'Optimize', 'Scale'],
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    icon: Share2,
    motif: 'pulse-rings',
    tagline: 'Consistent brand presence across every platform that matters.',
    description:
      'Content calendars, community management, and platform-native creative that builds an audience instead of just posting into the void.',
    features: ['Content calendar & scheduling', 'Platform-native creative', 'Community management', 'Performance reporting'],
    process: ['Strategy', 'Create', 'Publish', 'Engage'],
  },
  {
    id: 'linkedin-marketing',
    title: 'LinkedIn Marketing',
    icon: Briefcase,
    motif: 'floating-nodes',
    tagline: 'B2B reach where your actual buyers are.',
    description:
      'Company page growth, executive thought-leadership content, and targeted LinkedIn Ads for B2B pipelines that other channels can\'t reach.',
    features: ['Company page strategy', 'Executive ghostwriting', 'LinkedIn Ads & targeting', 'B2B lead generation'],
    process: ['Positioning', 'Content', 'Outreach', 'Convert'],
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    icon: FileText,
    motif: 'flow-line',
    tagline: 'Editorial content that compounds instead of expiring.',
    description:
      'Long-form articles, guides, and resources built around real search and AI-citation intent — the same discipline behind our own blog.',
    features: ['Editorial strategy', 'SEO/GEO-aligned writing', 'Content refresh cycles', 'Distribution planning'],
    process: ['Plan', 'Write', 'Publish', 'Repurpose'],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    icon: Mail,
    motif: 'flow-line',
    tagline: 'Owned-channel revenue that doesn\'t depend on algorithms.',
    description:
      'Lifecycle and campaign email built on segmentation and deliverability fundamentals — nurture sequences, promotions, and retention flows.',
    features: ['Lifecycle automation flows', 'List segmentation', 'Deliverability management', 'A/B tested campaigns'],
    process: ['Segment', 'Design', 'Automate', 'Analyze'],
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    icon: Users,
    motif: 'floating-nodes',
    tagline: 'Borrowed trust from voices your audience already follows.',
    description:
      'Creator sourcing, vetting, and campaign management across micro and mid-tier influencers, matched to your actual audience and category.',
    features: ['Creator sourcing & vetting', 'Campaign briefing', 'Contract & payment management', 'Performance tracking'],
    process: ['Source', 'Brief', 'Launch', 'Measure'],
  },
  {
    id: 'video-marketing',
    title: 'Video Marketing',
    icon: Video,
    motif: 'pulse-rings',
    tagline: 'The format every platform is pushing hardest right now.',
    description:
      'Short-form and long-form video production and distribution strategy, from concept and scripting through platform-specific editing.',
    features: ['Short-form content strategy', 'Scripting & storyboarding', 'Platform-specific editing', 'Distribution scheduling'],
    process: ['Concept', 'Produce', 'Edit', 'Distribute'],
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    icon: Workflow,
    motif: 'flow-line',
    tagline: 'Fewer manual campaigns, more consistent execution.',
    description:
      'Automated lead scoring, nurture sequences, and cross-channel workflows connecting your CRM, email, and ad platforms into one system.',
    features: ['Lead scoring & routing', 'Cross-channel workflows', 'CRM integration', 'Trigger-based sequences'],
    process: ['Map', 'Connect', 'Automate', 'Refine'],
  },
  {
    id: 'cro',
    title: 'Conversion Rate Optimization',
    icon: Filter,
    motif: 'funnel',
    tagline: 'Get more from the traffic you already have.',
    description:
      'Funnel analysis, landing page testing, and UX refinement focused on turning existing visitors into leads and customers.',
    features: ['Funnel & drop-off analysis', 'Landing page A/B testing', 'UX & copy refinement', 'Conversion tracking'],
    process: ['Analyze', 'Hypothesize', 'Test', 'Implement'],
  },
];
