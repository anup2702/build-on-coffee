import React from "react";

const TABS = [
  { key: "video", label: "🎥 Video" },
  { key: "docs", label: "📄 Docs" },
  { key: "outline", label: "🧩 Outline" },
  { key: "labs", label: "🧪 Labs" },
  { key: "project", label: "🛠️ Project" },
  { key: "questions", label: "❓ Q&A" },
];

const CourseDetailPanel = ({ course, activeTab, setActiveTab, onClose }) => (
  <div className="w-full border rounded-xl shadow-xl p-6 bg-white dark:bg-gray-800 h-auto md:h-[600px] overflow-y-auto flex flex-col transition-all duration-300">
    <div className="flex justify-center md:justify-start gap-2 mb-6">
      {TABS.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${activeTab === tab.key
              ? "bg-black text-white dark:bg-white dark:text-black shadow"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    {activeTab === "outline" && (
      <div className="mb-6">
        {course.outline && course.outline.length > 0 ? (
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            {course.outline.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">🧩 Outline coming soon...</p>
        )}
      </div>
    )}
    {activeTab === "labs" && (
      <div className="mb-6">
        {course.labs && course.labs.length > 0 ? (
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {course.labs.map((lab, index) => (
              <a
                key={index}
                href={lab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-4 border rounded-full text-sm font-medium text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-700 shadow transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {lab.title} →
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center"> Labs coming soon...</p>
        )}
      </div>
    )}
    {activeTab === "project" && (
      <div className="mb-6 text-gray-700 dark:text-gray-300">
        {course.miniProject ? (
          <>
            <h3 className="text-lg font-semibold mb-2">{course.miniProject.title}</h3>
            <p className="mb-4">{course.miniProject.description}</p>
            <a
              href={course.miniProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border rounded-full text-sm font-medium text-white bg-black dark:bg-white dark:text-black shadow transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-300"
            >
              View Project →
            </a>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center"> Mini project coming soon...</p>
        )}
      </div>
    )}

    <div className="flex-1 animate-fade-in">
      {activeTab === "video" && course.youtube && (
        <div className="w-full mb-6">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={course.youtube}
              title="YouTube tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow"
            />
          </div>
        </div>
      )}

      {activeTab === "docs" && course.documents && course.documents.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {course.documents.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-4 border rounded-full text-sm font-medium text-gray-800 bg-white dark:text-gray-200 dark:bg-gray-700 shadow transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {doc.title} →
              </a>
            ))}
          </div>
        </div>
      )}

      {activeTab === "questions" && (
        <div className="text-gray-600 dark:text-gray-400 text-center md:text-left">
          <p className="text-gray-500 dark:text-gray-400 text-center"> Questions coming soon...</p>
        </div>
      )}
    </div>

    <button
      onClick={onClose}
      className="mt-6 text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white underline self-end transition"
    >
      Close Panel
    </button>
  </div>
);

export default CourseDetailPanel;
