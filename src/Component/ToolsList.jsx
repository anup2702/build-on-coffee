// src/Component/ToolsList.tsx
import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import { tutorialData } from '../../data/tutorialData.js';

// Component for individual tool items
const ToolItem = ({ tool,isExpanded, onClick }) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  // Extracts the YouTube video ID from a URL.
  const getYouTubeVideoId = (url) => {
    let videoId = null;
    try {
      const urlObj = new URL(url);
      // Handles standard youtube.com links
      if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v");
      }
      // Handles youtu.be shortened links
      else if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.substring(1);
      }
    } catch (error) {
      console.error("Invalid video URL:", url, error);
      return null; // Return null for invalid or non-YouTube URLs
    }
    return videoId;
  };

  return (
    <motion.div 
      className="border border-teal-400 dark:border-teal-600 rounded-sm py-2 px-3 mb-5"
      whileHover={{
        scale: !isExpanded ? 1.02 : 1,
        backgroundColor: !isExpanded ? "rgba(20, 184, 166, 0.1)" : "transparent"
      }}
    >
      {/* Tool Header */}
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center">
          <img 
            src={tool.logo} 
            alt={`${tool.name} logo`} 
            className="w-8 h-8 mr-4 rounded-full"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "/src/assets/default-tool-logo.svg";
            }}
          />
          <h4 className="text-sm font-semibold dark:text-gray-200">{tool.name}</h4>
        </div>
        <motion.button 
          className="text-xl"
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          <img 
            src="./src/assets/arrow.png" 
            alt={isExpanded ? "Collapse" : "Expand"} 
            className="w-[15px] h-[15px] cursor-pointer"
          />
        </motion.button>
      </div>

      {/* Tutorials Section */}
      {isExpanded && (
        <div className="pt-4 pl-6">
          <h5 className="text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Tutorials:</h5>
          <div className="space-y-4">
            {tool.tutorials.map((tutorial, index) => {
              const videoId = getYouTubeVideoId(tutorial.link);
              return (
                <div key={index} className="mb-4">
                  <h6 className="text-xs font-medium mb-2 dark:text-gray-300">{tutorial.title}</h6>
                  {videoId ? (
                    <div className="aspect-video w-full max-w-md">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={tutorial.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg shadow-md"
                      ></iframe>
                    </div>
                  ) : (
                    <a
                      href={tutorial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 dark:text-blue-400 hover:underline text-sm"
                    >
                      Watch on YouTube
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Component for category sections
const CategorySection = ({ category, tools }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedToolIndex, setExpandedToolIndex] = useState(null); // Track which tool is open

  const toggleTool = (index) => {
    setExpandedToolIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="mb-8">
      <div 
        className="flex items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 flex items-center">
          {category}
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({tools.length})</span>
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </motion.div>
      </div>
      
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <ToolItem 
            key={`${tool.name}-${index}`}
            tool={tool}
            isExpanded={expandedToolIndex === index}
            onClick={() => toggleTool(index)} />
          ))}
        </div>
      )}
    </div>
  );
};

const ToolsList = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
        animate={{
          y: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 0.9,
          ease: 'linear',
          repeat: Infinity
        }}
      >
        Developer Tools & Resources
      </motion.h2>
      
      <div className="space-y-12">
        {Object.entries(tutorialData).map(([category, { tools }]) => (
          <CategorySection 
            key={category}
            category={category}
            tools={tools}
          />
        ))}
      </div>
    </section>
  );
};

export default ToolsList;



