"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { QUIZ, type AnimalKey } from "../../data/quiz";
import { byAudience, type AudienceKey } from "../../data/products";

const ANIMAL_TO_AUDIENCE: Record<AnimalKey, AudienceKey[]> = {
  owl: ["focus", "structure"],
  fox: ["play"],
  wolf: ["structure"],
  dolphin: ["play", "focus"],
};

export default function ShopClient() {
  const search = useSearchParams();
  const animal = (search.get("type") as AnimalKey) || "owl"; // 'owl' | 'fox' | 'wolf' | 'dolphin'
  const pet = (search.get("pet") as "dog" | "cat" | "multi" | "none") || "none";

  const baseAudiences = ANIMAL_TO_AUDIENCE[animal] ?? ["focus"];
  const petKey: AudienceKey | null =
    pet === "dog" ? "dogs" : pet === "cat" ? "cats" : pet === "multi" ? "multi" : null;

  const audiences = petKey ? [...baseAudiences, petKey] : baseAudiences;
  const filtered = byAudience(audiences);

  const resultMeta = QUIZ.results.find(r => r.weightKey === animal) ?? QUIZ.results[0];

  return (
    <main className="container space-y-6">
      {/* Hero */}
      <div className="card" style={{ boxShadow: "var(--shadow-soft)" }}>
        <div className="card-body">
          <div className="text-xs text-slate-500">Shop</div>
        <h1 className="text-3xl font-extrabold mt-1">
            Gear for {resultMeta.label}
          </h1>
          <p className="text-slate-600 mt-2">
            Curated picks based on your quiz result{petKey ? " and your pet" : ""}.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="card">
        <div className="card-body">
          <div className="grid sm:grid-cols-2 gap-3">
            {filtered.map(p => (
              <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" className="choice no-underline">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-medium">{p.title}</div>
                    {p.note && <div className="text-xs text-slate-500">{p.note}</div>}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-600 text-white">
                    View
                  </span>
                </div>
              </a>
            ))}
            {filtered.length === 0 && (
              <div className="text-sm text-slate-500">
                No matches yet. Try another result or remove the pet filter.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex gap-3">
        <Link className="btn btn-outline" href="/quiz">Back to quiz</Link>
        <Link className="btn btn-outline" href="/">Home</Link>
      </div>
    </main>
  );
}
