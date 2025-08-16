import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Fast, shareable personality quizzes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-dvh flex flex-col">
          {/* Glassy header */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border-b border-black/5 dark:border-white/10">
            <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
              <a href="/" className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                QuizApp
              </a>
              <nav className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
                <a href="/quiz" className="hover:text-slate-900 dark:hover:text-white">Take the quiz</a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Glassy footer */}
          <footer className="backdrop-blur-md bg-white/60 dark:bg-slate-900/50 border-t border-black/5 dark:border-white/10">
            <div className="max-w-3xl mx-auto px-4 py-6 text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} QuizApp
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
