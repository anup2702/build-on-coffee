import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-20 right-6 z-50 p-4 rounded-full 
                   bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 
                   shadow-lg transition-transform duration-200 hover:scale-110 
                   focus:outline-none animate-pulse"
      >
        <FaArrowUp className="text-white text-xl drop-shadow" />
      </button>
    )
  );
};

export default BackToTop;
