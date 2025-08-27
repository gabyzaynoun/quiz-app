// src/app/layout.tsx - Fixed Mobile Header and Theme Toggle
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/context/theme-context";
import { SITE, SEO, SEO_KEYWORDS } from "@/config/site";
import { StructuredData } from "@/components/ui/structured-data";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SEO.title,
  description: SEO.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE.url,
    title: SEO.title,
    description: SEO.description,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#4F46E5" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const resolved = theme === 'system' ? systemTheme : theme;
                  
                  if (resolved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 antialiased transition-colors">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] rounded-lg bg-purple-600 px-4 py-2 text-white font-medium"
          >
            Skip to content
          </a>

          <div className="min-h-screen flex flex-col">
            {/* Header - Fixed mobile header with proper z-index */}
            <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-14 sm:h-16">
                  {/* Logo - Responsive sizing */}
                  <Link
                    href="/"
                    className="font-bold text-base sm:text-xl tracking-tight hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 sm:gap-2"
                  >
                    <span className="text-xl sm:text-2xl">🎯</span>
                    <span className="hidden min-[400px]:inline sm:inline">{SITE.name}</span>
                    <span className="min-[400px]:hidden">FBT</span>
                  </Link>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                    <Link 
                      href="/q" 
                      className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                    >
                      Quizzes
                    </Link>
                    <Link 
                      href="/shop" 
                      className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                    >
                      Shop
                    </Link>
                    <Link 
                      href="/links" 
                      className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                    >
                      Links
                    </Link>
                    <Link 
                      href="/disclosure" 
                      className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                    >
                      About
                    </Link>
                    <div className="ml-2">
                      <ThemeToggle />
                    </div>
                  </nav>

                  {/* Mobile Controls - Visible on mobile */}
                  <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main id="main" className="flex-1 w-full">
              {children}
            </main>

            {/* Footer - Simplified for mobile */}
            <footer className="mt-auto backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 transition-all duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6 sm:py-8 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Company Info */}
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-base sm:text-lg mb-3">{SITE.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Discover your productivity type and optimize your workspace.
                    </p>
                  </div>

                  {/* Quick Links - Hidden on mobile, visible on tablet+ */}
                  <div className="hidden sm:block text-center sm:text-left">
                    <h3 className="font-bold text-base sm:text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li>
                        <Link href="/q/animal" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          Productivity Animal Quiz
                        </Link>
                      </li>
                      <li>
                        <Link href="/q" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          All Quizzes
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          Shop Recommendations
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Legal - Hidden on mobile, visible on tablet+ */}
                  <div className="hidden sm:block text-center sm:text-left">
                    <h3 className="font-bold text-base sm:text-lg mb-3">Legal</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li>
                        <Link href="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/disclosure" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          Affiliate Disclosure
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Copyright - Always visible */}
                <div className="pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} {SITE.name}
                  </p>
                </div>
              </div>
            </footer>
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}