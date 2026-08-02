import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      // Static date: a build-time `new Date()` would churn the sitemap on
      // every deploy and tell crawlers the content changed when it did not.
      lastModified: '2026-07-26',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
