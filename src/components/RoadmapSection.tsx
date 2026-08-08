"use client";

import { Pathway } from "@/content/types";
import { useProgressStore, progressKey } from "@/store/progress";
import { useMilestoneToggle } from "@/hooks/useMilestoneToggle";
import { MilestoneItem } from "@/components/MilestoneItem";
import { ProgressBar } from "@/components/ProgressBar";

export function RoadmapSection({ pathway }: { pathway: Pathway }) {
  const toggle = useMilestoneToggle();
  const completedMap = useProgressStore((s) => s.completed);

  const isDone = (milestoneId: string) => Boolean(completedMap[progressKey(pathway.slug, milestoneId)]);

  const allMilestoneIds = pathway.phases.flatMap((p) => p.milestones.map((m) => m.id));
  const totalCompleted = allMilestoneIds.filter(isDone).length;

  return (
    <div>
      <div className="mb-8">
        <div className="mb-1 flex justify-between text-sm">
          <span className="font-medium">Overall progress</span>
          <span className="text-black/60 dark:text-white/60">
            {totalCompleted}/{allMilestoneIds.length} milestones
          </span>
        </div>
        <ProgressBar value={allMilestoneIds.length ? totalCompleted / allMilestoneIds.length : 0} />
      </div>

      <div className="flex flex-col gap-10">
        {pathway.phases.map((phase, idx) => {
          const phaseIds = phase.milestones.map((m) => m.id);
          const phaseCompleted = phaseIds.filter(isDone).length;
          return (
            <div key={phase.id}>
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">
                  {idx + 1}. {phase.title}
                </h3>
                <span className="whitespace-nowrap text-xs text-black/50 dark:text-white/50">
                  {phaseCompleted}/{phaseIds.length} complete
                </span>
              </div>
              <p className="mb-4 text-sm text-black/60 dark:text-white/60">{phase.summary}</p>
              <div className="flex flex-col gap-3">
                {phase.milestones.map((m) => (
                  <MilestoneItem
                    key={m.id}
                    milestone={m}
                    completed={isDone(m.id)}
                    onToggle={(completed) => toggle(pathway.slug, m.id, completed)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
