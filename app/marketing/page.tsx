import type { Metadata } from 'next';
import { MarketingPageClient } from '@/components/MarketingPageClient';

export const metadata: Metadata = {
  title: 'Marketing Services',
  description:
    'Full-service marketing: SEO & GEO, PPC, social media, LinkedIn marketing, content, email, influencer, video, marketing automation, and conversion rate optimization.',
  openGraph: {
    type: 'website',
    title: 'Marketing Services | Webersol',
    description:
      'Full-service marketing: SEO & GEO, PPC, social media, LinkedIn marketing, content, email, influencer, video, marketing automation, and conversion rate optimization.',
    url: 'https://webersol.com/marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Services | Webersol',
    description:
      'Full-service marketing: SEO & GEO, PPC, social media, LinkedIn marketing, content, email, influencer, video, marketing automation, and conversion rate optimization.',
  },
  alternates: {
    canonical: 'https://webersol.com/marketing',
  },
};

export default function MarketingPage() {
  return <MarketingPageClient />;
}
