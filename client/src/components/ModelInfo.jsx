import { Brain, Cpu, ImageIcon, Activity } from "lucide-react";

export default function ModelInfo() {
  const model = {
    name: "CommunityForensics Deepfake Detector",
    framework: "Hugging Face Transformers",
    input: "Image",
    version: "v1.0",
    status: "Online",
  };

  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">
        <Brain className="text-blue-400" size={28} />

        <h3 className="text-2xl font-bold text-white">
          AI Model Information
        </h3>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-5">
          <Cpu className="text-cyan-400" />

          <div>
            <p className="text-sm text-slate-400">
              Model
            </p>

            <p className="font-semibold text-white">
              {model.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-5">
          <Activity className="text-green-400" />

          <div>
            <p className="text-sm text-slate-400">
              Framework
            </p>

            <p className="font-semibold text-white">
              {model.framework}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-5">
          <ImageIcon className="text-purple-400" />

          <div>
            <p className="text-sm text-slate-400">
              Input Type
            </p>

            <p className="font-semibold text-white">
              {model.input}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-5">
          <Brain className="text-yellow-400" />

          <div>
            <p className="text-sm text-slate-400">
              Status
            </p>

            <p className="font-semibold text-green-400">
              {model.status}
            </p>
          </div>
        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
        <p className="text-sm leading-7 text-slate-300">
          This prediction was generated using a pretrained deepfake detection model.
          In upcoming versions of TruthLens AI, users will be able to compare
          predictions from multiple AI models for improved reliability.
        </p>
      </div>

    </div>
  );
}