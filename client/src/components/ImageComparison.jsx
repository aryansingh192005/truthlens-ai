export default function ImageComparison({ result }) {
  if (!result?.ela_image) return null;

  return (
    <div className="rounded-3xl bg-slate-800 p-8">

      <h3 className="mb-8 text-2xl font-bold text-white">
        Error Level Analysis
      </h3>

      <div className="grid gap-8 lg:grid-cols-2">

        <div>

          <h4 className="mb-4 text-center text-lg font-semibold text-white">
            ELA Output
          </h4>

          <img
            src={result.ela_image}
            alt="ELA"
            className="rounded-2xl border border-white/10"
          />

        </div>

        <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-700">

          <div className="text-center">

            <h4 className="text-lg font-semibold text-white">
              Maximum Difference
            </h4>

            <p className="mt-3 text-4xl font-bold text-orange-400">
              {result.ela_max_difference}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}