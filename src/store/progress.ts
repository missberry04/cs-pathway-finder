import { create } from "zustand";
import { persist } from "zustand/middleware";

export function progressKey(pathwaySlug: string, milestoneId: string) {
  return `${pathwaySlug}:${milestoneId}`;
}
const key = progressKey;

type ProgressState = {
  completed: Record<string, true>;
  synced: boolean;
  toggle: (pathwaySlug: string, milestoneId: string, completed: boolean) => void;
  isCompleted: (pathwaySlug: string, milestoneId: string) => boolean;
  countCompleted: (pathwaySlug: string, milestoneIds: string[]) => number;
  hydrateFromServer: (items: { pathwaySlug: string; milestoneId: string }[]) => void;
  allLocalItems: () => { pathwaySlug: string; milestoneId: string }[];
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: {},
      synced: false,
      toggle: (pathwaySlug, milestoneId, completed) => {
        set((state) => {
          const next = { ...state.completed };
          const k = key(pathwaySlug, milestoneId);
          if (completed) next[k] = true;
          else delete next[k];
          return { completed: next };
        });
      },
      isCompleted: (pathwaySlug, milestoneId) => Boolean(get().completed[key(pathwaySlug, milestoneId)]),
      countCompleted: (pathwaySlug, milestoneIds) =>
        milestoneIds.filter((id) => get().completed[key(pathwaySlug, id)]).length,
      hydrateFromServer: (items) => {
        const next: Record<string, true> = {};
        for (const item of items) next[key(item.pathwaySlug, item.milestoneId)] = true;
        set({ completed: next, synced: true });
      },
      allLocalItems: () =>
        Object.keys(get().completed).map((k) => {
          const [pathwaySlug, milestoneId] = k.split(":");
          return { pathwaySlug, milestoneId };
        }),
    }),
    { name: "cs-pathway-progress" }
  )
);
