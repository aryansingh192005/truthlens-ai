import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-10 backdrop-blur-xl">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-slate-400">
            Have questions, suggestions, or want to collaborate?
            I'd love to hear from you.
          </p>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <a
            href="mailto:aryansingh192005@gmail.com"
            className="rounded-2xl border border-white/10 bg-slate-800 p-8 text-center transition hover:border-blue-500 hover:-translate-y-1"
          >
            <Mail
              size={40}
              className="mx-auto text-blue-400"
            />

            <h3 className="mt-5 text-xl font-semibold text-white">
              Email
            </h3>

            <p className="mt-3 break-all text-slate-400">
              aryansingh192005@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/aryansingh192005/truthlens-ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-800 p-8 text-center transition hover:border-blue-500 hover:-translate-y-1"
          >
            <Github
              size={40}
              className="mx-auto text-white"
            />

            <h3 className="mt-5 text-xl font-semibold text-white">
              GitHub
            </h3>

            <p className="mt-3 text-slate-400">
              View Source Code
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/aryansingh192005/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-slate-800 p-8 text-center transition hover:border-blue-500 hover:-translate-y-1"
          >
            <Linkedin
              size={40}
              className="mx-auto text-cyan-400"
            />

            <h3 className="mt-5 text-xl font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-3 text-slate-400">
              Connect with Me
            </p>
          </a>

        </div>

        <div className="mt-12 flex justify-center">

          <a
            href="mailto:aryansingh192005@gmail.com"
            className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            <Send size={20} />
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}