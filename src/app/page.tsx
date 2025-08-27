// src/app/page.tsx - Mobile Optimized Version
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile-first responsive */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.01] -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[600px] sm:h-[800px] lg:h-[1000px] bg-indigo-600/10 blur-3xl rounded-full -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Badge - Mobile responsive */}
            <div className="animate-fadeIn">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium rounded-full border border-slate-700 px-4 py-2 sm:px-6 sm:py-3 bg-slate-800/50 backdrop-blur-sm text-slate-200">
                <span className="hidden sm:inline">✨</span> Free • 2-3 min • Instant results • No signup
              </span>
            </div>

            {/* Main Heading - Mobile-first sizing */}
            <h1 className="font-extrabold leading-[1.1] tracking-tight max-w-5xl animate-slideInFromTop">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3 lg:mb-4 text-white">
                Discover Your
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Productivity Style
              </span>
            </h1>

            {/* Subheading - Better mobile sizing */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100 font-medium max-w-3xl leading-relaxed animate-fadeIn px-4 sm:px-0">
              Take quick personality tests to discover your work style, communication patterns, 
              ideal desk setup, and sleep optimization. Get personalized product recommendations 
              from Australian retailers.
            </p>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-4 sm:pt-6 lg:pt-8 animate-scaleIn px-4 sm:px-0">
              <Link 
                href="/q" 
                className="px-6 sm:px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-base lg:text-lg hover:from-purple-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-2xl text-center"
              >
                Browse All Quizzes →
              </Link>
              <Link 
                href="/q/animal"
                className="px-6 sm:px-8 lg:px-10 py-4 lg:py-5 bg-slate-800 border border-slate-700 text-white rounded-full font-bold text-base lg:text-lg hover:bg-slate-700 transition-all hover:scale-105 text-center"
              >
                🐾 Take Animal Test
              </Link>
            </div>

            {/* Trust Indicators - Mobile responsive */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 pt-6 sm:pt-8 lg:pt-10 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>No Email</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AU Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Types Preview - Mobile-first grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Choose Your Test
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4 sm:px-0">
              Click any card to start your personalized assessment
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Animal Type Card - Mobile optimized */}
            <Link href="/q/animal" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-4xl">🐾</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-900 dark:text-white">
                  Animal Type
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Find your type: Owl, Fox, Wolf, or Dolphin
                </p>
                <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  12 questions →
                </div>
              </div>
            </Link>

            {/* Communication Card - Mobile optimized */}
            <Link href="/q/comm" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-4xl">💬</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-900 dark:text-white">
                  Communication
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  How you connect: Direct, Supportive, Analytical, or Expressive
                </p>
                <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  10 questions →
                </div>
              </div>
            </Link>

            {/* Desk Setup Card - Mobile optimized */}
            <Link href="/q/desk" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-4xl">🖥️</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-900 dark:text-white">
                  Desk Setup
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Perfect workspace: Minimalist, Command, or Creative
                </p>
                <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  10 questions →
                </div>
              </div>
            </Link>

            {/* Sleep Type Card - Mobile optimized */}
            <Link href="/q/sleep" className="group">
              <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-4xl">😴</span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-900 dark:text-white">
                  Sleep Type
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimize rest: Light, Deep, or Variable sleeper
                </p>
                <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  10 questions →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4 sm:px-0">
              Three simple steps to discover your type
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            {/* Step 1 - Mobile friendly */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-xl">
                1
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Pick a Quiz</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed px-4 sm:px-0">
                  Choose from personality, communication, desk setup, or sleep optimization tests
                </p>
              </div>
            </div>

            {/* Step 2 - Mobile friendly */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-xl">
                2
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Answer Questions</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed px-4 sm:px-0">
                  Quick multiple-choice questions that take 2-3 minutes to complete
                </p>
              </div>
            </div>

            {/* Step 3 - Mobile friendly */}
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-xl">
                3
              </div>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Get Results &amp; Shop</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed px-4 sm:px-0">
                  See your type, get tips, and browse curated Amazon products for your style
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <Link 
              href="/q/animal" 
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-bold text-base lg:text-lg transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Start Your First Quiz
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Mobile optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Why Take Our Quizzes?
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4 sm:px-0">
              Discover insights tailored to Australian remote workers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Feature cards - Mobile optimized */}
            <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900 dark:text-white">Personalized Results</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Get recommendations tailored to your unique personality and work style
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🇦🇺</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900 dark:text-white">Australian Focus</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                All product recommendations available from Australian retailers
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900 dark:text-white">Quick &amp; Easy</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Each quiz takes just 2-3 minutes with instant results
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🔒</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900 dark:text-white">Privacy First</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                No signup required, answers aren&apos;t stored anywhere
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">💡</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900 dark:text-white">Actionable Tips</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Get practical advice you can implement immediately
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">🛍️</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-900 dark:text-white">Curated Products</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Hand-picked items that match your personality type
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile optimized */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">
            Ready to Discover Your Type?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0">
            Join thousands of Australians who&apos;ve optimized their workspace and productivity
          </p>
          
          <div>
            <Link 
              href="/q/animal"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white text-purple-700 rounded-full font-extrabold text-base lg:text-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 shadow-2xl w-full sm:w-auto"
            >
              Take the Productivity Animal Test
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <p className="text-sm sm:text-base text-slate-300 mt-4 sm:mt-6 lg:mt-8">
            Most popular quiz • 12 questions • 3 minutes
          </p>
        </div>
      </section>
    </div>
  );
}