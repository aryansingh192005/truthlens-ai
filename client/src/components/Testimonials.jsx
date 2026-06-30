import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "AI Research Student",
      role: "Computer Vision",
      quote:
        "TruthLens AI provides a clean and intuitive interface for exploring AI-based deepfake detection together with forensic image analysis.",
    },
    {
      name: "Cybersecurity Enthusiast",
      role: "Digital Forensics",
      quote:
        "The forensic dashboard makes it easy to understand image quality, metadata and AI predictions in one place.",
    },
    {
      name: "Software Developer",
      role: "Full Stack",
      quote:
        "A well-structured project with a modern frontend, FastAPI backend and modular architecture. Great learning resource.",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            What People Say
          </h2>

          <p className="mt-4 text-slate-400">
            Feedback from developers and AI enthusiasts.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition hover:-translate-y-2 hover:border-blue-500"
            >
              <Quote
                size={36}
                className="text-blue-400"
              />

              <p className="mt-6 leading-7 text-slate-300">
                "{item.quote}"
              </p>

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-slate-400">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}