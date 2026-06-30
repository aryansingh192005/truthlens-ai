import {
  Cloud,
  Server,
  Globe,
  Database,
  CheckCircle2,
} from "lucide-react";

export default function DeploymentSection() {
  const services = [
    {
      icon: Globe,
      title: "Frontend",
      value: "Vercel",
      color: "text-sky-400",
    },
    {
      icon: Server,
      title: "Backend",
      value: "Render / Railway",
      color: "text-green-400",
    },
    {
      icon: Database,
      title: "AI Models",
      value: "Hugging Face",
      color: "text-purple-400",
    },
    {
      icon: Cloud,
      title: "Storage",
      value: "Local / Cloud Ready",
      color: "text-cyan-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <Cloud
            size={50}
            className="mx-auto text-blue-400"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Deployment Architecture
          </h2>

          <p className="mt-4 text-slate-400">
            TruthLens AI is designed with a modern deployment architecture that
            separates the frontend, backend, and AI inference pipeline.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="flex justify-center">
                  <Icon
                    size={48}
                    className={service.color}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-300">
                  {service.value}
                </p>

                <div className="mt-6 flex justify-center">
                  <CheckCircle2
                    size={24}
                    className="text-green-400"
                  />
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}