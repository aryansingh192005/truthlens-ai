import { useState } from "react";
import { analyzeImage } from "../services/analysisService";

export default function useAnalysis() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function analyze(file) {
    try {
      setLoading(true);
      setError("");

      const response = await analyzeImage(file);

      setResult(response);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        "Analysis failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    result,
    error,
    analyze,
  };
}