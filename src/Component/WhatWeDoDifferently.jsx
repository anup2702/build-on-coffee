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
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Wrench,
      title: 'Production-Ready Tools',
      description: 'Battle-tested tools and utilities that solve real-world development challenges',
      color: 'from-green-500 to-teal-500',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'Vibrant Community',
      description: 'Connect with like-minded developers, share knowledge, and grow together',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Fast-track your development career with industry insights and mentorship',
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: Heart,
      title: 'Open Source First',
      description: 'Everything we build is open source and designed to give back to the community',
      color: 'from-pink-500 to-rose-500',
      delay: 0.5
    },
    {
      icon: Trophy,
      title: 'Excellence Driven',
      description: 'We don\'t just teach code, we instill best practices and engineering excellence',
      color: 'from-indigo-500 to-purple-500',
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        }} />
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What We Do Differently
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just another learning platform. We're a community-driven ecosystem 
            focused on practical skills, real projects, and career growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300/30 dark:group-hover:border-blue-600/30">
                  {/* Animated background gradient */}
                  <motion.div
                    className={absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500}
                    initial={false}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Floating animation dot */}
                    <motion.div
                      className={absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100}
                      animate={inView ? {
                        scale: [0, 1.2, 1],
                        opacity: [0, 1, 0.8],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: feature.delay + 1
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect line */}
                  <motion.div
                    className={absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
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
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2"
                  animate={inView ? { 
                    backgroundPosition: ['0%', '100%', '0%'],
                  } : {}}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: 1.5 + index * 0.2 
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
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