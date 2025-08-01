import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Discord from "./Discord";
import X from "./X";
import { Github, Instagram, Linkedin, MessageCircle, Twitter, Coffee, Heart, Sparkles } from "lucide-react";

const socialLinks = [
  {
    href: "https://instagram.com/yourprofile",
    label: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    color: "pink",
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    color: "blue",
  },
  {
    href: "https://discord.com/invite/yourinvite",
    label: "Discord",
    icon: <Discord  />,
    color: "purple",
  },
  {
    href: "https://twitter.com/yourprofile",
    label: "Twitter",
    icon: <X/>,
    color: "cyan",
  },
];

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-theme");
    setIsDarkMode(isDark);

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
    <footer className="relative bg-gray-900 text-white py-6 px-4 border-t border-gray-800 shadow-2xl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-blue-600"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 bg-purple-600"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
                 {/* Footer Content Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                     {/* Brand Section */}
           <motion.div
             className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
                         <motion.div
               className="flex items-center gap-1 mb-1"
               whileHover={{ scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <motion.div
                 className="p-0.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                 whileHover={{ rotate: 360 }}
                 transition={{ duration: 0.6, ease: "easeInOut" }}
               >
                 <Coffee className="w-3 h-3 text-blue-400" />
               </motion.div>
               <h3 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                 BuildOnCoffee
               </h3>
             </motion.div>
             <p className="text-gray-300 mb-2 leading-relaxed text-xs">
              Empowering developers to build amazing things while enjoying their coffee. 
              Join our community of passionate coders and learners.
            </p>
                         <motion.div
               className="flex gap-1"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
             >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                                     className={`p-1 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 ${
                    link.color === "pink"
                      ? "hover:border-pink-500/50"
                      : link.color === "blue"
                      ? "hover:border-blue-500/50"
                      : link.color === "purple"
                      ? "hover:border-purple-500/50"
                      : "hover:border-cyan-500/50"
                  }`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`${
                      link.color === "pink"
                        ? "text-pink-400"
                        : link.color === "blue"
                        ? "text-blue-400"
                        : link.color === "purple"
                        ? "text-purple-400"
                        : "text-cyan-400"
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {link.icon}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

                     {/* Quick Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <h4 className="text-xs font-semibold mb-1 text-white">Quick Links</h4>
             <div className="flex flex-wrap gap-8">
               {["Home", "About", "Courses", "Tools", "Contact"].map((link, index) => (
                 <motion.a
                   key={link}
                   href={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
                   className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1 group text-xs"
                   whileHover={{ x: 2, scale: 1.05 }}
                   initial={{ opacity: 0, x: -20 }}q
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 300 }}
                 >
                   <motion.div
                     className="w-1 h-1 bg-blue-400 rounded-full"
                     animate={{ scale: [1, 1.5, 1] }}
                     transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                   />
                   {link}
                 </motion.a>
               ))}
             </div>
           </motion.div>

          {/* Resources */}
        </div>

                 {/* Divider */}
         <motion.div
           className="border-t border-gray-800 mb-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

                 {/* Bottom Section */}
         <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/anup2702/build-on-coffee"
              target="_blank"
              rel="noopener noreferrer"
                             className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-lg font-medium transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-blue-500/50"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                                 <Github className="w-3 h-3 text-gray-300" />
              </motion.div>
              <span className="text-gray-300">View on GitHub</span>
            </motion.a>
          </motion.div>

          {/* Copyright */}
                     <motion.div
             className="text-xs text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
                         <motion.p
               className="flex items-center justify-center gap-1"
               whileHover={{ scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <span>© {new Date().getFullYear()}</span>
               <motion.span
                 className="font-semibold flex items-center gap-1 text-white"
                 whileHover={{ scale: 1.05 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                 <Coffee className="w-2.5 h-2.5 text-blue-400" />
                 BuildOnCoffee
               </motion.span>
               <span>All rights reserved.</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                                 <Heart className="w-2.5 h-2.5 text-red-400" />
              </motion.div>
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Sparkles */}
        {/* <motion.div
          className="absolute top-8 left-8"
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
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </motion.div> */}

        <motion.div
          className="absolute bottom-8 right-8"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-3 h-3 text-blue-400" />
        </motion.div>
      </motion.div>
    </footer>
  );
};

// Optional animated Community Section
export const CommunitySection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-theme");
    setIsDarkMode(isDark);

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
    <motion.section
      id="community"
      className="max-w-2xl mx-auto py-12 px-4 text-center text-gray-900 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-gray-900"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Join Our Community
      </motion.h2>
      
      <motion.p
        className="text-lg mb-6 text-gray-600"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Connect, share, and grow with BuildOnCoffee.
      </motion.p>
      
      <motion.div
        className="flex justify-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-2 rounded-lg transition-all duration-300 bg-gray-100 hover:bg-gray-200 border border-gray-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <motion.div
              className={`${
                link.color === "pink"
                  ? "text-pink-600"
                  : link.color === "blue"
                  ? "text-blue-600"
                  : link.color === "purple"
                  ? "text-purple-600"
                  : "text-cyan-600"
              }`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {link.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
      
      <motion.a
        href="https://discord.com/invite/yourinvite"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all duration-300 bg-gray-900 text-white hover:bg-gray-800 border border-gray-200"
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <MessageCircle className="w-4 h-4" />
        </motion.div>
        Join our community
      </motion.a>
    </motion.section>
  );
};

export default Footer;
