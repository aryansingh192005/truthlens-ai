import { useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const checkBackend = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/health");
      const data = await response.json();
      setBackendMessage(data.message);
    } catch (error) {
      setBackendMessage("Could not connect to backend.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
          AI Deepfake Detection & Media Authenticity Platform
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          TruthLens AI
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Detect manipulated images and videos, analyze authenticity signals,
          and generate explainable forensic reports with AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
            Upload Media
          </button>

          <button
            onClick={checkBackend}
            className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500"
          >
            {loading ? "Checking..." : "Check Backend"}
          </button>
        </div>

        {backendMessage && (
          <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-emerald-300">
            {backendMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;