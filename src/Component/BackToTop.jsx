// src/components/BackToTop.jsx
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: Lucide for modern icons

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <button
      onClick={scrollToTop}
              className="bg-gradient-to-r from-coffee-900 to-mocha-900 hover:from-coffee-800 hover:to-mocha-800 text-white p-3 rounded-full shadow-xl transition duration-300 group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  ) : null;
};

export default BackToTop;
