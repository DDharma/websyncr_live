/**
 * Static sitemap. `lastModified` is hardcoded because a build-time `new Date()`
 * would churn on every deploy and tell crawlers the content had changed.
 */

import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: '2026-07-26',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
