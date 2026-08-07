import type { NextConfig } from 'next';

/**
 * Fully static export - no server runtime, no API routes, no database.
 * `next build` emits a self-contained `out/` directory deployable to any
 * static host (Vercel, Netlify, Cloudflare Pages, S3 + CDN).
 */
const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Static hosts serve /path/ as /path/index.html - trailing slashes keep
  // in-page anchor links and relative asset paths stable across hosts.
  trailingSlash: true,
  images: {
    // No Image Optimization server exists in a static export.
    unoptimized: true,
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
