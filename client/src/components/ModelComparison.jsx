import { CheckCircle2, BrainCircuit } from "lucide-react";

export default function ModelComparison() {
  const models = [
    {
      name: "CommunityForensics ViT",
      type: "Current Model",
      accuracy: "High",
      speed: "Fast",
      status: "Active",
    },
    {
      name: "PrithivML Detector",
      type: "Alternative Model",
      accuracy: "High",
      speed: "Fast",
      status: "Integrated",
    },
    {
      name: "Ensemble Detector",
      type: "Future Upgrade",
      accuracy: "Very High",
      speed: "Medium",
      status: "Planned",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <BrainCircuit
            size={50}
            className="mx-auto text-cyan-400"
          />

          <h2 className="mt-6 text-4xl font-bold text-white">
            AI Model Comparison
          </h2>

          <p className="mt-4 text-slate-400">
            Current and future deepfake detection models supported by TruthLens AI.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="px-6 py-5 text-left text-white">
                  Model
                </th>

                <th className="px-6 py-5 text-center text-white">
                  Type
                </th>

                <th className="px-6 py-5 text-center text-white">
                  Accuracy
                </th>

                <th className="px-6 py-5 text-center text-white">
                  Speed
                </th>

                <th className="px-6 py-5 text-center text-white">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {models.map((model) => (
                <tr
                  key={model.name}
                  className="border-t border-white/10"
                >

                  <td className="px-6 py-5 text-white">
                    {model.name}
                  </td>

                  <td className="px-6 py-5 text-center text-slate-300">
                    {model.type}
                  </td>

                  <td className="px-6 py-5 text-center text-green-400">
                    {model.accuracy}
                  </td>

                  <td className="px-6 py-5 text-center text-cyan-400">
                    {model.speed}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-2">

                      <CheckCircle2
                        size={20}
                        className="text-green-400"
                      />

                      <span className="text-slate-300">
                        {model.status}
                      </span>

                    </div>

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