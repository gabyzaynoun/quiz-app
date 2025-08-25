// src/config/site.ts

const DEFAULT_URL = 'https://findbytype.com.au';

// Prefer the public env var; fall back to your custom domain.
// (No vercel.app / localhost fallbacks for production metadata/sitemaps.)
const rawBase = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL).trim();
const baseUrl = rawBase.replace(/\/+$/, ''); // ensure no trailing slash

export const SITE = {
  name: 'Find By Type',
  url: baseUrl,
  description:
    'Discover your productivity type and get personalised workspace recommendations for Australians.',
  twitter: '@findbytype',
  locale: 'en-AU',
  currency: 'AUD',
} as const;

// SEO defaults (Next.js Metadata-compatible structure)
export const SEO = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    handle: SITE.twitter,
    site: SITE.twitter,
    cardType: 'summary_large_image',
  },
} as const;
