import {
  PlayCircle,
  Upload,
  BrainCircuit,
  FileText,
} from "lucide-react";

export default function LiveDemoSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload an Image",
      description:
        "Select a JPG, JPEG, or PNG image from your device.",
      color: "text-blue-400",
    },
    {
      icon: BrainCircuit,
      title: "AI Analysis",
      description:
        "The AI model and forensic modules analyze the uploaded image.",
      color: "text-purple-400",
    },
    {
      icon: FileText,
      title: "View Results",
      description:
        "Review prediction, confidence score, metadata, and forensic report.",
      color: "text-green-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <PlayCircle
            size={54}
            className="mx-auto text-blue-400"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Live Demo Workflow
          </h2>

          <p className="mt-4 text-slate-400">
            Every uploaded image follows the same intelligent analysis pipeline.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={48}
                  className={step.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}