// src/App.jsx
import { useRef } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { tools } from "../data/tools";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Contribute from "./Component/Contribute";
import CoursePage from "./Component/CoursePage";
import Footer, { CommunitySection } from "./Component/Footer";
import FreeCertificateCourses from "./Component/FreeCertificateCourses";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import ToolCard from "./Component/ToolCard";
import WhatWeDoDifferently from "./Component/WhatWeDoDifferently";
import BackToTop from "./Component/BackToTop";


const Learn = () => (
  <section className="max-w-2xl mx-auto py-16 px-4 text-center animate-fade-in">
    <h2 className="text-3xl font-bold mb-4">Learn</h2>
    <p className="text-lg text-gray-700">
      Explore curated resources, workshops, and more.
    </p>
  </section>
);
const ToolsPage = () => (
  <section className="max-w-2xl mx-auto py-16 px-4 text-center animate-fade-in">
    <h2 className="text-3xl font-bold mb-4">Tools</h2>
    <p className="text-lg text-gray-700">
      Discover the best developer tools for your workflow.
    </p>
  </section>
);
const Community = () => (
  <section className="max-w-2xl mx-auto py-16 px-4 text-center animate-fade-in">
    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
    <p className="text-lg text-gray-700">
      Connect, share, and grow with BuildOnCoffee.
    </p>
  </section>
);

const Home = ({
  differentlyRef,
  learnRef,
  toolsRef,
  communityRef
}) => {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection />
      <section ref={learnRef} className="max-w-6xl mx-auto py-16 px-4 text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">Learn</h2>
        <p className="text-lg text-gray-700 mb-8">Explore curated resources, workshops, and more.</p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course, i) => (
            <ToolCard
              key={i}
              {...course}
              onClick={() => navigate(`/courses/${course.slug}`)}
            />
          ))}
        </div>
      </section>
      <div ref={differentlyRef}><WhatWeDoDifferently /></div>
      <section ref={toolsRef} className="px-4 sm:px-8 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 animate-fade-in">
        {tools.map((tool, i) => (
          <ToolCard key={i} {...tool} />
        ))}
      </section>
      <div ref={communityRef}><CommunitySection /></div>
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
          <Route
            path="/"
            element={
              <Home
                differentlyRef={differentlyRef}
                learnRef={learnRef}
                toolsRef={toolsRef}
                communityRef={communityRef}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="/free-certificates" element={<FreeCertificateCourses />} />
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
