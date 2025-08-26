import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/context/theme-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PageTransition } from "@/components/ui/page-transition";
import { SITE, SEO, SEO_KEYWORDS } from "@/config/site";
import { StructuredData } from "@/components/ui/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SEO.title,
  description: SEO.description,
  keywords: SEO_KEYWORDS,
  // ... rest of metadata
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const resolved = theme === 'system' ? systemTheme : theme;
                document.documentElement.classList.add(resolved);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] rounded bg-purple-600 px-3 py-2 text-white"
          >
            Skip to content
          </a>

          <div className="min-h-screen flex flex-col">
            {/* Header - Full width with centered content */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                  <Link
                    href="/"
                    className="font-bold text-xl tracking-tight hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {SITE.name}
                  </Link>

                  <nav className="flex items-center gap-6 text-sm font-medium">
                    <Link 
                      href="/q" 
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Quizzes
                    </Link>
                    <Link 
                      href="/shop" 
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Shop
                    </Link>
                    <Link 
                      href="/links" 
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Links
                    </Link>
                    <Link 
                      href="/disclosure" 
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      About
                    </Link>
                    <ThemeToggle />
                  </nav>
                </div>
              </div>
            </header>

            {/* Main Content - For quiz pages use max-w-3xl, for landing use full width */}
            <main id="main" className="flex-1 w-full">
              <PageTransition>
                <div className="page-enter">
                  {children}
                </div>
              </PageTransition>
            </main>

            {/* Footer - Full width with centered content */}
            <footer className="backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
              <div className="container mx-auto px-4 max-w-7xl py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {/* Company Info */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">{SITE.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      Discover your productivity type and optimize your workspace with personalized recommendations for Australian remote workers.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/q/animal" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                          Productivity Animal Quiz
                        </Link>
                      </li>
                      <li>
                        <Link href="/q" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                          All Quizzes
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                          Shop Recommendations
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Legal */}
                  <div>
                    <h3 className="font-bold text-lg mb-3">Legal</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/disclosure" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                          Affiliate Disclosure
                        </Link>
                      </li>
                      <li>
                        <Link href="/dmca" className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                          DMCA Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
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