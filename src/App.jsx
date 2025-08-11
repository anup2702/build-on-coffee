
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
import ProtectedRoute from "./Component/Auth/ProtectedRoute";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";

// 🤖 ADD THIS: Chatbot Import
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
import PathsLanding from "./Component/Paths/PathsLanding";
import PathDetail from "./Component/Paths/PathDetail";
import BlockChainRoadmap from "./Component/Roadmaps/BlockChainRoadmap";

import AiMlRoadmap from "./Component/Roadmaps/AiMlRoadmap";
import CybersecurityRoadmap from "./Component/Roadmaps/CybersecurityRoadmap";
import CloudComputingRoadmap from "./Component/Roadmaps/CloudComputingRoadmap";
import UiUxDesignRoadmap from "./Component/Roadmaps/UiUxDesignRoadmap";
import Team from "./Component/Team";
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
      <AuthProvider>
        <Routes>
          {/* ✅ Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        

  
      

      
    
           
    
            <Route path="/" element={<Home scrollRefs={scrollRefs} />} />
            <Route path="/team" element={<Team />} />

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
            <Route path="/roadmap/blockchain" element={<BlockChainRoadmap />} />
            <Route path="/roadmap/ai-ml" element={<AiMlRoadmap />} />
            <Route path="/roadmap/cybersecurity" element={<CybersecurityRoadmap />} />
            <Route path="/roadmap/cloud-computing" element={<CloudComputingRoadmap />} />
            <Route path="/roadmap/ui-ux-design" element={<UiUxDesignRoadmap />} />
            <Route path="/paths" element={<PathsLanding />} />
            <Route path="/paths/:slug" element={<PathDetail />} />
            <Route path="/learn/tools" element={<LearnTools />} />
            <Route
              path="/free-certificates"
              element={<FreeCertificateCourses />}
            />
              <Route path="/glossary" element={<Glossary />} />   
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        <div className="flex flex-col items-end fixed bottom-6 right-6 z-50 space-y-2">
          <BackToTop />
          <BuildOnCoffeeChatbot />
        </div>
        <Footer />
      
    </AuthProvider>
        </main>
   </div> 
   
  );
};

export default App;
