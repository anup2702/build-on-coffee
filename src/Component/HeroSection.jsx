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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Create a motion-enabled Link component
  const MotionLink = motion(Link);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500 ${
      isDarkMode ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
    }`}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-5 bg-blue-500"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 rounded-full blur-3xl opacity-5 bg-cyan-500"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-indigo-500"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex flex-col items-center space-y-6 mb-8">
          <motion.div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm shadow-sm border ${
              isDarkMode
                ? "bg-slate-800/50 text-blue-300 border-blue-500/30 backdrop-blur-sm"
                : "bg-white/80 text-blue-600 border-blue-200/50 backdrop-blur-sm"
            }`}
            whileHover={{ scale: 1.02, y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Stars className="w-4 h-4" />
            <span className="font-semibold">Building the future, one cup at a time</span>
            <Zap className="w-3 h-3" />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight"
          >
            <span className="text-gradient">
              Welcome to
            </span>
            <br />
            <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
              BuildOnCoffee
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed font-light ${
            isDarkMode ? "text-slate-300" : "text-gray-600"
          }`}
        >
          Join our vibrant community of passionate developers. Learn cutting-edge technologies,
          discover powerful tools, and build amazing projects together with fellow coffee enthusiasts.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <MotionLink
            to="/tools"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Tools
            <ChevronRight className="w-5 h-5" />
          </MotionLink>

          <motion.a
            href="https://github.com/anup2702/build-on-coffee"
            className={`btn-secondary inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Users className="w-5 h-5" />
            Join Community
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Stats */}
<motion.div
  variants={itemVariants}
  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
>
  {[
    { icon: <Users className="w-8 h-8" />, number: "10K+", label: "Active Developers" },
    { icon: <Code2 className="w-8 h-8" />, number: "50+", label: "Tools & Resources" },
    { icon: <Stars className="w-8 h-8" />, number: "100+", label: "Learning Paths" },
  ].map((stat, index) => (
    <motion.div
      key={index}
      className={`relative p-8 rounded-2xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-blue-500/70 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          : "bg-white/80 border-gray-200/50 backdrop-blur-sm hover:border-blue-400/70 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]"
      }`}
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      variants={floatingVariants}
      animate="animate"
    >
      <div
        className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${
          isDarkMode
            ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
            : "bg-blue-50 text-blue-600 hover:bg-blue-100"
        }`}
      >
        {stat.icon}
      </div>
      <h3
        className={`text-3xl font-black mb-2 transition-colors ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {stat.number}
      </h3>
      <p
        className={`text-base font-medium transition-colors ${
          isDarkMode ? "text-slate-400" : "text-gray-600"
        }`}
      >
        {stat.label}
      </p>
    </motion.div>
  ))}
</motion.div>
</motion.div>
    </section>
  );
};

export default HeroSection;
