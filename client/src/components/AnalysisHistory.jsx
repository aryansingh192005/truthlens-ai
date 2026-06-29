import { History } from "lucide-react";

export default function AnalysisHistory({ history = [] }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">

      <div className="mb-8 flex items-center gap-3">

        <History className="text-blue-400" size={28} />

        <h2 className="text-3xl font-bold text-white">
          Analysis History
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="py-4 text-left text-slate-400">
                File
              </th>

              <th className="py-4 text-left text-slate-400">
                Prediction
              </th>

              <th className="py-4 text-left text-slate-400">
                Confidence
              </th>

              <th className="py-4 text-left text-slate-400">
                Model
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item, index) => (

              <tr
                key={index}
                className="border-b border-slate-800"
              >

                <td className="py-4 text-slate-300">
                  {item.file}
                </td>

                <td
                  className={`py-4 font-semibold ${
                    item.prediction === "REAL"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.prediction}
                </td>

                <td className="py-4 text-slate-300">
                  {item.confidence}%
                </td>

                <td className="py-4 text-slate-300">
                  {item.model}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}