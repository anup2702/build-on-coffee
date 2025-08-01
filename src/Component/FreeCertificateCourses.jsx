import React, { useState, useEffect } from 'react';
import { freeCertificateCourses } from '../../data/freeCertificateCourses';

const FreeCertificateCourses = () => {
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
    <section className={`max-w-6xl mx-auto py-16 px-4 text-center animate-fade-in transition-all duration-500 ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}>
      <h2 className={`text-3xl font-bold mb-4 ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}>Courses with Free Certificates</h2>
      <p className={`text-lg mb-8 ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      }`}>
        Explore high-quality courses that offer free certificates upon completion.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {freeCertificateCourses.map((course, i) => (
          <div
            key={i}
            className={`rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 ${
              isDarkMode 
                ? "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70" 
                : "bg-white hover:shadow-xl"
            }`}
          >
            <img
              src={course.image}
              alt={`Logo of ${course.name}`}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className={`text-xl font-semibold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>{course.name}</h3>
            <p className={`mb-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>{course.description}</p>
            <span className={`font-medium text-sm mb-2 ${
              isDarkMode 
                ? "text-green-400 hover:text-green-300" 
                : "text-green-600 hover:text-green-800"
            }`}>
              {course.certificate}
            </span>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-block px-4 py-2 rounded transition ${
                isDarkMode 
                  ? "text-white bg-blue-600 hover:bg-blue-700" 
                  : "text-white bg-black hover:bg-gray-800"
              }`}
            >
              View Course
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreeCertificateCourses;
