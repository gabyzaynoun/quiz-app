// src/app/layout.tsx - Show Navigation on Mobile
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/context/theme-context";
import { SITE, SEO, SEO_KEYWORDS } from "@/config/site";
import { StructuredData } from "@/components/ui/structured-data";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNavigation } from "@/components/ui/mobile-navigation";

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
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
            {/* Header - Two rows on mobile for navigation */}
            <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
              {/* Top row - Logo and Theme Toggle */}
              <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-14 sm:h-16">
                  {/* Logo */}
                  <Link
                    href="/"
                    className="font-bold text-base sm:text-xl tracking-tight hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 sm:gap-2"
                  >
                    <span className="text-xl sm:text-2xl">🎯</span>
                    <span>{SITE.name}</span>
                  </Link>

                  {/* Theme Toggle */}
                  <div className="sm:hidden">
                    <ThemeToggle />
                  </div>

                  {/* Desktop Navigation with Theme Toggle */}
                  <nav className="hidden sm:flex items-center gap-1 lg:gap-2">
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
                </div>
              </div>

              {/* Mobile Navigation - Second row */}
              <nav className="sm:hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-2 max-w-7xl">
                  <div className="flex items-center justify-around py-1.5">
                    <Link 
                      href="/q" 
                      className="flex-1 px-1 py-1 text-xs font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-all flex flex-col items-center gap-0.5 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded"
                    >
                      <span className="text-base">📝</span>
                      <span>Quizzes</span>
                    </Link>
                    <Link 
                      href="/shop" 
                      className="flex-1 px-1 py-1 text-xs font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-all flex flex-col items-center gap-0.5 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded"
                    >
                      <span className="text-base">🛍️</span>
                      <span>Shop</span>
                    </Link>
                    <Link 
                      href="/links" 
                      className="flex-1 px-1 py-1 text-xs font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-all flex flex-col items-center gap-0.5 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded"
                    >
                      <span className="text-base">🔗</span>
                      <span>Links</span>
                    </Link>
                    <Link 
                      href="/disclosure" 
                      className="flex-1 px-1 py-1 text-xs font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-all flex flex-col items-center gap-0.5 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded"
                    >
                      <span className="text-base">ℹ️</span>
                      <span>About</span>
                    </Link>
                  </div>
                </div>
              </nav>
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

                  {/* Quick Links - Hidden on mobile */}
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

                  {/* Legal - Hidden on mobile */}
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

          {/* Script to prevent swipe navigation */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Prevent swipe navigation on mobile browsers
                (function() {
                  // Detect if touch device
                  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                    // Variables to track touch position
                    let touchStartX = 0;
                    let touchStartY = 0;
                    let touchEndX = 0;
                    let touchEndY = 0;
                    
                    // Prevent edge swipe on touchstart
                    document.addEventListener('touchstart', function(e) {
                      touchStartX = e.changedTouches[0].screenX;
                      touchStartY = e.changedTouches[0].screenY;
                      
                      // If touch starts at edge, prevent default
                      if (touchStartX < 25 || touchStartX > window.innerWidth - 25) {
                        e.preventDefault();
                      }
                    }, { passive: false });
                    
                    // Prevent horizontal swipe during touchmove
                    document.addEventListener('touchmove', function(e) {
                      if (!e.changedTouches || !e.changedTouches[0]) return;
                      
                      touchEndX = e.changedTouches[0].screenX;
                      touchEndY = e.changedTouches[0].screenY;
                      
                      const deltaX = Math.abs(touchEndX - touchStartX);
                      const deltaY = Math.abs(touchEndY - touchStartY);
                      
                      // If horizontal swipe is detected, prevent it
                      if (deltaX > deltaY && deltaX > 30) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                      }
                    }, { passive: false });
                    
                    // Also prevent touchend if it was a horizontal swipe
                    document.addEventListener('touchend', function(e) {
                      const deltaX = Math.abs(touchEndX - touchStartX);
                      const deltaY = Math.abs(touchEndY - touchStartY);
                      
                      if (deltaX > deltaY && deltaX > 50) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                      }
                    }, { passive: false });
                  }
                  
                  // Also prevent mouse gestures on desktop
                  let isMouseDown = false;
                  let mouseStartX = 0;
                  
                  document.addEventListener('mousedown', function(e) {
                    isMouseDown = true;
                    mouseStartX = e.clientX;
                  });
                  
                  document.addEventListener('mousemove', function(e) {
                    if (isMouseDown) {
                      const deltaX = Math.abs(e.clientX - mouseStartX);
                      if (deltaX > 100 && (mouseStartX < 50 || mouseStartX > window.innerWidth - 50)) {
                        e.preventDefault();
                      }
                    }
                  });
                  
                  document.addEventListener('mouseup', function() {
                    isMouseDown = false;
                  });
                })();
              `,
            }}
          />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}