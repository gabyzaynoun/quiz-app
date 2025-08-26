// src/app/q/page.tsx
import Link from "next/link";
import { listQuizzes } from "@/data/quizzes";

export const metadata = { 
  title: "All Quizzes - Choose Your Test",
  description: "Pick from personality, communication, desk setup, or sleep optimization quizzes."
};

export default function QuizHub() {
  const quizzes = listQuizzes();

  // Debug: Log what quizzes we're getting
  console.log("Available quizzes:", quizzes);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8 space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Choose Your Quiz
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Take personality tests to discover your work style, optimize your setup, 
          and get personalized product recommendations for Australian shoppers.
        </p>
      </div>

      {/* Quiz Grid */}
      {quizzes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Animal Quiz */}
          <Link 
            href="/q/animal"
            className="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 text-4xl">🐾</div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
              Productivity Animal Test
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Discover if you're an Owl, Fox, Wolf, or Dolphin. Get personalized desk setup recommendations.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">12 questions • 3 minutes</span>
              <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">
                Start →
              </span>
            </div>
          </Link>

          {/* Communication Quiz */}
          <Link 
            href="/q/comm"
            className="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 text-4xl">💬</div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
              Communication Style Assessment
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Understand your communication patterns. Find tools to enhance your style.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">10 questions • 2 minutes</span>
              <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">
                Start →
              </span>
            </div>
          </Link>

          {/* Desk Setup Quiz */}
          <Link 
            href="/q/desk"
            className="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 text-4xl">🖥️</div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
              Perfect Desk Setup Finder
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Design your ideal workspace. Get ergonomic and aesthetic recommendations.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">8 questions • 2 minutes</span>
              <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">
                Start →
              </span>
            </div>
          </Link>

          {/* Sleep Quiz */}
          <Link 
            href="/q/sleep"
            className="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="absolute top-4 right-4 text-4xl">😴</div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
              Sleep Optimization Test
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Identify your sleep challenges. Get personalized solutions for better rest.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">10 questions • 2 minutes</span>
              <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">
                Start →
              </span>
            </div>
          </Link>
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-800 rounded-xl">
          <p className="text-slate-400">No quizzes available at the moment.</p>
          <p className="text-sm text-slate-500 mt-2">Please check back later.</p>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-indigo-500/20">
        <h3 className="text-lg font-semibold mb-3 text-indigo-300">
          💡 How Our Quizzes Work
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-indigo-400">1.</span>
            <div>
              <p className="font-medium text-slate-300">Quick Questions</p>
              <p className="text-slate-400">2-3 minutes to complete</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-400">2.</span>
            <div>
              <p className="font-medium text-slate-300">Instant Results</p>
              <p className="text-slate-400">Get your personality type</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-400">3.</span>
            <div>
              <p className="font-medium text-slate-300">Product Matches</p>
              <p className="text-slate-400">Amazon AU recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-slate-400 mb-4">
          Not sure which quiz to take first?
        </p>
        <Link 
          href="/q/animal" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
        >
          <span>Start with the Productivity Animal Test</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}