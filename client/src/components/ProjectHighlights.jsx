import {
  Zap,
  BrainCircuit,
  ShieldCheck,
  FileSearch,
  LayoutDashboard,
  Rocket,
} from "lucide-react";

export default function ProjectHighlights() {
  const highlights = [
    {
      icon: BrainCircuit,
      title: "Transformer AI",
      description:
        "Powered by Hugging Face transformer models for deepfake classification.",
      color: "text-cyan-400",
    },
    {
      icon: ShieldCheck,
      title: "Digital Forensics",
      description:
        "Combines face detection, metadata inspection and image quality analysis.",
      color: "text-green-400",
    },
    {
      icon: LayoutDashboard,
      title: "Interactive Dashboard",
      description:
        "Professional interface with confidence gauges, reports and analysis history.",
      color: "text-purple-400",
    },
    {
      icon: FileSearch,
      title: "Detailed Reports",
      description:
        "Generate comprehensive forensic reports with AI predictions and evidence.",
      color: "text-orange-400",
    },
    {
      icon: Rocket,
      title: "Deployment Ready",
      description:
        "Structured for production deployment with React frontend and FastAPI backend.",
      color: "text-blue-400",
    },
    {
      icon: Zap,
      title: "Fast Analysis",
      description:
        "Optimized inference pipeline delivers image analysis in only a few seconds.",
      color: "text-yellow-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Project Highlights
          </h2>

          <p className="mt-4 text-slate-400">
            The core capabilities that make TruthLens AI a complete AI engineering project.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={48}
                  className={item.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}