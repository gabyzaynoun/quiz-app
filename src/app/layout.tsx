// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    site: SITE.twitter,
    creator: SITE.twitter,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 antialiased">
        {/* a11y: skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] rounded bg-indigo-600 px-3 py-2 text-white"
        >
          Skip to content
        </a>

        <div className="min-h-dvh flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border-b border-black/5 dark:border-white/10">
            <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link
                href="/"
                className="font-semibold tracking-tight text-slate-800 dark:text-slate-100"
              >
                {SITE.name}
              </Link>

              <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
                <Link href="/q" className="hover:text-slate-900 dark:hover:text-white">
                  Quizzes
                </Link>
                <Link href="/shop" className="hover:text-slate-900 dark:hover:text-white">
                  Shop
                </Link>
                <Link href="/links" className="hover:text-slate-900 dark:hover:text-white">
                  Links
                </Link>
                <Link href="/disclosure" className="hover:text-slate-900 dark:hover:text-white">
                  About
                </Link>
              </nav>
            </div>
          </header>

          {/* Main */}
          <main id="main" className="flex-1 max-w-3xl mx-auto px-4 py-8">
            {children}
          </main>


{/* Footer */}
<footer className="backdrop-blur-md bg-white/60 dark:bg-slate-900/50 border-t border-black/5 dark:border-white/10">
  <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
    {/* Main Footer Content */}
    <div className="text-center space-y-3">
      <div className="text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {SITE.name} • 
        <a href="mailto:support@findbytype.com.au" className="hover:text-indigo-400 ml-1">
          support@findbytype.com.au
        </a>
      </div>
      
      {/* Legal Links */}
      <div className="flex items-center justify-center gap-3 text-xs">
        <Link href="/privacy" className="hover:text-indigo-400 hover:underline underline-offset-4">
          Privacy
        </Link>
        <span className="text-slate-600 dark:text-slate-500">•</span>
        <Link href="/terms" className="hover:text-indigo-400 hover:underline underline-offset-4">
          Terms
        </Link>
        <span className="text-slate-600 dark:text-slate-500">•</span>
        <Link href="/disclosure" className="hover:text-indigo-400 hover:underline underline-offset-4">
          Disclosure
        </Link>
        <span className="text-slate-600 dark:text-slate-500">•</span>
        <Link href="/dmca" className="hover:text-indigo-400 hover:underline underline-offset-4">
          DMCA
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-3 text-xs">
        <Link href="/q" className="hover:text-indigo-400 hover:underline underline-offset-4">
          Quizzes
        </Link>
        <span className="text-slate-600 dark:text-slate-500">•</span>
        <Link href="/shop" className="hover:text-indigo-400 hover:underline underline-offset-4">
          Shop
        </Link>
        <span className="text-slate-600 dark:text-slate-500">•</span>
        <Link href="/links" className="hover:text-indigo-400 hover:underline underline-offset-4">
          Links
        </Link>
      </div>
      
      {/* Affiliate Disclosure Notice */}
      <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
        As an Amazon Associate we earn from qualifying purchases
      </div>
    </div>
  </div>
</footer>
        </div>

        <Analytics />
      </body>
    </html>
  );
}