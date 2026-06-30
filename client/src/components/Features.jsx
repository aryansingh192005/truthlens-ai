import {
  ShieldCheck,
  BrainCircuit,
  ScanFace,
  Image,
  FileSearch,
  FileDown,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Deepfake Detection",
      description:
        "Detect manipulated images using a pretrained transformer-based deepfake detection model.",
      color: "text-cyan-400",
    },
    {
      icon: ScanFace,
      title: "Face Analysis",
      description:
        "Automatically detect human faces to support image authenticity analysis.",
      color: "text-green-400",
    },
    {
      icon: Image,
      title: "Image Quality Analysis",
      description:
        "Analyze image sharpness, brightness, resolution, and file quality.",
      color: "text-purple-400",
    },
    {
      icon: FileSearch,
      title: "Metadata Inspection",
      description:
        "Inspect available image metadata such as camera information and image properties.",
      color: "text-orange-400",
    },
    {
      icon: FileDown,
      title: "Download Report",
      description:
        "Export a complete forensic analysis report after every prediction.",
      color: "text-pink-400",
    },
    {
      icon: ShieldCheck,
      title: "Forensic Dashboard",
      description:
        "View AI predictions together with forensic evidence in one professional dashboard.",
      color: "text-blue-400",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to inspect an image using AI-powered forensic analysis.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={42}
                  className={feature.color}
                />

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}