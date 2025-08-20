import type { Quiz } from "./types";

export const deskQuiz: Quiz = {
  slug: "desk",
  title: "Desk Setup Finder",
  description: "What’s your ideal workspace vibe? Get a tailored shopping list.",
  weightKeys: ["minimal", "ergonomic", "creative", "portable"],

  questions: [
    {
      id: "space",
      prompt: "Your space constraint:",
      answers: [
        { id: "a", label: "Small desk / shared area", weights: { portable: 2, minimal: 1 } },
        { id: "b", label: "Standard home desk", weights: { ergonomic: 2 } },
        { id: "c", label: "Studio / maker space", weights: { creative: 2 } },
        { id: "d", label: "Neat + clutter-free", weights: { minimal: 2 } }
      ]
    },
    {
      id: "input",
      prompt: "Input preference:",
      answers: [
        { id: "a", label: "Low-profile keyboard", weights: { minimal: 2 } },
        { id: "b", label: "Ergo split keyboard", weights: { ergonomic: 2 } },
        { id: "c", label: "Hot-swappable/mech", weights: { creative: 2 } },
        { id: "d", label: "Laptop only", weights: { portable: 2 } }
      ]
    },
    {
      id: "screen",
      prompt: "Display setup:",
      answers: [
        { id: "a", label: "One 27–32″ monitor", weights: { ergonomic: 2 } },
        { id: "b", label: "Ultrawide", weights: { creative: 2 } },
        { id: "c", label: "Laptop screen only", weights: { portable: 2 } },
        { id: "d", label: "24″ slim monitor", weights: { minimal: 2 } }
      ]
    },
    {
      id: "sound",
      prompt: "Noise strategy:",
      answers: [
        { id: "a", label: "ANC headphones", weights: { minimal: 1, ergonomic: 1, portable: 1 } },
        { id: "b", label: "White noise machine", weights: { minimal: 1, creative: 1 } },
        { id: "c", label: "Open speakers", weights: { creative: 2 } },
        { id: "d", label: "Doesn’t matter", weights: { portable: 1 } }
      ]
    },
    {
      id: "mobility",
      prompt: "How often do you move?",
      answers: [
        { id: "a", label: "Daily coffee/shop hops", weights: { portable: 2 } },
        { id: "b", label: "Mostly fixed desk", weights: { ergonomic: 2 } },
        { id: "c", label: "Occasional travel", weights: { minimal: 1, portable: 1 } },
        { id: "d", label: "Hybrid studio", weights: { creative: 2 } }
      ]
    }
  ],

  results: [
    {
      weightKey: "minimal",
      label: "Minimal Flow",
      description: "Clean lines, tiny footprint, quick to reset.",
      tips: ["One in / one out", "Use a drawer tray to hide bits"]
    },
    {
      weightKey: "ergonomic",
      label: "Ergonomic Workhorse",
      description: "Comfort, posture, and endurance come first.",
      tips: ["Dial chair height + monitor eye level", "Consider a foot-rest"]
    },
    {
      weightKey: "creative",
      label: "Creative Studio",
      description: "Visual space, color, tools always at hand.",
      tips: ["Use a pegboard", "Bias for lighting that lifts mood"]
    },
    {
      weightKey: "portable",
      label: "Portable Minimalist",
      description: "Pack-light kit that sets up anywhere.",
      tips: ["Keep a go-bag", "USB-C hub solves 80% of pain"]
    }
  ]
};
