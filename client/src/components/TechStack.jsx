import {
  BrainCircuit,
  Database,
  Server,
  Globe,
  Code2,
  Cpu,
  Boxes,
  GitBranch,
} from "lucide-react";

export default function TechStack() {
  const technologies = [
    {
      name: "React",
      category: "Frontend",
      icon: Globe,
      color: "text-sky-400",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: Code2,
      color: "text-cyan-400",
    },
    {
      name: "FastAPI",
      category: "Backend",
      icon: Server,
      color: "text-green-400",
    },
    {
      name: "Python",
      category: "Programming",
      icon: Cpu,
      color: "text-yellow-400",
    },
    {
      name: "Transformers",
      category: "AI",
      icon: BrainCircuit,
      color: "text-purple-400",
    },
    {
      name: "OpenCV",
      category: "Computer Vision",
      icon: Boxes,
      color: "text-red-400",
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      icon: GitBranch,
      color: "text-orange-400",
    },
    {
      name: "REST API",
      category: "Communication",
      icon: Database,
      color: "text-blue-400",
    },
  ];

  return (
    <section
      id="tech-stack"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Technology Stack
          </h2>

          <p className="mt-4 text-slate-400">
            Built using modern AI, web development, and computer vision technologies.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="flex justify-center">
                  <Icon
                    size={48}
                    className={tech.color}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {tech.name}
                </h3>

                <p className="mt-3 text-slate-400">
                  {tech.category}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
    );
  }