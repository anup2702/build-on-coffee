const ToolCard = ({ name, description, link, image, youtube, references, docs, onClick, selected }) => (
  <div
    className={`border rounded-xl p-4 shadow-lg transition-all bg-white flex flex-col items-start group cursor-pointer ${selected ? 'ring-2 ring-black' : 'hover:shadow-2xl hover:bg-gray-100'}`}
    onClick={onClick}
  >
    <div className="flex items-center gap-4 w-full mb-3">
      {image && (
        <img src={image} alt={name} className="rounded max-h-40 object-contain" />
      )}
      <h3 className="text-xl font-bold mb-1 group-hover:text-black transition-colors text-left">{name}</h3>
    </div>

    <p className="text-gray-600 mt-1 group-hover:text-gray-800 transition-colors text-left mb-2">{description}</p>

    {youtube && (
      <div className="w-full mb-2">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={youtube}
            title="YouTube tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-40 rounded shadow"
          />
        </div>
      </div>
    )}

    {docs && (
      <div className="mb-2 w-full">
        <a href={docs} target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
          Documentation
        </a>
      </div>
    )}

    {references && references.length > 0 && (
      <div className="w-full">
        <h4 className="font-semibold text-sm mb-1">References:</h4>
        <div className="flex flex-col gap-3 items-start">
          {references.map((ref, i) => (
            ref.image ? (
              <a
                key={i}
                href={ref.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                title={ref.label || ''}
              >
                <img src={ref.image} alt={ref.label || 'Reference'} className="w-16 h-16 object-contain rounded shadow hover:scale-105 transition-transform" />
                {ref.label && <div className="text-xs text-center mt-1">{ref.label}</div>}
              </a>
            ) : (
              <div key={i} className="text-xs">
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
                  {ref.label}
                </a>
              </div>
            )
          ))}
        </div>
      </div>
    )}

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Go to Course
      </a>
    )}
  </div>
);

export default ToolCard;
