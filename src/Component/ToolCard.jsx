import React from "react";
import isNewItem from "../utils/isNewItem";
import { Heart } from "lucide-react";

const ToolCard = ({
  name,
  description,
  link,
  image,
  youtube,
  references = [],
  docs,
  onClick,
  selected,
  dateAdded,
  isFavourite, // ✅ added
  onToggleFavourite, // ✅ added
}) => (
  <div
    className={`relative border-2 rounded-2xl p-6 shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 flex flex-col items-start group cursor-pointer card-hover ${
      selected
        ? "ring-2 ring-blue-500 dark:ring-blue-400 shadow-xl"
        : "hover:shadow-xl hover:bg-gray-50 dark:hover:bg-slate-700 border-gray-200 dark:border-slate-700"
    }`}
    onClick={onClick}
  >
    {/*Favourite Button (Lucide) */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleFavourite();
      }}
      className="absolute top-4 right-4"
      title={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <Heart
        className={`w-6 h-6 transition-colors duration-300 ${
          isFavourite ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </button>

    {isNewItem(dateAdded) && (
      <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
        NEW
      </span>
    )}

    {/* Image and Title */}
    <div className="flex items-center gap-5 w-full mb-4">
      {image && (
        <div className="w-20 h-20 flex items-center justify-center bg-gray-50 dark:bg-slate-700 rounded-2xl p-3">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </div>
      )}
      <h3 className="text-2xl font-black mb-2 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors text-left">
        {name}
      </h3>
    </div>

    {/* Description */}
    <p className="text-gray-600 dark:text-gray-300 mt-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors text-left mb-4 text-lg leading-relaxed">
      {description}
    </p>

    {/* YouTube Video */}
    {youtube && (
      <div className="w-full mb-4">
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-lg"
          style={{ paddingTop: "56.25%" }}
        >
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

    {/* Documentation */}
    {docs && (
      <div className="mb-4 w-full">
        <a
          href={docs}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          📚 Documentation
        </a>
      </div>
    )}

    {/* References */}
    {references.length > 0 && (
      <div className="w-full mb-4">
        <h4 className="font-bold text-lg mb-3 dark:text-white">References:</h4>
        <div className="flex flex-wrap gap-4 items-start">
          {references.map((ref, i) =>
            ref.image ? (
              <a
                key={i}
                href={ref.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={ref.label || ""}
                onClick={(e) => e.stopPropagation()}
                className="block group/reference"
              >
                <div className="w-16 h-16 flex items-center justify-center border-2 border-gray-200 dark:border-slate-600 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group-hover/reference:scale-105 bg-white dark:bg-slate-700">
                  <img
                    src={ref.image}
                    alt={ref.label || "Reference"}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                {ref.label && (
                  <div className="text-sm text-center mt-2 dark:text-gray-300 font-medium">
                    {ref.label}
                  </div>
                )}
              </a>
            ) : (
              <div key={i} className="text-sm">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  {ref.label}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    )}

    {/* CTA Button */}
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block w-full text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        onClick={(e) => e.stopPropagation()}
      >
        Go to Course
      </a>
    )}
  </div>
);

export default ToolCard;
