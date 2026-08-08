"use client";

import { useCallback } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useProgressStore } from "@/store/progress";

export function useMilestoneToggle() {
  const { user } = useAuth();
  const toggle = useProgressStore((s) => s.toggle);

  return useCallback(
    (pathwaySlug: string, milestoneId: string, completed: boolean) => {
      toggle(pathwaySlug, milestoneId, completed);
      if (user) {
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pathwaySlug, milestoneId, completed }),
        }).catch(() => {});
      }
    },
    [toggle, user]
  );
}
