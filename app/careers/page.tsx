import type { Metadata } from 'next';
import { CareersPageClient } from '@/components/CareersPageClient';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Webersol — build generative AI systems, cloud architecture, financial ERP platforms, and growth marketing for enterprise clients.',
  openGraph: {
    type: 'website',
    title: 'Careers | Webersol',
    description:
      'Join Webersol — build generative AI systems, cloud architecture, financial ERP platforms, and growth marketing for enterprise clients.',
    url: 'https://webersol.com/careers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Webersol',
    description:
      'Join Webersol — build generative AI systems, cloud architecture, financial ERP platforms, and growth marketing for enterprise clients.',
  },
  alternates: {
    canonical: 'https://webersol.com/careers',
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
