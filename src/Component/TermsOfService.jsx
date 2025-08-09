"use client"

import React, { useState, useEffect } from "react"
import { FileText, Globe, Users, Copyright, Ban, AlertTriangle, RefreshCw, Mail, Coffee, Scale, ExternalLink, CheckCircle, Shield } from 'lucide-react'

const TermsOfService = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sections = [
    {
      id: "usage",
      icon: Globe,
      title: "Use of the Site",
      content: "BuildOnCoffee provides curated tools and learning resources for developers. You agree not to misuse the platform or use it for unlawful purposes.",
      color: "blue",
      type: "guideline"
    },
    {
      id: "content",
      icon: Users,
      title: "Content & Contributions",
      content: "You may suggest resources or tools. By contributing, you grant us the right to review, modify, and display your submission publicly.",
      color: "green",
      type: "contribution"
    },
    {
      id: "intellectual",
      icon: Copyright,
      title: "Intellectual Property",
      content: "All content including design, text, and graphics are the property of BuildOnCoffee unless otherwise stated. You may not reuse or redistribute content without permission.",
      color: "purple",
      type: "legal"
    },
    {
      id: "termination",
      icon: Ban,
      title: "Termination",
      content: "We reserve the right to suspend or terminate access to the platform if you violate these terms or use the platform inappropriately.",
      color: "red",
      type: "warning"
    },
    {
      id: "disclaimer",
      icon: AlertTriangle,
      title: "Disclaimer",
      content: "All resources are provided \"as is\". BuildOnCoffee does not guarantee the accuracy or reliability of any third-party content.",
      color: "orange",
      type: "warning"
    },
    {
      id: "changes",
      icon: RefreshCw,
      title: "Changes to These Terms",
      content: "We may update our terms of service at any time. Continued use of the site means you accept the updated terms.",
      color: "cyan",
      type: "update"
    },
    {
      id: "contact",
      icon: Mail,
      title: "Contact",
      content: "For any questions, contact us at support@buildoncoffee.com.",
      color: "pink",
      type: "support",
      hasLink: true,
      linkText: "support@buildoncoffee.com",
      linkUrl: "mailto:support@buildoncoffee.com"
    }
  ]

  const keyPoints = [
    "Fair use policy",
    "Community guidelines",
    "Content protection",
    "Transparent terms"
  ]

  const getTypeIcon = (type) => {
    switch (type) {
      case 'legal': return Scale
      case 'warning': return AlertTriangle
      case 'support': return Mail
      case 'update': return RefreshCw
      case 'contribution': return Users
      default: return Shield
    }
  }

  const badgeClass = {
    legal: "bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800",
    warning: "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
    update: "bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",
    support: "bg-pink-100 text-pink-700 dark:bg-pink-200 dark:text-pink-800",
    guideline: "bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
    contribution: "bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",
  };

  return (
  
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-bold mb-6 text-center">
        <span className="bg-gradient-to-r from-coffee-600 via-latte-400 to-mocha-500 bg-clip-text text-transparent">
          Terms of Service
        </span>
      </h1>

      <p className="mb-6">
                  Welcome to <strong className="bg-gradient-to-r from-coffee-600 via-latte-400 to-mocha-500 bg-clip-text text-transparent"> BuildOnCoffee</strong>. By accessing this site, you agree to the
        following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of the Site</h2>
      <p className="mb-4">
        BuildOnCoffee provides curated tools and learning resources for developers. You agree not
        to misuse the platform or use it for unlawful purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Content & Contributions</h2>
      <p className="mb-4">
        You may suggest resources or tools. By contributing, you grant us the right to review,
        modify, and display your submission publicly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
      <p className="mb-4">
        All content including design, text, and graphics are the property of BuildOnCoffee unless
        otherwise stated. You may not reuse or redistribute content without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate access to the platform if you violate these
        terms or use the platform inappropriately.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
      <p className="mb-4">
        All resources are provided "as is". BuildOnCoffee does not guarantee the accuracy or
        reliability of any third-party content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
      <p className="mb-4">
        We may update our terms of service at any time. Continued use of the site means you accept
        the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p className="mb-4">
        For any questions, contact us at{" "}
        <a
          href="mailto:support@buildoncoffee.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          support@buildoncoffee.com
        </a>.
      </p>

    <section className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      
      <div
        className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
          <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Legal Agreement</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 animate-gradient-x leading-tight">
          Terms of Service
        </h1>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 font-light">
            Welcome to <strong className="bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">BuildOnCoffee</strong>. By accessing this site, you agree to the following terms and conditions. Please read them carefully.
          </p>

          {/* points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 delay-${index * 100}`}
              >
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*   content starts */}
      <div className="space-y-8">
        {sections.map((section, index) => {
          const TypeIcon = getTypeIcon(section.type)
          
          return (
            <div
              key={section.id}
              className={`transition-all duration-1000 delay-${(index + 2) * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r from-${section.color}-400/20 to-${section.color}-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* icon */}
                    <div className={`p-4 bg-gradient-to-br from-${section.color}-100 to-${section.color}-200 dark:from-${section.color}-900/30 dark:to-${section.color}-800/30 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative`}>
                      <section.icon className={`w-8 h-8 text-${section.color}-600 dark:text-${section.color}-400`} />
                    </div>

                    {/* content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {section.title}
                        </h2>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${badgeClass[section.type] || ''}`}>
                          {section.type}
                        </span>
                      </div>
                      
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
          )
        })}
      </div>

      {/* imp notice*/}
      <div
        className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 shadow-xl border border-amber-200 dark:border-amber-800">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-2xl shadow-lg">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4 text-amber-800 dark:text-amber-200">Important Notice</h3>
            <p className="text-amber-700 dark:text-amber-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              By continuing to use BuildOnCoffee, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Legally Binding</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <RefreshCw className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject to Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cta*/}
      <div
        className={`text-center mt-12 transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg">
              <Coffee className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Questions About Our Terms?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              We believe in transparency and clear communication. If you have any questions about these terms or need clarification, our team is here to help.
            </p>
            <a
              href="mailto:support@buildoncoffee.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Contact Legal Team</span>
            </a>
          </div>
        </div>
      </div>

  
    </section>
    </section>
  )
}

export default TermsOfService
