import { PathwayGrid } from "@/components/PathwayGrid";

export const metadata = { title: "All pathways | PathwayCS" };

export default function PathwaysPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">All pathways</h1>
      <p className="mb-8 text-black/60 dark:text-white/60">Pick a field to see the full roadmap.</p>
      <PathwayGrid />
    </div>
  );
}
