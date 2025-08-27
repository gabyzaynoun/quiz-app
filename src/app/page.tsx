// src/app/page.tsx - Final refined version
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Consistent dark theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 md:py-32 lg:py-40">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.01] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-3xl rounded-full -z-10" />
        
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-10">
            {/* Badge - Neutral styling */}
            <div className="animate-fadeIn">
              <span className="inline-flex items-center gap-2 text-sm font-medium rounded-full border border-slate-700 px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-slate-200">
                ✨ Free • 2-3 minutes per quiz • Instant results • No signup required
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight max-w-5xl animate-slideInFromTop">
              <span className="block mb-4 text-white">Discover Your</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Productivity Style
              </span>
            </h1>

            {/* Subheading - Better contrast */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-100 font-medium max-w-3xl leading-relaxed animate-fadeIn">
              Take quick personality tests to discover your work style, communication patterns, 
              ideal desk setup, and sleep optimization. Get personalized product recommendations 
              from Australian retailers.
            </p>

            {/* CTA Buttons - Primary purple, secondary neutral */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-scaleIn">
              <Link 
                href="/q" 
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-2xl"
              >
                Browse All Quizzes →
              </Link>
              <Link 
                href="/q/animal"
                className="px-10 py-5 bg-slate-800 border border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all hover:scale-105"
              >
                🐾 Take Animal Test
              </Link>
            </div>

            {/* Trust Indicators - Better icons */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-10 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>No Email Required</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AU Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Types Preview - Consistent card styling */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Choose Your Test
            </h2>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Click any card to start your personalized assessment
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Consistent card styling with better hover */}
            <Link href="/q/animal" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🐾</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">
                  Animal Type
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Find your type: Owl, Fox, Wolf, or Dolphin
                </p>
                <div className="mt-6 text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  12 questions →
                </div>
              </div>
            </Link>

            <Link href="/q/comm" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">
                  Communication
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  How you connect: Direct, Supportive, Analytical, or Expressive
                </p>
                <div className="mt-6 text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  10 questions →
                </div>
              </div>
            </Link>

            <Link href="/q/desk" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🖥️</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">
                  Desk Setup
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Perfect workspace: Minimalist, Command, or Creative
                </p>
                <div className="mt-6 text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  10 questions →
                </div>
              </div>
            </Link>

            <Link href="/q/sleep" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-4xl">😴</span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white">
                  Sleep Type
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimize rest: Light, Deep, or Variable sleeper
                </p>
                <div className="mt-6 text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  10 questions →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Cleaner styling */}
      <section className="py-20 md:py-24 lg:py-28 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Three simple steps to discover your type
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Step circles with indigo gradient */}
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                1
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-2xl text-slate-900 dark:text-white">Pick a Quiz</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Choose from personality, communication, desk setup, or sleep optimization tests
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                2
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-2xl text-slate-900 dark:text-white">Answer Questions</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Quick multiple-choice questions that take 2-3 minutes to complete
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                3
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-2xl text-slate-900 dark:text-white">Get Results & Shop</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  See your type, get tips, and browse curated Amazon products for your style
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/q/animal" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Start Your First Quiz
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Lighter icons */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Why Take Our Quizzes?
            </h2>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover insights tailored to Australian remote workers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Cards with lighter icon backgrounds */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Personalized Results</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Get recommendations tailored to your unique personality and work style
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🇦🇺</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Australian Focus</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                All product recommendations available from Australian retailers
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Quick & Easy</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Each quiz takes just 2-3 minutes with instant results
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Privacy First</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                No signup required, answers aren't stored anywhere
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Actionable Tips</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Get practical advice you can implement immediately
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Curated Products</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Hand-picked items that match your personality type
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Fixed spacing and better button */}
      <section className="py-24 md:py-28 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Discover Your Type?
          </h2>
          
          {/* Better spacing for subheading */}
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12">
            Join thousands of Australians who've optimized their workspace and productivity
          </p>
          
          {/* Enhanced CTA button with glow effect */}
          <div>
            <Link 
              href="/q/animal"
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-purple-700 rounded-full font-extrabold text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Take the Productivity Animal Test
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <p className="text-base text-slate-300 mt-8">
            Most popular quiz • 12 questions • 3 minutes
          </p>
        </div>
      </section>
    </div>
  );
}