import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Optional: Install with `npm i lucide-react`
import challenges3 from '../../data/challenges3';

function Challenges3Case() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [customCode, setCustomCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`);

  const handleRun = () => {
    try {
      const func = eval(`(${customCode})`);
      const result = func(Number(userInput));
      setOutput(`✅ Output: ${result}`);
    } catch (err) {
      setOutput(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl rounded-xl mt-10 space-y-8 border border-indigo-200">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-indigo-600 hover:text-indigo-800 gap-2 text-sm font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      {/* Title */}
      <div className="space-y-3">
        <h1 className="text-4xl font-extrabold text-indigo-700 flex items-center gap-2">
          🚀 {challenges3.title}
        </h1>
        <p className="text-gray-700 text-lg">{challenges3.description}</p>

        <div className="flex items-center flex-wrap gap-3">
          <span className="px-3 py-1 bg-yellow-300/80 text-sm font-bold text-yellow-900 rounded-full shadow">
            {challenges3.difficulty}
          </span>
          {challenges3.tags.map((tag, i) => (
            <span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded shadow-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Examples */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">📘 Examples</h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-700">
          {challenges3.example?.map((ex, idx) => (
            <li key={idx}>
              <code className="bg-gray-200 px-2 py-1 rounded">
                Input: {ex.input} → Output: {ex.output}
              </code>
            </li>
          ))}
        </ul>
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <label className="block font-semibold text-sm text-gray-700">
          🔢 Enter a number (n):
        </label>
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="e.g., 6"
          className="w-full px-4 py-2 border text-[black] border-gray-300 rounded-md shadow focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
        <button
          onClick={handleRun}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold shadow-md transition"
        >
          ▶️ Run
        </button>

        {output && (
          <div className={`mt-3 px-4 py-3 rounded-md text-sm font-mono transition ${
            output.startsWith('✅')
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-700'
          }`}>
            {output}
          </div>
        )}
      </div>

      {/* Custom Code Editor */}
      <div>
        <label className="block mb-1 text-sm font-semibold text-gray-700">
          ✏️ Edit Your Function:
        </label>
        <textarea
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          rows="8"
          className="w-full p-4 text-[black] font-mono border border-gray-300 rounded-lg bg-gray-50 shadow focus:ring-2 focus:ring-indigo-300 focus:outline-none resize-none"
        />
      </div>

      {/* Solution */}
      <div className="pt-4">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition underline"
        >
          {showSolution ? '🙈 Hide Solution' : '👀 Show Solution'}
        </button>

        {showSolution && (
          <div className="mt-3 bg-gray-100 border border-gray-300 rounded-md p-4 text-sm font-mono whitespace-pre-wrap">
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
          </div>
        )}
      </div>
    </div>
  );
}

export default Challenges3Case;
