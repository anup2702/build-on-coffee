import React, { useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Heart,
  Github,
  Linkedin,
  Disc as Discord,
  Mail,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const footerLinks = {
    Product: [
      { label: "Learn", to: "/" },
      { label: "Tools", to: "/tools" },
      { label: "Community", to: "/" },
      { label: "API", to: "/" },
    ],
    Company: [
      { label: "About", to: "/about" },
      { label: "Blog", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Contact", to: "/contact" },
    ],
    Resources: [
      { label: "Documentation", to: "/documentation" },
      { label: "Help Center", to: "/" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms-of-service" },
    ],
    Connect: [
      { label: "GitHub", href: "https://github.com/anup2702/build-on-coffee" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/build-on-coffee/",
      },
      { label: "X", href: "https://x.com/buildoncoffee" },
      { label: "Discord", href: "https://discord.gg/gUJnX8dQ" },
      { label: "Mail", href: "mailto:buildoncoffee@gmail.com" },
    ],
  };

  const socialIcons = [
    {
      icon: Github,
      href: "https://github.com/anup2702/build-on-coffee",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/build-on-coffee/",
      label: "LinkedIn",
      color: "hover:text-[#0077B5] dark:hover:text-[#3399cc]",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/buildoncoffee",
      label: "X",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      icon: Discord,
      href: "https://discord.gg/gUJnX8dQ",
      label: "Discord",
      color: "hover:text-indigo-500 dark:hover:text-indigo-400",
    },
    {
      icon: Mail,
      href: "mailto:buildoncoffee@gmail.com",
      label: "Email",
      color: "hover:text-green-500 dark:hover:text-green-400",
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main single-row layout */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-10 lg:gap-14">
          {/* Brand Section */}
          <div className="flex-1 min-w-[280px] max-w-[350px]">
            <motion.div
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <Coffee className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-black">BuildOnCoffee</span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-5 text-base leading-relaxed">
              Empowering developers with the tools, knowledge, and community to
              build amazing projects and grow their careers.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    className={`p-2.5 bg-white dark:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-300 border border-gray-200 dark:border-gray-700`}
                    whileHover={{ scale: 1.1 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex justify-between gap-8 lg:gap-14 flex-1">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={category} className={index === 3 ? "mr-8" : ""}>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, i) => (
                    <li key={i}>
                      {link.to ? (
                        <Link
                          to={link.to}
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-all"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-all"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="flex-1 min-w-[300px] max-w-[360px] pl-4 lg:pl-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
              Get the latest updates, tools, and resources delivered to your
              inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 dark:text-white"
                required
              />
              <motion.button
                type="submit"
                disabled={isLoading}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-all text-sm disabled:opacity-50"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? "..." : "Subscribe"}
              </motion.button>
            </form>

            <AnimatePresence>
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 p-3 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded-md text-green-700 dark:text-green-300 text-sm shadow-sm"
                >
                  ✅ You’ve successfully subscribed
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <motion.div
            className="flex items-center space-x-1 mb-3 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>by the BuildOnCoffee team</span>
          </motion.div>
          <span>© 2025 BuildOnCoffee. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
