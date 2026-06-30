import {
  Github,
  GitFork,
  Star,
  Code2,
  HeartHandshake,
} from "lucide-react";

export default function OpenSourceSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description:
        "Built with React, FastAPI, Tailwind CSS, Python, and Hugging Face Transformers.",
      color: "text-cyan-400",
    },
    {
      icon: GitFork,
      title: "Fork & Extend",
      description:
        "Clone the project, experiment with new AI models, and build your own forensic tools.",
      color: "text-orange-400",
    },
    {
      icon: Star,
      title: "Community Driven",
      description:
        "Suggestions, improvements, and contributions are always welcome.",
      color: "text-yellow-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-900/70 p-10">

        <div className="text-center">

          <Github
            size={52}
            className="mx-auto text-white"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Open Source
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-400">
            TruthLens AI is designed as an educational and portfolio project.
            Explore the source code, learn from the architecture, contribute
            improvements, or build your own AI-powered forensic applications.
          </p>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-800 p-8 transition hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={44}
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

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/aryansingh192005/truthlens-ai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            <Github size={20} />
            View Repository
          </a>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800 px-6 py-4 text-slate-300">
            <HeartHandshake size={20} className="text-pink-400" />
            Contributions Welcome
          </div>

        </div>

      </div>
    </section>
  );
}