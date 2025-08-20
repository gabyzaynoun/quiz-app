"use client";

import { useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getQuiz } from "@/data/quizzes";
import { withAffiliateTag } from "@/data/affiliates";

export default function QuestionClient() {
  const { slug } = useParams<{ slug: string }>();
  const quiz = getQuiz(slug);
  const router = useRouter();
  const search = useSearchParams();

  if (!quiz) {
    return (
      <main className="p-6">
        <div className="card"><div className="card-body">
          <h1 className="text-xl font-semibold">Quiz not found</h1>
          <Link href="/q" className="btn btn-outline mt-3">Back to quizzes</Link>
        </div></div>
      </main>
    );
  }

  const aParam = search.get("a") || "";
  const answers = aParam.split(",").filter(Boolean);
  const idx = answers.length; // current question index

  const advance = (answerId: string) => {
    const next = [...answers, answerId].join(",");
    const url = `/q/${quiz.slug}?a=${encodeURIComponent(next)}`;
    router.replace(url);
  };

  // Finished?
  const done = idx >= quiz.questions.length;

  const result = useMemo(() => {
    if (!done) return null;
    const totals: Record<string, number> = {};
    quiz.weightKeys.forEach(k => (totals[k] = 0));

    quiz.questions.forEach((q, i) => {
      const pick = answers[i];
      const ans = q.answers.find(a => a.id === pick);
      if (!ans?.weights) return;
      for (const [k, v] of Object.entries(ans.weights)) {
        totals[k] = (totals[k] ?? 0) + (v ?? 0);
      }
    });

    const topKey = Object.entries(totals).sort((a,b) => b[1]-a[1])[0]?.[0] ?? quiz.weightKeys[0];
    return quiz.results.find(r => r.weightKey === topKey) ?? quiz.results[0];
  }, [done, answers, quiz]);

  return (
    <main className="space-y-6">
      <div className="card">
        <div className="card-body">
          <div className="text-xs text-slate-400">Quiz</div>
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
          <p className="text-slate-400">{quiz.description}</p>
        </div>
      </div>

      {!done ? (
        // Question
        <div className="card">
          <div className="card-body">
            <div className="text-xs text-slate-400 mb-2">
              Question {idx + 1} of {quiz.questions.length}
            </div>
            <h3 className="text-lg font-semibold">
              {quiz.questions[idx].prompt}
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {quiz.questions[idx].answers.map(a => (
                <button
                  key={a.id}
                  className="choice text-left"
                  onClick={() => advance(a.id)}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Result
        <div className="space-y-6">
          <div className="card" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="card-body">
              <div className="text-xs text-slate-400">Your Result</div>
              <h2 className="text-2xl font-extrabold mt-1">{result?.label}</h2>
              <p className="text-slate-300 mt-2">{result?.description}</p>
              {!!result?.tips?.length && (
                <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-1">
                  {result.tips.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              )}
            </div>
          </div>

          {!!result?.products?.length && (
            <div className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold">Suggested gear</h3>
                <div className="mt-3 grid sm:grid-cols-2 gap-3">
                  {result.products.map(p => (
                    <a
                      key={p.id}
                      href={withAffiliateTag(p.href)}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="choice no-underline"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="font-medium">{p.title}</div>
                          {p.subtitle && <div className="text-xs text-slate-400">{p.subtitle}</div>}
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-600 text-white">View</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Link className="btn btn-outline" href={`/q/${quiz.slug}`}>Restart</Link>
            <Link className="btn btn-outline" href="/q">All quizzes</Link>
          </div>
        </div>
      )}
    </main>
  );
}
