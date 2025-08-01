import React, { useState, useEffect } from 'react';

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
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-theme");
    setIsDarkMode(isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDarkMode(document.body.classList.contains("dark-theme"));
        }
      });
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`border rounded-xl p-4 shadow-lg transition-all flex flex-col items-start group cursor-pointer ${
        isDarkMode 
          ? "bg-gray-800/50 border-gray-700/50" 
          : "bg-white"
      } ${
        selected 
          ? isDarkMode ? 'ring-2 ring-blue-400' : 'ring-2 ring-black' 
          : isDarkMode ? 'hover:shadow-2xl hover:bg-gray-700/50' : 'hover:shadow-2xl hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 w-full mb-3">
        {image && (
          <img src={image} alt={name} className="rounded max-h-40 object-contain" />
        )}
        <h3 className={`text-xl font-bold mb-1 group-hover:transition-colors text-left ${
          isDarkMode 
            ? "text-white group-hover:text-blue-300" 
            : "group-hover:text-black"
        }`}>{name}</h3>
      </div>

      <p className={`mt-1 group-hover:transition-colors text-left mb-2 ${
        isDarkMode 
          ? "text-gray-300 group-hover:text-gray-200" 
          : "text-gray-600 group-hover:text-gray-800"
      }`}>{description}</p>

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

      {docs && (
        <div className="mb-2 w-full">
          <a 
            href={docs} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`underline ${
              isDarkMode 
                ? "text-blue-400 hover:text-blue-300" 
                : "hover:text-black"
            }`}
          >
            Documentation
          </a>
        </div>
      )}

      {references.length > 0 && (
        <div className="w-full">
          <h4 className={`font-semibold text-sm mb-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-900"
          }`}>References:</h4>
          <div className="flex flex-col gap-3 items-start">
            {references.map((ref, i) =>
              ref.image ? (
                <a
                  key={i}
                  href={ref.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  title={ref.label || ''}
                >
                  <img
                    src={ref.image}
                    alt={ref.label || 'Reference'}
                    className="w-16 h-16 object-contain rounded shadow hover:scale-105 transition-transform"
                  />
                  {ref.label && (
                    <div className={`text-xs text-center mt-1 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>{ref.label}</div>
                  )}
                </a>
              ) : (
                <div key={i} className="text-xs">
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`underline ${
                      isDarkMode 
                        ? "text-blue-400 hover:text-blue-300" 
                        : "hover:text-black"
                    }`}
                  >
                    {ref.label}
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 inline-block px-4 py-2 rounded transition ${
            isDarkMode 
              ? "text-white bg-blue-600 hover:bg-blue-700" 
              : "text-white bg-black hover:bg-gray-800"
          }`}
        >
          Go to Course
        </a>
      )}
    </div>
  );
};

export default ToolCard;
