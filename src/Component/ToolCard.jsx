import React from 'react';
import isNewItem from "../utils/isNewItem"; // ✅ import utility

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
  dateAdded // ✅ accept dateAdded as prop
}) => (
  <div
    className={`relative border rounded-xl p-4 shadow-lg transition-all bg-white flex flex-col items-start group cursor-pointer ${
      selected ? 'ring-2 ring-black' : 'hover:shadow-2xl hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {/* ✅ New Badge */}
    {isNewItem(dateAdded) && (
      <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-sm shadow">
        NEW
      </span>
    )}

    {/* Image and Title */}
    <div className="flex items-center gap-4 w-full mb-3">
      {image && (
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-1 group-hover:text-black transition-colors text-left">
        {name}
      </h3>
    </div>

    {/* Description */}
    <p className="text-gray-600 mt-1 group-hover:text-gray-800 transition-colors text-left mb-2">
      {description}
    </p>

    {/* YouTube Video */}
    {youtube && (
      <div className="w-full mb-2">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            src={youtube}
            title="YouTube tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded shadow"
          />
        </div>
      </div>
    )}

    {/* Documentation */}
    {docs && (
      <div className="mb-2 w-full">
        <a
          href={docs}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black"
          onClick={(e) => e.stopPropagation()}
        >
          Documentation
        </a>
      </div>
    )}

    {/* References */}
    {references.length > 0 && (
      <div className="w-full">
        <h4 className="font-semibold text-sm mb-1">References:</h4>
        <div className="flex flex-wrap gap-3 items-start">
          {references.map((ref, i) =>
            ref.image ? (
              <a
                key={i}
                href={ref.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                title={ref.label || ''}
                onClick={(e) => e.stopPropagation()}
                className="block"
              >
                <div className="w-12 h-12 flex items-center justify-center border rounded shadow hover:scale-105 transition-transform">
                  <img
                    src={ref.image}
                    alt={ref.label || 'Reference'}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                {ref.label && (
                  <div className="text-xs text-center mt-1">{ref.label}</div>
                )}
              </a>
            ) : (
              <div key={i} className="text-xs">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black"
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
        className="mt-2 inline-block text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        🚀 Go to Course
      </a>
    )}
  </div>
);

export default ToolCard;
