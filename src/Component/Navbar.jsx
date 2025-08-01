import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Home,
  Info,
  Mail,
  UserPlus,
  Award,
  MoonStar,
  Users,
  Coffee,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check initial theme
  useEffect(() => {
    const isDark = document.body.classList.contains("dark-theme");
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.body.classList.toggle("dark-theme");
  };

  const navLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
    {
      to: "/contribute",
      label: "Contribute",
      icon: <UserPlus className="w-4 h-4" />,
    },

    {
  to: "/tools",
  label: "Tools",
  icon: <Users className="w-4 h-4" />,
},

  ];

  
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -30, scale: 0.9 },
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.header
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDarkMode
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/60 shadow-2xl shadow-blue-500/10"
            : "bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-2xl shadow-blue-500/10"
          : isDarkMode
          ? "bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/40 shadow-lg"
          : "bg-white/80 backdrop-blur-lg border-b border-gray-200/40 shadow-lg"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1 flex items-center justify-between">
        {/* Logo + Text */}
        <motion.div variants={itemVariants}>
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative p-1.5 rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl shadow-lg border border-white/20 w-fit overflow-hidden"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                animate={{
                  x: isHovered ? "100%" : "-100%",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.div
                className="relative z-10"
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Coffee className="w-5 h-5 text-blue-600" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
                }}
                transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
              >
                <Sparkles className="w-3 h-3 text-yellow-500" />
              </motion.div>
            </motion.div>

            <div className="leading-tight">
              <motion.h1
                className="text-xl font-black text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #0d9dadff, #17c8c8ee, #0f7ec8ff, #8b5cf6, #ec4899)",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundImage:
                    "linear-gradient(135deg, #ec4899, #8b5cf6, #0f7ec8ff, #17c8c8ee, #0d9dadff)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  duration: 0.3,
                }}
              >
                BuildOnCoffee
              </motion.h1>
              <motion.p
                className={`text-xs font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  x: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                Code • Learn • Create
              </motion.p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center gap-1"
          variants={itemVariants}
        >
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.to;

            return (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={link.to}
                  className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-bold transition-all duration-300 group ${
                    isActive
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-700"
                      : isDarkMode
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <motion.div
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {link.icon}
                    </motion.div>
                    {link.label}
                  </motion.div>
                  {/* Shiny Underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    animate={
                      isActive
                        ? { scaleX: 1, opacity: 1 }
                        : { scaleX: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  {/* Shiny Glow Effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 blur-sm rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    animate={
                      isActive
                        ? { scaleX: 1, opacity: 1 }
                        : { scaleX: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            className={`p-2 rounded-lg transition-all duration-300 ml-1 shadow-md border ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-800/80 to-gray-700/80 hover:from-blue-900/80 hover:to-purple-900/80 border-gray-600/20"
                : "bg-gradient-to-br from-gray-100/80 to-gray-200/80 hover:from-blue-100/80 hover:to-purple-100/80 border-white/20"
            }`}
            onClick={toggleDarkMode}
            whileHover={{
              scale: 1.1,
              rotate: 180,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <MoonStar
                className={`w-4 h-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              />
            </motion.div>
          </motion.button>
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className={`md:hidden p-2 rounded-lg transition-all duration-300 shadow-md border ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-800/80 to-gray-700/80 hover:from-blue-900/80 hover:to-purple-900/80 border-gray-600/20"
              : "bg-gradient-to-br from-gray-100/80 to-gray-200/80 hover:from-blue-100/80 hover:to-purple-100/80 border-white/20"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <X
                  className={`w-5 h-5 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Menu
                  className={`w-5 h-5 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`md:hidden border-t backdrop-blur-xl shadow-2xl ${
              isDarkMode
                ? "border-gray-700/50 bg-gray-900/95"
                : "border-gray-200/50 bg-white/95"
            }`}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.to;

                return (
                  <motion.div
                    key={link.to}
                    variants={mobileItemVariants}
                    whileHover={{ x: 15, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? isDarkMode
                            ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-400 border border-blue-300/50 shadow-lg"
                            : "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-700 border border-blue-200/50 shadow-lg"
                          : isDarkMode
                          ? "text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-blue-900/80 hover:text-blue-400"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-blue-50/80 hover:text-blue-600"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.icon}
                      </motion.div>
                      {link.label}
                      {isActive && (
                        <motion.div
                          className="ml-auto w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 300,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Theme Toggle */}
              <motion.div
                variants={mobileItemVariants}
                className={`pt-4 border-t ${
                  isDarkMode ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <button
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold w-full transition-all duration-300 ${
                    isDarkMode
                      ? "text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-blue-900/80"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-blue-50/80"
                  }`}
                  onClick={toggleDarkMode}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <MoonStar className="w-5 h-5" />
                  </motion.div>
                  Toggle Theme
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
