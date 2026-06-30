import {
  Globe2,
  Shield,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function ProjectImpact() {
  const impacts = [
    {
      icon: Shield,
      title: "Digital Trust",
      description:
        "Helps users identify AI-generated and manipulated images, promoting safer digital content verification.",
      color: "text-blue-400",
    },
    {
      icon: GraduationCap,
      title: "Educational Value",
      description:
        "Demonstrates practical applications of computer vision, transformers, and digital image forensics.",
      color: "text-green-400",
    },
    {
      icon: Globe2,
      title: "Real-World Applications",
      description:
        "Applicable to journalism, social media moderation, cybersecurity, law enforcement, and academic research.",
      color: "text-cyan-400",
    },
    {
      icon: Sparkles,
      title: "Portfolio Excellence",
      description:
        "Showcases end-to-end AI engineering, full-stack development, and modern software architecture in one project.",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Project Impact
          </h2>

          <p className="mt-4 text-slate-400">
            Why TruthLens AI matters beyond being just another portfolio project.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={48}
                  className={item.color}
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}