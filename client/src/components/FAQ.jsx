import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is TruthLens AI?",
      answer:
        "TruthLens AI is an AI-powered forensic platform that analyzes images for potential deepfake manipulation using deep learning and computer vision techniques.",
    },
    {
      question: "How accurate is the AI model?",
      answer:
        "The system uses a pretrained transformer-based deepfake detection model. Accuracy depends on image quality and the characteristics of the uploaded image.",
    },
    {
      question: "Are my uploaded images stored?",
      answer:
        "No. Images are processed for analysis and are not intended to be permanently stored by the application.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "TruthLens AI currently supports common image formats such as JPG, JPEG and PNG.",
    },
    {
      question: "Can I download the analysis report?",
      answer:
        "Yes. After every successful analysis you can download a report containing the AI prediction and forensic analysis.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex(openIndex === index ? -1 : index);
  }

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to know before using TruthLens AI.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="text-blue-400" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="border-t border-white/10 px-6 py-5 text-slate-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}