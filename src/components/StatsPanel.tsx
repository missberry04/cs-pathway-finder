import { JobStats } from "@/content/types";

export function StatsPanel({ stats }: { stats: JobStats }) {
  return (
    <div className="rounded-xl border border-black/10 p-6 dark:border-white/10">
      <h3 className="mb-4 text-lg font-semibold">Job market & pay</h3>
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
