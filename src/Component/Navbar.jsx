import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
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
} from "lucide-react";

//Clerk imports for Auth
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";
import {
  User,
  Route,
} from "lucide-react";
import { useTheme } from "./context/ThemeContext";

const Navbar = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

 const navItems = [
  { id: "home", to: "/", label: "Home", icon: Home },
  { id: "about", to: "/about", label: "About", icon: Info },
  { id: "contact", to: "/contact", label: "Contact", icon: Mail },
  { id: "contribute", to: "/contribute", label: "Contribute", icon: GitBranch },
  { id: "tools", to: "/tools", label: "Tools", icon: Wrench },
  { id: "team", to: "/team", label: "Team", icon: Users }, // 👈 new one
  { id: "profile", to: "/profile", label: "Profile", icon: User },
];

  

  const topLinks = [{ key: "community", label: "Join our community" }];

  const handleScroll = (key) => {
    return (e) => {
      if (
        location.pathname === "/" &&
        scrollRefs &&
        scrollRefs[key] &&
        scrollRefs[key].current
      ) {
        e.preventDefault();
        scrollRefs[key].current.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { replace: false });
        setTimeout(() => {
          scrollRefs?.[key]?.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-200/50 dark:border-gray-700/50`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <motion.div
                className="p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 dark:from-blue-400/10 dark:to-teal-400/10 border border-blue-200/30 dark:border-blue-700/30"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Coffee className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                BuildOnCoffee
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1 font-medium">
                Code • Learn • Create
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => navigate(item.to)}
                  className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 group overflow-hidden ${
                    location.pathname === item.to
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
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 dark:from-blue-400/5 dark:to-teal-400/5 rounded-full"
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
            {/* 👤 Clerk User Controls */}
            <SignedIn>
              <div className="hidden md:flex items-center gap-2">
                <SignOutButton signOutCallback={() => navigate("/login")}>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-full transition-all duration-300">
                    Sign Out
                  </button>
                </SignOutButton>
                <UserButton afterSignOutUrl="/login" />
              </div>
            </SignedIn>
            {/* <SignedOut>
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 hidden text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300"
              >
                Login
              </button>
            </SignedOut> */}

            {/* Theme Toggle */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
              }}
              className="relative p-2.5 rounded-full bg-gray-50/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
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
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-gray-50/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="py-6 px-2 space-y-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl mx-4 mb-4 border border-gray-200/30 dark:border-gray-700/30">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.id}>
                    <motion.button
                      onClick={() => {
                        navigate(item.to);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                        location.pathname === item.to
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

                    {/* 👇 Sign Out Button only on Mobile, rendered ONCE after all menu items */}
                    {index === navItems.length - 1 && (
                      <SignedIn>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: (index + 1) * 0.1,
                          }}
                        >
                          <SignOutButton
                            signOutCallback={() => navigate("/login")}
                          >
                            <button className="w-full flex items-center space-x-3 px-4 py-3.5 mt-2 rounded-xl font-medium text-red-600 hover:text-white hover:bg-red-500/80 transition-all duration-300 border border-red-200/30 dark:border-red-700/30 dark:hover:bg-red-600/80">
                              <span>Sign Out</span>
                            </button>
                          </SignOutButton>
                        </motion.div>
                      </SignedIn>
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
