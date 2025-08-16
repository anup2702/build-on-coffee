"use client"

import { useState, useEffect } from "react"
import { Github, Users, Lightbulb, Target, Heart, Coffee, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative max-w-7xl mx-auto py-24 px-6 sm:px-8 lg:px-12 overflow-hidden bg-white dark:bg-slate-900">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* Hero */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
          <Coffee className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Fueled by Community</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white leading-tight">
          About BuildOnCoffee
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light">
          A <span className="font-bold text-blue-600 dark:text-blue-400">modern, community-driven platform</span>{" "}
          dedicated to helping developers discover, share, and use the best tools and resources for building software.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-slate-700">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-500 p-4 rounded-2xl shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="text-center pt-6">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our mission is to{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                empower developers of all backgrounds
              </span>{" "}
              by providing a curated collection of{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                productivity tools, learning resources
              </span>
              , and a vibrant space for collaboration.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Image */}
        <div className="relative group">
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <div className="w-full h-64 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Coffee className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">BuildOnCoffee</h3>
                <p className="text-gray-600 dark:text-gray-400">Community Platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why BuildOnCoffee */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8">Why BuildOnCoffee?</h2>

          <div className="space-y-4">
            {[
              {
                icon: Lightbulb,
                color: "blue",
                text: "Discover top-rated tools and resources for developers, all in one place.",
              },
              {
                icon: Sparkles,
                color: "purple",
                text: "Stay updated with the latest trends in technology, productivity, and learning.",
              },
              {
                icon: Target,
                color: "emerald",
                text: "Access free and premium courses, including those with certificates.",
              },
              {
                icon: Users,
                color: "pink",
                text: "Connect with a global community of builders, learners, and mentors.",
              },
              {
                icon: Heart,
                color: "orange",
                text: "Contribute your own favorite tools and resources to help others grow.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer"
                whileHover={{ x: 8 }}
              >
                <div
                  className={`p-3 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Vision and involvement */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Vision */}
        <div className="relative group">
          <div className="relative bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 shadow-lg border border-blue-200 dark:border-blue-800 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500 rounded-2xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-blue-800 dark:text-blue-200">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              We believe that sharing knowledge and tools accelerates innovation. BuildOnCoffee aims to break down
              barriers for new and experienced developers alike, making it easier to find what you need to learn, build,
              and succeed.
            </p>
          </div>
        </div>

        {/* Involvement */}
        <div className="relative group">
          <div className="relative bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8 shadow-lg border border-orange-200 dark:border-orange-800 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500 rounded-2xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-orange-800 dark:text-orange-200">How You Can Get Involved</h3>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {[
                "Suggest new tools, resources, or courses via our contribution page.",
                "Share your feedback to help us improve the platform.",
                "Join our community discussions and events.",
                "Become a contributor and help curate the best content for everyone.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="https://github.com/anup2702/build-on-coffee"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl group"
        >
          <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span>Visit our GitHub</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </section>
  )
}

export default About