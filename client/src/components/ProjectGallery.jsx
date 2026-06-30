import {
  ImageIcon,
  LayoutDashboard,
  BrainCircuit,
  FileDown,
} from "lucide-react";

export default function ProjectGallery() {
  const gallery = [
    {
      icon: LayoutDashboard,
      title: "Modern Dashboard",
      description:
        "Interactive dashboard displaying predictions, confidence scores, and forensic analysis.",
      color: "text-blue-400",
    },
    {
      icon: BrainCircuit,
      title: "AI Analysis",
      description:
        "Transformer-powered deepfake detection with confidence estimation and detailed reports.",
      color: "text-cyan-400",
    },
    {
      icon: FileDown,
      title: "PDF Reports",
      description:
        "Generate downloadable forensic reports for every analyzed image.",
      color: "text-green-400",
    },
    {
      icon: ImageIcon,
      title: "Image Preview",
      description:
        "Responsive image viewer with upload preview and analysis history integration.",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Project Gallery
          </h2>

          <p className="mt-4 text-slate-400">
            Highlights of the user interface and AI-powered features included in TruthLens AI.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {gallery.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="flex justify-center">
                  <Icon
                    size={52}
                    className={item.color}
                  />
                </div>

                <h3 className="mt-6 text-center text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-center leading-7 text-slate-400">
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