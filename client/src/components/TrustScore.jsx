export default function TrustScore({ result }) {
  if (!result) return null;

  const trust = 100 - (result.risk_score ?? 0);

  return (
    <div className="rounded-3xl bg-slate-800 p-8">

      <h3 className="text-xl font-bold text-white">
        Overall Trust Score
      </h3>

      <p className="mt-6 text-center text-6xl font-bold text-cyan-400">
        {trust}
      </p>

      <p className="mt-3 text-center text-slate-400">
        Higher values indicate greater confidence in authenticity.
      </p>

    </div>
  );
}