"use client";

import { useState } from "react";
import Link from "next/link";
import { pathways } from "@/content/pathways";
import {
  BackgroundProfile,
  DEGREE_OPTIONS,
  EXPERIENCE_OPTIONS,
  URGENCY_OPTIONS,
  HOURS_OPTIONS,
  SKILL_OPTIONS,
  scorePathways,
  PathwayMatch,
} from "@/lib/recommender";

const DEFAULT_PROFILE: BackgroundProfile = {
  degreeField: "cs-related",
  experienceLevel: "none",
  hoursPerWeek: 10,
  urgency: "6-12-months",
  skills: [],
};

export function RecommenderQuiz() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<BackgroundProfile>(DEFAULT_PROFILE);
  const [results, setResults] = useState<PathwayMatch[] | null>(null);

  function toggleSkill(id: string) {
    setProfile((p) => ({
      ...p,
      skills: p.skills.includes(id) ? p.skills.filter((s) => s !== id) : [...p.skills, id],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResults(scorePathways(pathways, profile));
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg border border-dashed border-black/25 px-5 py-4 text-left text-sm hover:border-black/50 dark:border-white/25 dark:hover:border-white/50"
      >
        <span className="font-medium">🤔 Not sure which path fits you?</span>{" "}
        <span className="text-black/60 dark:text-white/60">
          Take a 60-second quiz (degree, experience, and time available) and we&apos;ll recommend a pathway using
          current job-market data. Fully optional.
        </span>
      </button>
    );
  }

  return (
    <div className="rounded-xl border border-black/10 p-6 dark:border-white/10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Find your pathway</h2>
        <button onClick={() => setOpen(false)} className="text-sm text-black/50 hover:underline dark:text-white/50">
          Close
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium">What&apos;s your educational background?</label>
          <select
            value={profile.degreeField}
            onChange={(e) => setProfile((p) => ({ ...p, degreeField: e.target.value as BackgroundProfile["degreeField"] }))}
            className="w-full rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
          >
            {DEGREE_OPTIONS.map((o) => (
              <option key={o.id} value={o.id} className="text-black dark:bg-neutral-900">
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Relevant work experience?</label>
          <select
            value={profile.experienceLevel}
            onChange={(e) => setProfile((p) => ({ ...p, experienceLevel: e.target.value as BackgroundProfile["experienceLevel"] }))}
            className="w-full rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
          >
            {EXPERIENCE_OPTIONS.map((o) => (
              <option key={o.id} value={o.id} className="text-black dark:bg-neutral-900">
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">How much time can you commit?</label>
          <select
            value={profile.hoursPerWeek}
            onChange={(e) => setProfile((p) => ({ ...p, hoursPerWeek: Number(e.target.value) }))}
            className="w-full rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
          >
            {HOURS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="text-black dark:bg-neutral-900">
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">How soon do you want a job?</label>
          <select
            value={profile.urgency}
            onChange={(e) => setProfile((p) => ({ ...p, urgency: e.target.value as BackgroundProfile["urgency"] }))}
            className="w-full rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20"
          >
            {URGENCY_OPTIONS.map((o) => (
              <option key={o.id} value={o.id} className="text-black dark:bg-neutral-900">
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Any skills you already have? (optional)</label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {SKILL_OPTIONS.map((s) => (
              <label key={s.id} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={profile.skills.includes(s.id)} onChange={() => toggleSkill(s.id)} />
                {s.label}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="self-start rounded-md bg-black px-5 py-2 text-sm font-medium text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
        >
          Get my recommendations
        </button>
      </form>

      {results && (
        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 dark:border-white/10">
          <h3 className="font-semibold">Your top matches</h3>
          {results.slice(0, 3).map((r, i) => (
            <div key={r.pathway.slug} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{r.pathway.icon}</span>
                  <Link href={`/pathways/${r.pathway.slug}`} className="font-medium hover:underline">
                    {i + 1}. {r.pathway.title}
                  </Link>
                </div>
                <span className="text-sm font-semibold">{r.score}% match</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10">
                <div className="h-1.5 rounded-full bg-black dark:bg-white" style={{ width: `${r.score}%` }} />
              </div>
              <ul className="mt-3 space-y-1 text-sm text-black/70 dark:text-white/70">
                {r.reasons.map((reason, idx) => (
                  <li key={idx}>• {reason}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
