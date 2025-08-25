// client/src/components/Tools/LearnTools.jsx
import { useState, useEffect } from "react";
import { tutorialData } from "../../../data/tutorialData.js";
import learnToolsList from "../../../data/learnToolsList.js";

const LearnTools = () => {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(tutorialData)[0]);
  const [selectedTool, setSelectedTool] = useState(null);

  // Get the list of tools for the selected category
  const toolsInCategory = tutorialData[selectedCategory]?.tools || [];
  
  // Set the first tool as selected by default when category changes
  useEffect(() => {
    if (toolsInCategory.length > 0 && !selectedTool) {
      setSelectedTool(toolsInCategory[0].name);
    }
  }, [selectedCategory, toolsInCategory, selectedTool]);

  // Get the currently selected tool's data
  const currentTool = toolsInCategory.find(tool => tool.name === selectedTool);

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Category Selection */}
      <div className="bg-gray-50 p-4 border-b">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Select Category</h2>
        <div className="flex flex-wrap gap-2">
          {Object.keys(tutorialData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Tools List */}
        <div className="md:w-1/4 border-r p-4 bg-gray-50">
          <h3 className="text-md font-semibold mb-3 text-gray-700">
            {selectedCategory} Tools
          </h3>
          <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2">
            {toolsInCategory.map((tool) => (
              <button
                key={tool.name}
                onClick={() => setSelectedTool(tool.name)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center ${
                  selectedTool === tool.name
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-5 h-5 mr-2 rounded-sm"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/src/assets/default-tool-logo.svg';
                  }}
                />
                {tool.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tutorials */}
        <div className="flex-1 p-6">
          {currentTool ? (
            <>
              <div className="flex items-center mb-6">
                <img 
                  src={currentTool.logo} 
                  alt={currentTool.name}
                  className="w-10 h-10 mr-3 rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/src/assets/default-tool-logo.svg';
                  }}
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  {currentTool.name} Tutorials
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentTool.tutorials.map((tutorial, idx) => (
                  <div 
                    key={idx} 
                    className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video bg-gray-100">
                      {tutorial.link.includes('youtube.com') || tutorial.link.includes('youtu.be') ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${
                            tutorial.link.includes('youtube.com') 
                              ? new URL(tutorial.link).searchParams.get('v')
                              : tutorial.link.split('youtu.be/')[1].split('?')[0]
                          }`}
                          title={tutorial.title}
                          frameBorder="0"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No preview available
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2">{tutorial.title}</h3>
                      <a
                        href={tutorial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm inline-flex items-center"
                      >
                        Watch on YouTube
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              Select a tool to view tutorials
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnTools;
