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
  Focus,
  HardDrive,
  ShieldAlert,
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

      <div className="mt-10">

        <h3 className="mb-6 text-2xl font-bold text-white">
          Forensic Analysis Dashboard
        </h3>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <Card icon={ScanFace} color="text-cyan-400" title="Face Detection">
            <p>Faces: {result.face_count}</p>
            <p>{result.faces_detected ? "Detected" : "Not Detected"}</p>
          </Card>

          <Card icon={Image} color="text-purple-400" title="Metadata">
            <p>{result.image_width} × {result.image_height}</p>
            <p>{result.image_format}</p>
            <p>{result.color_mode}</p>
          </Card>

          <Card icon={Info} color="text-orange-400" title="Image Quality">
            <p>Sharpness: {result.sharpness}</p>
            <p>Brightness: {result.brightness}</p>
          </Card>

          <Card icon={Waves} color="text-cyan-400" title="Noise Analysis">
            <p>Noise: {result.noise_level}</p>
          </Card>

          <Card icon={Activity} color="text-red-400" title="Edge Analysis">
            <p>Edges: {result.edge_pixels}</p>
          </Card>

          <Card icon={Palette} color="text-pink-400" title="Color Analysis">
            <p>R: {result.mean_red}</p>
            <p>G: {result.mean_green}</p>
            <p>B: {result.mean_blue}</p>
          </Card>

          <Card icon={BarChart3} color="text-green-400" title="Histogram">
            <p>Mean: {result.histogram_mean}</p>
            <p>Std: {result.histogram_std}</p>
          </Card>

          <Card icon={Focus} color="text-blue-400" title="Blur Detection">
            <p>Blur Score: {result.blur_score}</p>
          </Card>

          <Card icon={HardDrive} color="text-yellow-400" title="Compression">
            <p>{result.file_size_kb} KB</p>
            <p>{result.extension}</p>
          </Card>

          <Card icon={ShieldAlert} color="text-red-500" title="Risk Score">
            <p className="text-2xl font-bold">
              {result.risk_score}/100
            </p>

            <p>{result.risk_level} Risk</p>
          </Card>

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

function Card({ icon: Icon, color, title, children }) {
  return (
    <div className="rounded-2xl bg-slate-800 p-6">
      <Icon size={32} className={`mb-3 ${color}`} />

      <h3 className="mb-3 font-semibold text-white">
        {title}
      </h3>

      <div className="space-y-1 text-slate-300">
        {children}
      </div>
    </div>
  );
}