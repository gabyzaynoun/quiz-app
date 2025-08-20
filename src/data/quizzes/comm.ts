import type { Quiz } from "./types";

export const commQuiz: Quiz = {
  slug: "comm",
  title: "Animal Communication Style",
  description: "Find your default comms vibe and how to flex it.",
  weightKeys: ["direct", "supportive", "expressive", "analytical"],

  questions: [
    {
      id: "email",
      prompt: "Your email style is…",
      answers: [
        { id: "a", label: "Short, action-first", weights: { direct: 2 } },
        { id: "b", label: "Warm, people-first", weights: { supportive: 2 } },
        { id: "c", label: "Story + enthusiasm", weights: { expressive: 2 } },
        { id: "d", label: "Bulleted facts", weights: { analytical: 2 } }
      ]
    },
    {
      id: "conflict",
      prompt: "In conflict you tend to…",
      answers: [
        { id: "a", label: "Address it head-on", weights: { direct: 2 } },
        { id: "b", label: "Smooth it over", weights: { supportive: 2 } },
        { id: "c", label: "Persuade and reframe", weights: { expressive: 2 } },
        { id: "d", label: "Ask clarifying questions", weights: { analytical: 2 } }
      ]
    },
    {
      id: "meeting",
      prompt: "Ideal meeting outcome:",
      answers: [
        { id: "a", label: "Decisions + owners", weights: { direct: 2 } },
        { id: "b", label: "Alignment + morale", weights: { supportive: 2 } },
        { id: "c", label: "Excitement + momentum", weights: { expressive: 2 } },
        { id: "d", label: "Clear requirements", weights: { analytical: 2 } }
      ]
    },
    {
      id: "feedback",
      prompt: "Your feedback style:",
      answers: [
        { id: "a", label: "Blunt but fair", weights: { direct: 2 } },
        { id: "b", label: "Gentle + encouraging", weights: { supportive: 2 } },
        { id: "c", label: "Inspire with vision", weights: { expressive: 2 } },
        { id: "d", label: "Precise examples", weights: { analytical: 2 } }
      ]
    },
    {
      id: "prep",
      prompt: "Before you present…",
      answers: [
        { id: "a", label: "Clarify the ask first", weights: { direct: 2 } },
        { id: "b", label: "Check in with people", weights: { supportive: 2 } },
        { id: "c", label: "Build a narrative", weights: { expressive: 2 } },
        { id: "d", label: "Tighten data + logic", weights: { analytical: 2 } }
      ]
    }
  ],

  results: [
    {
      weightKey: "direct",
      label: "🦅 Direct",
      description: "Clear, concise, outcome-driven. You value speed and ownership.",
      tips: ["Add a sentence of context", "Invite dissent explicitly"]
    },
    {
      weightKey: "supportive",
      label: "🕊️ Supportive",
      description: "Empathetic and diplomatic. You connect and de-escalate.",
      tips: ["State decisions boldly", "Time-box open discussion"]
    },
    {
      weightKey: "expressive",
      label: "🦚 Expressive",
      description: "Vision + energy. You motivate and bring ideas to life.",
      tips: ["Summarize next steps", "Trim the fluff when needed"]
    },
    {
      weightKey: "analytical",
      label: "🦉 Analytical",
      description: "Structured and precise. You make the complex clear.",
      tips: ["Avoid over-documenting", "Lead with the ‘so what’"]
    }
  ]
};
