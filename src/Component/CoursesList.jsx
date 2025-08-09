import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courses";
import ToolCard from "./ToolCard";
import Notification from "./Notification";
import Hearts from "./Hearts";

const CoursesList = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(true);

  // Hide notification after 7s
  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Get only new courses (added in last 7 days)
  const newCourses = courses.filter((course) => {
    if (!course.dateAdded) return false;
    const dateAdded = new Date(course.dateAdded);
    const now = new Date();
    const diffInDays = (now - dateAdded) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  });


  return (
    <>
      {/* ✅ Notification just below navbar */}
      {showNotification && newCourses.length > 0 && (
        <div className="mt-20"> 
          <Notification count={newCourses.length} />
        </div>
      )}

      <section className="max-w-6xl mx-auto pt-8 pb-16 px-4 animate-fade-in relative">
        <h2 className="text-3xl font-bold mb-8 text-center relative dark:text-white">
          All Courses
        </h2>

        {/* ✅ Grid layout */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course, i) => (
            <ToolCard
              key={i}
              {...course}
              courses={course}
              dateAdded={course.dateAdded}
              onClick={() => navigate(`/courses/${course.slug}`)}
            />
              
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesList;
