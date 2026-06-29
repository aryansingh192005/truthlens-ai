import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              TruthLens AI
            </h1>

            <p className="text-xs text-slate-400">
              AI Deepfake Detection
            </p>
          </div>
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>

          <a href="#" className="hover:text-blue-400">
            Image Detection
          </a>

          <a href="#" className="hover:text-blue-400">
            Video Detection
          </a>

          <a href="#" className="hover:text-blue-400">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}