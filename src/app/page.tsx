// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col justify-center py-16 md:py-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full border px-3 py-1 bg-white/60 dark:bg-white/10 backdrop-blur">
            ✨ New • 4 Personality Tests Available
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              Discover Your Productivity Style
            </span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Take quick personality tests to discover your work style, communication patterns, 
            ideal desk setup, and sleep optimization. Get personalized product recommendations 
            from Australian retailers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link 
              href="/q" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all hover:scale-105 transform"
            >
              Browse All Quizzes →
            </Link>
            <a 
              href="#how" 
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-600"
            >
              How it works
            </a>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Free • 2–3 minutes per quiz • Instant results • No signup required
          </p>
        </div>
      </section>

      {/* Quick Quiz Access */}
      <section className="py-12">
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link 
            href="/q/animal" 
            className="group p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all text-center"
          >
            <div className="text-3xl mb-2">🐾</div>
            <h3 className="font-semibold text-sm group-hover:text-indigo-400">Animal Type</h3>
          </Link>
          <Link 
            href="/q/comm" 
            className="group p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all text-center"
          >
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold text-sm group-hover:text-indigo-400">Communication</h3>
          </Link>
          <Link 
            href="/q/desk" 
            className="group p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all text-center"
          >
            <div className="text-3xl mb-2">🖥️</div>
            <h3 className="font-semibold text-sm group-hover:text-indigo-400">Desk Setup</h3>
          </Link>
          <Link 
            href="/q/sleep" 
            className="group p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all text-center"
          >
            <div className="text-3xl mb-2">😴</div>
            <h3 className="font-semibold text-sm group-hover:text-indigo-400">Sleep</h3>
          </Link>
        </div>
      </section>

      {/* How it works section */}
      <section id="how" className="py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
        
        {/* Start Now CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/q" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all hover:scale-105 transform"
          >
            <span>Start Your First Quiz</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-center mb-8">Why Take Our Quizzes?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-semibold mb-2">Personalized Results</h3>
            <p className="text-sm text-slate-400">Get recommendations tailored to your unique personality and work style</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="text-2xl mb-3">🇦🇺</div>
            <h3 className="font-semibold mb-2">Australian Focus</h3>
            <p className="text-sm text-slate-400">All product recommendations available from Australian retailers</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Quick & Easy</h3>
            <p className="text-sm text-slate-400">Each quiz takes just 2-3 minutes with instant results</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Privacy First</h3>
            <p className="text-sm text-slate-400">No signup required, answers aren't stored</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="font-semibold mb-2">Actionable Tips</h3>
            <p className="text-sm text-slate-400">Get practical advice you can implement immediately</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <div className="text-2xl mb-3">🛍️</div>
            <h3 className="font-semibold mb-2">Curated Products</h3>
            <p className="text-sm text-slate-400">Hand-picked items that match your personality type</p>
          </div>
        </div>
      </section>
    </>
  );
}