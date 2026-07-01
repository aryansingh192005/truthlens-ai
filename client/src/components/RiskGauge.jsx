export default function RiskGauge({ score }) {
  const percentage = Math.min(score ?? 0, 100);

  const color =
    percentage < 40
      ? "bg-green-500"
      : percentage < 70
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className="rounded-3xl bg-slate-800 p-8">

      <h3 className="mb-6 text-xl font-bold text-white">
        Risk Score
      </h3>

      <div className="h-5 overflow-hidden rounded-full bg-slate-700">

        <div
          className={`h-full ${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-5 text-center text-3xl font-bold text-white">
        {percentage}/100
      </p>

    </div>
  );
}