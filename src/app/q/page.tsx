// src/app/q/page.tsx - Fixed with proper escaping
import Link from "next/link";
import { listQuizzes } from "@/data/quizzes";
import type { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Free Personality & Productivity Quizzes | Find By Type",
  description: "Take free personality tests to discover your work style. Choose from Animal Archetype, Communication Style, Desk Setup, and Sleep Optimization quizzes. Get personalized recommendations.",
  alternates: {
    canonical: "https://findbytype.com.au/q"
  },
  openGraph: {
    title: "Free Personality & Productivity Quizzes",
    description: "Discover your productivity type with our quick, free personality tests",
    url: "https://findbytype.com.au/q",
    type: 'website',
  }
};

export default function QuizHub() {
  const quizzes = listQuizzes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 max-w-7xl py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Quiz
          </h1>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Take personality tests to discover your work style, optimize your setup, 
            and get personalized product recommendations for Australian shoppers.
          </p>
        </div>

        {/* Quiz Grid - Consistent with home page cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Animal Quiz */}
          <Link href="/q/animal" className="group">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">🐾</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Productivity Animal Test
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Discover if you&apos;re an Owl, Fox, Wolf, or Dolphin. Get personalized desk setup recommendations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">12 questions • 3 minutes</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Start →
                </span>
              </div>
            </div>
          </Link>

          {/* Communication Quiz */}
          <Link href="/q/comm" className="group">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">💬</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Communication Style Assessment
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Understand your communication patterns. Find tools to enhance your style.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">10 questions • 2 minutes</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Start →
                </span>
              </div>
            </div>
          </Link>

          {/* Desk Setup Quiz */}
          <Link href="/q/desk" className="group">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">🖥️</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Perfect Desk Setup Finder
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Design your ideal workspace. Get ergonomic and aesthetic recommendations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">10 questions • 2 minutes</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Start →
                </span>
              </div>
            </div>
          </Link>

          {/* Sleep Quiz */}
          <Link href="/q/sleep" className="group">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">😴</span>
              </div>
              <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Sleep Optimization Test
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Identify your sleep challenges. Get personalized solutions for better rest.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">10 questions • 2 minutes</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Start →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Box */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/10 to-indigo-900/10 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800/30">
            <h3 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-300">
              💡 How Our Quizzes Work
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">1.</span>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">Quick Questions</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">2-3 minutes to complete</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">2.</span>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">Instant Results</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Get your personality type</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">3.</span>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">Product Matches</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Amazon AU recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
            Not sure which quiz to take first?
          </p>
          <Link 
            href="/q/animal" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            Start with the Productivity Animal Test
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}