import {
  Gauge,
  BrainCircuit,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function PerformanceMetrics() {
  const metrics = [
    {
      icon: Gauge,
      title: "Inference Speed",
      value: "< 5 Seconds",
      color: "text-cyan-400",
    },
    {
      icon: BrainCircuit,
      title: "AI Model",
      value: "Transformer",
      color: "text-purple-400",
    },
    {
      icon: Clock3,
      title: "Analysis Pipeline",
      value: "Real-Time",
      color: "text-green-400",
    },
    {
      icon: ShieldCheck,
      title: "Forensic Modules",
      value: "4 Active",
      color: "text-blue-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Performance Metrics
          </h2>

          <p className="mt-4 text-slate-400">
            A quick overview of the current AI analysis pipeline.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="flex justify-center">
                  <Icon
                    size={46}
                    className={metric.color}
                  />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {metric.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {metric.title}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}