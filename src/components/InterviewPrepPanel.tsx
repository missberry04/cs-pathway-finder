import { InterviewPrep } from "@/content/types";

export function InterviewPrepPanel({ prep }: { prep: InterviewPrep }) {
  return (
    <div className="rounded-xl border border-black/10 p-6 dark:border-white/10">
      <h3 className="mb-4 text-lg font-semibold">Interview prep</h3>

      <div className="mb-5">
        <h4 className="mb-2 text-sm font-medium text-black/70 dark:text-white/70">Typical interview format</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {prep.format.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h4 className="mb-2 text-sm font-medium text-black/70 dark:text-white/70">What employers look for</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {prep.whatEmployersLookFor.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h4 className="mb-2 text-sm font-medium text-black/70 dark:text-white/70">Sample questions</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {prep.sampleQuestions.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-medium text-black/70 dark:text-white/70">Tips</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {prep.tips.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
