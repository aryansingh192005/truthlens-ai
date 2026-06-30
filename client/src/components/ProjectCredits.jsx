import {
  Heart,
  Github,
  BrainCircuit,
  Code2,
  Users,
} from "lucide-react";

export default function ProjectCredits() {
  const credits = [
    {
      icon: BrainCircuit,
      title: "AI Models",
      description:
        "Built using modern transformer-based computer vision models and digital image forensics techniques.",
      color: "text-purple-400",
    },
    {
      icon: Code2,
      title: "Development",
      description:
        "Designed and developed using React, FastAPI, Python, Tailwind CSS, and modular software architecture.",
      color: "text-blue-400",
    },
    {
      icon: Github,
      title: "Open Source",
      description:
        "Powered by open-source libraries and tools that make AI development accessible.",
      color: "text-green-400",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Inspired by the AI research and open-source communities advancing trustworthy machine learning.",
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <Heart
            size={52}
            className="mx-auto text-red-400"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Project Credits
          </h2>

          <p className="mt-4 text-slate-400">
            Acknowledging the technologies, communities, and ideas that helped shape TruthLens AI.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {credits.map((item) => {
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