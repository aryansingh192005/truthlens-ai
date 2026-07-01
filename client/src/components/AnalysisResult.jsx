import VerdictBanner from "./VerdictBanner";
import RiskGauge from "./RiskGauge";
import TrustScore from "./TrustScore";
import ImageComparison from "./ImageComparison";
import AnalysisSummary from "./AnalysisSummary";
import ReportActions from "./ReportActions";

import {
  BrainCircuit,
  ScanFace,
  Image,
  Activity,
  Palette,
  BarChart3,
  Waves,
  Focus,
  HardDrive,
} from "lucide-react";

export default function AnalysisResult({ result }) {
  if (!result) return null;

  return (
    <section className="mt-12 space-y-8">

      <VerdictBanner result={result} />

      <div className="grid gap-6 lg:grid-cols-3">

        <RiskGauge score={result.risk_score} />

        <TrustScore result={result} />

        <div className="rounded-3xl bg-slate-800 p-8">

          <BrainCircuit size={40} className="text-blue-400" />

          <h3 className="mt-4 text-xl font-bold text-white">
            AI Model
          </h3>

          <p className="mt-3 text-slate-300">
            {result.model}
          </p>

          <p className="mt-5 text-4xl font-bold text-blue-400">
            {result.confidence}
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        <MetricCard icon={ScanFace} title="Faces" value={result.face_count} subtitle={result.faces_detected ? "Detected" : "Not Detected"} color="text-cyan-400" />

        <MetricCard icon={Image} title="Metadata" value={`${result.image_width} × ${result.image_height}`} subtitle={result.image_format} color="text-purple-400" />

        <MetricCard icon={Activity} title="Sharpness" value={result.sharpness} subtitle={`Brightness ${result.brightness}`} color="text-orange-400" />

        <MetricCard icon={Waves} title="Noise" value={result.noise_level} subtitle="Noise Level" color="text-cyan-400" />

        <MetricCard icon={Focus} title="Blur" value={result.blur_score} subtitle="Variance" color="text-blue-400" />

        <MetricCard icon={Palette} title="RGB" value={`R ${result.mean_red}`} subtitle={`G ${result.mean_green} • B ${result.mean_blue}`} color="text-pink-400" />

        <MetricCard icon={BarChart3} title="Histogram" value={result.histogram_mean} subtitle={`Std ${result.histogram_std}`} color="text-green-400" />

        <MetricCard icon={Activity} title="Edges" value={result.edge_pixels} subtitle="Detected" color="text-red-400" />

        <MetricCard icon={HardDrive} title="File Size" value={`${result.file_size_kb} KB`} subtitle={result.extension} color="text-yellow-400" />

        <MetricCard icon={BrainCircuit} title="Status" value={result.status} subtitle={result.prediction} color="text-indigo-400" />

      </div>

      <AnalysisSummary result={result} />

      <ReportActions result={result} />

      <ImageComparison result={result} />

    </section>
  );
}

function MetricCard({ icon: Icon, title, value, subtitle, color }) {
  return (
    <div className="rounded-3xl bg-slate-800 p-6">

      <Icon size={30} className={color} />

      <h3 className="mt-4 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}