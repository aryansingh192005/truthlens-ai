import UploadSection from "../components/UploadSection";
import AnalysisResult from "../components/AnalysisResult";

export default function Analysis() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold text-white">
            AI Image Analysis
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            Upload an image to perform AI-powered deepfake detection,
            metadata inspection, face detection, and forensic analysis.
          </p>

        </div>

        <UploadSection />

        <AnalysisResult />

      </div>

    </div>
  );
}