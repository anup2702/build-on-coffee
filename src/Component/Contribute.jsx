import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses[parseInt(id, 10)];
  if (!course) return <div className="text-center py-16">Course not found.</div>;
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 animate-fade-in">
      <Link to="/" className="text-blue-600 hover:underline">← Back to Learn</Link>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <img src={course.image} alt={course.name} className="w-full md:w-1/3 rounded shadow" />
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold mb-2">{course.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{course.details || course.description}</p>
          <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block mb-4 text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition">Go to Course</a>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">YouTube Tutorial</h2>
            {course.youtube ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={course.youtube}
                  title="YouTube tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 rounded shadow"
                />
              </div>
            ) : (
              <p className="text-gray-500">No video available.</p>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">References</h2>
            <ul className="list-disc list-inside text-gray-700">
              {course.references && course.references.map((ref, i) => (
                <li key={i}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-black">{ref.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail; 