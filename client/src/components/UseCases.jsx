import {
  Newspaper,
  Shield,
  GraduationCap,
  Landmark,
  Users,
  Briefcase,
} from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: Newspaper,
      title: "Journalism",
      description:
        "Verify the authenticity of images before publication and reduce the spread of misinformation.",
      color: "text-blue-400",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Support digital investigations by identifying AI-generated or manipulated media.",
      color: "text-green-400",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Teach students about deepfakes, computer vision, and digital image forensics.",
      color: "text-purple-400",
    },
    {
      icon: Landmark,
      title: "Law Enforcement",
      description:
        "Assist investigators in evaluating suspicious digital images during preliminary analysis.",
      color: "text-red-400",
    },
    {
      icon: Users,
      title: "Social Media",
      description:
        "Help users recognize manipulated content before sharing it online.",
      color: "text-cyan-400",
    },
    {
      icon: Briefcase,
      title: "Enterprise",
      description:
        "Demonstrate AI-powered media verification workflows for research and business applications.",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Real-World Use Cases
          </h2>

          <p className="mt-4 text-slate-400">
            TruthLens AI can be applied across multiple industries where image authenticity matters.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {useCases.map((item) => {
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