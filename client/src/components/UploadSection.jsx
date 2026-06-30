import { useState } from "react";
import FileUpload from "./FileUpload";
import useAnalysis from "../hooks/useAnalysis";
import AnalysisResult from "./AnalysisResult";

export default function UploadSection() {
  const [file, setFile] = useState(null);

  const {
    loading,
    result,
    error,
    analyze,
  } = useAnalysis();

  async function handleAnalyze() {
    if (!file) return;

    await analyze(file);
  }

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        <FileUpload onFileSelect={setFile} />

        <div className="mt-8 flex justify-center">

          <button
            onClick={handleAnalyze}
            disabled={!file || loading}
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Image"}
          </button>

        </div>

        {error && (
          <p className="mt-6 text-center text-red-400">
            {error}
          </p>
        )}

        {result && (
          <AnalysisResult result={result} />
        )}

      </div>
    </section>
  );
}