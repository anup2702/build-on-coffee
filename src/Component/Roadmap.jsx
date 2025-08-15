import React from "react";
import { Route, Code, Terminal, GitMerge, Server, GitBranch, Network, Bot, Shield, Cloud, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { roadmap } from "../../data/roadmap.js";
import { Link } from "react-router-dom";

const iconMap = {
  "DSA for Placements": <Code className="w-8 h-8 text-blue-500" />,
  "Web Development": <Server className="w-8 h-8 text-green-500" />,
  "DevOps": <Terminal className="w-8 h-8 text-red-500" />,
  "System Design": <GitMerge className="w-8 h-8 text-purple-500" />,
  "Open Source Journey": <GitBranch className="w-8 h-8 text-yellow-500" />,
  "Mobile Development": <Code className="w-8 h-8 text-teal-500" />,
  "BLockchain": <Network className="w-8 h-8 text-teal-500" />,
  "Ai Ml Roadmap": <Bot className="w-8 h-8 text-cyan-500" />,
  "Cybersecurity Roadmap": <Shield className="w-8 h-8 text-indigo-500" />,
  "Cloud Computing": <Cloud className="w-8 h-8 text-blue-400" />,
  "UI/UX Design": <Palette className="w-8 h-8 text-pink-500" />
};

const Roadmap = () => {
  return (
    <div className="min-h-screen py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
            <Route className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Learning Paths</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white">
            Explore Roadmaps
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Learn CS concepts step-by-step with interactive roadmaps designed to guide your learning journey.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <Route className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">{roadmap.length}</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Learning Paths</div>
          </div>
          
          <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <Code className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">Step-by-Step</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Structured Learning</div>
          </div>
          
          <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
            <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">Free</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">All Resources</div>
          </div>
        </motion.div>

        {/* Roadmap Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {roadmap.map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                  {iconMap[item.title]}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black mb-4 text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed">
                {item.description}
              </p>

              {/* CTA Button */}
              <div className="text-center">
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                >
                  <span>View Roadmap</span>
                  <Route className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gray-50 dark:bg-slate-800/50 p-12 rounded-2xl border border-gray-200 dark:border-slate-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose a roadmap that aligns with your career goals and follow our structured learning paths 
              to master new skills systematically.
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Browse All Roadmaps</span>
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;
