import React from "react";

const TABS = [
  { key: "video", label: "Video Tutorials" },
  { key: "docs", label: "Docs" },
  { key: "questions", label: "Questions" },
];

const CourseDetailPanel = ({ course, activeTab, setActiveTab, onClose }) => (
  <div className="w-[500px] border rounded shadow-lg p-4 bg-white h-[600px] overflow-y-auto flex flex-col">
    <div className="flex gap-2 mb-4">
      {TABS.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-4 py-2 rounded border ${activeTab === tab.key ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'} transition`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div className="flex-1">
      {activeTab === "video" && course.youtube && (
        <iframe
          src={course.youtube}
          title="YouTube tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64 rounded shadow mb-4"
        />
      )}
      {activeTab === "docs" && course.docs && (
        <a href={course.docs} target="_blank" rel="noopener noreferrer" className="underline hover:text-black block mb-4">Open Documentation</a>
      )}
      {activeTab === "questions" && (
        <div className="mb-4 text-gray-700">Questions content coming soon...</div>
      )}
    </div>
    <button
      onClick={onClose}
      className="mt-4 text-sm text-gray-500 hover:text-black underline self-end"
    >
      Close
    </button>
  </div>
);

export default CourseDetailPanel; 