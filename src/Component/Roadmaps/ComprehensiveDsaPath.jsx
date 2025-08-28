import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { BrainCircuit, ListOrdered, Table } from "lucide-react";
import { comprehensiveDsaPath } from "../../../data/comprehensiveDsaPath";

const ComprehensiveDsaPath = () => {
  const location = useLocation();

  const currentContent = useMemo(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      return comprehensiveDsaPath.find((step) => step.id === hash);
    }
    return comprehensiveDsaPath[0]; // Default to the cheatsheet
  }, [location.hash]);

  const difficultyColor = {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
  };

  //   if (!currentContent) {
  //     return ( /* ... Not found JSX ... */ );
  //   }

  return (
    <section className="mx-auto py-20 px-6 md:px-16 animate-fade-in dark:bg-gray-900 min-h-screen">
      <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow p-8">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gradient">
          {currentContent.title}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          {currentContent.description}
        </p>

        {/* Render Cheatsheet */}
        {currentContent.cheatsheet && (
          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <BrainCircuit className="w-6 h-6 mr-2" />{" "}
              {currentContent.cheatsheet.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {currentContent.cheatsheet.complexities.map((c, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <p className="font-bold text-blue-500">
                    {c.complexity} -{" "}
                    <span className="text-gray-700 dark:text-gray-200">
                      {c.name}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {c.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render Data Structure Complexity Table */}
        {currentContent.dataStructureComplexity && (
          <div>
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <Table className="w-6 h-6 mr-2" />{" "}
              {currentContent.dataStructureComplexity.title}
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Data Structure
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Access
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Search
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Insertion
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Deletion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentContent.dataStructureComplexity.structures.map(
                    (s, i) => (
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {s.name}
                        </th>
                        <td className="px-6 py-4">{s.access}</td>
                        <td className="px-6 py-4">{s.search}</td>
                        <td className="px-6 py-4">{s.insertion}</td>
                        <td className="px-6 py-4">{s.deletion}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Render Problem Set */}
        {currentContent.problems && (
          <div>
            <h4 className="text-2xl font-semibold mb-4 flex items-center">
              <ListOrdered className="w-6 h-6 mr-2" /> Problem Set
            </h4>
            <ul className="space-y-2">
              {currentContent.problems.map((prob, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <a
                    href={prob.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {idx + 1}. {prob.name}
                  </a>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      difficultyColor[prob.difficulty]
                    }`}
                  >
                    {prob.difficulty}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ComprehensiveDsaPath;
