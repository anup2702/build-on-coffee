import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Wrench, Rocket, Heart, Trophy } from 'lucide-react';

const WhatWeDoDifferently = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: BookOpen,
      title: 'Curated Learning Paths',
      description: 'Hand-picked courses and tutorials that actually matter in today\'s tech landscape',
      delay: 0.1
    },
    {
      icon: Wrench,
      title: 'Production-Ready Tools',
      description: 'Battle-tested tools and utilities that solve real-world development challenges',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'Vibrant Community',
      description: 'Connect with like-minded developers, share knowledge, and grow together',
      delay: 0.3
    },
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Fast-track your development career with industry insights and mentorship',
      delay: 0.4
    },
    {
      icon: Heart,
      title: 'Open Source First',
      description: 'Everything we build is open source and designed to give back to the community',
      delay: 0.5
    },
    {
      icon: Trophy,
      title: 'Excellence Driven',
      description: 'We don\'t just teach code, we instill best practices and engineering excellence',
      delay: 0.6
    }
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
            What We Do Differently
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            We're not just another learning platform. We're a community-driven ecosystem
            focused on practical skills, real projects, and career growth.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: feature.delay }}
                whileHover={{ y: -8 }}
              >
                <div className="h-full bg-white/80 dark:bg-slate-800/80 rounded-2xl p-8 border-2 border-gray-200/50 dark:border-slate-700/50 transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-400/50 backdrop-blur-sm shadow-sm hover:shadow-xl">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {[
              { number: '10K+', label: 'Active Learners' },
              { number: '500+', label: 'Projects Built' },
              { number: '50+', label: 'Industry Partners' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-gradient mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoDifferently;
