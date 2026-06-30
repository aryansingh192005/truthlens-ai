import {
  FolderGit2,
  Component,
  Cpu,
  FileCode2,
} from "lucide-react";

export default function ProjectStats() {
  const stats = [
    {
      icon: FolderGit2,
      value: "50+",
      label: "Git Commits",
      color: "text-orange-400",
    },
    {
      icon: Component,
      value: "25+",
      label: "React Components",
      color: "text-cyan-400",
    },
    {
      icon: Cpu,
      value: "4",
      label: "AI & Forensic Modules",
      color: "text-purple-400",
    },
    {
      icon: FileCode2,
      value: "100+",
      label: "Source Files",
      color: "text-green-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Project Statistics
          </h2>

          <p className="mt-4 text-slate-400">
            A snapshot of the current development progress of TruthLens AI.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="flex justify-center">
                  <Icon
                    size={48}
                    className={item.color}
                  />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}