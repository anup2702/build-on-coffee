import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { learningPaths } from "../../../data/learningPaths";

const loadProgress = (slug) => {
  try {
    const raw = localStorage.getItem(`learningPathProgress:${slug}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const saveProgress = (slug, map) => {
  try {
    localStorage.setItem(`learningPathProgress:${slug}`, JSON.stringify(map));
  } catch {}
};

const PathDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const path = useMemo(() => learningPaths.find((p) => p.slug === slug), [slug]);
  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {
    if (path) {
      setProgressMap(loadProgress(path.slug));
    }
  }, [path]);

  if (!path) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Path not found</h1>
          <button className="underline" onClick={() => navigate("/paths")}>Go back</button>
        </div>
      </div>
    );
  }

  const completed = path.milestones.filter((m) => progressMap[m.id]).length;
  const total = path.milestones.length;
  const pct = total ? Math.round((completed / total) * 100) : 0;

  const toggle = (id) => {
    setProgressMap((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveProgress(path.slug, next);
      return next;
    });
  };

  const reset = () => {
    setProgressMap({});
    saveProgress(path.slug, {});
  };

  const completeAll = () => {
    const all = Object.fromEntries(path.milestones.map((m) => [m.id, true]));
    setProgressMap(all);
    saveProgress(path.slug, all);
  };

  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/paths" className="text-blue-600 dark:text-blue-400">← All Paths</Link>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">{path.title}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">{path.description}</p>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span>{path.duration}</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">{path.level}</span>
              <span>•</span>
              <span>Progress: {completed}/{total} ({pct}%)</span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded mt-3 overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={completeAll} className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm">Mark all complete</button>
            <button onClick={reset} className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-sm">Reset</button>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {path.milestones.map((m) => (
            <motion.label
              key={m.id}
              className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 hover:shadow-sm transition"
              whileHover={{ y: -2 }}
            >
              <input
                type="checkbox"
                checked={!!progressMap[m.id]}
                onChange={() => toggle(m.id)}
                className="mt-1 h-5 w-5 accent-blue-600"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">{m.label}</div>
                {m.link && (
                  m.link.startsWith("/") ? (
                    <Link
                      to={m.link}
                      className="text-sm text-blue-600 dark:text-blue-400 underline"
                    >
                      Explore related resources
                    </Link>
                  ) : (
                    <a
                      href={m.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 underline"
                    >
                      Explore related resources
                    </a>
                  )
                )}
              </div>
            </motion.label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathDetail;
