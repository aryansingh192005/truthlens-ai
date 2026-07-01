export default function AnalysisSummary({ result }) {
  if (!result) return null;

  return (
    <div className="rounded-3xl bg-slate-800 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        AI Analysis Summary
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-sm text-slate-400">
            Report ID
          </p>

          <p className="text-white font-medium">
            {result.report_id}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Generated At
          </p>

          <p className="text-white">
            {new Date(result.generated_at).toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            AI Explanation
          </p>

          <p className="mt-2 leading-7 text-slate-300">
            {result.ai_summary}
          </p>
        </div>

      </div>

    </div>
  );
}