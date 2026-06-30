import { UploadCloud, X } from "lucide-react";
import useFileUpload from "../hooks/useFileUpload";

export default function FileUpload({ onFileSelect }) {
  const {
    selectedFile,
    handleFileChange,
    clearFile,
  } = useFileUpload();

  function onChange(event) {
    handleFileChange(event);

    const file = event.target.files?.[0];

    if (file && onFileSelect) {
      onFileSelect(file);
    }
  }

  return (
    <div className="rounded-3xl border border-dashed border-blue-500/40 bg-slate-900/70 p-10">

      <label className="flex cursor-pointer flex-col items-center justify-center text-center">

        <UploadCloud
          size={60}
          className="text-blue-400"
        />

        <h3 className="mt-6 text-2xl font-bold text-white">
          Upload Image
        </h3>

        <p className="mt-2 text-slate-400">
          JPG, JPEG or PNG
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />

      </label>

      {selectedFile && (

        <div className="mt-8 flex items-center justify-between rounded-xl bg-slate-800 p-4">

          <span className="truncate text-slate-300">
            {selectedFile.name}
          </span>

          <button
            onClick={clearFile}
            className="rounded-lg p-2 transition hover:bg-slate-700"
          >
            <X
              size={18}
              className="text-red-400"
            />
          </button>

        </div>

      )}

    </div>
  );
}