"use client"

import { useState, useEffect } from "react"
import { Github, Users, Lightbulb, Target, Heart, Coffee, Sparkles, ArrowRight } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative max-w-7xl mx-auto py-20 px-6 overflow-hidden">
      {/* bg decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* hero */}
      <div
        className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-6 border border-yellow-200 dark:border-yellow-800">
          <Coffee className="w-4 h-4 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Fueled by Community</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradient-x leading-tight">
          About BuildOnCoffee
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-light">
          A <span className="font-bold text-blue-600 dark:text-blue-400">modern, community-driven platform</span>{" "}
          dedicated to helping developers discover, share, and use the best tools and resources for building software.
        </p>
      </div>

      {/* mission */}
      <div
        className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="text-center pt-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our mission is to{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                empower developers of all backgrounds
              </span>{" "}
              by providing a curated collection of{" "}
              <span className="font-semibold text-green-600 dark:text-green-400">
                productivity tools, learning resources
              </span>
              , and a vibrant space for collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* main starts from here*/}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* img */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="w-full h-64 bg-gradient-to-br from-yellow-100 to-pink-100 dark:from-yellow-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Coffee className="w-16 h-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">BuildOnCoffee</h3>
                <p className="text-gray-600 dark:text-gray-400">Community Platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* why buildOnCoffee */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Why BuildOnCoffee?</h2>

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
                color: "green",
                text: "Access free and premium courses, including those with certificates.",
              },
              {
                icon: Users,
                color: "pink",
                text: "Connect with a global community of builders, learners, and mentors.",
              },
              {
                icon: Heart,
                color: "yellow",
                text: "Contribute your own favorite tools and resources to help others grow.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`p-3 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* vision and involvement */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* vision */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 shadow-xl border border-blue-200 dark:border-blue-800 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500 rounded-2xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              We believe that sharing knowledge and tools accelerates innovation. BuildOnCoffee aims to break down
              barriers for new and experienced developers alike, making it easier to find what you need to learn, build,
              and succeed.
            </p>
          </div>
        </div>

        {/* involvement */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 shadow-xl border border-yellow-200 dark:border-yellow-800 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-500 rounded-2xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">How You Can Get Involved</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                "Suggest new tools, resources, or courses via our contribution page.",
                "Share your feedback to help us improve the platform.",
                "Join our community discussions and events.",
                "Become a contributor and help curate the best content for everyone.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* cta */}
      <div
        className={`text-center transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <a
          href="https://github.com/anup2702/build-on-coffee"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl group"
        >
          <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span>Visit our GitHub</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  )
}

export default About