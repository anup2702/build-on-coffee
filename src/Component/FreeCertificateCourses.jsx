import { freeCertificateCourses } from '../../data/freeCertificateCourses';
import { motion } from "framer-motion";

const FreeCertificateCourses = () => {
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="mx-auto py-16 px-10 text-center animate-fade-in dark:bg-gray-900 min-h-screen">
      <h2
                    className="inline-block text-5xl font-extrabold mb-6 bg-gradient-to-r from-coffee-600 via-latte-400 to-mocha-500 bg-clip-text text-transparent"
      >
        Courses with Free Certificates
      </h2>

      <div className="flex justify-center mb-8">
        <p
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs shadow-lg border backdrop-blur-lg font-bold bg-blue-100/80 text-blue-600 border-blue-200/50 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-400/30"
        >
          Explore high-quality courses that offer free certificates upon completion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {freeCertificateCourses.map((course, i) => (
          <motion.div
            key={i}
            className="relative p-6 rounded-xl border transition-all duration-300 flex flex-col items-center justify-between h-full bg-white/80 border-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:border-blue-700 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.05, y: -2 }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.2 }}
          >
            <motion.img
              src={course.image}
              alt={`Logo of ${course.name}`}
              className="w-16 h-16 object-contain rounded-xl mb-4"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />

            <motion.h3
              className="text-xl font-black mb-2 text-center text-gray-900 dark:text-white"
              variants={pulseVariants}
              animate="animate"
            >
              {course.name}
            </motion.h3>

            <p
              className="text-sm font-medium text-center mb-2 text-gray-600 dark:text-gray-400"
            >
              {course.description}
            </p>

            <span
              className="text-xs font-semibold text-green-700 dark:text-green-300"
            >
              {course.certificate}
            </span>

            
            <div className="flex-grow" />

            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-xl font-semibold transition-all duration-200 bg-black text-white hover:bg-gray-800 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
            >
              View Course
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FreeCertificateCourses;