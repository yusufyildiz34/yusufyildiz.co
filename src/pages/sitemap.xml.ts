import type { APIRoute } from 'astro';
import { profile } from '../data/profile';

// One-page site. <lastmod> is the content date from profile.ts, not the build date,
// because Google only uses lastmod when it reflects real changes. Google ignores
// <changefreq> and <priority>, so they are omitted.
export const GET: APIRoute = ({ site }) => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${new URL('/', site)}</loc>
    <lastmod>${profile.lastUpdated}</lastmod>
  </url>
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
