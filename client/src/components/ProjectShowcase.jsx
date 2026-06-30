import {
  MonitorSmartphone,
  BrainCircuit,
  ShieldCheck,
  FileDown,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";

export default function ProjectShowcase() {
  const showcases = [
    {
      icon: BrainCircuit,
      title: "AI Deepfake Detection",
      description:
        "Uses transformer-based computer vision models to classify uploaded images as REAL or FAKE with confidence scores.",
      color: "text-cyan-400",
    },
    {
      icon: ShieldCheck,
      title: "Digital Forensics",
      description:
        "Combines face detection, metadata inspection, and image quality analysis into a unified forensic report.",
      color: "text-green-400",
    },
    {
      icon: LayoutDashboard,
      title: "Interactive Dashboard",
      description:
        "Displays confidence gauges, analysis history, downloadable reports, and detailed forensic results.",
      color: "text-purple-400",
    },
    {
      icon: FileDown,
      title: "Professional Reports",
      description:
        "Generate clean PDF reports summarizing AI predictions and forensic observations.",
      color: "text-orange-400",
    },
    {
      icon: MonitorSmartphone,
      title: "Responsive Design",
      description:
        "Optimized for desktop, tablet, and mobile devices using React and Tailwind CSS.",
      color: "text-blue-400",
    },
    {
      icon: Sparkles,
      title: "Portfolio Ready",
      description:
        "Built with production-style architecture suitable for GitHub, LinkedIn, internships, and resume projects.",
      color: "text-pink-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Project Showcase
          </h2>

          <p className="mt-4 text-slate-400">
            Explore the major capabilities that make TruthLens AI a complete AI-powered forensic platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {showcases.map((item) => {
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