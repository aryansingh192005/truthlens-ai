import {
  Monitor,
  ArrowRight,
  Server,
  BrainCircuit,
  SearchCheck,
} from "lucide-react";

export default function Architecture() {
  const flow = [
    {
      icon: Monitor,
      title: "React Frontend",
      description: "User uploads an image through the web interface.",
      color: "text-sky-400",
    },
    {
      icon: Server,
      title: "FastAPI Backend",
      description: "Receives the image and coordinates the analysis pipeline.",
      color: "text-green-400",
    },
    {
      icon: BrainCircuit,
      title: "AI & Forensics",
      description:
        "Runs deepfake detection, face detection, image quality and metadata analysis.",
      color: "text-purple-400",
    },
    {
      icon: SearchCheck,
      title: "Analysis Report",
      description:
        "Returns prediction, confidence score and forensic report to the dashboard.",
      color: "text-blue-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            System Architecture
          </h2>

          <p className="mt-4 text-slate-400">
            How TruthLens AI processes every uploaded image.
          </p>

        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">

          {flow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex items-center gap-6"
              >
                <div className="w-72 rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500">

                  <div className="flex justify-center">
                    <Icon
                      size={48}
                      className={step.color}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {step.description}
                  </p>

                </div>

                {index !== flow.length - 1 && (
                  <ArrowRight
                    size={34}
                    className="hidden text-slate-500 lg:block"
                  />
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}