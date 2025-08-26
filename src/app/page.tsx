// src/app/page.tsx - Mobile-optimized with better contrast
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section with forced dark background on mobile */}
      <section className="flex flex-col justify-center py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white rounded-b-3xl md:rounded-none">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold rounded-full border border-white/20 px-3 py-1 bg-white/10 backdrop-blur">
            ✨ New • 4 Personality Tests Available
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
              Discover Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Productivity Style
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto">
            Take quick personality tests to discover your work style, communication patterns, 
            ideal desk setup, and sleep optimization. Get personalized product recommendations 
            from Australian retailers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link 
              href="/q" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 transform shadow-lg"
            >
              Browse All Quizzes →
            </Link>
            <a 
              href="#how" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all border-2 border-white/30"
            >
              How it works
            </a>
          </div>

          <p className="text-xs text-slate-300">
            Free • 2–3 minutes per quiz • Instant results • No signup required
          </p>
        </div>
      </section>

      {/* Quick Quiz Access - High contrast cards */}
      <section className="py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link 
            href="/q/animal" 
            className="group p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all text-center shadow-lg border-2 border-slate-700 hover:border-indigo-500"
          >
            <div className="text-4xl mb-2">🐾</div>
            <h3 className="font-bold text-white group-hover:text-white">Animal Type</h3>
          </Link>
          <Link 
            href="/q/comm" 
            className="group p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all text-center shadow-lg border-2 border-slate-700 hover:border-indigo-500"
          >
            <div className="text-4xl mb-2">💬</div>
            <h3 className="font-bold text-white group-hover:text-white">Communication</h3>
          </Link>
          <Link 
            href="/q/desk" 
            className="group p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all text-center shadow-lg border-2 border-slate-700 hover:border-indigo-500"
          >
            <div className="text-4xl mb-2">🖥️</div>
            <h3 className="font-bold text-white group-hover:text-white">Desk Setup</h3>
          </Link>
          <Link 
            href="/q/sleep" 
            className="group p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all text-center shadow-lg border-2 border-slate-700 hover:border-indigo-500"
          >
            <div className="text-4xl mb-2">😴</div>
            <h3 className="font-bold text-white group-hover:text-white">Sleep</h3>
          </Link>
        </div>
      </section>

      {/* How it works section with better mobile contrast */}
      <section id="how" className="py-16 md:py-24 px-4 bg-slate-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              1
            </div>
            <h3 className="font-bold mb-2 text-white">Pick a Quiz</h3>
            <p className="text-sm text-slate-300">
              Choose from personality, communication, desk setup, or sleep optimization tests
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              2
            </div>
            <h3 className="font-bold mb-2 text-white">Answer Questions</h3>
            <p className="text-sm text-slate-300">
              Quick multiple-choice questions that take 2-3 minutes to complete
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              3
            </div>
            <h3 className="font-bold mb-2 text-white">Get Results & Shop</h3>
            <p className="text-sm text-slate-300">
              See your type, get tips, and browse curated Amazon products for your style
            </p>
          </div>
        </div>
        
        {/* Start Now CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/q" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 transform shadow-lg"
          >
            <span>Start Your First Quiz</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Features Grid with dark cards */}
      <section className="py-16 px-4 bg-slate-800">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Why Take Our Quizzes?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-bold mb-2 text-white">Personalized Results</h3>
            <p className="text-sm text-slate-300">Get recommendations tailored to your unique personality and work style</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700">
            <div className="text-2xl mb-3">🇦🇺</div>
            <h3 className="font-bold mb-2 text-white">Australian Focus</h3>
            <p className="text-sm text-slate-300">All product recommendations available from Australian retailers</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-bold mb-2 text-white">Quick & Easy</h3>
            <p className="text-sm text-slate-300">Each quiz takes just 2-3 minutes with instant results</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="font-bold mb-2 text-white">Privacy First</h3>
            <p className="text-sm text-slate-300">No signup required, answers aren&apos;t stored</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="font-bold mb-2 text-white">Actionable Tips</h3>
            <p className="text-sm text-slate-300">Get practical advice you can implement immediately</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 border-2 border-slate-700">
            <div className="text-2xl mb-3">🛍️</div>
            <h3 className="font-bold mb-2 text-white">Curated Products</h3>
            <p className="text-sm text-slate-300">Hand-picked items that match your personality type</p>
          </div>
        </div>
      </section>
    </>
  );
}