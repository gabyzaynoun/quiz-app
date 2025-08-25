// src/app/q/[slug]/result/page.tsx
"use client";

import { useMemo, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getQuiz } from "@/data/quizzes";
import { withAffiliateTag } from "@/data/affiliates";
import { trackAffiliateClick } from "@/lib/track";

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
      <main className="p-6">
        <div className="card">
          <div className="card-body">
            <h1 className="text-xl font-semibold">Quiz not found</h1>
            <Link href="/q" className="btn btn-outline mt-3">
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

  const handleProductClick = (product: any) => {
    trackAffiliateClick({
      vendor: "amazon",
      id: product.id,
      title: product.title,
      category: `quiz-${quiz.slug}`,
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
    <main className="p-4 space-y-6">
      {/* Desk Setup Pack Banner - Only show for animal quiz */}
      {quiz.slug === "animal" && (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 text-white">
          <p className="text-sm font-medium mb-1">
            New: Desk Setup Pack — exact heights & a 5-minute fit test for your type.
          </p>
          <a
            href="https://gabyzx45.gumroad.com/l/uedfhc?utm_campaign=quizapp_au&utm_source=results_page&utm_medium=cta&utm_content=deskpack_primary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white underline hover:no-underline text-sm"
          >
            Get your personalized workspace blueprint →
          </a>
        </div>
      )}

      {/* Main Result Card */}
      <div className="card">
        <div className="card-body space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Your Result</h1>
            <div className="text-3xl font-bold text-indigo-500 mb-2">
              {result.label}
            </div>
            <p className="text-slate-300">{result.description}</p>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-2 pt-4 border-t border-slate-700">
            <h3 className="font-semibold mb-2">Score Breakdown</h3>
            {quiz.weightKeys.map((key) => {
              const res = quiz.results.find((r) => r.weightKey === key);
              const pct = percentages[key] || 0;
              return (
                <div key={key} className="flex items-center gap-3">
                  <span className="w-24 text-sm">{res?.label || key}</span>
                  <div className="flex-1 bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-indigo-500 h-2 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-sm w-10 text-right">{pct}%</span>
                </div>
              );
            })}
          </div>

          {/* Tips */}
          {result.tips && result.tips.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-slate-700">
              <h3 className="font-semibold">Tips for You</h3>
              <ul className="space-y-1">
                {result.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-indigo-400">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Product Recommendations */}
          {result.products && result.products.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-slate-700">
              <h3 className="font-semibold">Recommended Gear</h3>
              <div className="grid gap-3">
                {result.products.map((product) => (
                  <a
                    key={product.id}
                    href={withAffiliateTag(product.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleProductClick(product)}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                  >
                    <div>
                      <div className="font-medium">{product.title}</div>
                      {product.subtitle && (
                        <div className="text-sm text-slate-400">
                          {product.subtitle}
                        </div>
                      )}
                    </div>
                    <span className="text-indigo-400">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button onClick={handleShare} className="btn btn-primary flex-1">
              Share Result
            </button>
            <Link href={`/q/${quiz.slug}`} className="btn btn-outline flex-1">
              Retake Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* More Quizzes */}
      <div className="card">
        <div className="card-body">
          <h3 className="font-semibold mb-3">Try Another Quiz</h3>
          <div className="space-y-2">
            <Link
              href="/q"
              className="block p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
            >
              <span className="text-indigo-400">→</span> Browse All Quizzes
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
        <main className="p-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">Loading results...</div>
            </div>
          </div>
        </main>
      }
    >
      <ResultContent />
    </Suspense>
  );
}