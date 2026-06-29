export default function ResultCard({ result }) {
  if (!result) return null;

  const isReal = result.prediction === "REAL";

  return (
    <div className="mt-10 w-full rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

        <h3 className="text-3xl font-bold text-white">
          AI Analysis Report
        </h3>

        <span
          className={`rounded-full px-5 py-2 text-sm font-bold ${
            isReal
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {result.prediction}
        </span>

      </div>

      {/* Confidence */}

      <div className="mb-8">

        <div className="mb-3 flex justify-between text-white">
          <span>Confidence</span>
          <span>{result.confidence}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-700">

          <div
            className={`h-full rounded-full transition-all duration-700 ${
              isReal ? "bg-green-500" : "bg-red-500"
            }`}
            style={{
              width: `${result.confidence}%`,
            }}
          />

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-800 p-6">

          <p className="text-sm text-slate-400">
            Risk Level
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {result.risk_level}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <p className="text-sm text-slate-400">
            Processing Time
          </p>

          <p className="mt-3 text-3xl font-bold text-white">
            {result.processing_time_ms} ms
          </p>

        </div>

      </div>

    </div>
  );
}