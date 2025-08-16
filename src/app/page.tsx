import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100dvh-120px)] flex items-center">
      <section className="container text-center space-y-6">
        <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full border px-3 py-1 bg-white/60 dark:bg-white/10 backdrop-blur">
          ✨ New • Productivity Animal Test
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
            Welcome to the Quiz App
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          Ten quick questions. Instant, shareable result. No sign-up.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link href="/quiz" className="btn btn-primary">Start Quiz</Link>
          <a href="#how" className="btn btn-outline">How it works</a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Free • 1–2 minutes • Works on mobile
        </p>
      </section>
    </main>
  );
}
