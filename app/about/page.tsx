import type { Metadata } from 'next';
import { AboutPageClient } from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Webersol is an enterprise engineering house building generative AI systems, custom software architecture, financial ERP platforms, and performance growth marketing.',
  openGraph: {
    type: 'website',
    title: 'About Us | Webersol',
    description:
      'Webersol is an enterprise engineering house building generative AI systems, custom software architecture, financial ERP platforms, and performance growth marketing.',
    url: 'https://webersol.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Webersol',
    description:
      'Webersol is an enterprise engineering house building generative AI systems, custom software architecture, financial ERP platforms, and performance growth marketing.',
  },
  alternates: {
    canonical: 'https://webersol.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
