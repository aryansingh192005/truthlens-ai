import { HelpCircle } from "lucide-react";

export default function ProjectFAQ() {
  const faqs = [
    {
      question: "What is TruthLens AI?",
      answer:
        "TruthLens AI is an AI-powered web application that detects manipulated images using deep learning and digital image forensics.",
    },
    {
      question: "Which image formats are supported?",
      answer:
        "The platform currently supports JPG, JPEG, and PNG image formats.",
    },
    {
      question: "Does the application store uploaded images?",
      answer:
        "By default, uploaded images are processed only for analysis and are not permanently stored.",
    },
    {
      question: "Which technologies power the project?",
      answer:
        "The project uses React, Tailwind CSS, FastAPI, Python, Hugging Face Transformers, OpenCV, and modern computer vision techniques.",
    },
    {
      question: "Can this project be extended?",
      answer:
        "Yes. The architecture is modular and can be extended with video deepfake detection, audio analysis, cloud deployment, authentication, and additional forensic modules.",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">
          <HelpCircle
            size={52}
            className="mx-auto text-blue-400"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            Project FAQ
          </h2>

          <p className="mt-4 text-slate-400">
            Frequently asked questions about TruthLens AI.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}