// src/app/q/[slug]/page.tsx - Fixed with proper escaping
import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuiz } from "@/data/quizzes";

export async function generateStaticParams() {
  return [
    { slug: 'animal' },
    { slug: 'comm' },
    { slug: 'desk' },
    { slug: 'sleep' },
  ];
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const quiz = getQuiz(slug);
  
  if (!quiz) {
    return {
      title: 'Quiz Not Found',
    };
  }

  return {
    title: `${quiz.title} - Find By Type`,
    description: quiz.description,
  };
}

export default async function QuizIntro(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const quiz = getQuiz(slug);

  if (!quiz) {
    return notFound();
  }

  const getEmoji = (slug: string) => {
    switch(slug) {
      case 'animal': return '🐾';
      case 'comm': return '💬';
      case 'desk': return '🖥️';
      case 'sleep': return '😴';
      default: return '📝';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-6 max-w-4xl py-12">
        {/* Back button */}
        <Link 
          href="/q" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to all quizzes</span>
        </Link>

        {/* Quiz Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-10">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center">
                <span className="text-5xl">{getEmoji(quiz.slug)}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
              {quiz.title}
            </h1>
            <p className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {quiz.description}
            </p>
          </div>

          {/* Quiz Info */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 text-center">
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Questions</div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {quiz.questions.length}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 text-center">
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Time</div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                2-3 min
              </div>
            </div>
          </div>

          {/* What You'll Discover */}
          <div className="mb-10">
            <h2 className="font-semibold mb-4 text-slate-900 dark:text-white">What You&apos;ll Discover:</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-600 dark:text-slate-300">Your unique personality type</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-600 dark:text-slate-300">Personalized tips and strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-600 dark:text-slate-300">Product recommendations from Amazon AU</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-600 dark:text-slate-300">Actionable insights for improvement</span>
              </li>
            </ul>
          </div>

          {/* Start Button */}
          <Link
            href={`/q/${quiz.slug}/0?a=`}
            className="block w-full text-center px-8 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full font-bold text-lg transition-all hover:scale-[1.02] shadow-xl"
          >
            Start Quiz →
          </Link>
        </div>

        {/* Additional Info */}
        <div className="bg-slate-100/50 dark:bg-slate-800/50 rounded-2xl p-6 text-center mt-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong className="text-slate-700 dark:text-slate-300">Privacy First:</strong> Your answers are not stored. 
            Results are calculated instantly in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}