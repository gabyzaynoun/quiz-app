// src/components/internal-links.tsx
import Link from "next/link";

export function InternalLinks() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 mt-8">
      <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-3">
        Popular Pages
      </h3>
      <div className="flex flex-wrap gap-2">
        <Link href="/q/animal" className="text-sm px-3 py-1 bg-white dark:bg-slate-800 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          🐾 Animal Quiz
        </Link>
        <Link href="/shop" className="text-sm px-3 py-1 bg-white dark:bg-slate-800 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          🛍️ Shop
        </Link>
        <Link href="/disclosure" className="text-sm px-3 py-1 bg-white dark:bg-slate-800 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          📝 Disclosure
        </Link>
        <Link href="/links" className="text-sm px-3 py-1 bg-white dark:bg-slate-800 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
          🔗 Resources
        </Link>
      </div>
    </div>
  );
}