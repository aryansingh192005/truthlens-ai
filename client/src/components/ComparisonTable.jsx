import { CheckCircle2, XCircle } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    {
      feature: "AI Deepfake Detection",
      truthlens: true,
      traditional: false,
    },
    {
      feature: "Image Quality Analysis",
      truthlens: true,
      traditional: false,
    },
    {
      feature: "Face Detection",
      truthlens: true,
      traditional: false,
    },
    {
      feature: "Metadata Inspection",
      truthlens: true,
      traditional: false,
    },
    {
      feature: "Downloadable Report",
      truthlens: true,
      traditional: false,
    },
    {
      feature: "Modern Web Dashboard",
      truthlens: true,
      traditional: false,
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Why Choose TruthLens AI?
          </h2>

          <p className="mt-4 text-slate-400">
            Compare TruthLens AI with a basic deepfake detector.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="px-6 py-5 text-left text-white">
                  Feature
                </th>

                <th className="px-6 py-5 text-center text-blue-400">
                  TruthLens AI
                </th>

                <th className="px-6 py-5 text-center text-slate-400">
                  Basic Detector
                </th>

              </tr>

            </thead>

            <tbody>

              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-white/10"
                >

                  <td className="px-6 py-5 text-slate-300">
                    {row.feature}
                  </td>

                  <td className="px-6 py-5 text-center">

                    {row.truthlens ? (
                      <CheckCircle2
                        className="mx-auto text-green-400"
                        size={24}
                      />
                    ) : (
                      <XCircle
                        className="mx-auto text-red-400"
                        size={24}
                      />
                    )}

                  </td>

                  <td className="px-6 py-5 text-center">

                    {row.traditional ? (
                      <CheckCircle2
                        className="mx-auto text-green-400"
                        size={24}
                      />
                    ) : (
                      <XCircle
                        className="mx-auto text-red-400"
                        size={24}
                      />
                    )}

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}