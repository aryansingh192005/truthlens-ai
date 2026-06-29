import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-2">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              TruthLens AI
            </h1>

            <p className="text-xs text-slate-400">
              Deepfake Detection Platform
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-slate-300 hover:text-white transition">
            Home
          </a>

          <a href="#features" className="text-slate-300 hover:text-white transition">
            Features
          </a>

          <a href="#upload" className="text-slate-300 hover:text-white transition">
            Detect
          </a>

          <a href="#about" className="text-slate-300 hover:text-white transition">
            About
          </a>
        </nav>

      </div>
    </header>
  );
}