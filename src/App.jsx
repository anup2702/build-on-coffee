import React, { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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

import { tools } from "../data/tools";
import { courses } from "../data/courses";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <section className="max-w-4xl mx-auto py-16 px-4 text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-8">Explore Our Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div
            className="border rounded-xl p-8 shadow-lg bg-white flex flex-col items-center cursor-pointer hover:shadow-2xl hover:bg-gray-100 transition"
            onClick={() => navigate("/courses")}
          >
            <img src={courseimg} alt="Courses" className="w-24 h-24 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Courses</h3>
            <p className="text-gray-600">Curated CS courses with video tutorials, docs, and references.</p>
          </div>
          <div
            className="border rounded-xl p-8 shadow-lg bg-white flex flex-col items-center cursor-pointer hover:shadow-2xl hover:bg-gray-100 transition"
            onClick={() => navigate("/tools")}
          >
            <img src={toolsimg} alt="Tools" className="w-24 h-24 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Tools</h3>
            <p className="text-gray-600">Discover and use the best developer tools for productivity.</p>
          </div>
          <a
            href="https://snapfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-xl p-8 shadow-lg bg-white flex flex-col items-center hover:shadow-2xl hover:bg-gray-100 transition cursor-pointer"
          >
            <img src={snapimg} alt="SnapFolio" className="w-24 h-24 mb-4" />
            <h3 className="text-2xl font-bold mb-2">SnapFolio</h3>
            <p className="text-gray-600">Generate your developer portfolio instantly. Try SnapFolio now!</p>
          </a>
        </div>
      </section>
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
          <Route path="/free-certificates" element={<FreeCertificateCourses />} />
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
