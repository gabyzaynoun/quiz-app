"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { QUIZ } from "../../../data/quiz";
import { Progress } from "../../../components/ui/Progress";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams<{ index: string }>();
  const search = useSearchParams();

  const i = Number(params.index ?? "0");
  const answersSoFar = search.get("a") || "";
  const question = QUIZ.questions[i];

  if (!question) {
    router.replace(`/quiz/result?a=${encodeURIComponent(answersSoFar)}`);
    return null;
  }

  const onAnswer = (answerId: string) => {
    const nextA = answersSoFar ? `${answersSoFar},${answerId}` : answerId;
    const nextIndex = i + 1;
    if (nextIndex >= QUIZ.questions.length) {
      router.push(`/quiz/result?a=${encodeURIComponent(nextA)}`);
    } else {
      router.push(`/quiz/${nextIndex}?a=${encodeURIComponent(nextA)}`);
    }
  };

  const onBack = () => {
    if (i === 0) return router.push("/quiz");
    const parts = answersSoFar.split(",").filter(Boolean);
    parts.pop();
    router.push(`/quiz/${i - 1}?a=${encodeURIComponent(parts.join(","))}`);
  };

  const progressPct = Math.round((i / QUIZ.questions.length) * 100);

  return (
    <main className="container space-y-6">
      {/* top bar */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="btn btn-outline">Back</button>
        <div className="flex-1">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Question {i + 1} / {QUIZ.questions.length}</span>
            <span>{progressPct}%</span>
          </div>
          {/* progress */}
          <div className="progress">
            <div className="progress__bar" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>

      {/* card */}
      <div className="card">
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{question.text}</h2>
          <div className="mt-5 grid gap-3">
            {question.answers.map(a => (
              <button
                key={a.id}
                onClick={() => onAnswer(a.id)}
                className="choice"
              >
                {a.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
