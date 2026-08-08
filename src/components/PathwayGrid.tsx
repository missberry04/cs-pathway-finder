import { pathways } from "@/content/pathways";
import { PathwayCard } from "@/components/PathwayCard";

export function PathwayGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pathways.map((pathway) => (
        <PathwayCard key={pathway.slug} pathway={pathway} />
      ))}
    </div>
  );
}
