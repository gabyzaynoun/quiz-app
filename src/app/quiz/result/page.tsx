"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { QUIZ, type AnimalKey } from "../../../data/quiz";

type Totals = Record<AnimalKey, number>;
const KEYS: AnimalKey[] = ["owl", "fox", "wolf", "dolphin"];

// Simple pet gear map (swap hrefs to affiliate links later)
const PET_PRODUCTS: Record<
  "dog" | "cat" | "multi",
  { id: string; title: string; subtitle?: string; href: string }[]
> = {
  dog: [
    { id: "d1", title: "Tug Rope Toy", subtitle: "Durable playtime", href: "#" },
    { id: "d2", title: "No-pull Harness", subtitle: "Comfort walks", href: "#" },
    { id: "d3", title: "Slow Feeder Bowl", subtitle: "Healthier eating", href: "#" },
  ],
  cat: [
    { id: "c1", title: "Interactive Feather Wand", subtitle: "Daily enrichment", href: "#" },
    { id: "c2", title: "Cat Tunnel", subtitle: "Hide-and-zoomies", href: "#" },
    { id: "c3", title: "Water Fountain", subtitle: "Encourage hydration", href: "#" },
  ],
  multi: [
    { id: "m1", title: "Pet Grooming Glove", subtitle: "Easy shedding control", href: "#" },
    { id: "m2", title: "Pet Camera", subtitle: "Check-in from anywhere", href: "#" },
    { id: "m3", title: "Pet Stain Remover", subtitle: "Fast clean-ups", href: "#" },
  ],
};

export default function ResultPage() {
  const search = useSearchParams();
  const aParam = search.get("a") || "";
  const selected = aParam.split(",").filter(Boolean);

  // Locate the pet question’s answer (non-scoring)
  const petIndex = QUIZ.questions.findIndex((q) => q.id === "pet");
  const petAnswerId = petIndex >= 0 ? selected[petIndex] : undefined;
  const petKind: "dog" | "cat" | "multi" | "none" =
    petAnswerId === "a" ? "dog" :
    petAnswerId === "b" ? "cat" :
    petAnswerId === "c" ? "multi" : "none";

  // Compute percentages and ordering (no unused totals)
  const { order, percents } = useMemo(() => {
    const t: Totals = { owl: 0, fox: 0, wolf: 0, dolphin: 0 };

    QUIZ.questions.forEach((q, idx) => {
      const picked = selected[idx];
      const ans = q.answers.find((a) => a.id === picked);
      if (!ans?.weights) return; // pet question has no weights
      KEYS.forEach((k) => {
        t[k] += ans.weights?.[k] ?? 0;
      });
    });

    const sum = Math.max(1, KEYS.reduce((s, k) => s + t[k], 0));
    const p = Object.fromEntries(
      KEYS.map((k) => [k, Math.round((t[k] / sum) * 100)])
    ) as Record<AnimalKey, number>;

    const ord = [...KEYS].sort((a, b) => t[b] - t[a]);
    return { order: ord, percents: p };
  }, [selected]);

  const topKey = order[0] ?? "owl";
  const runnerUpKey = order[1] ?? "fox";

  const main = QUIZ.results.find((r) => r.weightKey === topKey) ?? QUIZ.results[0];
  const runner = QUIZ.results.find((r) => r.weightKey === runnerUpKey) ?? QUIZ.results[0];

  const shareText = `I’m "${main.label}" (${percents[topKey]}%) with a dash of "${runner.label}" (${percents[runnerUpKey]}%). Which animal are you?`;
  const shareUrl =
    typeof window !== "undefined" ? `${window.location.origin}/quiz` : "";

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Animal Archetype", text: shareText, url: shareUrl });
      } else {
        const tweet = encodeURIComponent(`${shareText} ${shareUrl}`);
        window.open(`https://twitter.com/intent/tweet?text=${tweet}`, "_blank");
      }
    } catch {
      // ignore
    }
  };

  return (
    <main className="container space-y-6">
      {/* Top card */}
      <div className="card" style={{ boxShadow: "var(--shadow-soft)" }}>
        <div className="card-body">
          <div className="text-xs text-slate-500">Your Top Animal</div>
          <h1 className="text-3xl font-extrabold mt-1">{main.label}</h1>
          <p className="text-slate-600 mt-2">{main.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1 bg-indigo-600 text-white">
              {percents[topKey]}% {main.label}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1 bg-indigo-100 text-indigo-800">
              {percents[runnerUpKey]}% {runner.label}
            </span>
          </div>
        </div>
      </div>

      {/* Percent bars */}
      <div className="card">
        <div className="card-body">
          <div className="grid gap-3">
            {KEYS.map((k) => (
              <div key={k}>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span className="capitalize">{k}</span>
                  <span>{percents[k]}%</span>
                </div>
                <div className="progress">
                  <div className="progress__bar" style={{ width: `${percents[k]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="card">
        <div className="card-body">
          <h3 className="text-lg font-semibold">Tips for {main.label}</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            {main.tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Fun self-reflection — not a medical assessment.
          </p>
        </div>
      </div>

      {/* Recommended gear (monetization) */}
      <div className="card">
        <div className="card-body">
          <h3 className="text-lg font-semibold">Recommended Gear for {main.label}</h3>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {main.products.map((p) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="choice no-underline"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-medium">{p.title}</div>
                    {p.subtitle && (
                      <div className="text-xs text-slate-500">{p.subtitle}</div>
                    )}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-600 text-white">
                    View
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Conditional: Pet-owner gear */}
      {petKind !== "none" && (
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">
              Recommended for your {petKind === "multi" ? "pets" : petKind}
            </h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {PET_PRODUCTS[petKind === "multi" ? "multi" : petKind].map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="choice no-underline"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium">{p.title}</div>
                      {p.subtitle && (
                        <div className="text-xs text-slate-500">{p.subtitle}</div>
                      )}
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-600 text-white">
                      View
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Link className="btn btn-outline" href="/quiz">
          Retake
        </Link>
        <Link className="btn btn-outline" href="/">
          Home
        </Link>
        <button className="btn btn-primary" onClick={share}>
          Share
        </button>
        <Link
          className="btn btn-outline"
          href={`/shop?type=${encodeURIComponent(topKey)}&pet=${encodeURIComponent(petKind)}`}
        >
          Shop your result
        </Link>
      </div>
    </main>
  );
}
