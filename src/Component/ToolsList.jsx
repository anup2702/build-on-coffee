import React, { useState } from "react";
import learnToolsList from "../../data/learnToolsList";
import tutorialData from "../../data/tutorialData";

const ToolsList = () => {
  const [selectedTool, setSelectedTool] = useState(learnToolsList[0]);
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center">All Tools</h2>
      <div className="flex flex-col md:flex-row bg-white rounded shadow p-6">
        <div className="md:w-1/4 border-r md:pr-4 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Select Tool</h2>
          {learnToolsList.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`block w-full text-left px-4 py-2 mb-2 rounded transition font-medium ${
                selectedTool === tool ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
        <div className="md:w-3/4 md:pl-6">
          <h2 className="text-xl font-bold mb-4">{selectedTool} Tutorials</h2>
          <ul className="space-y-3">
            {tutorialData[selectedTool]?.map((tutorial, idx) => (
              <li key={idx}>
                <a
                  href={tutorial.link}
                  className="text-blue-600 hover:underline text-lg"
                >
                  {tutorial.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToolsList; 