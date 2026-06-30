import {
  UploadCloud,
  BrainCircuit,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UploadCloud,
      title: "1. Upload Image",
      description:
        "Choose or drag and drop an image for forensic analysis.",
      color: "text-blue-400",
    },
    {
      icon: BrainCircuit,
      title: "2. AI Processing",
      description:
        "The deepfake detection model analyzes the uploaded image and computes confidence scores.",
      color: "text-cyan-400",
    },
    {
      icon: ShieldCheck,
      title: "3. Forensic Analysis",
      description:
        "Image quality, face detection, and metadata inspection are performed automatically.",
      color: "text-green-400",
    },
    {
      icon: FileText,
      title: "4. View Report",
      description:
        "Review the complete AI prediction, forensic findings, and download the report.",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>

          <p className="mt-4 text-slate-400">
            Four simple steps from upload to forensic report.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mb-6 flex justify-center">
                  <Icon
                    size={50}
                    className={step.color}
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">
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