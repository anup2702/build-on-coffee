import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Challenges4Case() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 text-white px-6 py-10 font-sans">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm text-white hover:text-yellow-300 transition mb-8"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      {/* Card Container */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-yellow-300 tracking-wide flex items-center gap-2">
          ⚡ Is Power of Two
        </h1>

        {/* Description */}
        <p className="text-lg leading-relaxed text-white/90">
          Create a function that checks whether a given number is a power of two. Return <code className="text-green-300 font-bold">true</code> if it is, otherwise return <code className="text-red-300 font-bold">false</code>.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "Math", "Bit Manipulation"].map((tag, i) => (
            <span
              key={i}
              className="bg-indigo-600/80 text-xs font-semibold px-3 py-1 rounded-full shadow-sm tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Example Code */}
        <div className="bg-gray-950 border border-gray-800 rounded-xl p-5 text-sm font-mono text-green-200 leading-relaxed shadow-lg overflow-x-auto">
<pre>
{`function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

// Examples
console.log(isPowerOfTwo(1));   // true (2^0)
console.log(isPowerOfTwo(16));  // true (2^4)
console.log(isPowerOfTwo(18));  // false`}
</pre>
        </div>

        {/* Tip Box */}
        <div className="bg-yellow-100/10 border-l-4 border-yellow-300 p-4 rounded-md text-yellow-200 text-sm shadow-md">
          💡 <span className="font-semibold">Hint:</span> A power of two has exactly one bit set in its binary representation.
        </div>
      </div>
    </div>
  );
}

export default Challenges4Case;
