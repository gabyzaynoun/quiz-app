// src/app/page.tsx - Properly centered and responsive landing page
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full width with centered content */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white py-20 md:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/30 blur-3xl rounded-full -z-10" />
        
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-bold rounded-full border border-purple-500/30 px-4 py-2 bg-purple-500/10 backdrop-blur-sm">
              ✨ Free • 2-3 minutes per quiz • Instant results • No signup required
            </span>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="block">Discover Your</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Productivity Style
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Take quick personality tests to discover your work style, communication patterns, 
              ideal desk setup, and sleep optimization. Get personalized product recommendations 
              from Australian retailers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/q" 
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 shadow-xl"
              >
                Browse All Quizzes →
              </Link>
              <Link 
                href="/q/animal"
                className="px-8 py-4 bg-purple-600/20 border-2 border-purple-500 rounded-full font-bold text-lg hover:bg-purple-600/30 transition-all hover:scale-105"
              >
                🐾 Take Animal Test
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Forever
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Email Required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                AU Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Types Preview - Centered cards */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Test</h2>
            <p className="text-slate-600 dark:text-slate-400">Click any card to start your personalized assessment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Animal Type Card */}
            <Link href="/q/animal" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 h-full border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-4">🐾</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">Animal Type</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Find your type: Owl, Fox, Wolf, or Dolphin</p>
                <div className="mt-4 text-xs text-slate-500">12 questions</div>
              </div>
            </Link>

            {/* Communication Card */}
            <Link href="/q/comm" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 h-full border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">Communication</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">How you connect: Direct, Supportive, Analytical, or Expressive</p>
                <div className="mt-4 text-xs text-slate-500">10 questions</div>
              </div>
            </Link>

            {/* Desk Setup Card */}
            <Link href="/q/desk" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 h-full border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-4">🖥️</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">Desk Setup</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Perfect workspace: Minimalist, Command, or Creative</p>
                <div className="mt-4 text-xs text-slate-500">8 questions</div>
              </div>
            </Link>

            {/* Sleep Optimization Card */}
            <Link href="/q/sleep" className="group">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 h-full border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-4">😴</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">Sleep Type</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Optimize rest: Light, Deep, or Variable sleeper</p>
                <div className="mt-4 text-xs text-slate-500">10 questions</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Properly centered */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-900/10 to-pink-900/10 dark:from-purple-900/20 dark:to-pink-900/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-slate-600 dark:text-slate-400">Three simple steps to discover your type</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">Pick a Quiz</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Choose from personality, communication, desk setup, or sleep optimization tests
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">Answer Questions</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Quick multiple-choice questions that take 2-3 minutes to complete
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">Get Results & Shop</h3>
              <p className="text-slate-600 dark:text-slate-400">
                See your type, get tips, and browse curated Amazon products for your style
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link 
              href="/q/animal" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Start Your First Quiz
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Better centered */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Take Our Quizzes?</h2>
            <p className="text-slate-600 dark:text-slate-400">Discover insights tailored to Australian remote workers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Personalized Results */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Personalized Results</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Get recommendations tailored to your unique personality and work style
              </p>
            </div>

            {/* Australian Focus */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🇦🇺</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Australian Focus</h3>
              <p className="text-slate-600 dark:text-slate-400">
                All product recommendations available from Australian retailers
              </p>
            </div>

            {/* Quick & Easy */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Quick & Easy</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Each quiz takes just 2-3 minutes with instant results
              </p>
            </div>

            {/* Privacy First */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Privacy First</h3>
              <p className="text-slate-600 dark:text-slate-400">
                No signup required, answers aren't stored anywhere
              </p>
            </div>

            {/* Actionable Tips */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Actionable Tips</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Get practical advice you can implement immediately
              </p>
            </div>

            {/* Curated Products */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="font-bold text-lg mb-3">Curated Products</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Hand-picked items that match your personality type
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your Type?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Australians who've optimized their workspace and productivity
          </p>
          <Link 
            href="/q/animal"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 shadow-xl"
          >
            Take the Productivity Animal Test
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-white/80">
            Most popular quiz • 12 questions • 3 minutes
          </p>
        </div>
      </section>
    </div>
  );
}