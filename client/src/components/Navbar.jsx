import { ShieldCheck, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-2">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>

          <div className="text-left">
            <h1 className="text-xl font-bold text-white">
              TruthLens AI
            </h1>

            <p className="text-xs text-slate-400">
              Deepfake Detection Platform
            </p>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">

          <button
            onClick={() => scrollToSection("home")}
            className="text-slate-300 transition hover:text-white"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="text-slate-300 transition hover:text-white"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("tech-stack")}
            className="text-slate-300 transition hover:text-white"
          >
            Tech Stack
          </button>

          <button
            onClick={() => scrollToSection("upload")}
            className="text-slate-300 transition hover:text-white"
          >
            Detect
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="text-slate-300 transition hover:text-white"
          >
            Contact
          </button>

        </nav>

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <a
            href="https://github.com/aryansingh192005/truthlens-ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            <Github size={20} />
          </a>

        </div>

      </div>
    </header>
  );
}