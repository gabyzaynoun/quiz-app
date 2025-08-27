import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { listQuizzes } from '@/data/quizzes';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();
  const base = SITE.url;
  
  // Get all quiz slugs
  const quizzes = listQuizzes();
  
  // Core pages with higher priority
  const corePages = [
    { 
      url: `${base}/`, 
      lastModified: lastMod, 
      changeFrequency: 'daily' as const, 
      priority: 1.0 
    },
    { 
      url: `${base}/q`, 
      lastModified: lastMod, 
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },
    { 
      url: `${base}/shop`, 
      lastModified: lastMod, 
      changeFrequency: 'weekly' as const, 
      priority: 0.8 
    },
    { 
      url: `${base}/links`, 
      lastModified: lastMod, 
      changeFrequency: 'weekly' as const, 
      priority: 0.7 
    },
  ];
  
  // Individual quiz pages
  const quizPages = quizzes.map(quiz => ({
    url: `${base}/q/${quiz.slug}`,
    lastModified: lastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));
  
  // Legal pages
  const legalPages = [
    { 
      url: `${base}/disclosure`, 
      lastModified: lastMod, 
      changeFrequency: 'monthly' as const, 
      priority: 0.5 
    },
    { 
      url: `${base}/privacy`, 
      lastModified: lastMod, 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${base}/terms`, 
      lastModified: lastMod, 
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${base}/dmca`, 
      lastModified: lastMod, 
      changeFrequency: 'yearly' as const, 
      priority: 0.2 
    },
  ];
  
  return [...corePages, ...quizPages, ...legalPages];
}

// Remove the force-dynamic export to allow static generation
// export const dynamic = 'force-dynamic';