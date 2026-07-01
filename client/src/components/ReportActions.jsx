import DownloadCard from "./DownloadCard";

export default function ReportActions({ result }) {
  if (!result) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-2">

      <DownloadCard result={result} />

      <div className="rounded-3xl bg-slate-800 p-8">

        <h2 className="text-2xl font-bold text-white">
          Report Information
        </h2>

        <div className="mt-6 space-y-3 text-slate-300">

          <p>
            <strong>Prediction:</strong>{" "}
            {result.prediction}
          </p>

          <p>
            <strong>Confidence:</strong>{" "}
            {result.confidence}
          </p>

          <p>
            <strong>Risk Level:</strong>{" "}
            {result.risk_level}
          </p>

          <p>
            <strong>Trust Score:</strong>{" "}
            {100 - result.risk_score}
          </p>

        </div>

      </div>

    </div>
  );
}