import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

const WhatWeDoDifferently = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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

  const features = [
    {
      title: "Cohorts",
      description: "Learn together in small, focused groups with real projects and mentorship.",
      color: "blue",
    },
    {
      title: "Learn",
      description: "Access curated resources, workshops, and hands-on sessions for all levels.",
      color: "purple",
    },
    {
      title: "Tools & Links",
      description: "Discover, share, and use the best tools and links for modern development.",
      color: "pink",
    },
  ];

  return (
    <section className={`relative py-12 overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? "bg-transparent" 
        : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-16 left-8 w-48 h-48 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute bottom-16 right-8 w-60 h-60 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs shadow-lg border backdrop-blur-lg mb-4"
            style={{
              background: isDarkMode 
                ? "rgba(59, 130, 246, 0.1)" 
                : "rgba(59, 130, 246, 0.1)",
              borderColor: isDarkMode 
                ? "rgba(59, 130, 246, 0.3)" 
                : "rgba(59, 130, 246, 0.2)",
              color: isDarkMode ? "#93c5fd" : "#2563eb"
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="font-bold">Our Unique Approach</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Zap className="w-3 h-3" />
            </motion.div>
          </motion.div>

                     <motion.h2
             variants={itemVariants}
             className={`text-3xl md:text-4xl font-black mb-4 ${
               isDarkMode ? "text-white" : "text-gray-900"
             }`}
           >
             What We Do{" "}
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
               Differently
             </span>
           </motion.h2>

                     <motion.p
             variants={itemVariants}
             className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
               isDarkMode ? "text-gray-300" : "text-gray-600"
             }`}
           >
             At BuildOnCoffee, we focus on community-driven curation, hands-on learning, and real-world developer growth. Our approach is unique:
           </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid gap-6 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
                             className={`relative p-6 rounded-xl backdrop-blur-lg border transition-all duration-300 ${
                 isDarkMode
                   ? "bg-white/10 border-gray-600/30 hover:bg-white/20"
                   : "bg-white/50 border-gray-200/50 hover:bg-white/70"
               }`}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              animate="animate"
              transition={{ delay: index * 0.2 }}
            >
              {/* Floating Emoji */}
              <motion.div
                className="absolute -top-3 -right-3 text-2xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {feature.emoji}
              </motion.div>

              {/* Content */}
                             <motion.h3
                 className={`text-xl font-bold mb-3 text-center ${
                   isDarkMode ? "text-white" : "text-gray-900"
                 }`}
                 whileHover={{ scale: 1.05 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                 {feature.title}
               </motion.h3>

                             <motion.p
                 className={`text-center leading-relaxed text-sm ${
                   isDarkMode ? "text-gray-300" : "text-gray-600"
                 }`}
                 whileHover={{ scale: 1.02 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                 {feature.description}
               </motion.p>

              {/* Decorative Sparkles */}
              <motion.div
                className="absolute top-3 left-3"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className={`w-3 h-3 ${
                  isDarkMode ? "text-yellow-400" : "text-yellow-500"
                }`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatWeDoDifferently; 
