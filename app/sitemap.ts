import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogPosts';

export const dynamic = 'force-static';

const BASE_URL = 'https://webersol.com';

const STATIC_ROUTES = [
  '',
  '/marketing',
  '/blog',
  '/about',
  '/careers',
  '/services/ai-automation',
  '/services/custom-engineering',
  '/services/financial-erp',
  '/services/performance-growth',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }));

  return [...staticEntries, ...postEntries];
}
