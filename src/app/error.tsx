'use client';

import Link from "next/link";
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-red-500">500</h1>
          <h2 className="text-2xl font-semibold">Something went wrong!</h2>
          <p className="text-slate-400">
           Don&apos;t worry, even the most productive systems need a break sometimes. 
            Let&apos;s try again!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={reset}
            className="btn btn-primary px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className="btn btn-outline px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
          >
            Go Home
          </Link>
        </div>

        <div className="pt-6 text-sm text-slate-500">
          <p>If the problem persists, please contact us:</p>
          <a 
            href="mailto:support@findbytype.com.au" 
            className="text-indigo-400 hover:underline mt-2 inline-block"
          >
            support@findbytype.com.au
          </a>
        </div>
      </div>
    </main>
  );
}