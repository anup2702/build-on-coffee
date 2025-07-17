import React from "react";

const Contact = () => (
  <section className="max-w-xl mx-auto py-16 px-4 animate-fade-in">
    <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
    <form className="bg-white shadow rounded-lg p-8 flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition" />
      <input type="email" placeholder="Your Email" className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition" />
      <textarea placeholder="Your Message" className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition" rows={4} />
      <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-800 transition">Send Message</button>
    </form>
  </section>
);

export default Contact; 