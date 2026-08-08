import { JobStats } from "@/content/types";

const EXPERIENCE_LEVEL_DISPLAY: Record<JobStats["experienceLevel"], { label: string; badgeClass: string }> = {
  "entry-level": {
    label: "Good first tech job: no experience required",
    badgeClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  "some-experience-helpful": {
    label: "Doable as a first job, but some experience helps",
    badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  "requires-experience": {
    label: "Typically requires prior professional experience",
    badgeClass: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
  },
};

export function StatsPanel({ stats }: { stats: JobStats }) {
  const experience = EXPERIENCE_LEVEL_DISPLAY[stats.experienceLevel];

  return (
    <div className="rounded-xl border border-black/10 p-6 dark:border-white/10">
      <h3 className="mb-4 text-lg font-semibold">Job market & pay</h3>

      <span className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${experience.badgeClass}`}>
        {experience.label}
      </span>

      <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
        <Stat label="Median salary" value={stats.medianSalaryUSD} />
        <Stat label="Entry salary" value={stats.entrySalaryUSD} />
        <Stat label="Growth outlook" value={stats.growthOutlook} />
        <Stat label="Demand" value={stats.demandLevel} className="capitalize" />
        <Stat label="Competitiveness" value={stats.competitiveness} className="capitalize" />
        <Stat label="Time to job-ready" value={`${stats.typicalTimeToJobReadyMonths[0]}–${stats.typicalTimeToJobReadyMonths[1]} months`} />
      </dl>
      <p className="mt-4 text-sm text-black/60 dark:text-white/60">{stats.demandNotes}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stats.commonTitles.map((title) => (
          <span key={title} className="rounded-full bg-black/5 px-3 py-1 text-xs dark:bg-white/10">
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div>
      <dt className="text-xs text-black/50 dark:text-white/50">{label}</dt>
      <dd className={`font-medium ${className}`}>{value}</dd>
    </div>
  );
}
