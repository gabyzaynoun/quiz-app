const isProd = process.env.NODE_ENV === "production";
const appUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const SITE = {
  name: "QuizApp AU",
  url: appUrl,
  description: "Personality quizzes with curated product recommendations for Australians",
  twitter: "@quizappau",
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
        url: `${SITE.url}/og-image.png`,
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