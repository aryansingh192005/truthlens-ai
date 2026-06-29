export default function ImageComparison({ preview }) {
  if (!preview) return null;

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Uploaded Image
      </h2>

      <div className="flex justify-center">

        <img
          src={preview}
          alt="Uploaded"
          className="max-h-[500px] w-auto rounded-2xl border border-slate-700 object-contain shadow-xl"
        />

      </div>

    </div>
  );
}