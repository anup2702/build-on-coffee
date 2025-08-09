import React from "react";
import { Heart } from "lucide-react";
import { useState,useEffect } from "react";

export const Hearts = ({ courseId }) => {

    const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <button
      className="absolute top-1 right-1"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite(courseId);
      }}
    >
      <Heart
        size={24}
        className={`transition-colors ${
          favorites.includes(courseId)
            ? "fill-red-500 text-red-500"
            : "text-gray-400"
        }`}
      />
    </button>
  );
};

export default Hearts;
