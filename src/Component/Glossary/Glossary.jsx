import React, { useState } from "react";
import glossaryData from "../../../data/glossary";
import { BookOpen } from 'lucide-react';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(glossaryData.map((item) => item.category))];

  // Combined filter logic
  const visibleTerms = glossaryData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
        <BookOpen className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />
        <h1 className="text-4xl font-extrabold text-center text-gradient">Glossary</h1>
    </div>
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-[#1e293b] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#38bdf8] transition"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 text-sm rounded-full border transition ${
                selectedCategory === category
                  ? "bg-blue-500 border-blue-600 text-white dark:bg-[#38bdf8] dark:border-[#224bd3] dark:text-black"
                  : "bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200 hover:border-blue-500 dark:bg-[#1e293b] dark:border-[#334155] dark:text-white dark:hover:bg-[#334155] dark:hover:border-[#38bdf8] transition"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Glossary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleTerms.length > 0 ? (
            visibleTerms.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1e293b] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-[#334155] hover:border-blue-500 dark:hover:border-[#38bdf8] transition"
              >
                <h2 className="text-xl font-semibold text-blue-600 dark:text-[#38bdf8]">{item.term}</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{item.definition}</p>
                {item.category && (
                  <span className="inline-block mt-3 text-sm text-amber-600 dark:text-amber-400 font-medium bg-amber-100 dark:bg-slate-700 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 col-span-full text-center">
              No matching terms found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
