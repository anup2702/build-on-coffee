import React, { useState } from 'react';
import { ClipboardCheck, ClipboardCopy, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import coffeeBreakChallenges from '../../data/challenges1'; // Make sure the path is correct!

function Challenges1Case() {
  // ✅ Select the challenge by ID
  const challenge = coffeeBreakChallenges.find(ch => ch.id === 1);

  // If not found (optional safety check)
  if (!challenge) return <p className="text-center mt-10 text-red-500">Challenge not found.</p>;

  const { title, description, difficulty, tags } = challenge;

  const [input, setInput] = useState('');
  const [reversed, setReversed] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const handleReverse = () => {
    if (input.trim() === '') {
      setError('Please enter a valid string.');
      setReversed('');
      return;
    }
    setError('');
    const reversedStr = input.split('').reverse().join('');
    setReversed(reversedStr);
  };

  const handleReset = () => {
    setInput('');
    setReversed('');
    setError('');
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reversed);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
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
      <h2 className="text-4xl font-extrabold mb-3 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{description}</p>

      {/* Tags */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <span className="text-xs px-3 py-1 bg-yellow-200 dark:bg-yellow-400 text-gray-800 rounded-full font-semibold tracking-wide uppercase shadow-sm">
          {difficulty}
        </span>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border border-gray-300 rounded-full font-mono text-gray-700 dark:text-gray-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        className="w-full px-5 py-3 border rounded-xl shadow-inner bg-gray-50 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder:text-gray-400 dark:placeholder:text-gray-500"
        placeholder="Type something to reverse..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2 animate-pulse">{error}</p>}

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6 flex-wrap">
        <button
          onClick={handleReverse}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition-all duration-200"
        >
          🔁 Reverse
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white font-semibold rounded-xl transition-all duration-200"
        >
          ❌ Reset
        </button>
      </div>

      {/* Result Output */}
      {reversed && (
        <div className="mt-8 p-6 bg-green-50 dark:bg-green-900 border border-green-400 dark:border-green-700 rounded-2xl relative shadow-md">
          <p className="text-green-700 dark:text-green-300 font-semibold text-base">Reversed String:</p>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl text-green-900 dark:text-green-100 break-words font-mono">{reversed}</p>
            <button onClick={handleCopy} className="ml-4 hover:scale-105 transition">
              {copied ? (
                <ClipboardCheck className="text-green-600 dark:text-green-300" size={22} />
              ) : (
                <ClipboardCopy className="text-gray-600 dark:text-gray-300" size={22} />
              )}
            </button>
          </div>
          {copied && <p className="text-green-500 text-xs absolute top-2 right-4">Copied!</p>}
        </div>
      )}
    </div>
  );
}

export default Challenges1Case;
