import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import missingNumberChallenge from '../../data/challenges2';

function Challenges2Case() {
  const { title, description, difficulty, tags } = missingNumberChallenge;

  const [input, setInput] = useState('');
  const [missing, setMissing] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleFindMissing = () => {
    try {
      const arr = JSON.parse(input);
      if (!Array.isArray(arr) || arr.some(n => typeof n !== 'number')) {
        throw new Error('Input must be an array of numbers.');
      }

      const n = arr.length + 1;
      const expectedSum = (n * (n - 1)) / 2;
      const actualSum = arr.reduce((sum, num) => sum + num, 0);
      setMissing(expectedSum - actualSum);
      setError('');
    } catch (err) {
      setError(err.message || 'Invalid input.');
      setMissing(null);
    }
  };

  const handleReset = () => {
    setInput('');
    setMissing(null);
    setError('');
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-2xl rounded-3xl mt-10 transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition font-medium group"
      >
        <ArrowLeft className="mr-1 group-hover:-translate-x-1 transition-transform duration-200" size={20} />
        Back
      </button>

      {/* Title & Description */}
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      {/* Tags & Difficulty */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <span className="text-xs px-3 py-1 bg-yellow-200 dark:bg-yellow-400 text-gray-800 rounded-full font-semibold tracking-wide uppercase shadow-sm">
          {difficulty}
        </span>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full font-mono text-gray-700 dark:text-gray-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder='Enter array like [3, 0, 1]'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-3 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-lg dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Error Message */}
      {error && <p className="text-red-500 mt-2 animate-pulse text-sm">{error}</p>}

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleFindMissing}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition-all duration-200"
        >
          🔍 Find Missing Number
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold rounded-xl transition-all duration-200"
        >
          ❌ Reset
        </button>
      </div>

      {/* Result */}
      {missing !== null && !error && (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-xl shadow-md">
          ✅ Missing Number: <strong>{missing}</strong>
        </div>
      )}
    </div>
  );
}

export default Challenges2Case;
