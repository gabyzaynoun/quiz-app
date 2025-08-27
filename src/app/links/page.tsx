// src/app/links/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Links",
  description: "Quick links to our resources and recommendations",
};

export default function LinksPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Links and Resources
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            All our tools and recommendations in one place
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-10 text-white mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Desk Setup Pack by Type
          </h2>
          <p className="text-white mb-6 opacity-90">
            Get your personalized workspace blueprint with exact measurements for your productivity type.
          </p>
          <ul className="text-white space-y-3 ml-4 mb-8 opacity-80">
            <li>Monitor height and distance calculations</li>
            <li>Keyboard and mouse positioning guide</li>
            <li>5-minute ergonomic fit test</li>
            <li>Type-specific workspace tips</li>
          </ul>
          <a
            href="https://gabyzx45.gumroad.com/l/uedfhc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl"
          >
            Desk Setup Pack — A$14.90
          </a>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Take a Quiz
          </h2>
          <div className="grid gap-6">
            <Link href="/q/animal">
              <div className="block bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Productivity Animal Test
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Discover if you are an Owl, Fox, Wolf, or Dolphin
                </p>
              </div>
            </Link>
            <Link href="/q/comm">
              <div className="block bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Communication Style Quiz
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Find your communication strengths and blind spots
                </p>
              </div>
            </Link>
            <Link href="/q">
              <div className="block bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Browse All Quizzes
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  See all available personality and productivity tests
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Curated Gear
          </h2>
          <div className="grid gap-6">
            <Link href="/shop">
              <div className="block bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Browse Shop
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Hand-picked productivity tools and workspace essentials
                </p>
              </div>
            </Link>
            <a href="https://www.amazon.com.au/s?k=standing+desk" target="_blank" rel="noopener noreferrer">
              <div className="block bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Standing Desks
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Top-rated adjustable desks on Amazon AU
                </p>
              </div>
            </a>
            <a href="https://www.amazon.com.au/s?k=ergonomic+chair" target="_blank" rel="noopener noreferrer">
              <div className="block bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Ergonomic Chairs
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Comfortable seating for long work sessions
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Resources
          </h2>
          <div className="grid gap-6">
            <Link href="/disclosure">
              <div className="block bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all cursor-pointer">
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  Affiliate Disclosure
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  How we use affiliate links and make recommendations
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-12">
          <p>Find your type, optimize your space</p>
        </div>
      </div>
    </main>
  );
}