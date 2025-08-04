import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Code2, Stars, ChevronRight, Coffee, Sparkles, ArrowRight, Zap } from "lucide-react";
import { useTheme } from './context/ThemeContext';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  // Use isDark from ThemeContext instead of local state
  const isDarkMode = isDark;

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

  return (
         <section className={`relative py-16 flex items-center justify-center overflow-hidden transition-all duration-500 ${
       isDarkMode 
         ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
         : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
     }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-pink-500" : "bg-pink-400"
          }`}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
             <motion.div
         className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
        {/* Badge */}
                 <motion.div
           variants={itemVariants}
           className="flex flex-col items-center space-y-4 mb-6"
         >
                     <motion.div
             className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs shadow-lg border backdrop-blur-lg ${
               isDarkMode
                 ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                 : "bg-blue-100/80 text-blue-600 border-blue-200/50"
             }`}
                         whileHover={{ scale: 1.05, y: -2 }}
             transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
                             <Stars className="w-4 h-4" />
            </motion.div>
            <span className="font-bold">Building the future, one cup at a time</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
                             <Zap className="w-3 h-3" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
                     <motion.h1
             variants={itemVariants}
             className="text-4xl md:text-6xl font-black leading-tight"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Welcome to
            </span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: isHovered
                  ? "linear-gradient(135deg, #ec4899, #8b5cf6, #0f7ec8ff, #17c8c8ee, #0d9dadff)"
                  : "linear-gradient(135deg, #0d9dadff, #17c8c8ee, #0f7ec8ff, #8b5cf6, #ec4899)",
              }}
              animate={{
                backgroundPosition: isHovered ? "100% 50%" : "0% 50%",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              BuildOnCoffee
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
                 <motion.p
           variants={itemVariants}
           className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
             isDarkMode ? "text-gray-300" : "text-gray-600"
           }`}
         >
          Join our vibrant community of passionate developers. Learn cutting-edge technologies,
          discover powerful tools, and build amazing projects together with fellow coffee enthusiasts.
        </motion.p>

        {/* CTA Buttons */}
                 <motion.div
           variants={itemVariants}
           className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
         >
           
                     <motion.a
             className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-xl transition-all duration-300 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #3858be, #268bcf, #17c8c8, #8b5cf6)",
              backgroundSize: "300% 300%",
            }}
                         whileHover={{ scale: 1.05, y: -2 }}
             whileTap={{ scale: 0.95 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <Link to={"/tools"} className="relative z-10">Explore Tools</Link>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
                             <ChevronRight className="w-4 h-4" />
            </motion.div>
          </motion.a>

                     <motion.a
             href="https://github.com/anup2702/build-on-coffee"
             className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-all duration-300 ${
               isDarkMode
                 ? "border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500"
                 : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
             }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                             <Users className="w-4 h-4" />
            </motion.div>
            <span>Join Community</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
                             <ArrowRight className="w-3 h-3" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Stats Section */}
                 <motion.div
           variants={itemVariants}
           className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
         >
          {[
            {
              icon: <Users className="w-6 h-6" />,
              number: "10K+",
              label: "Active Developers",
              color: "blue",
            },
            {
              icon: <Code2 className="w-6 h-6" />,
              number: "50+",
              label: "Tools & Resources",
              color: "purple",
            },
            {
              icon: <Stars className="w-6 h-6" />,
              number: "100+",
              label: "Learning Paths",
              color: "pink",
            },
          ].map((stat, index) => (
                         <motion.div
               key={index}
               className={`relative p-6 rounded-xl backdrop-blur-lg border transition-all duration-300 ${
                 isDarkMode
                   ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70"
                   : "bg-white/50 border-gray-200/50 hover:bg-white/70"
               }`}
                             whileHover={{ scale: 1.05, y: -2 }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: index * 0.2 }}
            >
                             <motion.div
                 className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  stat.color === "blue"
                    ? isDarkMode
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                    : stat.color === "purple"
                    ? isDarkMode
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-purple-100 text-purple-600"
                    : isDarkMode
                    ? "bg-pink-500/20 text-pink-400"
                    : "bg-pink-100 text-pink-600"
                }`}
                                 whileHover={{ scale: 1.05, y: -2 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {stat.icon}
              </motion.div>
                             <motion.h3
                 className={`text-2xl font-black mb-2 ${
                   isDarkMode ? "text-white" : "text-gray-900"
                 }`}
                variants={pulseVariants}
                animate="animate"
              >
                {stat.number}
              </motion.h3>
                             <p className={`text-xs font-medium ${
                 isDarkMode ? "text-gray-400" : "text-gray-600"
               }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Coffee Cup */}
                 <motion.div
           className="absolute top-1/2 right-8 hidden lg:block"
          variants={floatingVariants}
          animate="animate"
        >
                     <motion.div
             className={`p-3 rounded-xl backdrop-blur-lg border ${
               isDarkMode
                 ? "bg-gray-800/50 border-gray-700/50"
                 : "bg-white/50 border-gray-200/50"
             }`}
                         whileHover={{ scale: 1.05, y: -2 }}
             transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
                         <Coffee className={`w-6 h-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
          </motion.div>
        </motion.div>

        {/* Floating Sparkles */}
                 <motion.div
           className="absolute top-16 left-16 hidden lg:block"
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
                     <Sparkles className={`w-5 h-5 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;