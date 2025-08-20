import type { Quiz } from "./types";

export const sleepQuiz: Quiz = {
  slug: "sleep",
  title: "Sleep Style Matcher",
  description: "Figure out your sleep challenges and get quick wins.",
  weightKeys: ["light", "nightowl", "hot", "noisy"],

  questions: [
    {
      id: "wake",
      prompt: "Main reason you wake up:",
      answers: [
        { id: "a", label: "Noise/light", weights: { light: 2, noisy: 1 } },
        { id: "b", label: "Too warm", weights: { hot: 2 } },
        { id: "c", label: "Late bedtime habits", weights: { nightowl: 2 } },
        { id: "d", label: "Random / unsure", weights: { light: 1 } }
      ]
    },
    {
      id: "bedtime",
      prompt: "Bedtime reality:",
      answers: [
        { id: "a", label: "Scroll past midnight", weights: { nightowl: 2 } },
        { id: "b", label: "On time but wake often", weights: { light: 2 } },
        { id: "c", label: "Room gets hot", weights: { hot: 2 } },
        { id: "d", label: "Neighbors/street noise", weights: { noisy: 2 } }
      ]
    },
    {
      id: "env",
      prompt: "Bedroom setup:",
      answers: [
        { id: "a", label: "Thin curtains / bright", weights: { light: 2 } },
        { id: "b", label: "No AC / warm climate", weights: { hot: 2 } },
        { id: "c", label: "Fan/AC already loud", weights: { noisy: 1 } },
        { id: "d", label: "Cozy but screens in room", weights: { nightowl: 1 } }
      ]
    },
    {
      id: "wakeTime",
      prompt: "Wake-up target:",
      answers: [
        { id: "a", label: "Earlier than now", weights: { nightowl: 2 } },
        { id: "b", label: "Fine as is", weights: {} },
        { id: "c", label: "Shift for seasons", weights: { light: 1 } },
        { id: "d", label: "Depends on work", weights: {} }
      ]
    },
    {
      id: "aid",
      prompt: "Quick win you’ll try:",
      answers: [
        { id: "a", label: "Mask + blackout", weights: { light: 2 } },
        { id: "b", label: "Cooling topper", weights: { hot: 2 } },
        { id: "c", label: "White noise", weights: { noisy: 2 } },
        { id: "d", label: "No-screen wind-down", weights: { nightowl: 2 } }
      ]
    }
  ],

  results: [
    {
      weightKey: "light",
      label: "Light Sleeper",
      description: "Light and glare disrupt you.",
      tips: ["Blackout curtains", "Good sleep mask", "Dim lights 90 mins before bed"]
    },
    {
      weightKey: "nightowl",
      label: "Night Owl",
      description: "Circadian rhythm drifts late.",
      tips: ["Anchored wake time", "Morning light walk", "Screens off 60 mins before bed"]
    },
    {
      weightKey: "hot",
      label: "Hot Sleeper",
      description: "Overheating wakes you.",
      tips: ["Cooling topper", "Breathable sheets", "Fan or AC pre-cool"]
    },
    {
      weightKey: "noisy",
      label: "Noise Sensitive",
      description: "Sound pollution breaks cycles.",
      tips: ["White noise", "Earplugs for bad nights", "Seal door gaps"]
    }
  ]
};
