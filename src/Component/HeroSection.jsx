import React from "react";

const HeroSection = () => (
  <section className="text-center py-16 bg-gradient-to-b from-gray-100 to-gray-50">
    <h1 className="text-4xl font-extrabold mb-4">Welcome to BuildOnCoffee</h1>
    <p className="text-lg text-gray-600 mb-6">Discover and use the best developer tools, curated for productivity and creativity.</p>
    <a href="/tools" className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Explore Tools</a>
    <hr className="my-8 border-gray-300"></hr>
  </section>
);

export default HeroSection; 
