import {
  Code2,
  Database,
  BrainCircuit,
  Rocket,
} from "lucide-react";

export default function TechTimeline() {
  const timeline = [
    {
      year: "Phase 1",
      title: "Frontend Development",
      description:
        "Built a responsive React + Tailwind CSS interface with reusable components and modern UI.",
      icon: Code2,
      color: "text-sky-400",
    },
    {
      year: "Phase 2",
      title: "Backend API",
      description:
        "Developed a FastAPI backend to handle uploads, AI inference, and forensic analysis.",
      icon: Database,
      color: "text-green-400",
    },
    {
      year: "Phase 3",
      title: "AI Integration",
      description:
        "Integrated Hugging Face transformer models together with face detection, metadata, and image quality analysis.",
      icon: BrainCircuit,
      color: "text-purple-400",
    },
    {
      year: "Phase 4",
      title: "Deployment",
      description:
        "Prepared the project for portfolio presentation with responsive design, reports, and cloud deployment support.",
      icon: Rocket,
      color: "text-orange-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Development Timeline
          </h2>

          <p className="mt-4 text-slate-400">
            How TruthLens AI evolved from an idea into a full-stack AI application.
          </p>

        </div>

        <div className="space-y-8">

          {timeline.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.year}
                className="flex gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:border-blue-500"
              >
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-slate-800">
                  <Icon
                    size={30}
                    className={item.color}
                  />
                </div>

                <div>

                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}