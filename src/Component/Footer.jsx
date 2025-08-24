import React from 'react';
import { useTheme } from './context/ThemeContext';
import { motion } from 'framer-motion';
import { Coffee, Heart, Github, Linkedin, Disc as Discord, Mail } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isDark } = useTheme();
  const footerLinks = {
    Product: [
    { label: 'Learn', to: '/' },
    { label: 'Tools', to: '/tools' },
    { label: 'Community', to: '/' },
    { label: 'API', to: '/' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/' },
    { label: 'Careers', to: '/' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    { label: 'Documentation', to: '/documentation' },
    { label: 'Help Center', to: '/' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms-of-service' },
  ],
  Connect: [
    { label: 'GitHub', href: 'https://github.com/anup2702/build-on-coffee' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/build-on-coffee/' },
    { label: 'X', href: 'https://x.com/buildoncoffee' },
    { label: 'Discord', href: 'https://discord.gg/gUJnX8dQ' },
    { label: 'Mail', href: 'mailto:buildoncoffee@gmail.com' },
  ]
  };

  const socialIcons = [
    { icon: Github, href: 'https://github.com/anup2702/build-on-coffee', label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/build-on-coffee/', label: 'LinkedIn', color: 'hover:text-[#0077B5] dark:hover:text-[#3399cc]' },
    { icon: FaXTwitter, href: 'https://x.com/buildoncoffee', label: 'X', color: 'hover:text-black dark:hover:text-white' },
    { icon: Discord, href: 'https://discord.gg/gUJnX8dQ', label: 'Discord', color: 'hover:text-indigo-500 dark:hover:text-indigo-400' },
    { icon: Mail, href: 'mailto:buildoncoffee@gmail.com', label: 'Email', color: 'hover:text-green-500 dark:hover:text-green-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Coffee className="h-8 w-8 text-blue-500" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-2xl font-black text-gradient">BuildOnCoffee</span>
            </motion.div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Empowering developers with the tools, knowledge, and community needed 
              to build amazing projects and advance their careers.
            </p>

            <div className="flex space-x-4">
               {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <div key={index} className="group relative flex items-center justify-center">
                    {/* Tooltip ABOVE the icon */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                                    scale-95 group-hover:scale-100 transition-all duration-200 ease-out 
                                    bg-white text-black dark:bg-black dark:text-white 
                                    text-xs px-3 py-2 rounded-xl shadow-lg z-10 pointer-events-none whitespace-nowrap">
                      {social.label}
                    </div>

                    {/* Icon Button */}
                    <motion.a
                      href={social.href}
                      className={`p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + linkIndex * 0.05 }}
                  >
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>by the BuildOnCoffee team</span>
          </motion.div>

          <motion.div
            className="text-gray-500 dark:text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            © {new Date().getFullYear()} BuildOnCoffee. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;