import { Rocket, CheckCircle2 } from "lucide-react";

export default function FutureRoadmap() {
  const roadmap = [
    "Video Deepfake Detection",
    "Audio Deepfake Detection",
    "Batch Image Analysis",
    "Drag & Drop Multiple Files",
    "AI Heatmap Visualization",
    "REST API Authentication",
    "Cloud Deployment",
    "Docker Support",
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-10">

        <div className="mb-12 text-center">

          <Rocket
            size={50}
            className="mx-auto text-blue-400"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Future Roadmap
          </h2>

          <p className="mt-4 text-slate-400">
            Planned improvements for future versions of TruthLens AI.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {roadmap.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-800 p-5"
            >
              <CheckCircle2
                className="text-green-400"
                size={24}
              />

              <span className="text-slate-200">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}