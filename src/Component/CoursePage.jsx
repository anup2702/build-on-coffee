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
    <div className="max-w-3xl mx-auto py-16 px-4 animate-fade-in">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 hover:underline">← Back</button>
      <h1 className="text-3xl font-extrabold mb-6 text-center">{course.name}</h1>
      <CourseDetailPanel
        course={course}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClose={() => navigate(-1)}
      />
    </div>
  );
};

export default CoursePage; 