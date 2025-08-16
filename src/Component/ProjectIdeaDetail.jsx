import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectIdeas from "../../data/projectIdeas.json";


export default function ProjectIdeaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectIdeas.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4">
        <p className="text-center text-lg">Project not found.</p>
        <div className="text-center mt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
      >
        ← Back
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="h-64 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.overview}</p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Steps / What to build</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
