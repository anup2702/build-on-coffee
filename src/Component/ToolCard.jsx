<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import { isNewItem } from '../utils/dateUtils'; // import utility
>>>>>>> 7ac1baa (Added new courses popup and dateAdded handling)

const ToolCard = ({
  name,
  description,
  link,
  youtube,
  references = [],
  docs,
<<<<<<< HEAD
  image,
=======
  dateAdded, // ✅ add prop
>>>>>>> 7ac1baa (Added new courses popup and dateAdded handling)
  onClick,
  selected,
}) => (
  <div
<<<<<<< HEAD
=======
    className={`relative border rounded-xl p-4 shadow-lg transition-all bg-white flex flex-col items-start group cursor-pointer ${
      selected ? 'ring-2 ring-black' : 'hover:shadow-2xl hover:bg-gray-100'
    }`}
>>>>>>> 7ac1baa (Added new courses popup and dateAdded handling)
    onClick={onClick}
    className={`group cursor-pointer relative border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md transition-all bg-white dark:bg-[#0f172a] flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 duration-300 ${
      selected ? "ring-2 ring-black dark:ring-white" : ""
    }`}
  >
<<<<<<< HEAD
    {/* Title, Image, and Description */}
    <div className="flex items-start gap-4 w-full mb-3">
=======
    {/* "New" badge if dateAdded is within 7 days */}
    {dateAdded && isNewItem(dateAdded) && (
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        New
      </span>
    )}

    <div className="flex items-center gap-4 w-full mb-3">
>>>>>>> 7ac1baa (Added new courses popup and dateAdded handling)
      {image && (
        <img
          src={image}
          alt={name}
          className="rounded w-8 h-8 object-contain"
        />
      )}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>

    {/* Embedded YouTube Preview */}
    {youtube && (
      <div className="w-full rounded-lg overflow-hidden shadow">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={youtube}
            title="YouTube tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    )}

    {/* Documentation Link */}
    {docs && (
      <a
        href={docs}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-block text-sm text-blue-600 dark:text-blue-400 relative group font-medium mt-1"
      >
        <span className="relative z-10">📄 View Documentation</span>
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
      </a>
    )}

    {/* References */}
    {references.length > 0 && (
      <div className="mt-1">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          References:
        </h4>
        <div className="flex flex-wrap gap-2">
          {references.map((ref, i) =>
            ref.image ? (
              <a
                key={i}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="block w-10 h-10 rounded overflow-hidden border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
                title={ref.label || ""}
              >
                <img
                  src={ref.image}
                  alt={ref.label || "Reference"}
                  className="w-full h-full object-contain"
                />
              </a>
            ) : (
              <a
                key={i}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative text-xs text-blue-600 dark:text-blue-400 font-medium underline-offset-2 hover:underline hover:text-blue-800 dark:hover:text-white transition-all"
              >
                {ref.label}
              </a>
            )
          )}
        </div>
      </div>
    )}

    {/* CTA Button */}
    {link && (
      <div className="mt-auto pt-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group relative inline-block w-full text-center bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-300"
        >
          <span className="relative z-10 font-semibold tracking-wide">
            🚀 Go to Course
          </span>
          <span className="absolute inset-0 w-0 h-full bg-white dark:bg-black transition-all duration-300 group-hover:w-full group-hover:scale-105 opacity-10 rounded-lg" />
        </a>
      </div>
    )}
  </div>
);

export default ToolCard;
