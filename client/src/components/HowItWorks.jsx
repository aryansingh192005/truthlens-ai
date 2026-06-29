import { Upload, Cpu, ScanSearch, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Upload an image or a video for analysis.",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our AI model scans for manipulation patterns.",
  },
  {
    icon: ScanSearch,
    title: "Detection",
    description: "Deepfake indicators are identified and evaluated.",
  },
  {
    icon: BadgeCheck,
    title: "Report",
    description: "Receive a confidence score and detection result.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            How TruthLens AI Works
          </h2>

          <p className="mt-4 text-slate-400">
            A simple four-step process powered by artificial intelligence.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <Icon className="mx-auto mb-6 h-12 w-12 text-blue-400" />

                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}