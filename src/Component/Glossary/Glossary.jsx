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
        <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
        <BookOpen className="w-10 h-10 text-yellow-400" />
        <h1 className="text-4xl font-extrabold text-center text-gradient">Glossary</h1>
    </div>
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] transition"
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
                  ? "bg-[#38bdf8] border-[#224bd3] text-black"
                  : "bg-[#1e293b] border-[#334155] text-white hover:bg-[#334155] hover:border-[#38bdf8] transition"
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
                className="bg-[#1e293b] rounded-xl p-6 shadow-lg border border-[#334155] hover:border-[#38bdf8] transition"
              >
                <h2 className="text-xl font-semibold text-[#38bdf8]">{item.term}</h2>
                <p className="text-gray-300 mt-2">{item.definition}</p>
                {item.category && (
                  <span className="inline-block mt-3 text-sm text-amber-400 font-medium bg-slate-700 px-2 py-1 rounded">
                    {item.category}
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No matching terms found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
