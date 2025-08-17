"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { QUIZ, type AnimalKey } from "../../../data/quiz";
import { byAudience, type AudienceKey } from "../../../data/products";
import { withAffiliateTag } from "../../../data/affiliates";
import { trackAffiliateClick } from "../../../lib/track";

type Totals = Record<AnimalKey, number>;
const KEYS: AnimalKey[] = ["owl", "fox", "wolf", "dolphin"];

// Map animal → product audiences
const ANIMAL_TO_AUDIENCE: Record<AnimalKey, AudienceKey[]> = {
  owl: ["focus", "structure"],
  fox: ["play"],
  wolf: ["structure"],
  dolphin: ["play", "focus"],
};

// Extend the base result type with optional rich fields
type BaseResult = (typeof QUIZ)["results"][number];
type RichFields = {
  traits?: string[];
  strengths?: string[];
  pitfalls?: string[];
  bestAt?: string[];
};
type ExtendedResult = BaseResult & RichFields;

export default function ResultClient() {
  const search = useSearchParams();
  const aParam = search.get("a") || "";
  const selected = aParam.split(",").filter(Boolean);

  // Pet answer (non-scoring)
  const petIndex = QUIZ.questions.findIndex((q) => q.id === "pet");
  const petAnswerId = petIndex >= 0 ? selected[petIndex] : undefined;
  const petKind: "dog" | "cat" | "multi" | "none" =
    petAnswerId === "a" ? "dog" :
    petAnswerId === "b" ? "cat" :
    petAnswerId === "c" ? "multi" : "none";

  // Score
  const { order, percents } = useMemo(() => {
    const t: Totals = { owl: 0, fox: 0, wolf: 0, dolphin: 0 };

    QUIZ.questions.forEach((q, idx) => {
      const picked = selected[idx];
      const ans = q.answers.find((a) => a.id === picked);
      if (!ans?.weights) return;
      KEYS.forEach((k) => { t[k] += ans.weights?.[k] ?? 0; });
    });

    const sum = Math.max(1, KEYS.reduce((s, k) => s + t[k], 0));
    const perc: Record<AnimalKey, number> = {
      owl: Math.round((t.owl / sum) * 100),
      fox: Math.round((t.fox / sum) * 100),
      wolf: Math.round((t.wolf / sum) * 100),
      dolphin: Math.round((t.dolphin / sum) * 100),
    };

    const ord = [...KEYS].sort((a, b) => t[b] - t[a]);
    return { order: ord, percents: perc };
  }, [selected]);

  const topKey = order[0] ?? "owl";
  const runnerUpKey = order[1] ?? "fox";

  const main = (QUIZ.results.find((r) => r.weightKey === topKey) ?? QUIZ.results[0]) as ExtendedResult;
  const runner = (QUIZ.results.find((r) => r.weightKey === runnerUpKey) ?? QUIZ.results[0]) as ExtendedResult;

  // Catalog picks (general + optional pet)
  const baseAudiences = ANIMAL_TO_AUDIENCE[topKey] ?? ["focus"];
  const petAudience: AudienceKey | null =
    petKind === "dog" ? "dogs" : petKind === "cat" ? "cats" : petKind === "multi" ? "multi" : null;

  const generalPicks = byAudience(baseAudiences).slice(0, 6);
  const petPicks = petAudience ? byAudience([petAudience]).slice(0, 6) : [];

  const shareText = `I’m "${main.label}" (${percents[topKey]}%) with a dash of "${runner.label}" (${percents[runnerUpKey]}%). Which animal are you?`;
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/quiz` : "";
  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Animal Archetype", text: shareText, url: shareUrl });
      } else {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
          "_blank"
        );
      }
    } catch { /* no-op */ }
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

      {/* Snapshot traits (optional if present) */}
      {!!main.traits?.length && (
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Snapshot</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {main.traits!.map((t: string, i: number) => (
                <span
                  key={i}
                  className="inline-flex items-center text-xs font-medium rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

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

      {/* Strengths / Watch-outs */}
      <div className="grid sm:grid-cols-2 gap-3">
        {!!main.strengths?.length && (
          <div className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Strengths</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                {main.strengths!.map((s: string, i: number) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          </div>
        )}
        {!!main.pitfalls?.length && (
          <div className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Watch-outs</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
                {main.pitfalls!.map((p: string, i: number) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>

      {!!main.bestAt?.length && (
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">You’re best at</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {main.bestAt!.map((b: string, i: number) => (
                <span
                  key={i}
                  className="inline-flex items-center text-xs font-medium rounded-full px-3 py-1 bg-indigo-50 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recommended gear (tracked + tagged) */}
      <div className="card">
        <div className="card-body">
          <h3 className="text-lg font-semibold">Recommended Gear for {main.label}</h3>
          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {generalPicks.map((p) => (
              <a
                key={p.id}
                href={withAffiliateTag(p.href)}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="choice no-underline"
                onClick={() => trackAffiliateClick({ id: p.id, vendor: p.vendor, title: p.title })}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-medium">{p.title}</div>
                    {p.note && <div className="text-xs text-slate-500">{p.note}</div>}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-600 text-white">View</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Conditional: pet picks (tracked + tagged) */}
      {!!petAudience && (
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">For your {petKind === "multi" ? "pets" : petKind}</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              {petPicks.map((p) => (
                <a
                  key={p.id}
                  href={withAffiliateTag(p.href)}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="choice no-underline"
                  onClick={() => trackAffiliateClick({ id: p.id, vendor: p.vendor, title: p.title })}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-medium">{p.title}</div>
                      {p.note && <div className="text-xs text-slate-500">{p.note}</div>}
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-600 text-white">View</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Link className="btn btn-outline" href="/quiz">Retake</Link>
        <Link className="btn btn-outline" href="/">Home</Link>
        <button className="btn btn-primary" onClick={share}>Share</button>
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
