import { BookOpen, BrainCircuit, FileSearch } from "lucide-react";

export default function ResearchSection() {
  const papers = [
    {
      title: "Vision Transformers",
      description:
        "Transformer-based architectures have become highly effective for image classification and computer vision tasks.",
      icon: BrainCircuit,
      color: "text-purple-400",
    },
    {
      title: "Deepfake Detection",
      description:
        "Modern deepfake detectors analyze subtle visual artifacts, inconsistencies, and learned image representations.",
      icon: FileSearch,
      color: "text-cyan-400",
    },
    {
      title: "Digital Image Forensics",
      description:
        "Image forensics combines metadata inspection, image quality analysis, and AI models to assess authenticity.",
      icon: BookOpen,
      color: "text-green-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <BookOpen
            size={50}
            className="mx-auto text-blue-400"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Research Background
          </h2>

          <p className="mt-4 text-slate-400">
            Concepts and technologies that inspired the development of TruthLens AI.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {papers.map((paper) => {
            const Icon = paper.icon;

            return (
              <div
                key={paper.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={48}
                  className={paper.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {paper.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {paper.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}