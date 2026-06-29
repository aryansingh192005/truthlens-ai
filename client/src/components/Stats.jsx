import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    value: "98%+",
    title: "Detection Accuracy",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    value: "<2 sec",
    title: "Average Analysis",
    color: "text-cyan-400",
  },
  {
    icon: Clock,
    value: "24/7",
    title: "Always Available",
    color: "text-purple-400",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 px-6 pb-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <Icon className={`mb-5 h-10 w-10 ${item.color}`} />

              <h2 className="text-4xl font-bold text-white">
                {item.value}
              </h2>

              <p className="mt-3 text-slate-400">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}