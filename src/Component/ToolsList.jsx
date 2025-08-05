// src/Component/ToolsList.jsx
import React, { useState } from "react";
import tutorialData from "../../data/tutorialData";
import {motion, spring} from 'motion/react'

// A self-contained component for each tool in the list.
const ToolsItem = ({ category, toolData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <motion.div className="border border-teal-400 rounded-sm py-2 px-3 mb-5"
      whileHover={{
        scale: !isExpanded?1.05:1,
        backgroundColor:!isExpanded?"teal":"transparent"
      }}
      whileTap={{
        scale: 1.05,
        backgroundColor:"transparent",
        transition:{type:spring,duration:1,ease:'easeInOut'}
      }}
    >
      {/* Header Section: Logo, Title, and Toggle Button */}
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <img src={toolData.logo} alt={`${category} logo`} className="w-8 h-8 mr-4" />
          <h4 className="text-sm font-semibold">{category}</h4>
        </div>
        <motion.button className="text-xl"
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          <img src="./src/assets/arrow.png" alt="" className="w-[15px] h-[15px] cursor-pointer"/>
        </motion.button>
      </div>

      {/* Collapsible Tutorial Section */}
      {isExpanded && (
        <div className="pt-6 pl-6 flex justify-center">
          <ul className="space-y-8 flex flex-row flex-wrap justify-evenly w-full px-6">
            {toolData.tutorials.map((tutorial, key) => {
              const videoId = getYouTubeVideoId(tutorial.link);
              return (
                <li key={key} className="flex flex-col space-y-3 w-1/2">
                  <h5 className="text-xs w-3/4">{tutorial.title}</h5>
                  {videoId ? (
                    <div className="aspect-video w-3/4">
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
                      className="text-red-600 hover:underline"
                    >
                      Watch here (Link is not a valid YouTube video)
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const ToolsList = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 ">
      <motion.h2 className="text-4xl font-bold mb-8 text-center"
        animate={{
          y:[0,2,0,-2,0],
        }}
        transition={{
          duration:0.9,
          ease:'linear',
          repeat:Infinity
        }}
      >
        Learn Popular Tools
      </motion.h2>
      <div className="rounded-lg shadow-lg p-6">
        {Object.entries(tutorialData).map(([category, toolData], key) => (
          <ToolsItem category={category} toolData={toolData} key={key} />
        ))}
      </div>
    </section>
  );
};

export default ToolsList;
