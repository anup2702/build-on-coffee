import React, { useState, useEffect } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { dsaSteps } from "../../../data/dsaRoadmap";
import { ListChecks, FileText, Video } from "lucide-react";

const extractYouTubeID = (url) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|v\/|embed\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const DsaRoadmap = () => {
  const [openStep, setOpenStep] = useState(null);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const storedCompleted = localStorage.getItem("completedDsaSteps");
    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
    }
  }, []);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  const toggleComplete = (index) => {
    const newCompleted = completed.includes(index)
      ? completed.filter((i) => i !== index)
      : [...completed, index];
    setCompleted(newCompleted);
    localStorage.setItem("completedDsaSteps", JSON.stringify(newCompleted));
  };

  return (
    <section className="mx-auto py-20 px-6 md:px-16 animate-fade-in dark:bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gradient">
        DSA Roadmap for Placements
      </h2>

      <div className="space-y-6">
        {dsaSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow transition p-6"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(index)}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleComplete(index);
                  }}
                  className={`rounded-full w-6 h-6 border-2 ${
                    completed.includes(index)
                      ? "bg-green-500 border-green-500"
                      : "border-gray-400"
                  }`}
                >
                  {completed.includes(index) && (
                    <CheckCircle className="text-white w-5 h-5" />
                  )}
                </button>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {step.title}
                </h3>
              </div>
              {openStep === index ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </div>

            {openStep === index && (
              <div className="mt-6 ml-8 space-y-6 text-gray-800 dark:text-gray-300">
                <p className="text-lg leading-relaxed">{step.description}</p>

                {step.topics && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2 flex">
                      <ListChecks className="w-5 h-5 mr-2 mt-1" /> Topics
                      Covered:
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-md">
                      {step.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.resources && (
                  <div>
                    <h4 className="text-xl font-semibold mb-2 flex">
                      <FileText className="w-5 h-5 mr-2 mt-1" /> Recommended
                      Resources:
                    </h4>
                    <ul className="list-disc space-y-2 pl-5 text-md">
                      {step.resources.map((res, idx) => (
                        <li key={idx}>
                          <a
                            href={res.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            {res.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.videos && (
                  <div>
                    <h4 className="text-xl font-semibold m-2 flex">
                      <Video className="w-5 h-5 mr-2 mt-1" /> Video Tutorials:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {step.videos.map((vid, vidIdx) => {
                        const videoId = extractYouTubeID(vid.link);
                        return videoId ? (
                          <div key={vidIdx} className="w-full">
                            <div
                              className="relative mb-2"
                              style={{ paddingTop: "56.25%" }}
                            >
                              <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={vid.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
                              />
                            </div>
                            <p className="text-center text-md font-medium dark:text-white">
                              {vid.name}
                            </p>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DsaRoadmap;
