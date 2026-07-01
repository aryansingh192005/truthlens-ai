import {
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
  BadgeCheck,
  ScanFace,
  Image,
  Info,
  Waves,
  Palette,
  Activity,
  BarChart3,
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
          <BrainCircuit size={36} className="text-blue-400" />

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
            <AlertTriangle size={24} className="text-yellow-400" />

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
          <ScanFace size={32} className="mb-3 text-cyan-400" />

          <h3 className="font-semibold text-white">
            Face Detection
          </h3>

          <p className="mt-2 text-slate-300">
            Faces: {result.face_count}
          </p>

          <p className="text-slate-400">
            {result.faces_detected ? "Detected" : "Not Detected"}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <Image size={32} className="mb-3 text-purple-400" />

          <h3 className="font-semibold text-white">
            Image Metadata
          </h3>

          <p className="mt-2 text-slate-300">
            {result.image_width} × {result.image_height}
          </p>

          <p className="text-slate-400">
            {result.image_format}
          </p>

          <p className="text-slate-400">
            {result.color_mode}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <Info size={32} className="mb-3 text-orange-400" />

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

          <Waves size={32} className="mb-3 text-cyan-400" />

          <h3 className="font-semibold text-white">
            Noise Analysis
          </h3>

          <p className="mt-2 text-slate-300">
            Noise Level: {result.noise_level}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <Activity size={32} className="mb-3 text-red-400" />

          <h3 className="font-semibold text-white">
            Edge Analysis
          </h3>

          <p className="mt-2 text-slate-300">
            Edge Pixels: {result.edge_pixels}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <Palette size={32} className="mb-3 text-pink-400" />

          <h3 className="font-semibold text-white">
            Color Analysis
          </h3>

          <p className="mt-2 text-slate-300">
            R: {result.mean_red}
          </p>

          <p className="text-slate-300">
            G: {result.mean_green}
          </p>

          <p className="text-slate-300">
            B: {result.mean_blue}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6">

          <BarChart3 size={32} className="mb-3 text-green-400" />

          <h3 className="font-semibold text-white">
            Histogram
          </h3>

          <p className="mt-2 text-slate-300">
            Mean: {result.histogram_mean}
          </p>

          <p className="text-slate-300">
            Std: {result.histogram_std}
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