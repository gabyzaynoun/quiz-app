import type { Quiz } from "./types";

export const deskQuiz: Quiz = {
  slug: "desk",
  title: "Perfect Desk Setup Finder",
  description: "Design your ideal workspace based on your work style and preferences.",
  weightKeys: ["minimal", "ergonomic", "creative", "tech"],

  questions: [
    {
      id: "q1",
      prompt: "Your current desk size?",
      answers: [
        { id: "a", label: "Small/compact space", weights: { minimal: 2 } },
        { id: "b", label: "Standard home desk", weights: { ergonomic: 2 } },
        { id: "c", label: "Large L-shaped desk", weights: { creative: 2 } },
        { id: "d", label: "Multiple monitors setup", weights: { tech: 2 } }
      ]
    },
    {
      id: "q2",
      prompt: "Biggest workspace challenge?",
      answers: [
        { id: "a", label: "Too much clutter", weights: { minimal: 2 } },
        { id: "b", label: "Back/neck pain", weights: { ergonomic: 2 } },
        { id: "c", label: "Not inspiring enough", weights: { creative: 2 } },
        { id: "d", label: "Cable management", weights: { tech: 2 } }
      ]
    },
    {
      id: "q3",
      prompt: "Work style preference?",
      answers: [
        { id: "a", label: "Clean and simple", weights: { minimal: 2 } },
        { id: "b", label: "Comfortable for long hours", weights: { ergonomic: 2 } },
        { id: "c", label: "Visually stimulating", weights: { creative: 2 } },
        { id: "d", label: "High-tech and connected", weights: { tech: 2 } }
      ]
    },
    {
      id: "q4",
      prompt: "Lighting preference?",
      answers: [
        { id: "a", label: "Natural light only", weights: { minimal: 2 } },
        { id: "b", label: "Task lighting for eyes", weights: { ergonomic: 2 } },
        { id: "c", label: "Colorful mood lighting", weights: { creative: 2 } },
        { id: "d", label: "Smart adjustable lights", weights: { tech: 2 } }
      ]
    },
    {
      id: "q5",
      prompt: "Storage needs?",
      answers: [
        { id: "a", label: "Hidden and minimal", weights: { minimal: 2 } },
        { id: "b", label: "Within arm's reach", weights: { ergonomic: 2 } },
        { id: "c", label: "Display shelves", weights: { creative: 2 } },
        { id: "d", label: "Device charging station", weights: { tech: 2 } }
      ]
    },
    {
      id: "q6",
      prompt: "Keyboard preference?",
      answers: [
        { id: "a", label: "Compact wireless", weights: { minimal: 2 } },
        { id: "b", label: "Ergonomic split", weights: { ergonomic: 2 } },
        { id: "c", label: "Colorful mechanical", weights: { creative: 2 } },
        { id: "d", label: "Programmable keys", weights: { tech: 2 } }
      ]
    },
    {
      id: "q7",
      prompt: "Desktop organization?",
      answers: [
        { id: "a", label: "Nothing visible", weights: { minimal: 2 } },
        { id: "b", label: "Document holder", weights: { ergonomic: 2 } },
        { id: "c", label: "Inspiration board", weights: { creative: 2 } },
        { id: "d", label: "Multiple screens", weights: { tech: 2 } }
      ]
    },
    {
      id: "q8",
      prompt: "Chair priority?",
      answers: [
        { id: "a", label: "Sleek design", weights: { minimal: 2 } },
        { id: "b", label: "Lumbar support", weights: { ergonomic: 2 } },
        { id: "c", label: "Unique style", weights: { creative: 2 } },
        { id: "d", label: "Gaming features", weights: { tech: 2 } }
      ]
    },
    {
      id: "q9",
      prompt: "Decoration style?",
      answers: [
        { id: "a", label: "One plant maximum", weights: { minimal: 2 } },
        { id: "b", label: "Functional only", weights: { ergonomic: 2 } },
        { id: "c", label: "Art and colors", weights: { creative: 2 } },
        { id: "d", label: "LED strips and screens", weights: { tech: 2 } }
      ]
    },
    {
      id: "q10",
      prompt: "Budget priority?",
      answers: [
        { id: "a", label: "Quality basics only", weights: { minimal: 2 } },
        { id: "b", label: "Health and comfort", weights: { ergonomic: 2 } },
        { id: "c", label: "Aesthetic pieces", weights: { creative: 2 } },
        { id: "d", label: "Latest technology", weights: { tech: 2 } }
      ]
    }
  ],

  results: [
    {
      weightKey: "minimal",
      label: "⚪ Minimalist Setup",
      description: "Clean, clutter-free, and focused on essentials only.",
      tips: [
        "Use cable management solutions",
        "Choose furniture with hidden storage",
        "Stick to neutral colors",
        "One item in, one item out rule"
      ],
      products: [
        {
          id: "desk-shelf",
          title: "Grovemade Desk Shelf",
          href: "https://www.amazon.com.au/s?k=monitor+stand+shelf",
          subtitle: "Elevate and organize"
        },
        {
          id: "cable-tray",
          title: "Under-Desk Cable Tray",
          href: "https://www.amazon.com.au/s?k=under+desk+cable+management",
          subtitle: "Hide all cables"
        },
        {
          id: "minimal-lamp",
          title: "Minimalist Desk Lamp",
          href: "https://www.amazon.com.au/s?k=minimalist+desk+lamp",
          subtitle: "Simple lighting"
        },
        {
          id: "drawer-organizer",
          title: "Bamboo Drawer Organizer",
          href: "https://www.amazon.com.au/s?k=bamboo+drawer+organizer",
          subtitle: "Hidden storage"
        }
      ]
    },
    {
      weightKey: "ergonomic",
      label: "🪑 Ergonomic Haven",
      description: "Optimized for health, comfort, and long work sessions.",
      tips: [
        "Monitor at eye level",
        "Feet flat on floor",
        "20-20-20 eye rule",
        "Regular posture checks"
      ],
      products: [
        {
          id: "herman-miller",
          title: "Ergonomic Office Chair",
          href: "https://www.amazon.com.au/s?k=ergonomic+office+chair",
          subtitle: "All-day comfort"
        },
        {
          id: "monitor-arm",
          title: "Adjustable Monitor Arm",
          href: "https://www.amazon.com.au/s?k=monitor+arm",
          subtitle: "Perfect positioning"
        },
        {
          id: "footrest",
          title: "Ergonomic Footrest",
          href: "https://www.amazon.com.au/s?k=ergonomic+footrest",
          subtitle: "Proper posture"
        },
        {
          id: "wrist-rest",
          title: "Memory Foam Wrist Rest",
          href: "https://www.amazon.com.au/s?k=memory+foam+wrist+rest",
          subtitle: "Wrist support"
        }
      ]
    },
    {
      weightKey: "creative",
      label: "🎨 Creative Studio",
      description: "Inspiring, colorful, and designed to spark creativity.",
      tips: [
        "Add personal artwork",
        "Use color psychology",
        "Create mood zones",
        "Display inspiration"
      ],
      products: [
        {
          id: "pegboard",
          title: "Pegboard Organizer",
          href: "https://www.amazon.com.au/s?k=pegboard+desk+organizer",
          subtitle: "Flexible display"
        },
        {
          id: "neon-sign",
          title: "Custom Neon Sign",
          href: "https://www.amazon.com.au/s?k=custom+neon+sign",
          subtitle: "Personal touch"
        },
        {
          id: "art-supplies",
          title: "Desktop Art Supplies",
          href: "https://www.amazon.com.au/s?k=desktop+art+supplies+organizer",
          subtitle: "Creative tools"
        },
        {
          id: "cork-board",
          title: "Cork Board Wall",
          href: "https://www.amazon.com.au/s?k=cork+board+tiles",
          subtitle: "Inspiration wall"
        }
      ]
    },
    {
      weightKey: "tech",
      label: "💻 Tech Command Center",
      description: "High-tech setup with all the latest gadgets and connectivity.",
      tips: [
        "Invest in cable management",
        "Use smart home integration",
        "Multiple display setup",
        "Backup power solutions"
      ],
      products: [
        {
          id: "usb-hub",
          title: "Thunderbolt 4 Dock",
          href: "https://www.amazon.com.au/s?k=thunderbolt+4+dock",
          subtitle: "Connect everything"
        },
        {
          id: "stream-deck",
          title: "Elgato Stream Deck",
          href: "https://www.amazon.com.au/s?k=elgato+stream+deck",
          subtitle: "Shortcut controls"
        },
        {
          id: "wireless-charger",
          title: "3-in-1 Wireless Charger",
          href: "https://www.amazon.com.au/s?k=3+in+1+wireless+charger",
          subtitle: "Charge all devices"
        },
        {
          id: "smart-speaker",
          title: "Smart Speaker System",
          href: "https://www.amazon.com.au/s?k=smart+speaker+alexa",
          subtitle: "Voice control"
        }
      ]
    }
  ]
};