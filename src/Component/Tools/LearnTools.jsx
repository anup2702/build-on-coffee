// client/src/components/Tools/LearnTools.jsx
import { useState } from "react";
import tutorialData from "../../../data/tutorialData.js";
import learnToolsList from "../../../data/learnToolsList.js";

const LearnTools = () => {
  const [selectedTool, setSelectedTool] = useState("Docs");

  return (
    <div className="flex flex-col md:flex-row bg-white rounded shadow p-6">
      <div className="md:w-1/4 border-r md:pr-4 mb-4 md:mb-0">
        <h2 className="text-lg font-semibold mb-2 dark:text-black">Select Tool</h2>
        {learnToolsList.map((tool) => (
          <button
            key={tool.name}
            onClick={() => setSelectedTool(tool.name)}
            className={`block w-full text-left px-4 py-2 mb-2 rounded transition font-medium ${
              selectedTool === tool.name ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200' 
            }`}
          >
            <img 
                src={tool.icon} 
                alt={tool.name} 
                className="inline-block w-5 h-5 mr-2"
            />
            {tool.name}
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
  );
};

export default LearnTools;
