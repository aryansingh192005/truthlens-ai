import {
  Lightbulb,
  Code2,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

export default function ProjectTimeline() {
  const timeline = [
    {
      icon: Lightbulb,
      title: "Project Idea",
      description:
        "Designed TruthLens AI to help identify AI-generated and manipulated images using modern deep learning.",
      color: "text-yellow-400",
    },
    {
      icon: Code2,
      title: "Development",
      description:
        "Built a full-stack application using React, FastAPI, Tailwind CSS, and modular backend architecture.",
      color: "text-blue-400",
    },
    {
      icon: BrainCircuit,
      title: "AI Integration",
      description:
        "Integrated a transformer-based deepfake detection model together with forensic image analysis modules.",
      color: "text-purple-400",
    },
    {
      icon: ShieldCheck,
      title: "Deployment Ready",
      description:
        "Prepared the application for portfolio presentation with reporting, analysis dashboard, and responsive UI.",
      color: "text-green-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Project Journey
          </h2>

          <p className="mt-4 text-slate-400">
            The evolution of TruthLens AI from idea to a working application.
          </p>

        </div>

        <div className="space-y-8">

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:border-blue-500"
              >
                <div className="flex-shrink-0">
                  <Icon
                    size={42}
                    className={item.color}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
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