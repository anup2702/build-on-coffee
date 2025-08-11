import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectIdeas from "../../data/projectIdeas.json";

export default function ProjectIdeas() {
  const [level, setLevel] = useState("beginner");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const list = projectIdeas.filter((p) => p.level === level);
    setFiltered(list);
  }, [level]);

  const gradientTextClasses =
    "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600";

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Main Title */}
      <h1
        className={`text-6xl font-extrabold text-center mb-10 ${gradientTextClasses}`}
      >
        Project Ideas
      </h1>

      {/* Toggle */}
      <div className="flex justify-center gap-4 mb-10">
        {["beginner", "intermediate", "advanced"].map((lvl) => {
          const isActive = level === lvl;
          return (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              className={`px-6 py-2 rounded-full font-semibold capitalize text-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                }`}
              style={{
                boxShadow: isActive
                  ? "0 4px 15px rgba(219, 39, 119, 0.6)"
                  : "none",
              }}
            >
              {lvl}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((idea) => (
          <motion.div
            key={idea.id}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
            onClick={() => navigate(`/project-idea/${idea.id}`)}
          >
            <div className="h-44 w-full overflow-hidden">
              <img
                src={idea.image}
                alt={idea.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-center">{idea.title}</h3>
              <button
                className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Know More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
