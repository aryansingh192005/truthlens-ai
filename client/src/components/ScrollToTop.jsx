import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-blue-600 p-4 text-white shadow-xl transition hover:scale-110 hover:bg-blue-500"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
}