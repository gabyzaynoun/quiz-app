// src/config/site.ts
const isProd = process.env.NODE_ENV === "production";

const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

const appUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (isProd && vercelUrl) ||
  "http://localhost:3000";

export const SITE = {
  name: "Find By Type",
  url: appUrl,
  description:
    "Discover your productivity type and get personalized workspace recommendations for Australians",
  twitter: "@findbytype",
  locale: "en-AU",
  currency: "AUD",
};

// SEO defaults
export const SEO = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        // Use Next's opengraph image route you already implemented
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
    cardType: "summary_large_image",
  },
};