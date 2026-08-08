import { PathwayGrid } from "@/components/PathwayGrid";
import { RecommenderQuiz } from "@/components/RecommenderQuiz";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-14">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Your exact roadmap into any CS career.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-black/60 dark:text-white/60">
          Step-by-step pathways (what to learn, which courses to take, where to practice) with realistic timelines,
          job-market stats, and interview prep. No account needed to use it.
        </p>
      </section>

      <section className="mb-14">
        <RecommenderQuiz />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Choose a pathway</h2>
        <PathwayGrid />
      </section>
    </div>
  );
}
