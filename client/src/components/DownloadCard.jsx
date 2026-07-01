export default function DownloadCard({ result }) {
  if (!result) return null;

  return (
    <div className="rounded-3xl bg-slate-800 p-8">

      <h2 className="text-2xl font-bold text-white">
        Analysis Report
      </h2>

      <p className="mt-4 text-slate-400">
        Download the generated forensic report.
      </p>

      <a
        href={result.report_url}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        Download JSON Report
      </a>

    </div>
  );
}