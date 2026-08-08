import { Milestone } from "@/content/types";

const RESOURCE_TYPE_LABEL: Record<Milestone["resources"][number]["type"], string> = {
  course: "Course",
  practice: "Practice",
  reading: "Reading",
  tool: "Tool",
  cert: "Certification",
};

export function MilestoneItem({
  milestone,
  completed,
  onToggle,
}: {
  milestone: Milestone;
  completed: boolean;
  onToggle: (completed: boolean) => void;
}) {
  return (
    <div className="flex gap-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onToggle(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0"
        aria-label={`Mark "${milestone.title}" as complete`}
      />
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h4 className={`font-medium ${completed ? "line-through text-black/40 dark:text-white/40" : ""}`}>
            {milestone.title}
          </h4>
          <span className="text-xs text-black/50 dark:text-white/50">
            ~{milestone.estWeeks[0]}–{milestone.estWeeks[1]} weeks
          </span>
        </div>
        <p className="mt-1 text-sm text-black/60 dark:text-white/60">{milestone.description}</p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {milestone.resources.map((r) => (
            <li key={r.url} className="text-sm">
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                {r.title}
              </a>{" "}
              <span className="text-black/50 dark:text-white/50">
                — {r.provider} · {RESOURCE_TYPE_LABEL[r.type]} · {r.free ? "Free" : "Paid"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
