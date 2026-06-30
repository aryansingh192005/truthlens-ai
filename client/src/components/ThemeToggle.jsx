import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("truthlens-theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("truthlens-theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("truthlens-theme", "dark");
      setDark(true);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:border-blue-500 hover:text-white"
      aria-label="Toggle Theme"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}