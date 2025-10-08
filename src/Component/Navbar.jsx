import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Coffee,
  Menu,
  X,
  Sun,
  Moon,
  Home,
  Info,
  Mail,
  GitBranch,
  Award,
  Wrench,
  Users,
  Shield,
} from "lucide-react";

import {
  User,
  Clipboard,
  Route,
  LogOut,
} from "lucide-react";
import { useTheme } from "./context/ThemeContext";
import { useAuth } from "../lib/useAuth";

const Navbar = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navItems = [
    { id: "home", to: "/", label: "Home", icon: Home },
    { id: "services", label: "Products", icon: Wrench, type: "scroll" },
    { id: "team", to: "/team", label: "Team", icon: Users },
    { id: "verify", to: "/verify-certificate", label: "Verify Certificate", icon: Shield },
  ];

  const topLinks = [{ key: "community", label: "Join our community" }];

  // Updated navigation handler to support different types
  const handleNavClick = (item) => {
    if (item.type === "scroll") {
      // Handle scroll navigation
      if (
        location.pathname === "/" &&
        scrollRefs &&
        scrollRefs[item.id] &&
        scrollRefs[item.id].current
      ) {
        scrollRefs[item.id].current.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { replace: false });
        setTimeout(() => {
          scrollRefs?.[item.id]?.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (item.to) {
      // Handle regular navigation
      navigate(item.to);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${isVisible ? "translate-y-0" : "-translate-y-full"
        } glass border-b border-white/20 dark:border-gray-700/30`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <motion.div
                className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-200/50 dark:border-blue-600/50 shadow-lg backdrop-blur-sm"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Coffee className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                {/* Animated steam effect */}
                <motion.div
                  className="absolute -top-2 -right-1 w-2 h-2 bg-blue-400/60 rounded-full"
                  animate={{
                    y: [-2, -8, -2],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-cyan-400/60 rounded-full"
                  animate={{
                    y: [-1, -6, -1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="flex flex-col">
              <motion.span
                className="text-2xl font-black text-gradient"
                whileHover={{
                  backgroundPosition: "right center"
                }}
                transition={{ duration: 0.5 }}
              >
                BuildOnCoffee
              </motion.span>
              <motion.span
                className="text-xs text-gray-500 dark:text-gray-400 -mt-1 font-medium tracking-wide"
                whileHover={{
                  color: "rgb(59 130 246)"
                }}
                transition={{ duration: 0.3 }}
              >
                Code • Learn • Create
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group overflow-hidden ${location.pathname === item.to
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-700/60 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 border border-transparent hover:border-gray-200/40 dark:hover:border-gray-700/40"
                    }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="h-4 w-4 relative z-10" />
                  <span className="font-medium relative z-10">
                    {item.label}
                  </span>
                  {location.pathname === item.to && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl"
                      layoutId="activeBackground"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* 👤 Supabase User Controls */}
            {isAuthenticated && user ? (
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Sign Out
                </button>
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
                  {user.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {user.user_metadata?.full_name || user.email?.split('@')[0]}
                  </span>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Sign In
                </button>
              </div>
            )}

            {/* Theme Toggle */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
              }}
              className="relative p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: isDark ? 180 : 0,
                  scale: isDark ? 0.9 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="py-6 px-4 space-y-2 glass rounded-2xl mx-4 mb-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.id}>
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        handleNavClick(item);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 ${location.pathname === item.to
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-700/50"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100"
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </motion.button>

                    {/* 👇 Auth Buttons only on Mobile, rendered ONCE after all menu items */}
                    {index === navItems.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: (index + 1) * 0.1,
                        }}
                        className="mt-4 space-y-2"
                      >
                        {isAuthenticated && user ? (
                          <button
                            onClick={logout}
                            className="w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium text-red-600 hover:text-white hover:bg-red-500/80 transition-all duration-300 border border-red-200/30 dark:border-red-700/30 dark:hover:bg-red-600/80"
                          >
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              navigate("/login");
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                          >
                            <span>Sign In</span>
                          </button>
                        )}
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;