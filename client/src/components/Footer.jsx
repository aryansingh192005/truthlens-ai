import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-2">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              TruthLens AI
            </h3>

            <p className="text-sm text-slate-400">
              AI Powered Deepfake Detection Platform
            </p>
          </div>

        </div>

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/aryansingh192005/truthlens-ai"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/aryansingh192005/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:aryansingh192005@gmail.com"
            className="text-slate-400 transition hover:text-white"
          >
            <Mail size={22} />
          </a>

        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        © {year} TruthLens AI. Built by Aryan Singh.
      </div>
    </footer>
  );
}