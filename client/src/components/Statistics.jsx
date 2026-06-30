import {
  ShieldCheck,
  Clock3,
  BrainCircuit,
  Image,
} from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: ShieldCheck,
      value: "98%",
      label: "Detection Accuracy",
      color: "text-green-400",
    },
    {
      icon: Clock3,
      value: "< 5s",
      label: "Average Analysis",
      color: "text-blue-400",
    },
    {
      icon: BrainCircuit,
      value: "AI",
      label: "Powered by Transformers",
      color: "text-cyan-400",
    },
    {
      icon: Image,
      value: "Unlimited",
      label: "Image Analysis",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold text-white">
            Platform Statistics
          </h2>

          <p className="mt-4 text-slate-400">
            Fast, reliable, and AI-powered forensic analysis.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition hover:-translate-y-2 hover:border-blue-500"
              >

                <Icon
                  size={42}
                  className={item.color}
                />

                <h3 className="mt-6 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-400">
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