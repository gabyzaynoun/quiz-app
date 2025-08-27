// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/context/theme-context";
import { PageTransition } from "@/components/ui/page-transition";
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const resolved = theme === 'system' ? systemTheme : theme;
                document.documentElement.classList.add(resolved);
                document.documentElement.setAttribute('data-theme', theme);
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
            {/* Header - Responsive with Mobile Menu */}
            <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                  {/* Logo */}
                  <Link
                    href="/"
                    className="font-bold text-lg sm:text-xl tracking-tight hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-2xl">🎯</span>
                    <span className="hidden sm:inline">{SITE.name}</span>
                    <span className="sm:hidden">Find By Type</span>
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

                  {/* Mobile Controls */}
                  <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main id="main" className="flex-1 w-full">
              <PageTransition>
                <div className="page-enter">
                  {children}
                </div>
              </PageTransition>
            </main>

            {/* Footer - Responsive Grid */}
            <footer className="mt-auto backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 transition-all duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {/* Company Info */}
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-lg mb-3">{SITE.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Discover your productivity type and optimize your workspace with personalized recommendations for Australian remote workers.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
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

                  {/* Legal */}
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-lg mb-3">Legal</h3>
                    <ul className="space-y-2 text-sm">
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
                      <li>
                        <Link href="/dmca" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                          DMCA Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    © {new Date().getFullYear()} {SITE.name} • 
                    <a href="mailto:support@findbytype.com.au" className="hover:text-purple-600 dark:hover:text-purple-400 ml-1 transition-colors">
                      support@findbytype.com.au
                    </a>
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