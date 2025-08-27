// src/app/q/[slug]/[index]/page.tsx - Updated with consistent theme
"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getQuiz } from "@/data/quizzes";
import { Progress } from "@/components/ui/Progress";

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
      <main className="min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl py-12">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz not found</h1>
            <Link href="/q" className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-indigo-700 transition-all">
              Back to quizzes
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const question = quiz.questions[questionIndex];
  
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
      router.push(`/q/${params.slug}/result?a=${encodeURIComponent(nextAnswersParam)}`);
    } else {
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 max-w-4xl py-12">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <button 
              onClick={handleBack} 
              className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              ← Back
            </button>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Question {questionIndex + 1} of {quiz.questions.length}
            </div>
          </div>
          <div className="bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            {question.prompt}
          </h2>
          <div className="space-y-4">
            {question.answers.map((answer) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(answer.id)}
                className="w-full text-left p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group"
              >
                <span className="text-lg text-slate-700 dark:text-slate-200 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium">
                  {answer.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}