import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, Youtube, Github, Linkedin, ChevronRight, Users } from 'lucide-react';

const JoinCommunity = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const socialLinks = [
    {
      icon: Twitter,
      name: 'Twitter',
      description: 'Follow us for quick dev tips, updates & insights.',
      members: '8K+',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      description: 'Explore our open-source tools and contribute.',
      members: '5K+',
      color: 'from-gray-700 to-black'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      description: 'Watch tutorials, product walkthroughs, and live sessions.',
      members: '2K+',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      description: 'Connect professionally with our growing network.',
      members: '3K+',
      color: 'from-blue-700 to-indigo-700'
    }
  ];

  const communityStats = [
    {
      icon: Users,
      label: 'Community Members',
      value: '12,000+'
    },
    {
      icon: Github,
      label: 'Open Source Projects',
      value: '80+'
    },
    {
      icon: Twitter,
      label: 'Mentors & Experts',
      value: '150+'
    },
    {
      icon: Linkedin,
      label: 'Career Opportunities Shared',
      value: '300+'
    }
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-[#0B1120] border-t border-gray-200 dark:border-white/10 text-gray-900 dark:text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
 main
          <motion.div
            className="inline-block p-4 bg-gradient-to-r from-coffee-100/50 to-mocha-100/50 dark:from-coffee-600/20 dark:to-mocha-600/20 rounded-2xl backdrop-blur-sm border border-black/5 dark:border-white/10 mb-6"
            whileHover={{ scale: 1.05 }}
            animate={inView ? {
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.3)',
                '0 0 30px rgba(147, 51, 234, 0.4)',
                '0 0 20px rgba(59, 130, 246, 0.3)',
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Users className="w-12 h-12 text-blue-500 dark:text-blue-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Growing Community

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Developer Community
 main
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Be part of a thriving network of developers. Learn, share, build — together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
 main
                className="inline-block p-3 bg-gradient-to-r from-coffee-500 to-mocha-500 rounded-xl mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}

                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
 main
              >
                <div className="flex items-center gap-4 p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/20 transition-all duration-300">
                  <div className={`p-3 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{social.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500 dark:text-blue-200">{social.members} members</span>
                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <ChevronRight className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200" />
                        </motion.div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-blue-100 text-sm">{social.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

 main
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-coffee-600 to-mocha-500 text-white font-semibold rounded-lg hover:from-coffee-700 hover:to-mocha-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Subscribe Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </form>
            ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
 main
              <motion.div
                key={index}
                className={`text-center p-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-black/5 dark:border-white/10 ${
                  index === 0 ? 'ring-2 ring-blue-500/30 dark:ring-blue-400/40 shadow-lg' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                  {index === 0 && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-600/20 dark:text-blue-300 text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 dark:text-blue-200 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
