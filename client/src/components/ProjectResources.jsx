import {
  Github,
  BookOpen,
  FileCode2,
  ExternalLink,
} from "lucide-react";

export default function ProjectResources() {
  const resources = [
    {
      icon: Github,
      title: "Source Code",
      description:
        "Explore the complete project repository, commit history, and implementation details.",
      action: "GitHub Repository",
      href: "https://github.com/aryansingh192005/truthlens-ai",
      color: "text-slate-200",
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description:
        "Understand the project architecture, setup process, and AI workflow.",
      action: "Read Docs",
      href: "#",
      color: "text-blue-400",
    },
    {
      icon: FileCode2,
      title: "API Reference",
      description:
        "Review backend endpoints, request formats, and response structures.",
      action: "API Docs",
      href: "#",
      color: "text-green-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Project Resources
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to explore, understand, and extend TruthLens AI.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={48}
                  className={resource.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {resource.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {resource.description}
                </p>

                <a
                  href={resource.href}
                  target={resource.href.startsWith("http") ? "_blank" : undefined}
                  rel={resource.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  {resource.action}
                  <ExternalLink size={18} />
                </a>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}