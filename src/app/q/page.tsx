// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col justify-center py-16 md:py-24">
        <div className="text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full border px-3 py-1 bg-white/60 dark:bg-white/10 backdrop-blur">
            ✨ New • 4 Personality Tests Available
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              Discover Your Productivity Style
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Take quick personality tests to discover your work style, communication patterns, 
            ideal desk setup, and sleep optimization. Get personalized product recommendations.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link href="/q" className="btn btn-primary">Browse All Quizzes</Link>
            <a href="#how" className="btn btn-outline">How it works</a>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Free • 2–3 minutes per quiz • Instant results
          </p>
        </div>
      </section>

      {/* How it works section */}
      <section id="how" className="py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-2xl">
              1️⃣
            </div>
            <h3 className="font-semibold mb-2">Pick a Quiz</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Choose from personality, communication, desk setup, or sleep optimization tests
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-2xl">
              2️⃣
            </div>
            <h3 className="font-semibold mb-2">Answer Questions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Quick multiple-choice questions that take 2-3 minutes to complete
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-2xl">
              3️⃣
            </div>
            <h3 className="font-semibold mb-2">Get Results & Shop</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              See your type, get tips, and browse curated Amazon products for your style
            </p>
          </div>
        </div>
      </section>
    </>
  );
}