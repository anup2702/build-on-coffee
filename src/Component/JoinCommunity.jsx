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
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-gray-200/50 dark:border-slate-700/50 text-gray-900 dark:text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Join Our Developer Community
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Be part of a thriving network of developers. Learn, share, build — together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-6 p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-700/80 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className={`p-4 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-2xl font-black text-gray-900 dark:text-white">{social.name}</h4>
                      <div className="flex items-center space-x-3">
                        <span className="text-lg text-gray-600 dark:text-gray-300 font-semibold">{social.members} members</span>
                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <ChevronRight className="w-5 h-5 text-blue-500 dark:text-blue-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200" />
                        </motion.div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{social.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={`text-center p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border-2 border-gray-200/50 dark:border-slate-700/50 ${
                  index === 0 ? 'ring-2 ring-blue-500/30 dark:ring-blue-400/40 shadow-lg' : 'shadow-sm hover:shadow-xl'
                } transition-all duration-300`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon className="w-10 h-10 text-blue-500 dark:text-blue-400" />
                  {index === 0 && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-600/20 dark:text-blue-300 text-sm font-bold rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 text-lg font-semibold">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
