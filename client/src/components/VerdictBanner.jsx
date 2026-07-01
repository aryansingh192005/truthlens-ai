import {
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

export default function VerdictBanner({ result }) {
  if (!result) return null;

  const real = result.prediction === "REAL";

  return (
    <div
      className={`mb-8 rounded-3xl border p-8 ${
        real
          ? "border-green-500/30 bg-green-500/10"
          : "border-red-500/30 bg-red-500/10"
      }`}
    >
      <div className="flex items-center gap-4">

        {real ? (
          <ShieldCheck
            size={50}
            className="text-green-400"
          />
        ) : (
          <ShieldAlert
            size={50}
            className="text-red-400"
          />
        )}

        <div>

          <h2
            className={`text-3xl font-bold ${
              real
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {real
              ? "Authentic Image"
              : "Possible Deepfake"}
          </h2>

          <p className="mt-2 text-slate-300">
            AI Confidence: {result.confidence}
          </p>

        </div>

      </div>
    </div>
  );
}