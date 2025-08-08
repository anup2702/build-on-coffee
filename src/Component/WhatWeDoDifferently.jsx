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
 main
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-coffee-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

    <section
      className="py-20 bg-[#f9fafb] dark:bg-[#0f172a] relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
 main
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
 main
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-coffee-600 to-mocha-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">

          <div className="w-16 h-16 bg-[#1d4ed8] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-6">
 main
            What We Do Differently
          </h2>
          <p className="text-xl text-[#333] dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another learning platform. We're a community-driven ecosystem
            focused on practical skills, real projects, and career growth.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: feature.delay }}
                whileHover={{ y: -4 }}
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-[#1d4ed8]">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-[#1d4ed8] rounded-md flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#111] dark:text-white mb-2 group-hover:text-[#1d4ed8] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#333] dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
 main
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-coffee-600 to-mocha-500 bg-clip-text text-transparent mb-2"
                  animate={inView ? { 
                    backgroundPosition: ['0%', '100%', '0%'],
                  } : {}}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: 1.5 + index * 0.2 
                  }}
                >

                <div className="text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-2">
 main
                  {stat.number}
                </div>
                <div className="text-[#333] dark:text-gray-400 font-medium">
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
