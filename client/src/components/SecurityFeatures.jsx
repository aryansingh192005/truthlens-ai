import {
  Lock,
  ShieldCheck,
  EyeOff,
  Database,
  CheckCircle2,
  KeyRound,
} from "lucide-react";

export default function SecurityFeatures() {
  const features = [
    {
      icon: Lock,
      title: "Secure File Handling",
      description:
        "Uploaded images are processed securely and are not permanently stored unless explicitly configured.",
      color: "text-blue-400",
    },
    {
      icon: ShieldCheck,
      title: "AI Verification",
      description:
        "Multiple forensic modules work together to improve the reliability of image authenticity analysis.",
      color: "text-green-400",
    },
    {
      icon: EyeOff,
      title: "Privacy Focused",
      description:
        "Analysis is designed to respect user privacy and minimize unnecessary data retention.",
      color: "text-cyan-400",
    },
    {
      icon: Database,
      title: "Metadata Inspection",
      description:
        "Examines image metadata to identify anomalies and provide additional forensic context.",
      color: "text-purple-400",
    },
    {
      icon: KeyRound,
      title: "API Ready",
      description:
        "Backend architecture supports secure authentication and future access control mechanisms.",
      color: "text-orange-400",
    },
    {
      icon: CheckCircle2,
      title: "Reliable Workflow",
      description:
        "Every analysis follows a consistent pipeline from upload through AI inference and report generation.",
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Security Features
          </h2>

          <p className="mt-4 text-slate-400">
            Built with security, privacy, and trustworthy AI workflows in mind.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={48}
                  className={feature.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}