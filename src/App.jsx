import React, { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import ToolCard from "./Component/ToolCard";
import Footer from "./Component/Footer";
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

import { tools } from "../data/tools";
import { courses } from "../data/courses";
import ProductsSection from "./Component/ProductsSection";
import JoinCommunity from "./Component/JoinCommunity";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import TermsOfService from "./Component/TermsOfService";

const Home = ({ scrollRefs }) => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection communityRef={scrollRefs?.community} />
      <ProductsSection />
      <WhatWeDoDifferently ref={scrollRefs?.differently} />
      <JoinCommunity ref={scrollRefs?.community} />
    </>
  );
};

const App = () => {
  const differentlyRef = useRef(null);
  const learnRef = useRef(null);
  const toolsRef = useRef(null);
  const communityRef = useRef(null);

  const scrollRefs = {
    differently: differentlyRef,
    learn: learnRef,
    tools: toolsRef,
    community: communityRef,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar scrollRefs={scrollRefs} />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home scrollRefs={scrollRefs} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="/tools" element={<ToolsList />} />
          <Route path="/learn/tools" element={<LearnTools />} />
          <Route path="/free-certificates" element={<FreeCertificateCourses />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService/>}/>
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
