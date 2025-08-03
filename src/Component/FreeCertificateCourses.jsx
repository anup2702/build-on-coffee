import { useState ,useEffect } from 'react';
import { freeCertificateCourses } from '../../data/freeCertificateCourses';
import { motion, AnimatePresence } from "framer-motion";

const FreeCertificateCourses = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

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
  
    // Check theme state
    useEffect(() => {
      const isDark = document.body.classList.contains("dark-theme");
      setIsDarkMode(isDark);
  
      // Listen for theme changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            setIsDarkMode(document.body.classList.contains("dark-theme"));
          }
        });
      });
  
      observer.observe(document.body, { attributes: true });
      return () => observer.disconnect();
    }, []);
  
  return (
    <section className={`mx-auto py-16 px-10 text-center animate-fade-in ${isDarkMode ? "bg-gray-900 min-h-screen" : ""}`}>
    <h2
  className="inline-block text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
>
  Courses with Free Certificates
</h2>




<div className="flex justify-center mb-8">
  <p
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full  text-xs shadow-lg border backdrop-blur-lg font-bold
     ${isDarkMode
                 ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                 : "bg-blue-100/80 text-blue-600 border-blue-200/50"
             }`}
  >

    Explore high-quality courses that offer free certificates upon completion.

  </p>
</div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
  {freeCertificateCourses.map((course, i) => (
   <motion.div
  key={i}
   className={`relative p-6 rounded-xl border transition-all duration-300 flex flex-col items-center justify-between h-full ${
     isDarkMode
       ? "bg-gray-900 border-blue-700 hover:bg-gray-800"
       : "bg-white/80 border-gray-700 hover:bg-blue-50"
   }`}
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
    className={`text-xl font-black mb-2 text-center ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}
    variants={pulseVariants}
    animate="animate"
  >
    {course.name}
  </motion.h3>

  <p
    className={`text-sm font-medium text-center mb-2 ${
      isDarkMode ? "text-gray-400" : "text-gray-600"
    }`}
  >
    {course.description}
  </p>

  <span
    className={`text-xs font-semibold ${
      isDarkMode ? "text-green-300" : "text-green-700"
    }`}
  >
    {course.certificate}
  </span>

  {/* Spacer to push button to bottom */}
  <div className="flex-grow" />

  <a
    href={course.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block mt-4 px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
      isDarkMode
        ? "bg-gray-800 text-white hover:bg-gray-700"
        : "bg-black text-white hover:bg-gray-800"
    }`}
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
