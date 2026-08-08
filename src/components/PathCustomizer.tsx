"use client";

import { useMemo, useState } from "react";
import { Pathway } from "@/content/types";
import { HOURS_OPTIONS } from "@/lib/recommender";

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + Math.round(days));
  return d;
}

function formatDate(d: Date) {
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function monthLabel(d: Date) {
  return d.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

type TimelineRow = {
  phaseId: string;
  phaseTitle: string;
  milestoneTitle: string;
  start: Date;
  end: Date;
  skipped: boolean;
};

export function PathCustomizer({ pathway }: { pathway: Pathway }) {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [skippedPhaseIds, setSkippedPhaseIds] = useState<Set<string>>(new Set());

  const paceFactor = 10 / Math.max(hoursPerWeek, 1);

  const rows = useMemo<TimelineRow[]>(() => {
    let cursor = new Date();
    const result: TimelineRow[] = [];
    for (const phase of pathway.phases) {
      const skipped = skippedPhaseIds.has(phase.id);
      for (const m of phase.milestones) {
        const start = new Date(cursor);
        let end = start;
        if (!skipped) {
          const avgWeeks = ((m.estWeeks[0] + m.estWeeks[1]) / 2) * paceFactor;
          cursor = addDays(cursor, avgWeeks * 7);
          end = new Date(cursor);
        }
        result.push({ phaseId: phase.id, phaseTitle: phase.title, milestoneTitle: m.title, start, end, skipped });
      }
    }
    return result;
  }, [pathway, paceFactor, skippedPhaseIds]);

  const activeRows = rows.filter((r) => !r.skipped);
  const targetDate = activeRows.length ? activeRows[activeRows.length - 1].end : new Date();
  const totalWeeks = activeRows.length ? Math.round((targetDate.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000)) : 0;

  const grouped = useMemo(() => {
    const map = new Map<string, TimelineRow[]>();
    for (const row of activeRows) {
      const label = monthLabel(row.start);
      if (!map.has(label)) map.set(label, []);
      map.get(label)!.push(row);
    }
    return Array.from(map.entries());
  }, [activeRows]);

  function toggleSkip(phaseId: string) {
    setSkippedPhaseIds((prev) => {
      const next = new Set(prev);
      if (next.has(phaseId)) next.delete(phaseId);
      else next.add(phaseId);
      return next;
    });
  }

  return (
    <div className="rounded-xl border border-black/10 p-6 dark:border-white/10">
      <h3 className="mb-1 text-lg font-semibold">Customize your plan</h3>
      <p className="mb-5 text-sm text-black/60 dark:text-white/60">
        Set your available time and mark anything you already know — we&apos;ll generate a calendar timeline.
      </p>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium">Time available</label>
        <select
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(Number(e.target.value))}
          className="w-full rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm dark:border-white/20 sm:w-auto"
        >
          {HOURS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} className="text-black dark:bg-neutral-900">
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">Already have background in... (optional, skips the phase)</label>
        <div className="flex flex-col gap-2">
          {pathway.phases.map((phase) => (
            <label key={phase.id} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={skippedPhaseIds.has(phase.id)}
                onChange={() => toggleSkip(phase.id)}
              />
              {phase.title}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6 rounded-lg bg-black/5 p-4 text-sm dark:bg-white/10">
        At ~{hoursPerWeek} hrs/week, you&apos;d be done around{" "}
        <strong>{formatDate(targetDate)}</strong> (~{Math.max(totalWeeks, 0)} weeks from today).
      </div>

      <div className="flex flex-col gap-5">
        {grouped.map(([label, monthRows]) => (
          <div key={label}>
            <h4 className="mb-2 text-sm font-semibold text-black/70 dark:text-white/70">{label}</h4>
            <ul className="flex flex-col gap-1.5 border-l border-black/10 pl-4 dark:border-white/10">
              {monthRows.map((row, i) => (
                <li key={`${row.phaseId}-${i}`} className="text-sm">
                  <span className="text-black/50 dark:text-white/50">{formatDate(row.end)} — </span>
                  {row.milestoneTitle}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {skippedPhaseIds.size > 0 && (
          <p className="text-xs text-black/50 dark:text-white/50">
            Skipped: {pathway.phases.filter((p) => skippedPhaseIds.has(p.id)).map((p) => p.title).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
