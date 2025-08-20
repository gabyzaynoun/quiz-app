import type { Quiz } from "./types";

export const sleepQuiz: Quiz = {
  slug: "sleep",
  title: "Sleep Optimization Test",
  description: "Identify your sleep challenges and get personalized solutions for better rest.",
  weightKeys: ["light", "schedule", "comfort", "mind"],

  questions: [
    {
      id: "q1",
      prompt: "What time do you usually go to bed?",
      answers: [
        { id: "a", label: "Before 10 PM", weights: { schedule: 2 } },
        { id: "b", label: "10 PM - Midnight", weights: { comfort: 2 } },
        { id: "c", label: "After midnight", weights: { mind: 2 } },
        { id: "d", label: "Varies widely", weights: { schedule: 2, mind: 1 } }
      ]
    },
    {
      id: "q2",
      prompt: "Main sleep disruption?",
      answers: [
        { id: "a", label: "Light/noise sensitivity", weights: { light: 2 } },
        { id: "b", label: "Irregular schedule", weights: { schedule: 2 } },
        { id: "c", label: "Temperature issues", weights: { comfort: 2 } },
        { id: "d", label: "Racing thoughts", weights: { mind: 2 } }
      ]
    },
    {
      id: "q3",
      prompt: "How long to fall asleep?",
      answers: [
        { id: "a", label: "Under 10 minutes", weights: { comfort: 2 } },
        { id: "b", label: "10-30 minutes", weights: { schedule: 1, comfort: 1 } },
        { id: "c", label: "30-60 minutes", weights: { mind: 2 } },
        { id: "d", label: "Over an hour", weights: { mind: 2, light: 1 } }
      ]
    },
    {
      id: "q4",
      prompt: "Wake up during night?",
      answers: [
        { id: "a", label: "Rarely", weights: { comfort: 2 } },
        { id: "b", label: "1-2 times", weights: { light: 1, comfort: 1 } },
        { id: "c", label: "3+ times", weights: { light: 2 } },
        { id: "d", label: "Can't fall back asleep", weights: { mind: 2 } }
      ]
    },
    {
      id: "q5",
      prompt: "Bedroom environment?",
      answers: [
        { id: "a", label: "Dark and quiet", weights: { comfort: 2 } },
        { id: "b", label: "Some light/noise", weights: { light: 2 } },
        { id: "c", label: "Temperature varies", weights: { comfort: 2 } },
        { id: "d", label: "Electronics present", weights: { mind: 2 } }
      ]
    },
    {
      id: "q6",
      prompt: "Evening routine includes?",
      answers: [
        { id: "a", label: "Relaxation activities", weights: { mind: 1, comfort: 1 } },
        { id: "b", label: "Screen time", weights: { light: 2, mind: 1 } },
        { id: "c", label: "Work/study", weights: { mind: 2 } },
        { id: "d", label: "No routine", weights: { schedule: 2 } }
      ]
    },
    {
      id: "q7",
      prompt: "Morning energy level?",
      answers: [
        { id: "a", label: "Refreshed and ready", weights: { comfort: 2 } },
        { id: "b", label: "Slow to start", weights: { schedule: 2 } },
        { id: "c", label: "Groggy for hours", weights: { schedule: 2, mind: 1 } },
        { id: "d", label: "Exhausted", weights: { comfort: 1, mind: 1 } }
      ]
    },
    {
      id: "q8",
      prompt: "Caffeine consumption?",
      answers: [
        { id: "a", label: "Morning only", weights: { schedule: 2 } },
        { id: "b", label: "Until noon", weights: { schedule: 1, comfort: 1 } },
        { id: "c", label: "All day", weights: { mind: 2 } },
        { id: "d", label: "None", weights: { comfort: 2 } }
      ]
    },
    {
      id: "q9",
      prompt: "Weekend sleep pattern?",
      answers: [
        { id: "a", label: "Same as weekdays", weights: { schedule: 2 } },
        { id: "b", label: "Sleep in 1-2 hours", weights: { comfort: 2 } },
        { id: "c", label: "Sleep in 3+ hours", weights: { schedule: 2 } },
        { id: "d", label: "Totally irregular", weights: { schedule: 2, mind: 1 } }
      ]
    },
    {
      id: "q10",
      prompt: "Biggest sleep goal?",
      answers: [
        { id: "a", label: "Block disruptions", weights: { light: 2 } },
        { id: "b", label: "Consistent schedule", weights: { schedule: 2 } },
        { id: "c", label: "Physical comfort", weights: { comfort: 2 } },
        { id: "d", label: "Quiet racing mind", weights: { mind: 2 } }
      ]
    }
  ],

  results: [
    {
      weightKey: "light",
      label: "🌙 Light Sensitive Sleeper",
      description: "Environmental factors like light and noise significantly impact your sleep quality.",
      tips: [
        "Install blackout curtains",
        "Use a quality sleep mask",
        "Try white noise or earplugs",
        "Dim lights 2 hours before bed"
      ],
      products: [
        {
          id: "blackout-curtains",
          title: "Blackout Curtains",
          href: "https://www.amazon.com.au/s?k=blackout+curtains",
          subtitle: "Complete darkness"
        },
        {
          id: "sleep-mask",
          title: "Manta Sleep Mask",
          href: "https://www.amazon.com.au/s?k=manta+sleep+mask",
          subtitle: "Total blackout"
        },
        {
          id: "white-noise",
          title: "White Noise Machine",
          href: "https://www.amazon.com.au/s?k=white+noise+machine",
          subtitle: "Consistent sound"
        },
        {
          id: "smart-bulbs",
          title: "Smart Dimming Bulbs",
          href: "https://www.amazon.com.au/s?k=smart+bulbs+dimming",
          subtitle: "Gradual dimming"
        }
      ]
    },
    {
      weightKey: "schedule",
      label: "⏰ Schedule Optimizer",
      description: "Your sleep suffers from irregular timing and inconsistent routines.",
      tips: [
        "Set fixed sleep/wake times",
        "Use sunrise alarm clock",
        "Avoid weekend sleep-ins",
        "Create bedtime rituals"
      ],
      products: [
        {
          id: "sunrise-alarm",
          title: "Philips Sunrise Alarm",
          href: "https://www.amazon.com.au/s?k=philips+sunrise+alarm",
          subtitle: "Natural wake-up"
        },
        {
          id: "sleep-tracker",
          title: "Sleep Tracking Watch",
          href: "https://www.amazon.com.au/s?k=sleep+tracking+watch",
          subtitle: "Monitor patterns"
        },
        {
          id: "melatonin",
          title: "Melatonin Supplement",
          href: "https://www.amazon.com.au/s?k=melatonin+supplement",
          subtitle: "Reset rhythm"
        },
        {
          id: "bedtime-tea",
          title: "Bedtime Tea Set",
          href: "https://www.amazon.com.au/s?k=bedtime+tea",
          subtitle: "Evening ritual"
        }
      ]
    },
    {
      weightKey: "comfort",
      label: "🛏️ Comfort Seeker",
      description: "Physical comfort and temperature regulation are key to your sleep quality.",
      tips: [
        "Invest in quality mattress",
        "Use breathable bedding",
        "Maintain cool temperature",
        "Try different pillow types"
      ],
      products: [
        {
          id: "cooling-topper",
          title: "Cooling Mattress Topper",
          href: "https://www.amazon.com.au/s?k=cooling+mattress+topper",
          subtitle: "Temperature control"
        },
        {
          id: "bamboo-sheets",
          title: "Bamboo Sheet Set",
          href: "https://www.amazon.com.au/s?k=bamboo+sheets",
          subtitle: "Breathable comfort"
        },
        {
          id: "memory-pillow",
          title: "Memory Foam Pillow",
          href: "https://www.amazon.com.au/s?k=memory+foam+pillow",
          subtitle: "Perfect support"
        },
        {
          id: "weighted-blanket",
          title: "Weighted Blanket",
          href: "https://www.amazon.com.au/s?k=weighted+blanket",
          subtitle: "Calming pressure"
        }
      ]
    },
    {
      weightKey: "mind",
      label: "🧠 Mind Calmer",
      description: "Mental activity and stress are your primary sleep obstacles.",
      tips: [
        "Practice meditation",
        "Journal before bed",
        "No screens 1 hour before",
        "Try breathing exercises"
      ],
      products: [
        {
          id: "meditation-app",
          title: "Meditation Headband",
          href: "https://www.amazon.com.au/s?k=muse+meditation+headband",
          subtitle: "Guided meditation"
        },
        {
          id: "journal",
          title: "Bedside Journal",
          href: "https://www.amazon.com.au/s?k=bedside+journal",
          subtitle: "Brain dump"
        },
        {
          id: "essential-oils",
          title: "Lavender Essential Oil",
          href: "https://www.amazon.com.au/s?k=lavender+essential+oil",
          subtitle: "Calming scent"
        },
        {
          id: "blue-blockers",
          title: "Blue Light Glasses",
          href: "https://www.amazon.com.au/s?k=blue+light+blocking+glasses",
          subtitle: "Evening protection"
        }
      ]
    }
  ]
};