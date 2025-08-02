import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Users, Github, Twitter, Disc as Discord, Mail, ChevronRight, Star } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

const JoinCommunity = React.forwardRef((props, ref) => {
  const { isDark } = useTheme();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const socialLinks = [
    { 
      icon: Discord, 
      name: 'Discord', 
      members: '5.2K', 
      color: 'from-indigo-500 to-purple-600',
      description: 'Join our active Discord community'
    },
    { 
      icon: Github, 
      name: 'GitHub', 
      members: '3.1K', 
      color: 'from-gray-700 to-gray-900',
      description: 'Contribute to open source projects'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      members: '8.5K', 
      color: 'from-blue-400 to-blue-600',
      description: 'Follow for daily tech insights'
    }
  ];

  const communityStats = [
    { icon: Users, value: '12,000+', label: 'Community Members' },
    { icon: MessageSquare, value: '500+', label: 'Daily Messages' },
    { icon: Star, value: '1,200+', label: 'Projects Showcased' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gradient-to-br  dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden" ref={(el) => {
        if (ref) ref.current = el;
        inViewRef(el);
      }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/10 dark:bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block p-4 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-600/20 dark:to-purple-600/20 rounded-2xl backdrop-blur-sm border border-black/5 dark:border-white/10 mb-6"
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
          </h2>

          <p className="text-xl text-gray-600 dark:text-blue-100 max-w-3xl mx-auto mb-8">
            Connect with passionate developers from around the world. Share knowledge, 
            collaborate on projects, and accelerate your career together.
          </p>

          {/* Community Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {communityStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-black/5 dark:border-white/10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-500 dark:text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Choose Your Platform
            </h3>

            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/20 transition-all duration-300">
                    <div className={`p-3 bg-gradient-to-r ${social.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{social.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 dark:text-blue-200">{social.members} members</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
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
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-black/5 dark:border-white/10"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-6">
              <motion.div
                className="inline-block p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Stay Updated
              </h3>

              <p className="text-gray-600 dark:text-blue-100">
                Get weekly updates on new tools, courses, and community highlights.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Subscribe Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="text-center py-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-block p-3 bg-green-500 rounded-full mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Welcome Aboard!</h4>
                <p className="text-gray-600 dark:text-blue-100">You'll receive your first newsletter soon.</p>
              </motion.div>
            )}

            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10">
              <p className="text-xs text-gray-500 dark:text-blue-200 text-center">
                Join 12,000+ developers who are already part of our community. 
                No spam, unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default JoinCommunity;
