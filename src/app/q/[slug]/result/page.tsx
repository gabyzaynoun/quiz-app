// src/app/q/[slug]/result/page.tsx
"use client";

import { useMemo, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getQuiz } from "@/data/quizzes";
import { withAffiliateTag } from "@/data/affiliates";
import { trackAffiliateClick } from "@/lib/track";

// Define the product type
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

  // Keep hooks unconditional
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

  // Safe early return AFTER hooks are declared
  if (!quiz || !result) {
    return (
     <main className="min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl py-16">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quiz not found</h1>
            <Link href="/q" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
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

  // Fixed: Added proper type instead of any
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

  return (
   <main className="min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl py-16">
        {/* Desk Setup Pack Banner - Only show for animal quiz */}
        {quiz.slug === "animal" && (
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-lg font-bold mb-3">
              New: Desk Setup Pack for Your Type
            </h3>
            <p className="text-white opacity-90 mb-4">
              Get exact monitor heights, keyboard distance, and a 5-minute ergonomic fit test personalized for your productivity type.
            </p>
            <a
              href="https://gabyzx45.gumroad.com/l/uedfhc?utm_campaign=quizapp_au&utm_source=results_page&utm_medium=cta&utm_content=deskpack_primary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-all shadow-lg"
            >
              Get Your Personalized Workspace Blueprint →
            </a>
          </div>
        )}

        {/* Main Result Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-10 mb-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Your Result</h1>
            <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {result.label}
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          {/* Score Breakdown */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Score Breakdown</h3>
            <div className="space-y-4">
              {quiz.weightKeys.map((key) => {
                const res = quiz.results.find((r) => r.weightKey === key);
                const pct = percentages[key] || 0;
                const isWinner = res?.weightKey === result.weightKey;
                return (
                  <div key={key} className="flex items-center gap-4">
                    <span className={`w-28 text-sm font-medium ${isWinner ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      {res?.label || key}
                    </span>
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          isWinner 
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                            : 'bg-slate-400 dark:bg-slate-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className={`text-sm w-12 text-right font-medium ${isWinner ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          {result.tips && result.tips.length > 0 && (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Tips for You</h3>
              <ul className="space-y-3">
                {result.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                    <span className="text-slate-600 dark:text-slate-400">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Product Recommendations */}
          {result.products && result.products.length > 0 && (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recommended Gear</h3>
              <div className="grid gap-4">
                {result.products.map((product) => (
                  <a
                    key={product.id}
                    href={withAffiliateTag(product.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleProductClick(product)}
                    className="flex items-center justify-between p-6 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {product.title}
                      </div>
                      {product.subtitle && (
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {product.subtitle}
                        </div>
                      )}
                    </div>
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={handleShare} 
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Share Result
            </button>
            <Link 
              href={`/q/${quiz.slug}`} 
              className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center"
            >
              Retake Quiz
            </Link>
          </div>
        </div>

        {/* More Quizzes */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Try Another Quiz</h3>
          <div className="space-y-4">
            <Link href="/q/animal">
              <div className="block p-6 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Productivity Animal Test
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Discover if you are an Owl, Fox, Wolf, or Dolphin
                </p>
              </div>
            </Link>
            <Link href="/q/comm">
              <div className="block p-6 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Communication Style Quiz
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Find your communication strengths and blind spots
                </p>
              </div>
            </Link>
            <Link href="/q">
              <div className="block p-6 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors border border-indigo-200 dark:border-indigo-800 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-300">
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
          <div className="container mx-auto px-6 max-w-4xl py-16">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8">
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