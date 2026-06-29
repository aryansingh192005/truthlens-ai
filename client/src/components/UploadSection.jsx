import { useRef, useState } from "react";
import api from "../services/api";

export default function UploadSection() {
  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setResult(null);
    setError("");
  }

  async function handleUpload() {
    if (!selectedFile) {
      alert("Please choose an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      setError("");

      const response = await api.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="upload" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10">

        <h2 className="text-center text-4xl font-bold text-white">
          Try TruthLens AI
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Upload an image and receive an AI prediction in seconds.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            onClick={() => inputRef.current.click()}
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-500"
          >
            Choose Image
          </button>

          {selectedFile && (
            <p className="text-slate-300">
              {selectedFile.name}
            </p>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="rounded-xl border border-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Image"}
          </button>

          {error && (
            <p className="text-red-400">
              {error}
            </p>
          )}

          {result && (
            <div className="mt-8 w-full rounded-2xl bg-slate-900 p-6">

              <h3 className="mb-6 text-2xl font-bold text-white">
                Prediction Result
              </h3>

              <div className="space-y-3 text-lg">

                <p className="text-slate-300">
                  <strong>Prediction:</strong> {result.prediction}
                </p>

                <p className="text-slate-300">
                  <strong>Confidence:</strong> {result.confidence}%
                </p>

                <p className="text-slate-300">
                  <strong>Risk Level:</strong> {result.risk_level}
                </p>

                <p className="text-slate-300">
                  <strong>Processing Time:</strong> {result.processing_time_ms} ms
                </p>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}