import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Sparkles, Users, Code } from 'lucide-react';

const HeroSection = ({ communityRef }) => {
  const navigate = useNavigate();

  const scrollToCommunity = () => {
    if (communityRef && communityRef.current) {
      communityRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Welcome to BuildOnCoffee';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200 ease-in-out">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle absolute rounded-full bg-blue-400/20 dark:bg-blue-400/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Building the future, one cup at a time</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-violet-600 bg-clip-text text-transparent">
            {typewriterText}
          </span>
          <motion.span
            className="inline-block w-1 h-16 bg-blue-600 ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Join our community of passionate developers. Learn cutting-edge technologies, 
          discover powerful tools, and build amazing projects together.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
<motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/tools')}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore Tools</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>

          <motion.button
            className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToCommunity}
          >
            <span className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Join Community</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { icon: Users, value: '10K+', label: 'Active Developers' },
            { icon: Code, value: '50+', label: 'Tools & Resources' },
            { icon: Sparkles, value: '100+', label: 'Learning Paths' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
