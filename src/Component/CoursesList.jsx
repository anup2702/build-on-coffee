import React from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../../data/courses";
import ToolCard from "./ToolCard";

const CoursesList = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 animate-fade-in">
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