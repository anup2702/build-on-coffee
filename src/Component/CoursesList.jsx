import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courses";
import ToolCard from "./ToolCard";

const CoursesList = () => {
  const navigate = useNavigate();
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
      }`}>All Courses</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course, i) => (
          <ToolCard
            key={i}
            {...course}
            onClick={() => navigate(`/courses/${course.slug}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesList; 