import {
  Camera,
  Image as ImageIcon,
  ScanFace,
  HardDrive,
  Sun,
  Focus,
} from "lucide-react";

export default function ForensicReport({ forensics }) {
  if (!forensics) return null;

  const { image_quality, face_analysis, metadata } = forensics;

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Forensic Analysis
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Resolution */}

        <div className="rounded-2xl bg-slate-800 p-5">
          <div className="mb-3 flex items-center gap-3">
            <ImageIcon className="text-blue-400" />
            <h3 className="font-semibold text-white">
              Resolution
            </h3>
          </div>

          <p className="text-slate-300">
            {image_quality.resolution}
          </p>
        </div>

        {/* Blur */}

        <div className="rounded-2xl bg-slate-800 p-5">
          <div className="mb-3 flex items-center gap-3">
            <Focus className="text-cyan-400" />
            <h3 className="font-semibold text-white">
              Sharpness
            </h3>
          </div>

          <p className="text-slate-300">
            {image_quality.blur}
          </p>
        </div>

        {/* Brightness */}

        <div className="rounded-2xl bg-slate-800 p-5">
          <div className="mb-3 flex items-center gap-3">
            <Sun className="text-yellow-400" />
            <h3 className="font-semibold text-white">
              Brightness
            </h3>
          </div>

          <p className="text-slate-300">
            {image_quality.brightness}
          </p>
        </div>

        {/* File Size */}

        <div className="rounded-2xl bg-slate-800 p-5">
          <div className="mb-3 flex items-center gap-3">
            <HardDrive className="text-purple-400" />
            <h3 className="font-semibold text-white">
              File Size
            </h3>
          </div>

          <p className="text-slate-300">
            {image_quality.file_size_mb} MB
          </p>
        </div>

        {/* Faces */}

        <div className="rounded-2xl bg-slate-800 p-5">
          <div className="mb-3 flex items-center gap-3">
            <ScanFace className="text-green-400" />
            <h3 className="font-semibold text-white">
              Faces Detected
            </h3>
          </div>

          <p className="text-slate-300">
            {face_analysis.faces_detected}
          </p>
        </div>

        {/* Camera */}

        <div className="rounded-2xl bg-slate-800 p-5">
          <div className="mb-3 flex items-center gap-3">
            <Camera className="text-red-400" />
            <h3 className="font-semibold text-white">
              Camera
            </h3>
          </div>

          <p className="text-slate-300 break-words">
            {metadata.camera}
          </p>
        </div>

      </div>

    </div>
  );
}