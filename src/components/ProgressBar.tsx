export function ProgressBar({ value }: { value: number }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div className="h-2 w-full rounded-full bg-black/10 dark:bg-white/10">
      <div className="h-2 rounded-full bg-black transition-all dark:bg-white" style={{ width: `${pct}%` }} />
    </div>
  );
}
