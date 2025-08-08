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
import BuildOnCoffeeChatbot from "./Component/Chatbot/BuildOnCoffeeChatbot";
import { AuthProvider } from "./Component/context/AuthContext";
import PrivateRoute from "./Component/PrivateRoute";
import Profile from "./Component/Profile";
import Roadmap from "./Component/Roadmap";
import DsaRoadmap from "./Component/Roadmaps/DsaRoadmap";
import OpenSourceRoadmap from "./Component/Roadmaps/OpenSourceRoadmap";
import WebDevRoadmap from "./Component/Roadmaps/WebDevRoadmap";
import DevOpsRoadmap from "./Component/Roadmaps/DevOpsRoadmap";
import Glossary from "./Component/Glossary/Glossary";
import Documentation from "./Component/Documentation";
import SystemDesignRoadmap from "./Component/Roadmaps/SystemDesignRoadmap";
import MobileDevRoadmap from "./Component/Roadmaps/MobileDevRoadmap";

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
    <AuthProvider>
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
            <Route path="/glossary" element={<Glossary />} />   
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/roadmap/dsa" element={<DsaRoadmap />} />
            <Route path="/roadmap/opensource" element={<OpenSourceRoadmap />} />
            <Route path="/roadmap/web-development" element={<WebDevRoadmap />} />
            <Route path="/roadmap/system-design" element={<SystemDesignRoadmap />} />
            <Route path="/roadmap/devops" element={<DevOpsRoadmap />} />
            <Route path="/roadmap/mobile-development" element={<MobileDevRoadmap />} />
            <Route path="/learn/tools" element={<LearnTools />} />
            <Route
              path="/free-certificates"
              element={<FreeCertificateCourses />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <div className="flex flex-col items-end fixed bottom-6 right-6 z-50 space-y-2">
          <BackToTop />
          <BuildOnCoffeeChatbot />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};
export default App;
