import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../../data/courses";
import CourseDetailPanel from "./CourseDetailPanel";

const CoursePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.slug === slug);
  const [activeTab, setActiveTab] = useState("video");

  if (!course) return <div className="text-center py-16">Course not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 animate-fade-in">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline text-sm flex items-center"
      >
        ← Back to Courses
      </button>

      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">{course.name}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{course.details}</p>
      </div>

      <div className="mt-10">
        <CourseDetailPanel
          course={course}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onClose={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default CoursePage;
