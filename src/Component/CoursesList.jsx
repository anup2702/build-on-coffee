import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Star, Clock, Users } from "lucide-react";
import { courses } from "../../data/courses";
import ToolCard from "./ToolCard";
import Notification from "./Notification";

const CoursesList = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(true);

  // --- NEW: favorites state from localStorage ---
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (slug) => {
    setFavourites((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug]
    );
  };

  // Hide notification after 7s
  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Get only new courses (added in last 7 days)
  const newCourses = courses.filter((course) => {
    if (!course.dateAdded) return false;
    const dateAdded = new Date(course.dateAdded);
    const now = new Date();
    const diffInDays = (now - dateAdded) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  });

  return (
    <div className="min-h-screen py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Notification */}
        {showNotification && newCourses.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Notification count={newCourses.length} />
          </motion.div>
        )}

        {/* Page Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
              Learning Resources
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white">
            All Courses
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Explore our comprehensive collection of computer science courses
            designed to accelerate your learning journey.
          </p>
        </motion.div>

        {/* Course Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
              {courses.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Total Courses
            </div>
          </div>

          <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <Star className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
              {newCourses.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              New This Week
            </div>
          </div>

          <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
            <Users className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
              Free
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              All Courses
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            >
              <ToolCard
                {...course}
                dateAdded={course.dateAdded}
                onClick={() => navigate(`/courses/${course.slug}`)}
                isFavourite={favourites.includes(course.slug)}
                onToggleFavourite={() => toggleFavourite(course.slug)}
              />
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly adding new courses. Let us know what topics you'd
              like to see covered!
            </p>
            <a
              href="https://github.com/anup2702/build-on-coffee/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Suggest a Course</span>
              <Clock className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesList;
