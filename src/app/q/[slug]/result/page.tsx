// src/app/q/[slug]/result/page.tsx
"use client";

import { useMemo, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getQuiz } from "@/data/quizzes";
import { withAffiliateTag } from "@/data/affiliates";
import { trackAffiliateClick } from "@/lib/track";

interface Product {
  id: string;
  title: string;
  href: string;
  subtitle?: string;
  category?: string;
}

function ResultContent() {
  const params = useParams<{ slug: string }>();
  const searchParams = useSearchParams();

  const quiz = getQuiz(params.slug);
  const answersParam = searchParams.get("a") || "";

  const answers = useMemo(
    () => answersParam.split(",").filter(Boolean),
    [answersParam]
  );

  const result = useMemo(() => {
    if (!quiz) return null;

    const totals: Record<string, number> = Object.fromEntries(
      quiz.weightKeys.map((k) => [k, 0])
    );

    quiz.questions.forEach((q, i) => {
      const answerId = answers[i];
      const answer = q.answers.find((a) => a.id === answerId);
      if (answer?.weights) {
        Object.entries(answer.weights).forEach(([key, value]) => {
          totals[key] = (totals[key] ?? 0) + (value ?? 0);
        });
      }
    });

    const topKey =
      Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0] ??
      quiz.weightKeys[0];

    return quiz.results.find((r) => r.weightKey === topKey) ?? quiz.results[0];
  }, [quiz, answers]);

  const percentages = useMemo((): Record<string, number> => {
    if (!quiz) return {};
    const totals: Record<string, number> = Object.fromEntries(
      quiz.weightKeys.map((k) => [k, 0])
    );

    quiz.questions.forEach((q, i) => {
      const answerId = answers[i];
      const answer = q.answers.find((a) => a.id === answerId);
      if (answer?.weights) {
        Object.entries(answer.weights).forEach(([key, value]) => {
          totals[key] = (totals[key] ?? 0) + (value ?? 0);
        });
      }
    });

    const sum = Math.max(1, Object.values(totals).reduce((a, b) => a + b, 0));
    return Object.fromEntries(
      quiz.weightKeys.map((k) => [k, Math.round((totals[k] / sum) * 100)])
    ) as Record<string, number>;
  }, [quiz, answers]);

  if (!quiz || !result) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl py-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Quiz not found
            </h1>
            <Link
              href="/q"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Back to quizzes
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const shareText = `I got "${result.label}" on the ${quiz.title}! Take the quiz:`;
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/q/${quiz.slug}`
      : "";

  const handleProductClick = (product: Product) => {
    trackAffiliateClick({
      vendor: "amazon",
      id: product.id,
      title: product.title,
      category: product.category || `quiz-${quiz.slug}`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: quiz.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      alert("Link copied!");
    }
  };

  // Get emoji for each result type
  const getResultEmoji = (weightKey: string) => {
    switch(weightKey) {
      case 'owl': return '🦉';
      case 'fox': return '🦊';
      case 'wolf': return '🐺';
      case 'dolphin': return '🐬';
      case 'direct': return '🎯';
      case 'supportive': return '🤝';
      case 'expressive': return '🎨';
      case 'analytical': return '📊';
      case 'minimal': return '⚪';
      case 'ergonomic': return '🪑';
      case 'creative': return '🎨';
      case 'tech': return '💻';
      case 'light': return '🌙';
      case 'schedule': return '⏰';
      case 'comfort': return '🛏️';
      case 'mind': return '🧠';
      default: return '⭐';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl py-8 sm:py-12">
        {/* Desk Setup Pack Banner - Only show for animal quiz */}
        {quiz.slug === "animal" && (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
              New: Desk Setup Pack for Your Type
            </h3>
            <p className="text-sm sm:text-base text-white/90 mb-4">
              Get exact monitor heights, keyboard distance, and a 5-minute ergonomic fit test personalized for your productivity type.
            </p>
            <a
              href="https://gabyzx45.gumroad.com/l/uedfhc?utm_campaign=quizapp_au&utm_source=results_page&utm_medium=cta&utm_content=deskpack_primary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg"
            >
              Get Your Personalized Workspace Blueprint
              <span className="text-lg">→</span>
            </a>
          </div>
        )}

        {/* Main Result Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 mb-6 sm:mb-8 shadow-sm">
          {/* Result Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Your Result
            </h1>
            
            {/* Result Label with Emoji */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl sm:text-5xl">
                {getResultEmoji(result.weightKey)}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {result.label}
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          {/* Score Breakdown - Clean Mobile Layout */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
              Score Breakdown
            </h3>
            <div className="space-y-4">
              {quiz.weightKeys
                .sort((a, b) => (percentages[b] || 0) - (percentages[a] || 0))
                .map((key) => {
                  const res = quiz.results.find((r) => r.weightKey === key);
                  const pct = percentages[key] || 0;
                  const isWinner = res?.weightKey === result.weightKey;
                  
                  return (
                    <div key={key} className="relative">
                      {/* Container for the entire row */}
                      <div className="flex items-center gap-3">
                        {/* Emoji */}
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                          <span className="text-2xl">
                            {getResultEmoji(key)}
                          </span>
                        </div>
                        
                        {/* Progress Container */}
                        <div className="flex-1">
                          {/* Label and Percentage */}
                          <div className="flex items-center justify-between mb-1">
                            <span 
                              className={`text-sm font-medium ${
                                isWinner 
                                  ? 'text-indigo-600 dark:text-indigo-400' 
                                  : 'text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {res?.label?.split(' - ')[1] || res?.label || key}
                            </span>
                            <span 
                              className={`text-sm font-bold ${
                                isWinner 
                                  ? 'text-indigo-600 dark:text-indigo-400' 
                                  : 'text-slate-500 dark:text-slate-500'
                              }`}
                            >
                              {pct}%
                            </span>
                          </div>
                          
                          {/* Progress Bar Background */}
                          <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-visible">
                            {/* Progress Bar Fill */}
                            {pct > 0 && (
                              <div
                                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-out ${
                                  isWinner 
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-sm' 
                                    : 'bg-slate-400 dark:bg-slate-600'
                                }`}
                                style={{ 
                                  width: `${Math.max(pct, 2)}%` // Minimum 2% width for visibility
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Tips Section */}
          {result.tips && result.tips.length > 0 && (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                Tips for You
              </h3>
              <ul className="space-y-3">
                {result.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Product Recommendations */}
          {result.products && result.products.length > 0 && (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                Recommended Gear
              </h3>
              <div className="grid gap-3 sm:gap-4">
                {result.products.map((product) => (
                  <a
                    key={product.id}
                    href={withAffiliateTag(product.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleProductClick(product)}
                    className="flex items-center justify-between p-4 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 group"
                  >
                    <div className="min-w-0 flex-1 pr-4">
                      <div className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                        {product.title}
                      </div>
                      {product.subtitle && (
                        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {product.subtitle}
                        </div>
                      )}
                    </div>
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button 
              onClick={handleShare} 
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:shadow-lg transition-all"
            >
              Share Result
            </button>
            <Link 
              href={`/q/${quiz.slug}`} 
              className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center"
            >
              Retake Quiz
            </Link>
          </div>
        </div>

        {/* More Quizzes Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Try Another Quiz
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {/* Filter out current quiz */}
            {quiz.slug !== 'animal' && (
              <Link href="/q/animal">
                <div className="block p-4 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                    Productivity Animal Test
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Discover if you are an Owl, Fox, Wolf, or Dolphin
                  </p>
                </div>
              </Link>
            )}
            
            {quiz.slug !== 'comm' && (
              <Link href="/q/comm">
                <div className="block p-4 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                    Communication Style Quiz
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Find your communication strengths and blind spots
                  </p>
                </div>
              </Link>
            )}
            
            {quiz.slug !== 'desk' && (
              <Link href="/q/desk">
                <div className="block p-4 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                    Perfect Desk Setup Finder
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Design your ideal workspace setup
                  </p>
                </div>
              </Link>
            )}
            
            {quiz.slug !== 'sleep' && (
              <Link href="/q/sleep">
                <div className="block p-4 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                    Sleep Optimization Test
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Get personalized solutions for better rest
                  </p>
                </div>
              </Link>
            )}

            {/* Browse All Quizzes */}
            <Link href="/q">
              <div className="block p-4 sm:p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors border border-indigo-200 dark:border-indigo-800 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm sm:text-base text-indigo-900 dark:text-indigo-300">
                    Browse All Quizzes
                  </h4>
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen">
          <div className="container mx-auto px-4 max-w-4xl py-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
              <div className="text-center text-slate-600 dark:text-slate-400">
                Loading results...
              </div>
            </div>
          </div>
        </main>
      }
    >
      <ResultContent />
    </Suspense>
  );
}