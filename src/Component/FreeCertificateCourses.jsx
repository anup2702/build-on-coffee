import React from 'react';
import { freeCertificateCourses } from '../../data/freeCertificateCourses';

const FreeCertificateCourses = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4">Courses with Free Certificates</h2>
      <p className="text-lg text-gray-700 mb-8">
        Explore high-quality courses that offer free certificates upon completion.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {freeCertificateCourses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <img
              src={course.image}
              alt={`Logo of ${course.name}`}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <span className="text-green-600 hover:text-green-800 font-medium text-sm mb-2">
              {course.certificate}
            </span>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
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
