import Link from "next/link";
import { Pathway } from "@/content/types";

const EXPERIENCE_BADGE: Record<Pathway["stats"]["experienceLevel"], string> = {
  "entry-level": "🎓 Entry-level friendly",
  "some-experience-helpful": "🧭 Some experience helps",
  "requires-experience": "⚠️ Needs prior experience",
};

export function PathwayCard({ pathway }: { pathway: Pathway }) {
  return (
    <Link
      href={`/pathways/${pathway.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-black/10 p-5 transition hover:border-black/30 hover:shadow-sm dark:border-white/10 dark:hover:border-white/30"
    >
      <div className="text-3xl">{pathway.icon}</div>
      <div>
        <h3 className="font-semibold group-hover:underline">{pathway.title}</h3>
        <p className="mt-1 text-sm text-black/60 dark:text-white/60">{pathway.tagline}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs text-black/50 dark:text-white/50">
        <span>{EXPERIENCE_BADGE[pathway.stats.experienceLevel]}</span>
        <span>💰 {pathway.stats.entrySalaryUSD} entry</span>
        <span>⏱ {pathway.stats.typicalTimeToJobReadyMonths[0]}–{pathway.stats.typicalTimeToJobReadyMonths[1]} mo</span>
        <span>📈 {pathway.stats.demandLevel} demand</span>
      </div>
    </Link>
  );
}
