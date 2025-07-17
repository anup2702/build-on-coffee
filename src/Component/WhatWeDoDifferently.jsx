import React from "react";

const WhatWeDoDifferently = () => (
  <section className="max-w-3xl mx-auto py-16 px-4 text-center animate-fade-in">
    <h2 className="text-4xl font-extrabold mb-6 text-black">What We Do Differently</h2>
    <p className="text-lg text-gray-700 mb-8">
      At BuildOnCoffee, we focus on community-driven curation, hands-on learning, and real-world developer growth. Our approach is unique:
    </p>
    <ul className="grid gap-4 md:grid-cols-3 text-left">
      <li className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition group">
        <span className="text-2xl font-bold text-black group-hover:text-indigo-600 transition">☕</span>
        <h3 className="font-semibold mt-2 mb-1 group-hover:text-indigo-600 transition">Cohorts</h3>
        <p className="text-gray-600">Learn together in small, focused groups with real projects and mentorship.</p>
      </li>
      <li className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition group">
        <span className="text-2xl font-bold text-black group-hover:text-indigo-600 transition">📚</span>
        <h3 className="font-semibold mt-2 mb-1 group-hover:text-indigo-600 transition">Learn</h3>
        <p className="text-gray-600">Access curated resources, workshops, and hands-on sessions for all levels.</p>
      </li>
      <li className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition group">
        <span className="text-2xl font-bold text-black group-hover:text-indigo-600 transition">🛠️</span>
        <h3 className="font-semibold mt-2 mb-1 group-hover:text-indigo-600 transition">Tools & Links</h3>
        <p className="text-gray-600">Discover, share, and use the best tools and links for modern development.</p>
      </li>
    </ul>
  </section>
);

export default WhatWeDoDifferently; 