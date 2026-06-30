import { AlertTriangle } from "lucide-react";

export default function Limitations() {
  const limitations = [
    "AI predictions are probabilistic and should not be treated as absolute proof.",
    "Image quality, compression, and resolution can affect detection accuracy.",
    "Heavily edited or partially cropped images may produce less reliable results.",
    "TruthLens AI currently analyzes still images only. Video analysis is not yet supported.",
    "The system is intended for educational, research, and demonstration purposes.",
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-10">

        <div className="mb-8 flex items-center gap-4">

          <AlertTriangle
            size={42}
            className="text-yellow-400"
          />

          <div>
            <h2 className="text-4xl font-bold text-white">
              Limitations
            </h2>

            <p className="mt-2 text-slate-400">
              Please consider the following before interpreting analysis results.
            </p>
          </div>

        </div>

        <div className="space-y-5">

          {limitations.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5"
            >
              <span className="mt-1 text-yellow-400">•</span>

              <p className="leading-7 text-slate-300">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}