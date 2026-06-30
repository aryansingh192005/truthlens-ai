import {
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
  BadgeCheck,
} from "lucide-react";

export default function AnalysisResult({ result }) {
  if (!result) return null;

  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-slate-900/70 p-8">

      <div className="mb-10 flex items-center gap-4">

        <ShieldCheck
          size={48}
          className={
            result.prediction === "REAL"
              ? "text-green-400"
              : "text-red-400"
          }
        />

        <div>

          <h2 className="text-3xl font-bold text-white">
            Analysis Result
          </h2>

          <p className="text-slate-400">
            AI prediction and forensic summary.
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div
          className={`rounded-2xl p-6 ${
            result.prediction === "REAL"
              ? "border border-green-500/20 bg-green-500/10"
              : "border border-red-500/20 bg-red-500/10"
          }`}
        >

          <BadgeCheck
            size={36}
            className={
              result.prediction === "REAL"
                ? "text-green-400"
                : "text-red-400"
            }
          />

          <h3 className="mt-4 text-xl font-semibold text-white">
            Prediction
          </h3>

          <p
            className={`mt-2 text-4xl font-bold ${
              result.prediction === "REAL"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {result.prediction}
          </p>

        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

          <BrainCircuit
            size={36}
            className="text-blue-400"
          />

          <h3 className="mt-4 text-xl font-semibold text-white">
            Confidence
          </h3>

          <p className="mt-2 text-4xl font-bold text-blue-400">
            {result.confidence}
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

          <h3 className="text-lg font-semibold text-white">
            AI Model
          </h3>

          <p className="mt-2 text-slate-300">
            {result.model}
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

          <div className="flex items-center gap-3">

            <AlertTriangle
              size={24}
              className="text-yellow-400"
            />

            <h3 className="text-lg font-semibold text-white">
              Status
            </h3>

          </div>

          <p className="mt-2 text-slate-300">
            {result.status}
          </p>

        </div>

      </div>

    </section>
  );
}