// src/app/q/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuiz } from "@/data/quizzes";

// Generate static params for all quiz slugs
export async function generateStaticParams() {
  return [
    { slug: 'animal' },
    { slug: 'comm' },
    { slug: 'desk' },
    { slug: 'sleep' },
  ];
}

// Generate metadata for each quiz
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

  // Debug log
  console.log(`Loading quiz: ${slug}`, quiz ? 'Found' : 'Not found');

  if (!quiz) {
    return notFound();
  }

  // Get emoji based on quiz type
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
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Back to quizzes */}
      <Link 
        href="/q" 
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-6 transition-colors"
      >
        <span>←</span>
        <span>Back to all quizzes</span>
      </Link>

      {/* Quiz Card */}
      <div className="bg-slate-800 rounded-xl p-8 mb-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3 flex items-center gap-3">
              <span className="text-4xl">{getEmoji(quiz.slug)}</span>
              <span>{quiz.title}</span>
            </h1>
            <p className="text-slate-300 text-lg">{quiz.description}</p>
          </div>
        </div>

        {/* Quiz Info */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-1">Questions</div>
            <div className="text-2xl font-bold text-indigo-400">
              {quiz.questions.length}
            </div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-1">Time</div>
            <div className="text-2xl font-bold text-indigo-400">
              2-3 min
            </div>
          </div>
        </div>

        {/* What You'll Discover */}
        <div className="mb-8">
          <h2 className="font-semibold mb-3 text-slate-200">What You'll Discover:</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">✓</span>
              <span className="text-slate-300">Your unique personality type</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">✓</span>
              <span className="text-slate-300">Personalized tips and strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">✓</span>
              <span className="text-slate-300">Product recommendations from Amazon AU</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">✓</span>
              <span className="text-slate-300">Actionable insights for improvement</span>
            </li>
          </ul>
        </div>

        {/* Start Button */}
        <Link
          href={`/q/${quiz.slug}/0?a=`}
          className="block w-full text-center px-6 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-lg transition-colors hover:scale-[1.02] transform"
        >
          Start Quiz →
        </Link>
      </div>

      {/* Additional Info */}
      <div className="bg-slate-800/50 rounded-lg p-6 text-center">
        <p className="text-sm text-slate-400">
          <strong className="text-slate-300">Privacy First:</strong> Your answers are not stored. 
          Results are calculated instantly in your browser.
        </p>
      </div>
    </div>
  );
}