import {
  BadgeCheck,
  Code2,
  Database,
  BrainCircuit,
  Globe,
  Server,
  Boxes,
  GitBranch,
} from "lucide-react";

export default function TechBadges() {
  const badges = [
    "React",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Transformers",
    "OpenCV",
    "Git",
    "GitHub",
    "REST API",
    "Computer Vision",
    "Deep Learning",
    "Digital Forensics",
  ];

  const icons = [
    Globe,
    Code2,
    Server,
    Database,
    BrainCircuit,
    Boxes,
    GitBranch,
    BadgeCheck,
    Server,
    BrainCircuit,
    BrainCircuit,
    BadgeCheck,
  ];

  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Technologies Used
          </h2>

          <p className="mt-4 text-slate-400">
            Core technologies powering TruthLens AI.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-4">

          {badges.map((badge, index) => {
            const Icon = icons[index];

            return (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-900 px-5 py-3 transition hover:border-blue-500 hover:bg-slate-800"
              >
                <Icon
                  size={20}
                  className="text-blue-400"
                />

                <span className="font-medium text-white">
                  {badge}
                </span>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}