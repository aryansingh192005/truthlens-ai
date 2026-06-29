import { useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import ResultCard from "./ResultCard";
import DropZone from "./DropZone";
import usePrediction from "../hooks/usePrediction";

export default function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const {
    loading,
    result,
    error,
    predict,
    reset,
  } = usePrediction();

  function handleSelectFile(file) {
    if (!file) return;

    // Accept only images
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    reset();
  }

  async function handleUpload() {
    if (!selectedFile) {
      alert("Please choose an image first.");
      return;
    }

    try {
      await predict(selectedFile);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {loading && <LoadingOverlay />}

      <section
        id="upload"
        className="bg-slate-950 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h2 className="text-center text-4xl font-bold text-white">
            Try TruthLens AI
          </h2>

          <p className="mt-4 text-center text-slate-400">
            Drag & drop an image or click below to upload and analyze it using AI.
          </p>

          <div className="mt-10 flex flex-col items-center gap-8">

            <DropZone
              preview={preview}
              selectedFile={selectedFile}
              onSelectFile={handleSelectFile}
            />

            <button
              onClick={handleUpload}
              disabled={loading || !selectedFile}
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>

            {error && (
              <div className="w-full rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-4 text-center text-red-400">
                {error}
              </div>
            )}

            <ResultCard result={result} />

          </div>

        </div>
      </section>
    </>
  );
}