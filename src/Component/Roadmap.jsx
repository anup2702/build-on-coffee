import React from "react";
import { Route, Code, Terminal, GitMerge, Server, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { roadmap } from "../../data/roadmap.js";
import { Link } from "react-router-dom";

const iconMap = {
  "DSA for Placements": <Code className="w-8 h-8 mb-4 text-blue-500" />,
  "Web Development": <Server className="w-8 h-8 mb-4 text-green-500" />,
  "DevOps": <Terminal className="w-8 h-8 mb-4 text-red-500" />,
  "System Design": <GitMerge className="w-8 h-8 mb-4 text-purple-500" />,
  "Open Source Journey": <GitBranch className="w-8 h-8 mb-4 text-yellow-500" />,
};

const Roadmap = () => {
  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="mx-auto py-16 px-10 text-center animate-fade-in dark:bg-gray-900 min-h-screen">
      <h2 className="inline-block text-5xl font-extrabold mb-6 text-gradient">
        <Route className="inline-block w-7 h-7 mr-2 mb-1" />
        Explore Roadmaps
      </h2>

      <div className="flex justify-center mb-8">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs shadow-lg border backdrop-blur-lg font-bold bg-blue-100/80 text-blue-600 border-blue-200/50 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-400/30">
          Learn CS concepts step-by-step with interactive roadmaps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roadmap.map((item, i) => (
          <motion.div
            key={i}
            className="relative p-6 rounded-xl border transition-all duration-300 flex flex-col items-center justify-between h-full bg-white/80 border-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:border-blue-700 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.05, y: -2 }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.2 }}
          >
            {iconMap[item.title]}
            <h3 className="text-xl font-black mb-2 text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="text-sm font-medium text-center mb-4 text-gray-600 dark:text-gray-400">
              {item.description}
            </p>

            <Link
              to={item.path}
              className="inline-block mt-2 px-4 py-2 rounded-xl font-semibold transition-all duration-200 bg-black text-white hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              View Roadmap
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
