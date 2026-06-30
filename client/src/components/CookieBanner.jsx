import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("truthlens-cookie");

    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("truthlens-cookie", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <h3 className="text-lg font-semibold text-white">
            Cookie Notice
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            TruthLens AI uses local browser storage to improve your experience,
            such as remembering your preferences. No personal data is collected
            or shared.
          </p>

        </div>

        <button
          onClick={acceptCookies}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Accept
        </button>

      </div>

    </div>
  );
}