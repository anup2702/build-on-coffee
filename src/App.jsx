import React, { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import ToolCard from "./Component/ToolCard";
import Footer, { CommunitySection } from "./Component/Footer";
import WhatWeDoDifferently from "./Component/WhatWeDoDifferently";
import BackToTop from "./Component/BackToTop";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Contribute from "./Component/Contribute";
import CoursePage from "./Component/CoursePage";
import FreeCertificateCourses from "./Component/FreeCertificateCourses";

import LearnTools from "./Component/Tools/LearnTools";
import CoursesList from "./Component/CoursesList";
import ToolsList from "./Component/ToolsList";
import courseimg from "./assets/course.svg";
import toolsimg from "./assets/tools.svg";
import snapimg from "./assets/snapfolio.svg";
import certificate from "./assets/certificate.png";
import DotCursor from "./Component/DotCursor";
import "./App.css";

import { tools } from "../data/tools";
import { courses } from "../data/courses";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <motion.section
        className="relative max-w-6xl mx-auto py-20 px-4 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl opacity-30 bg-blue-400"
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-2xl opacity-30 bg-purple-400"
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Header Section */}
        <motion.div
          className="relative z-10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-blue-600">
              Our Products
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Explore Our Products
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover powerful tools and resources designed to accelerate your
            development journey
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="relative z-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Courses Card */}
          <motion.div
            className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            onClick={() => navigate("/courses")}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Elements */}
            <motion.div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100" />

            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={courseimg}
                  alt="Courses"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Courses
              </motion.h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Curated CS courses with video tutorials, comprehensive
                documentation, and reference materials.
              </p>

              <motion.div
                className="flex items-center justify-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>Explore Courses</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            onClick={() => navigate("/tools")}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Elements */}
            <motion.div className="absolute top-4 right-4 w-8 h-8 bg-green-100 rounded-full opacity-0 group-hover:opacity-100" />

            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={toolsimg}
                  alt="Tools"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Tools
              </motion.h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Discover and use the best developer tools for enhanced
                productivity and workflow optimization.
              </p>

              <motion.div
                className="flex items-center justify-center gap-2 text-green-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>Explore Tools</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* SnapFolio Card */}
          <motion.div
            className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Elements */}
            <motion.div className="absolute top-4 right-4 w-8 h-8 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100" />

            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={snapimg}
                  alt="SnapFolio"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SnapFolio
              </motion.h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Generate your developer portfolio instantly with our AI-powered
                portfolio builder. Try SnapFolio now!
              </p>

              <motion.a
                href="https://snapfolio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-purple-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>Try SnapFolio</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
          {/* Certificates Card */}
          <motion.div
            className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            onClick={() => navigate("/free-certificates")}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Elements */}
            <motion.div className="absolute top-4 right-4 w-8 h-8 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-100" />

            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 p-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={certificate}
                  alt="Certificates"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Certificates
              </motion.h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Browse top courses from leading platforms and earn certificates
                to showcase your skills.
              </p>

              <motion.div
                className="flex items-center justify-center gap-2 text-yellow-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>Explore Certificates</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      <div className="max-w-4xl mx-auto px-4 animate-fade-in">
        <WhatWeDoDifferently />
      </div>
      <div className="max-w-4xl mx-auto px-4 animate-fade-in">
        <CommunitySection />
      </div>
    </>
  );
};

const App = () => {
  const differentlyRef = useRef(null);
  const learnRef = useRef(null);
  const toolsRef = useRef(null);
  const communityRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DotCursor />
      <Navbar
        scrollRefs={{
          differently: differentlyRef,
          learn: learnRef,
          tools: toolsRef,
          community: communityRef,
        }}
      />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="/tools" element={<ToolsList />} />
          <Route path="/learn/tools" element={<LearnTools />} />
          <Route
            path="/free-certificates"
            element={<FreeCertificateCourses />}
          />
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
