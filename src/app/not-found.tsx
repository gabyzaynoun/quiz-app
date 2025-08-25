// ============================================
// FILE: /app/not-found.tsx (404 page)
// ============================================

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist",
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-indigo-500">404</h1>
          <h2 className="text-2xl font-semibold">Oops! Page not found</h2>
          <p className="text-slate-400">
            Looks like this page wandered off to find its productivity type. 
            Let&apos;s get you back on track!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            href="/quiz" 
            className="btn btn-primary px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Browse Quizzes
          </Link>
          <Link 
            href="/" 
            className="btn btn-outline px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}

// ============================================
// FILE: /app/error.tsx (500 error page)
// ============================================

