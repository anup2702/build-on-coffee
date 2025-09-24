import { freeCertificateCourses } from '../../data/freeCertificateCourses';
import { motion } from "framer-motion";
import { Award, Star, Clock, Users } from "lucide-react";

const FreeCertificateCourses = () => {
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
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Free Certificates</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white">
            Courses with Free Certificates
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Explore high-quality courses that offer free certificates upon completion. 
            Build your skills and earn credentials to showcase your expertise.
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
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">{freeCertificateCourses.length}</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Total Courses</div>
          </div>
          
          <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <Star className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">100%</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Free Certificates</div>
          </div>
          
          <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
            <Users className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">Top</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Platforms</div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {freeCertificateCourses.map((course, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Course Image */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gray-50 dark:bg-slate-700 rounded-2xl p-4 flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={`Logo of ${course.name}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Course Title */}
              <div className="flex-grow flex flex-col justify-between">
              <h3 className="text-2xl font-black mb-4 text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {course.name}
              </h3>

              {/* Course Description */}
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Certificate Badge */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-800">
                  <Award className="w-4 h-4" />
                  {course.certificate}
                </span>
              </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-auto">
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                >
                  <span>View Course</span>
                  <Clock className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                </a>
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
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose a course that matches your interests and start building your skills today. 
              All courses are completely free and include certificates upon completion.
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Browse All Courses</span>
              <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeCertificateCourses;