// src/components/structured-data-enhanced.tsx
import { SITE } from '@/config/site';

export function EnhancedStructuredData() {
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
            urlTemplate: `${SITE.url}/q?search={search_term_string}`,
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
        logo: {
          '@type': 'ImageObject',
          url: `${SITE.url}/logo.png`,
          width: 512,
          height: 512,
        },
        sameAs: [
          'https://twitter.com/findbytype',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sydney',
          addressRegion: 'NSW',
          addressCountry: 'AU'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do the productivity quizzes work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our quizzes take 2-3 minutes to complete. Answer simple multiple-choice questions to discover your productivity type and get personalized recommendations for desk setup, communication style, and more.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are the quizzes free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, all our quizzes are completely free. No signup or email required. Take as many quizzes as you like.'
            }
          },
          {
            '@type': 'Question',
            name: 'What productivity animals are there?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The four productivity animals are: Owl (deep thinkers), Fox (creative innovators), Wolf (strategic leaders), and Dolphin (social connectors). Each has unique strengths and ideal work environments.'
            }
          }
        ]
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}