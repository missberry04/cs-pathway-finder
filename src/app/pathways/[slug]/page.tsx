import { notFound } from "next/navigation";
import { getPathway, pathways } from "@/content/pathways";
import { RoadmapSection } from "@/components/RoadmapSection";
import { StatsPanel } from "@/components/StatsPanel";
import { InterviewPrepPanel } from "@/components/InterviewPrepPanel";
import { PathCustomizer } from "@/components/PathCustomizer";

export function generateStaticParams() {
  return pathways.map((p) => ({ slug: p.slug }));
}

export default async function PathwayPage(props: PageProps<"/pathways/[slug]">) {
  const { slug } = await props.params;
  const pathway = getPathway(slug);
  if (!pathway) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 flex items-start gap-4">
        <div className="text-4xl">{pathway.icon}</div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{pathway.title}</h1>
          <p className="mt-1 text-black/60 dark:text-white/60">{pathway.tagline}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <div className="order-2 lg:order-1">
          <h2 className="mb-4 text-xl font-semibold">Roadmap</h2>
          <RoadmapSection pathway={pathway} />
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <PathCustomizer pathway={pathway} />
          <StatsPanel stats={pathway.stats} />
          <InterviewPrepPanel prep={pathway.interviewPrep} />
        </div>
      </div>
    </div>
  );
}
