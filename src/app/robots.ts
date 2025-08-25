import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: [`${SITE.url}/sitemap.xml`],
    host: SITE.url,
  };
}
export const dynamic = 'force-dynamic';