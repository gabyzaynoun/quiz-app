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
  const answers = answersParam.split(",").filter(Boolean);

  if (!quiz) {
    return (
      <main className="p-6">
        <div className="card">
          <div className="card-body">
            <h1 className="text-xl font-semibold">Quiz not found</h1>
            <Link href="/q" className="btn btn-outline mt-3">Back to quizzes</Link>
          </div>
        </div>
      </main>
    );
  }

  const result = useMemo(() => {
    const totals: Record<string, number> = {};
    quiz.weightKeys.forEach(key => (totals[key] = 0));

    quiz.questions.forEach((q, i) => {
      const answerId = answers[i];
      const answer = q.answers.find(a => a.id === answerId);
      if (answer?.weights) {
        Object.entries(answer.weights).forEach(([key, value]) => {
          totals[key] = (totals[key] ?? 0) + (value ?? 0);
        });
      }
    });

    // Find the highest scoring key
    const topKey = Object.entries(totals)
      .sort((a, b) => b[1] - a[1])[0]?.[0] ?? quiz.weightKeys[0];
    
    return quiz.results.find(r => r.weightKey === topKey) ?? quiz.results[0];
  }, [quiz, answers]);

  // Calculate percentages for display
  const percentages = useMemo(() => {
    const totals: Record<string, number> = {};
    quiz.weightKeys.forEach(key => (totals[key] = 0));

    quiz.questions.forEach((q, i) => {
      const answerId = answers[i];
      const answer = q.answers.find(a => a.id === answerId);
      if (answer?.weights) {
        Object.entries(answer.weights).forEach(([key, value]) => {
          totals[key] = (totals[key] ?? 0) + (value ?? 0);
        });
      }
    });

    const sum = Math.max(1, Object.values(totals).reduce((a, b) => a + b, 0));
    const percs: Record<string, number> = {};
    quiz.weightKeys.forEach(key => {
      percs[key] = Math.round((totals[key] / sum) * 100);
    });
    return percs;
  }, [quiz, answers]);

  const shareText = `I got "${result.label}" on the ${quiz.title}! Take the quiz:`;
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/q/${quiz.slug}` : "";

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: quiz.title,
          text: shareText,
          url: shareUrl
        });
      } else {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
          "_blank"
        );
      }
    } catch {}
  };

  return (
    <main className="container space-y-6">
      {/* Result card */}
      <div className="card" style={{ boxShadow: "var(--shadow-soft)" }}>
        <div className="card-body">
          <div className="text-xs text-slate-500">Your Result</div>
          <h1 className="text-3xl font-extrabold mt-1">{result.label}</h1>
          <p className="text-slate-300 mt-2">{result.description}</p>
          
          {result.tips && result.tips.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-4">Tips for You</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
                {result.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Score breakdown */}
      <div className="card">
        <div className="card-body">
          <h3 className="text-lg font-semibold mb-4">Score Breakdown</h3>
          <div className="grid gap-3">
            {quiz.weightKeys.map(key => {
              const r = quiz.results.find(res => res.weightKey === key);
              return (
                <div key={key}>
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>{r?.label ?? key}</span>
                    <span>{percentages[key]}%</span>
                  </div>
                  <div className="progress">
                    <div 
                      className="progress__bar" 
                      style={{ width: `${percentages[key]}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recommended products */}
      {result.products && result.products.length > 0 && (
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold mb-4">Recommended for {result.label}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {result.products.map(product => (
                <a
                  key={product.id}
                  href={withAffiliateTag(product.href)}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="choice no-underline"
                  onClick={() => trackAffiliateClick({
                    id: product.id,
                    vendor: "amazon",
                    title: product.title
                  })}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium">{product.title}</div>
                      {product.subtitle && (
                        <div className="text-xs text-slate-400">{product.subtitle}</div>
                      )}
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-600 text-white">
                      View
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Link className="btn btn-outline" href={`/q/${quiz.slug}`}>
          Retake Quiz
        </Link>
        <Link className="btn btn-outline" href="/q">
          Try Another Quiz
        </Link>
        <button className="btn btn-primary" onClick={handleShare}>
          Share Result
        </button>
        <Link className="btn btn-outline" href="/shop">
          Browse Shop
        </Link>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading result...</div>}>
      <ResultContent />
    </Suspense>
  );
}