import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function DeveloperSection() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-10 backdrop-blur-xl">

        <div className="flex flex-col items-center text-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500">
            <Code2 size={42} className="text-white" />
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white">
            Meet the Developer
          </h2>

          <h3 className="mt-3 text-2xl font-semibold text-blue-400">
            Aryan Singh
          </h3>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            B.Tech Computer Science student passionate about Artificial
            Intelligence, Machine Learning, Computer Vision, and Full Stack
            Development. TruthLens AI was built as a portfolio project to
            explore AI-powered deepfake detection and digital image forensics
            using modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:aryansingh192005@gmail.com"
              className="flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-700"
            >
              <Mail size={20} />
              Email
            </a>

            <a
              href="https://github.com/aryansingh192005"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-700"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aryansingh192005/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-700"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}