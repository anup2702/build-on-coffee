import React, { useState, useEffect } from "react";
import learnToolsList from "../../data/learnToolsList";
import tutorialData from "../../data/tutorialData";

const ToolsList = () => {
  const [selectedTool, setSelectedTool] = useState(learnToolsList[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-theme");
    setIsDarkMode(isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDarkMode(document.body.classList.contains("dark-theme"));
        }
      });
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

      return (
      <section className={`max-w-6xl mx-auto py-16 px-4 animate-fade-in transition-all duration-500 ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}>
        <h2 className={`text-3xl font-bold mb-8 text-center ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>All Tools</h2>
        <div className={`flex flex-col md:flex-row rounded shadow p-6 transition-all duration-500 ${
          isDarkMode 
            ? "bg-gray-800/50 border border-gray-700/50" 
            : "bg-white"
        }`}>
        <div className="md:w-1/4 border-r md:pr-4 mb-4 md:mb-0">
          <h2 className={`text-lg font-semibold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>Select Tool</h2>
          {learnToolsList.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`block w-full text-left px-4 py-2 mb-2 rounded transition font-medium ${
                selectedTool === tool 
                  ? 'bg-blue-600 text-white' 
                  : isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                    : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
        <div className="md:w-3/4 md:pl-6">
          <h2 className={`text-xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>{selectedTool} Tutorials</h2>
          <ul className="space-y-3">
            {tutorialData[selectedTool]?.map((tutorial, idx) => (
              <li key={idx}>
                <a
                  href={tutorial.link}
                  className={`hover:underline text-lg ${
                    isDarkMode 
                      ? "text-blue-400 hover:text-blue-300" 
                      : "text-blue-600 hover:text-blue-800"
                  }`}
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