import React from "react";
import learnToolsList from "../../data/learnToolsList";


const BeginnerTools = () => {
  return (
    <div className="p-6 text-white min-h-screen bg-zinc-900">
      <h1 className="text-3xl font-bold mb-6 text-center">🛠️ Beginner-Friendly Tools</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {beginnerTools.map((tool, index) => (
          <div key={index} className="bg-zinc-800 p-5 rounded-2xl shadow-md hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold text-yellow-400">{tool.name}</h2>
            <p className="mt-2 text-zinc-300">{tool.description}</p>
            <div className="mt-3 space-y-1">
              {tool.videoLinks.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 underline block"
                >
                  ▶️ Tutorial {i + 1}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeginnerTools;
