import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courses";
import ToolCard from "./ToolCard";

const CoursesList = () => {
  const navigate = useNavigate();
  const [newCoursesCount, setNewCoursesCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const now = new Date();
    const newCourses = courses.filter((course) => {
      if (!course.dateAdded) return false;
      const courseDate = new Date(course.dateAdded);
      const diffInDays = (now - courseDate) / (1000 * 60 * 60 * 24);
      return diffInDays <= 7;
    });

    if (newCourses.length > 0) {
      setNewCoursesCount(newCourses.length);
      setShowPopup(true);

      // ⏱ Auto hide after 7 seconds
      const timer = setTimeout(() => setShowPopup(false), 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in relative">
  {/* Popup Notification */}
  {showPopup && (
    <div className="mb-6 mx-auto w-fit bg-white/80 backdrop-blur-md text-gray-900 px-6 py-3 rounded-full shadow-lg text-base font-medium flex items-center gap-2 animate-slideDown border border-gray-200">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
      </span>
      <span>
        🎉 {newCoursesCount} new{" "}
        {newCoursesCount === 1 ? "course" : "courses"} added!
      </span>
    </div>
  )}

  <h2 className="text-3xl font-bold mb-8 text-center">All Courses</h2>

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
