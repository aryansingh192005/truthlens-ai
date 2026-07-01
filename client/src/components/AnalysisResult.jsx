import {
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
  BadgeCheck,
  ScanFace,
  Image,
  Info,
  Waves,
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
            AI prediction and complete forensic report.
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

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-slate-800 p-6">

          <ScanFace
            className="mb-3 text-cyan-400"
            size={32}
          />

          <h3 className="font-semibold text-white">
            Face Detection
          </h3>

          <p className="mt-2 text-slate-300">
            Faces Detected: {result.face_count}
          </p>

          <p className="text-slate-400">
            {result.faces_detected ? "Yes" : "No"}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <Image
            className="mb-3 text-purple-400"
            size={32}
          />

          <h3 className="font-semibold text-white">
            Image Metadata
          </h3>

          <p className="mt-2 text-slate-300">
            {result.image_width} × {result.image_height}
          </p>

          <p className="text-slate-400">
            {result.image_format} • {result.color_mode}
          </p>

          <p className="text-slate-400">
            EXIF Entries: {result.metadata_entries}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <Info
            className="mb-3 text-orange-400"
            size={32}
          />

          <h3 className="font-semibold text-white">
            Image Quality
          </h3>

          <p className="mt-2 text-slate-300">
            Sharpness: {result.sharpness}
          </p>

          <p className="text-slate-300">
            Brightness: {result.brightness}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <Waves
            className="mb-3 text-cyan-400"
            size={32}
          />

          <h3 className="font-semibold text-white">
            Noise Analysis
          </h3>

          <p className="mt-2 text-slate-300">
            Noise Level: {result.noise_level}
          </p>

        </div>

      </div>

      {result.ela_image && (

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-800 p-8">

          <h3 className="mb-6 text-2xl font-bold text-white">
            Error Level Analysis (ELA)
          </h3>

          <img
            src={result.ela_image}
            alt="ELA Output"
            className="mx-auto rounded-2xl border border-white/10"
          />

          <p className="mt-6 text-center text-slate-300">
            Maximum Difference: {result.ela_max_difference}
          </p>

        </div>

      )}

    </section>
  );
}