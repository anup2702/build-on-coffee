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
  isDarkMode ? "bg-[#0f172a]" : "bg-[#f9fafb]"
}`}>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10 bg-[#1d4ed8]"
      animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-10 bg-[#3b82f6]"
      animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 bg-[#60a5fa]"
      animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
  </div>

  {/*   Content */}
  <motion.div
    className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >

  
          {/*   Title */}
                     <motion.h1
             variants={itemVariants}
             className="text-4xl md:text-6xl font-black leading-tight"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 via-mocha-600 to-latte-600">
              Welcome to
            </span>
            <br />
            <motion.span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: isHovered
                  ? "linear-gradient(135deg, #eab84d, #d35f2a, #e35a1f, #bc431c, #96361e)"
                  : "linear-gradient(135deg, #96361e, #bc431c, #e35a1f, #d35f2a, #eab84d)",
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

    {/* Badge */}
    <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4 mb-6">
      <motion.div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs shadow border ${
          isDarkMode
            ? "bg-[#1e293b] text-blue-300 border-blue-600"
            : "bg-white text-[#1d4ed8] border-[#dbeafe]"
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Stars className="w-4 h-4" />
        <span className="font-bold">Building the future, one cup at a time</span>
        <Zap className="w-3 h-3" />
      </motion.div>
  

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-extrabold leading-tight"
      >
        <span className={`text-[#1d4ed8] ${isDarkMode ? "text-[#60a5fa]" : ""}`}>
          Welcome to
        </span>
        <br />
        <span className={`text-[#111] dark:text-white`}>BuildOnCoffee</span>
      </motion.h1>
    </motion.div>

  
        {/* CTA Buttons */}
                 <motion.div
           variants={itemVariants}
           className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
         >
           
                     <motion.a
             className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-xl transition-all duration-300 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #e35a1f, #d35f2a, #eab84d, #bc431c)",
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

    {/* Subtitle */}
    <motion.p
      variants={itemVariants}
      className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
        isDarkMode ? "text-gray-400" : "text-[#333]"
      }`}
    >
      Join our vibrant community of passionate developers. Learn cutting-edge technologies,
      discover powerful tools, and build amazing projects together with fellow coffee enthusiasts.
    </motion.p>
  

    {/* CTA Buttons */}
    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <motion.a
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white bg-[#1d4ed8] hover:bg-[#1e40af] transition"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/tools">Explore Tools</Link>
        <ChevronRight className="w-4 h-4" />
      </motion.a>

      <motion.a
        href="https://github.com/anup2702/build-on-coffee"
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold border transition ${
          isDarkMode
            ? "text-gray-300 border-gray-600 hover:bg-[#1e293b]"
            : "text-[#111] border-gray-300 hover:bg-gray-100"
        }`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Users className="w-4 h-4" />
        Join Community
        <ArrowRight className="w-3 h-3" />
      </motion.a>
    </motion.div>

    {/* Stats */}
    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {[
        { icon: <Users className="w-6 h-6" />, number: "10K+", label: "Active Developers" },
        { icon: <Code2 className="w-6 h-6" />, number: "50+", label: "Tools & Resources" },
        { icon: <Stars className="w-6 h-6" />, number: "100+", label: "Learning Paths" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          className={`relative p-6 rounded-lg border ${
            isDarkMode
              ? "bg-[#1e293b] border-[#334155]"
              : "bg-white border-[#e5e7eb]"
          }`}
          whileHover={{ scale: 1.05, y: -2 }}
          variants={floatingVariants}
          animate="animate"
        >
          <div className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-3 bg-[#e0e7ff] text-[#1d4ed8] dark:bg-[#1e40af]/30 dark:text-[#60a5fa]">
            {stat.icon}
          </div>
          <h3 className={`text-2xl font-black mb-1 ${isDarkMode ? "text-white" : "text-[#111]"}`}>
            {stat.number}
          </h3>
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>

  );
};

export default HeroSection;
