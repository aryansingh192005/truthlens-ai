import { Brain, ImageIcon, Video, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description:
      "Advanced deep learning models analyze media for manipulation with high confidence.",
  },
  {
    icon: ImageIcon,
    title: "Image Analysis",
    description:
      "Upload an image and receive an instant authenticity assessment.",
  },
  {
    icon: Video,
    title: "Video Analysis",
    description:
      "Analyze videos frame-by-frame to identify possible deepfake content.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Your uploaded files are processed securely and are not permanently stored.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to detect manipulated media with confidence.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-blue-500/40"
              >
                <Icon className="mb-6 h-12 w-12 text-blue-400" />

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}