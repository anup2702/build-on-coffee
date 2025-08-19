import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { learningPaths } from "../../../data/learningPaths";

const getProgress = (slug, milestones) => {
  try {
    const raw = localStorage.getItem(`learningPathProgress:${slug}`);
    if (!raw) return { completed: 0, total: milestones.length };
    const map = JSON.parse(raw);
    const completed = milestones.filter((m) => map[m.id]).length;
    return { completed, total: milestones.length };
  } catch {
    return { completed: 0, total: milestones.length };
  }
};

const PathsLanding = () => {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // show loader for a short time (simulate fetch)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s
    return () => clearTimeout(timer);
  }, []);

  const levels = useMemo(() => ["Beginner", "Intermediate", "Advanced"], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const lvl = level.trim().toLowerCase();
    return learningPaths.filter((p) => {
      const matchesName = !q || p.title.toLowerCase().includes(q);
      const matchesLevel = !lvl || p.level.toLowerCase() === lvl;
      return matchesName && matchesLevel;
    });
  }, [query, level]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
            Learning Paths
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Structured, multi-week journeys tailored to your goals.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search paths (e.g., Frontend, DSA, Node)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">All Levels</option>
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const { completed, total } = getProgress(p.slug, p.milestones);
            const pct = total ? Math.round((completed / total) * 100) : 0;
            return (
              <motion.div
                key={p.slug}
                className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition cursor-pointer"
                whileHover={{ y: -4 }}
                onClick={() => navigate(`/paths/${p.slug}`)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.description}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {p.level}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-4 text-sm text-gray-600 dark:text-gray-300">
                  <span>{p.duration}</span>
                  <span>•</span>
                  <span>
                    Progress: {completed}/{total} ({pct}%)
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded mt-3 overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium">View details →</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathsLanding;
