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
                <Link href="/quiz" className="hover:text-slate-900 dark:hover:text-white">
                  Take the quiz
                </Link>
                <Link href="/shop" className="hover:text-slate-900 dark:hover:text-white">
                  Shop
                </Link>
                <Link href="/disclosure" className="hover:text-slate-900 dark:hover:text-white">
                  Disclosure
                </Link>
              </nav>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 max-w-3xl mx-auto px-4 py-8">{children}</main>

          {/* Footer */}
          <footer className="backdrop-blur-md bg-white/60 dark:bg-slate-900/50 border-t border-black/5 dark:border-white/10">
            <div className="max-w-3xl mx-auto px-4 py-6 text-xs text-slate-500 dark:text-slate-400 text-center space-y-2">
              <div>
                © {new Date().getFullYear()} {SITE.name} • As an Amazon Associate we earn
                from qualifying purchases.
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link href="/disclosure" className="hover:underline underline-offset-4">
                  Affiliate Disclosure
                </Link>
                <Link href="/quiz" className="hover:underline underline-offset-4">
                  Take the quiz
                </Link>
                <Link href="/shop" className="hover:underline underline-offset-4">
                  Shop
                </Link>
              </div>
            </div>
          </footer>
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
