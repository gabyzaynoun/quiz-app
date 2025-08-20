"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getQuiz } from "@/data/quizzes";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams<{ slug: string; index: string }>();
  const searchParams = useSearchParams();
  
  const quiz = getQuiz(params.slug);
  const questionIndex = Number(params.index ?? "0");
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

  const question = quiz.questions[questionIndex];
  
  // If no question at this index, redirect to results
  if (!question) {
    router.replace(`/q/${params.slug}/result?a=${encodeURIComponent(answersParam)}`);
    return null;
  }

  const handleAnswer = (answerId: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerId;
    const nextAnswersParam = newAnswers.join(",");
    const nextIndex = questionIndex + 1;

    if (nextIndex >= quiz.questions.length) {
      // Go to results
      router.push(`/q/${params.slug}/result?a=${encodeURIComponent(nextAnswersParam)}`);
    } else {
      // Go to next question
      router.push(`/q/${params.slug}/${nextIndex}?a=${encodeURIComponent(nextAnswersParam)}`);
    }
  };

  const handleBack = () => {
    if (questionIndex === 0) {
      router.push(`/q/${params.slug}`);
    } else {
      const prevAnswers = answers.slice(0, questionIndex);
      router.push(`/q/${params.slug}/${questionIndex - 1}?a=${encodeURIComponent(prevAnswers.join(","))}`);
    }
  };

  const progressPercent = Math.round(((questionIndex + 1) / quiz.questions.length) * 100);

  return (
    <main className="container space-y-6">
      {/* Progress bar */}
      <div className="flex items-center gap-4">
        <button onClick={handleBack} className="btn btn-outline">
          Back
        </button>
        <div className="flex-1">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Question {questionIndex + 1} / {quiz.questions.length}</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="progress">
            <div className="progress__bar" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </div>

      {/* Question card */}
      <div className="card">
        <div className="card-body">
          <h2 className="text-2xl font-semibold mb-6">{question.prompt}</h2>
          <div className="grid gap-3">
            {question.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(answer.id)}
                className="choice text-left"
              >
                {answer.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}