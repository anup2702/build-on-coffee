import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Star, Users, ArrowRight } from "lucide-react";
import projectIdeas from "../../data/projectIdeas.json";

export default function ProjectIdeas() {
  const [level, setLevel] = useState("beginner");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const list = projectIdeas.filter((p) => p.level === level);
    setFiltered(list);
  }, [level]);

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
            <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Creative Ideas</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white">
            Project Ideas
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Discover curated project ideas for developers of all skill levels.
            Build something amazing and showcase your skills.
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
            <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">{projectIdeas.length}</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Total Ideas</div>
          </div>

          <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <Star className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">3</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Skill Levels</div>
          </div>

          <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
            <Users className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">Community</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Curated</div>
          </div>
        </motion.div>

        {/* Level Toggle */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {["beginner", "intermediate", "advanced"].map((lvl) => {
            const isActive = level === lvl;
            return (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`px-8 py-4 rounded-2xl font-semibold capitalize text-lg transition-all duration-300 border-2 ${isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700"
                  }`}
              >
                {lvl}
              </button>
            );
          })}
        </motion.div>

        {/* Project Ideas Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filtered.map((idea, i) => (
            <motion.div
              key={idea.id}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 
  hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => navigate(`/project-idea/${idea.id}`)}
            >
              {/* Project Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {idea.title}
                </h3>

                {/* CTA Button */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                    <Star className="w-4 h-4" />
                    {level}
                  </span>

                  <button className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group/btn">
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gray-50 dark:bg-slate-800/50 p-12 rounded-2xl border border-gray-200 dark:border-slate-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose a project idea that matches your skill level and interests.
              Start building today and add it to your portfolio!
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Browse All Ideas</span>
              <Lightbulb className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
