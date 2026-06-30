import { FileImage, CheckCircle2 } from "lucide-react";

export default function SupportedFormats() {
  const formats = [
    {
      extension: "JPG",
      description: "Joint Photographic Experts Group",
    },
    {
      extension: "JPEG",
      description: "Standard compressed image format",
    },
    {
      extension: "PNG",
      description: "Portable Network Graphics",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Supported Image Formats
          </h2>

          <p className="mt-4 text-slate-400">
            Upload one of the following image formats for analysis.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {formats.map((format) => (
            <div
              key={format.extension}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="flex items-center justify-between">

                <FileImage
                  size={42}
                  className="text-blue-400"
                />

                <CheckCircle2
                  size={26}
                  className="text-green-400"
                />

              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {format.extension}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {format.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}