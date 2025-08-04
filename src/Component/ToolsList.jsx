// src/Component/ToolsList.jsx
import React, { useState } from "react";
import learnToolsList from "../../data/learnToolsList";
import tutorialData from "../../data/tutorialData";


const ToolsList = () => {
  const [selectedTool, setSelectedTool] = useState(learnToolsList[0]);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">All Tools</h2>
      <div className="flex flex-col md:flex-row bg-white rounded shadow p-6">
        {/* Sidebar Tool Buttons */}
        <div className="md:w-1/4 border-r md:pr-4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Select Tool</h2>
          {learnToolsList.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`block w-full text-left px-4 py-2 mb-2 rounded transition font-medium ${
                selectedTool === tool
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {tool}
            </button>
          ))}
        </div>

        {/* Video Section */}
        <div className="md:w-3/4 md:pl-6">
          <h2 className="text-xl font-bold mb-4">{selectedTool} Tutorials</h2>
          <ul className="space-y-6">
            {tutorialData[selectedTool]?.map((tutorial, idx) => {
              const videoId = new URLSearchParams(
                new URL(tutorial.link).search
              ).get("v");

              return (
                <li key={idx} className="space-y-2">
                  <h3 className="text-lg font-semibold">{tutorial.title}</h3>
                  {videoId ? (
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={tutorial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <a
                      href={tutorial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Watch here
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToolsList;
