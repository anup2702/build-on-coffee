"use client"

import React, { useState, useEffect } from "react"
import { Shield, Eye, Database, Globe, RefreshCw, Mail, Coffee, Lock, ExternalLink, CheckCircle } from 'lucide-react'

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sections = [
    {
      id: "information",
      icon: Eye,
      title: "Information We Collect",
      content: "We do not collect personal data such as names, emails, or passwords. Any information shown (such as GitHub usernames or repositories) is publicly available via the GitHub API.",
      color: "blue"
    },
    {
      id: "usage",
      icon: Database,
      title: "Use of Data",
      content: "We use data only to display public repositories, profiles, and statistics to improve your experience on the platform. No tracking or analytics cookies are used.",
      color: "green"
    },
    {
      id: "third-party",
      icon: Globe,
      title: "Third-Party Services",
      content: "BuildOnCoffee integrates GitHub API services. Please refer to GitHub's Privacy Policy for more information.",
      color: "purple",
      hasLink: true,
      linkText: "GitHub's Privacy Policy",
      linkUrl: "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
    },
    {
      id: "changes",
      icon: RefreshCw,
      title: "Changes to This Policy",
      content: "We may update this policy periodically. All changes will be reflected on this page.",
      color: "orange"
    },
    {
      id: "contact",
      icon: Mail,
      title: "Contact Us",
      content: "If you have questions about this policy, email us at support@buildoncoffee.com.",
      color: "pink",
      hasLink: true,
      linkText: "support@buildoncoffee.com",
      linkUrl: "mailto:support@buildoncoffee.com"
    }
  ]

  const highlights = [
    "No personal data collection",
    "Public GitHub API only",
    "No tracking cookies",
    "Transparent data usage"
  ]

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      {/* bg decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* header*/}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
          <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Your Privacy Matters</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 animate-gradient-x leading-tight">
          Privacy Policy
        </h1>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 font-light">
            At <strong className="bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">BuildOnCoffee</strong>, your privacy is important to us. We do not collect personal information unless explicitly provided. Our services rely solely on public GitHub APIs, and we do not store any user data on our servers.
          </p>

          {/* highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 delay-${index * 100}`}
              >
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* main starts from here */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`transition-all duration-1000 delay-${(index + 2) * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r from-${section.color}-400/20 to-${section.color}-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 bg-gradient-to-br from-${section.color}-100 to-${section.color}-200 dark:from-${section.color}-900/30 dark:to-${section.color}-800/30 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className={`w-8 h-8 text-${section.color}-600 dark:text-${section.color}-400`} />
                  </div>

                  {/* content */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                      {section.content}
                    </p>

                    {/* links */}
                    {section.hasLink && (
                      <a
                        href={section.linkUrl}
                        className={`inline-flex items-center gap-2 text-${section.color}-600 dark:text-${section.color}-400 hover:text-${section.color}-700 dark:hover:text-${section.color}-300 font-medium transition-colors duration-200 group/link`}
                        target={section.linkUrl.startsWith('http') ? "_blank" : undefined}
                        rel={section.linkUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        <span className="underline decoration-2 underline-offset-4">{section.linkText}</span>
                        {section.linkUrl.startsWith('http') ? (
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                        ) : (
                          <Mail className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* cta */}
      <div
        className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg">
              <Coffee className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Questions About Our Privacy Policy?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              We're committed to transparency and protecting your privacy. If you have any concerns or questions, don't hesitate to reach out to our team.
            </p>
            <a
              href="mailto:support@buildoncoffee.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* badge */}
      <div
        className={`flex justify-center mt-12 transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full border border-green-200 dark:border-green-800">
          <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-green-800 dark:text-green-200">Privacy-First Platform</span>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
