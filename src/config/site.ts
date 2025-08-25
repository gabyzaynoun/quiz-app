// src/config/site.ts

const DEFAULT_URL = 'https://findbytype.com.au';

// Prefer the public env var; fall back to your custom domain.
const rawBase = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL).trim();
const baseUrl = rawBase.replace(/\/+$/, ''); // ensure no trailing slash

export const SITE = {
  name: 'Find By Type',
  url: baseUrl,
  description: 'Discover your productivity type (Owl, Fox, Wolf, Dolphin) and get personalized desk setup recommendations for remote workers in Australia.',
  twitter: '@findbytype',
  locale: 'en-AU',
  currency: 'AUD',
} as const;

// SEO keywords (separate export for Metadata)
export const SEO_KEYWORDS = [
  'productivity quiz',
  'desk setup',
  'work from home',
  'ergonomic desk',
  'Australia',
  'remote work',
  'productivity type',
  'owl fox wolf dolphin',
  'workspace setup',
  'home office',
  'desk accessories',
  'productivity tools',
  'work style quiz',
  'personalized recommendations'
];

// SEO defaults (Next.js Metadata-compatible structure)
export const SEO = {
  title: {
    default: 'Find By Type – Productivity Quizzes & Desk Setups',
    template: `%s | Find By Type`,
  },
  description: 'Discover your productivity type (Owl, Fox, Wolf, Dolphin) and get personalized desk setup recommendations for remote workers in Australia.',
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: 'Find By Type – Productivity Quizzes & Desk Setups',
    description: 'Discover your productivity type (Owl, Fox, Wolf, Dolphin) and get personalized desk setup recommendations.',
    images: [
      {
        url: `${SITE.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Find By Type - Discover Your Productivity Animal',
      },
    ],
  },
  twitter: {
    handle: SITE.twitter,
    site: SITE.twitter,
    cardType: 'summary_large_image',
    title: 'Find By Type – Productivity Quizzes & Desk Setups',
    description: 'Discover your productivity type and get personalized desk setup recommendations.',
  },
} as const;