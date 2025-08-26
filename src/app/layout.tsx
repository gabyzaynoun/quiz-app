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
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] rounded bg-indigo-600 px-3 py-2 text-white"
          >
            Skip to content
          </a>

          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors">
              <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link
                  href="/"
                  className="font-semibold tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {SITE.name}
                </Link>

                <nav className="flex items-center gap-4 text-sm">
                  <Link href="/q" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Quizzes
                  </Link>
                  <Link href="/shop" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Shop
                  </Link>
                  <Link href="/links" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Links
                  </Link>
                  <Link href="/disclosure" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    About
                  </Link>
                  <ThemeToggle />
                </nav>
              </div>
            </header>

            {/* Main with Page Transitions */}
            <main id="main" className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">
              <PageTransition>
                <div className="page-enter">
                  {children}
                </div>
              </PageTransition>
            </main>

            {/* Footer */}
            <footer className="backdrop-blur-md bg-white/60 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
              <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
                <div className="text-center space-y-3">
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    © {new Date().getFullYear()} {SITE.name} • 
                    <a href="mailto:support@findbytype.com.au" className="hover:text-indigo-500 dark:hover:text-indigo-400 ml-1 transition-colors">
                      support@findbytype.com.au
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 text-xs">
                    <Link href="/privacy" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                      Privacy
                    </Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/terms" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                      Terms
                    </Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/disclosure" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                      Disclosure
                    </Link>
                    <span className="text-slate-400">•</span>
                    <Link href="/dmca" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                      DMCA
                    </Link>
                  </div>
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