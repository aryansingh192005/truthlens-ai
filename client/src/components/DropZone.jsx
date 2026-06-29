import { UploadCloud } from "lucide-react";

export default function DropZone({
  preview,
  selectedFile,
  onSelectFile,
}) {
  function handleDrop(e) {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    onSelectFile(file);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    onSelectFile(file);
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-full max-w-3xl rounded-3xl border-2 border-dashed border-blue-500/40 bg-slate-900/40 p-10 transition hover:border-blue-400 hover:bg-slate-900/60"
    >
      <input
        id="dropzone-input"
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />

      <label
        htmlFor="dropzone-input"
        className="flex cursor-pointer flex-col items-center justify-center"
      >
        <UploadCloud
          size={64}
          className="mb-6 text-blue-400"
        />

        <h3 className="text-2xl font-semibold text-white">
          Drag & Drop an Image
        </h3>

        <p className="mt-2 text-slate-400">
          or click here to browse your files
        </p>

        {selectedFile && (
          <p className="mt-6 text-blue-300">
            {selectedFile.name}
          </p>
        )}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-8 max-h-80 rounded-2xl border border-slate-700 shadow-xl"
          />
        )}
      </label>
    </div>
  );
}