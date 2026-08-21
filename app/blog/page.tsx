import type { Metadata } from 'next';
import { BlogList } from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI automation, custom software engineering, financial ERP architecture, and performance & growth marketing from the Webersol team.',
  openGraph: {
    type: 'website',
    title: 'Blog | Webersol',
    description:
      'Insights on AI automation, custom software engineering, financial ERP architecture, and performance & growth marketing from the Webersol team.',
    url: 'https://webersol.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Webersol',
    description:
      'Insights on AI automation, custom software engineering, financial ERP architecture, and performance & growth marketing from the Webersol team.',
  },
  alternates: {
    canonical: 'https://webersol.com/blog',
  },
};

export default function BlogPage() {
  return <BlogList />;
}
