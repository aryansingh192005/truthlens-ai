import { Loader2 } from "lucide-react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">

      <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-slate-900/90 px-10 py-10 shadow-2xl">

        <Loader2
          size={56}
          className="animate-spin text-blue-500"
        />

        <div className="text-center">

          <h2 className="text-2xl font-bold text-white">
            AI is analyzing your image...
          </h2>

          <p className="mt-2 text-slate-400">
            Detecting manipulation patterns and estimating confidence.
          </p>

        </div>

      </div>

    </div>
  );
}