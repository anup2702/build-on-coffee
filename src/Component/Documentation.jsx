import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink } from "lucide-react";
import { documentationItems } from "../../data/documentation";

const uniqueSorted = (values) => Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

const Documentation = () => {
  const [query, setQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");

  const allCategories = useMemo(() => {
    return uniqueSorted(documentationItems.flatMap((d) => d.categories || []));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const cq = categoryQuery.trim().toLowerCase();

    return documentationItems.filter((item) => {
      const matchesName = !q || item.name.toLowerCase().includes(q);
      const matchesCategory =
        !cq || (item.categories || []).some((c) => c.toLowerCase().includes(cq));
      return matchesName && matchesCategory;
    });
  }, [query, categoryQuery]);

  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Explore official docs for popular technologies across frontend, backend, databases, cloud, and more.
          </p>
        </div>

        {/* Search Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name (e.g., React, Django)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={categoryQuery}
              onChange={(e) => setCategoryQuery(e.target.value)}
              placeholder="Search by category (e.g., Frontend, Python, DevOps)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Categories Quick Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryQuery(cat)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                categoryQuery.toLowerCase() === cat.toLowerCase()
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
          {categoryQuery && (
            <button
              onClick={() => setCategoryQuery("")}
              className="px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <motion.div
              key={item.name}
              className="relative rounded-2xl p-5 bg-white dark:bg-gray-900 shadow-sm transition-all flex flex-col 
             border border-gray-200 dark:border-gray-800 
             hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] 
             duration-300 ease-in-out"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-3 ">
                {item.logo && (
                  <img src={item.logo} alt={item.name} className="w-12 h-12 object-contain rounded" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{item.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {(item.categories || []).map((c) => (
                  <span
                    key={c}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex justify-end">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
                >
                  Visit <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
            No documentation found. Try changing your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Documentation;
