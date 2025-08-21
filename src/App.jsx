import React, { useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import ToolCard from "./Component/ToolCard";
import Footer from "./Component/Footer";
import WhatWeDoDifferently from "./Component/WhatWeDoDifferently";
import PortfolioSpotlight from "./Component/PortfolioSpotlight";
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
import { Analytics } from "@vercel/analytics/react";
import Testimonials from "./Component/Testimonials";

// 🤖 Chatbot Import
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
import DataScienceRoadmap from "./Component/Roadmaps/DataScienceRoadmap";
import PathsLanding from "./Component/Paths/PathsLanding";
import PathDetail from "./Component/Paths/PathDetail";
import BlockChainRoadmap from "./Component/Roadmaps/BlockChainRoadmap";
import AiMlRoadmap from "./Component/Roadmaps/AiMlRoadmap";
import CybersecurityRoadmap from "./Component/Roadmaps/CybersecurityRoadmap";
import CloudComputingRoadmap from "./Component/Roadmaps/CloudComputingRoadmap";
import UiUxDesignRoadmap from "./Component/Roadmaps/UiUxDesignRoadmap";
import Team from "./Component/Team";
import ProjectIdeas from "./Component/ProjectIdeas";
import ProjectIdeaDetail from "./Component/ProjectIdeaDetail";
import SSOCallbackPage from "./Component/Auth/SSOCallbackPage";
import ProjectGallery from "./Component/ProjectsGallery";
import InterviewQuestions from "./Component/Interview Questions/InterviewQuestions";
import Quiz from "./Component/Quiz";
import Weeklytask from "./Component/Weeklytask";

const Home = ({ scrollRefs }) => {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection communityRef={scrollRefs?.community} />
      <ProductsSection />
      <WhatWeDoDifferently ref={scrollRefs?.differently} />
      <PortfolioSpotlight />
      <Testimonials />
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
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
        <Navbar scrollRefs={scrollRefs} />
        <Analytics />

        <main className="flex-1 pt-20">
          <Routes>
            {/* ✅ Auth Routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sso-callback" element={<SSOCallbackPage />} />

            <Route path="/" element={<Home scrollRefs={scrollRefs} />} />
            <Route path="/team" element={<Team />} />
            <Route path="/project-idea" element={<ProjectIdeas />} />
            <Route path="/project-idea/:id" element={<ProjectIdeaDetail />} />
            <Route path="/weeklytask" element={<Weeklytask />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/courses/:slug" element={<CoursePage />} />
            <Route path="/tools" element={<ToolsList />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/quiz" element={<Quiz />} />

            {/* ✅ Roadmaps */}
            <Route path="/roadmap/dsa" element={<DsaRoadmap />} />
            <Route path="/roadmap/opensource" element={<OpenSourceRoadmap />} />
            <Route
              path="/roadmap/web-development"
              element={<WebDevRoadmap />}
            />
            <Route
              path="/roadmap/system-design"
              element={<SystemDesignRoadmap />}
            />
            <Route path="/roadmap/devops" element={<DevOpsRoadmap />} />
            <Route
              path="/roadmap/mobile-development"
              element={<MobileDevRoadmap />}
            />
            <Route
              path="/roadmap/data-science"
              element={<DataScienceRoadmap />}
            />
            <Route path="/roadmap/blockchain" element={<BlockChainRoadmap />} />
            <Route path="/roadmap/ai-ml" element={<AiMlRoadmap />} />
            <Route
              path="/roadmap/cybersecurity"
              element={<CybersecurityRoadmap />}
            />
            <Route
              path="/roadmap/cloud-computing"
              element={<CloudComputingRoadmap />}
            />
            <Route
              path="/roadmap/ui-ux-design"
              element={<UiUxDesignRoadmap />}
            />

            {/* ✅ Paths */}
            <Route path="/paths" element={<PathsLanding />} />
            <Route path="/paths/:slug" element={<PathDetail />} />

            <Route path="/learn/tools" element={<LearnTools />} />
            <Route path="/projects" element={<ProjectGallery />} />
            <Route
              path="/free-certificates"
              element={<FreeCertificateCourses />}
            />
            <Route
              path="/InterviewQuestions"
              element={<InterviewQuestions />}
            />
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

          {/* 🚀 Fixed Bottom Components */}
          <div className="flex flex-col items-end fixed bottom-6 right-6 z-50 space-y-3">
            <BackToTop />
            {/* Temporarily show chatbot for all users - remove SignedIn wrapper for testing */}
            <BuildOnCoffeeChatbot />
          </div>

          <Footer />
        </main>
      </div>
    </AuthProvider>
  );
};

export default App;
