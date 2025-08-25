// src/components/structured-data.tsx
import { SITE } from '@/config/site';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: 'Find By Type',
        description: SITE.description,
        publisher: {
          '@id': `${SITE.url}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE.url}/quiz?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-AU',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: 'Find By Type',
        url: SITE.url,
        email: 'support@findbytype.com.au',
        sameAs: [
          'https://twitter.com/findbytype',
        ],
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE.url}/#logo`,
          inLanguage: 'en-AU',
          url: `${SITE.url}/logo.png`,
          contentUrl: `${SITE.url}/logo.png`,
          width: 512,
          height: 512,
          caption: 'Find By Type',
        },
        image: {
          '@id': `${SITE.url}/#logo`,
        },
      },
      {
        '@type': 'Quiz',
        '@id': `${SITE.url}/quiz/#quiz`,
        name: 'Productivity Animal Quiz',
        description: 'Discover your productivity type - Are you an Owl, Fox, Wolf, or Dolphin?',
        educationalLevel: 'General',
        learningResourceType: 'Quiz',
        interactivityType: 'active',
        isAccessibleForFree: true,
        url: `${SITE.url}/quiz`,
        provider: {
          '@id': `${SITE.url}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Add this to your layout.tsx in the <head> section:
// import { StructuredData } from '@/components/structured-data';
// Then add <StructuredData /> inside the <head> tag