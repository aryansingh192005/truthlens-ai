import { GitCommit } from "lucide-react";

export default function VersionHistory() {
  const versions = [
    {
      version: "v1.0",
      title: "Core Platform",
      changes: [
        "AI deepfake detection",
        "FastAPI backend",
        "React frontend",
        "Forensic analysis",
      ],
    },
    {
      version: "v1.1",
      title: "Dashboard",
      changes: [
        "Analysis history",
        "Confidence gauge",
        "Downloadable report",
        "Improved UI",
      ],
    },
    {
      version: "v1.2",
      title: "Landing Page",
      changes: [
        "Technology stack",
        "Performance metrics",
        "Comparison table",
        "Developer section",
      ],
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Version History
          </h2>

          <p className="mt-4 text-slate-400">
            Major milestones in the development of TruthLens AI.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {versions.map((item) => (
            <div
              key={item.version}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition hover:border-blue-500"
            >
              <div className="flex items-center gap-3">

                <GitCommit
                  className="text-blue-400"
                  size={28}
                />

                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                  {item.version}
                </span>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <ul className="mt-6 space-y-3">

                {item.changes.map((change) => (
                  <li
                    key={change}
                    className="text-slate-400"
                  >
                    • {change}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}