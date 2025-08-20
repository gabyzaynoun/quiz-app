import type { Quiz } from "./types";
import { commQuiz } from "./comm";
import { deskQuiz } from "./desk";
import { sleepQuiz } from "./sleep";
import { animalQuiz } from "./animal"; // ← add this

export const QUIZZES: Record<string, Quiz> = {
  [animalQuiz.slug]: animalQuiz,   // ← add this line
  [commQuiz.slug]: commQuiz,
  [deskQuiz.slug]: deskQuiz,
  [sleepQuiz.slug]: sleepQuiz,
};

export function getQuiz(slug: string): Quiz | null {
  return QUIZZES[slug] ?? null;
}

export function listQuizzes() {
  return Object.values(QUIZZES).map(q => ({
    slug: q.slug,
    title: q.title,
    description: q.description
  }));
}
