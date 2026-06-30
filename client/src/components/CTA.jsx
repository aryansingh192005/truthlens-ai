import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-600/20 p-12">

        <div className="flex flex-col items-center text-center">

          <div className="mb-6 rounded-full bg-blue-500/20 p-5">
            <ShieldCheck
              size={50}
              className="text-blue-400"
            />
          </div>

          <h2 className="max-w-3xl text-5xl font-bold text-white">
            Ready to Verify an Image with AI?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Upload an image and receive an AI-powered deepfake prediction,
            forensic analysis, metadata inspection, and a downloadable report
            within seconds.
          </p>

          <a
            href="#upload"
            className="mt-10 flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            Start Analysis
            <ArrowRight size={22} />
          </a>

        </div>

      </div>
    </section>
  );
}