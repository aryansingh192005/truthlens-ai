import ConfidenceGauge from "./ConfidenceGauge";
import ModelInfo from "./ModelInfo";
import ForensicReport from "./ForensicReport";
import PDFReportButton from "./PDFReportButton";

export default function ResultCard({ result }) {
  if (!result) return null;

  const isReal = result.prediction === "REAL";

  return (
    <>
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

        <div className="mb-8 grid gap-8 lg:grid-cols-2 lg:items-center">

          <div className="flex justify-center">

            <ConfidenceGauge
              confidence={result.confidence}
              prediction={result.prediction}
            />

          </div>

          <div className="space-y-6">

            <div className="rounded-2xl bg-slate-800 p-5">

              <p className="text-sm text-slate-400">
                AI Model
              </p>

              <p className="mt-2 text-xl font-semibold text-white">
                {result.model}
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-slate-800 p-5">

                <p className="text-sm text-slate-400">
                  Prediction
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  {result.prediction}
                </p>

              </div>

              <div className="rounded-2xl bg-slate-800 p-5">

                <p className="text-sm text-slate-400">
                  Confidence
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  {result.confidence}%
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-8 flex justify-center">

          <PDFReportButton result={result} />

        </div>

      </div>

      <ForensicReport forensics={result.forensics} />

      <ModelInfo />

    </>
  );
}