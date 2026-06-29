import { useState } from "react";
import api from "../services/api";

export default function usePrediction() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const predict = async (file) => {
    if (!file) {
      throw new Error("No file selected.");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const response = await api.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data);
      return response.data;
    } catch (err) {
      console.error(err);

      const message =
        err.response?.data?.detail ||
        "Unable to connect to the AI server.";

      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError("");
  };

  return {
    loading,
    result,
    error,
    predict,
    reset,
  };
}