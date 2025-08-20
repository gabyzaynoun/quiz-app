import type { Quiz } from "./types";
import { animalQuiz } from "./animal";
import { commQuiz } from "./comm";
import { deskQuiz } from "./desk";
import { sleepQuiz } from "./sleep";

// Export all quizzes
export const QUIZZES: Record<string, Quiz> = {
  [animalQuiz.slug]: animalQuiz,
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

export function getAllQuizzes(): Quiz[] {
  return Object.values(QUIZZES);
}