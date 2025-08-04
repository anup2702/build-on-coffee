import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  LogIn,
  LogOut,
  UserCircle,
  Eye,
  EyeOff,
  UserPlus
} from "lucide-react";
import { useTheme } from "./context/ThemeContext";
import { auth, googleProvider } from "../firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

const Navbar = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Authentication state
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleGoogleAuth = async () => {
    try {
      if (isLoginView) {
        await signInWithPopup(auth, googleProvider);
      } else {
        await signInWithPopup(auth, googleProvider);
      }
      setShowAuthModal(false);
      setAuthError("");
    } catch (e) {
      setAuthError("Authentication failed. Please try again.");
    }
  };

  const handleEmailAuth = async () => {
    try {
      if (isLoginView) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setShowAuthModal(false);
      setAuthError("");
    } catch (e) {
      setAuthError("Authentication failed. Please try again.");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setShowUserDropdown(false);
    } catch (e) {
      console.error("Logout error:", e);
    }
  };

  const resetAuthForm = () => {
    setEmail("");
    setPassword("");
    setAuthError("");
  };

  const toggleAuthView = () => {
    setIsLoginView(!isLoginView);
    resetAuthForm();
  };

  const getUserDisplayName = (email) => {
    if (!email) return "";
    const atIndex = email.indexOf("@");
    return atIndex !== -1 ? email.substring(0, atIndex) : email;
  };

  const navItems = [
    { id: "home", to: "/", label: "Home", icon: Home },
    { id: "about", to: "/about", label: "About", icon: Info },
    { id: "contact", to: "/contact", label: "Contact", icon: Mail },
    { id: "contribute", to: "/contribute", label: "Contribute", icon: GitBranch },
    { id: "tools", to: "/tools", label: "Tools", icon: Wrench }
  ];

  const handleScroll = (key) => (e) => {
    if (location.pathname === "/" && scrollRefs?.[key]?.current) {
      e.preventDefault();
      scrollRefs[key].current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        scrollRefs?.[key]?.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-500`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 relative">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/")}
            >
              <div className="relative">
                <motion.div
                  className="p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-blue-200/30 dark:from-blue-400/10 dark:to-teal-400/10 dark:border-blue-700/30"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Coffee className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
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
                const active = location.pathname === item.to;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => navigate(item.to)}
                    className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                      active
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-700/60 shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50/80 dark:hover:bg-gray-800/50"
                    }`}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">{item.label}</span>
                    {active && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-full"
                        layoutId="activeBackground"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Theme Toggle & Auth */}
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleTheme();
                }}
                className="relative p-2.5 rounded-full bg-gray-50/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
                type="button"
              >
                <motion.div
                  animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0.9 : 1 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.div>
              </motion.button>

              {user ? (
                <div className="relative" style={{ overflow: 'visible' }}>
                  <motion.button
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm border border-gray-300 dark:border-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>Hello, {getUserDisplayName(user.email)}</span>
                  </motion.button>
                  <AnimatePresence>
                    {showUserDropdown && (
                      <motion.div
                        className="absolute left-full -top-2 ml-2 font-medium text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-4xl shadow-2xl p-1 w-30 h-12 z-[100]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.button
                          onClick={handleSignOut}
                          className="flex items-center space-x-2 font-medium text-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200"
                          whileHover={{ x: 2 }}
                        >
                          <LogOut className="h-5 w-5" />
                          <span>Sign out</span>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ) : (
                <motion.button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsLoginView(true);
                    resetAuthForm();
                  }}
                  className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogIn size={16} />
                  Sign In
                </motion.button>
              )}

              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-full bg-gray-50/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Nav */}
          <motion.div
            className={`md:hidden overflow-hidden ${isMobileMenuOpen ? "max-h-96" : "max-h-0"}`}
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="py-6 px-2 space-y-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl mx-4 mb-4 border border-gray-200/30 dark:border-gray-700/30">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
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
                    animate={{
                      opacity: isMobileMenuOpen ? 1 : 0,
                      x: isMobileMenuOpen ? 0 : -20
                    }}
                    transition={{ duration: 0.3, delay: isMobileMenuOpen ? idx * 0.1 : 0, ease: [0.23, 1, 0.32, 1] }}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ x: 3 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl w-80 relative"
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => {
                  setShowAuthModal(false);
                  resetAuthForm();
                }}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <X size={18} />
              </button>
              
              <h2 className="text-xl text-[var(--txt)] font-semibold mb-4">
                {isLoginView ? "Sign In" : "Create Account"}
              </h2>
              
              <motion.button
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center gap-2 py-2 mb-3 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                {isLoginView ? <LogIn size={16} /> : <UserPlus size={16} />}
                Continue with Google
              </motion.button>
              
              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <span className="relative bg-white dark:bg-gray-900 px-2 text-xs text-gray-500">OR</span>
              </div>
              
              <div className="mb-3">
                <label className="text-xs text-gray-500">Email</label>
                <div className="flex items-center border px-2 rounded-md dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-200">
                  <Mail size={14} className="text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent p-2 text-sm focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="text-xs text-gray-500">Password</label>
                <div className="flex items-center border px-2 rounded-md dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-200">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent p-2 text-sm focus:outline-none"
                    placeholder="••••••••"
                  />
                  <button 
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
              
              {authError && (
                <div className="mb-3 text-xs text-red-500 dark:text-red-400">
                  {authError}
                </div>
              )}
              
              <motion.button
                onClick={handleEmailAuth}
                className="w-full bg-blue-600 text-white py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 mb-3"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                {isLoginView ? "Sign In" : "Sign Up"}
              </motion.button>
              
              <div className="text-center text-xs text-gray-500">
                {isLoginView ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={toggleAuthView}
                  className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
                >
                  {isLoginView ? "Sign up" : "Sign in"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;