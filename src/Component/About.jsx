const About = () => (
  <section className="max-w-4xl mx-auto py-16 px-4 text-center animate-fade-in">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900">About BuildOnCoffee</h2>
    <p className="text-lg text-gray-700 mb-8">
      <span className="font-semibold text-blue-600">BuildOnCoffee</span> is a modern, community-driven platform dedicated to helping developers discover, share, and use the best tools and resources for building software.<br />
      Our mission is to empower developers of all backgrounds by providing a curated collection of productivity tools, learning resources, and a vibrant space for collaboration.
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
      <img
        src="./perpex.png"
        alt="BuildOnCoffee Logo"
        className="w-80 h-80 mx-auto mb-6 md:mb-0"
      />
      <div className="text-left max-w-md">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Why BuildOnCoffee?</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Discover top-rated tools and resources for developers, all in one place.</li>
          <li>Stay updated with the latest trends in technology, productivity, and learning.</li>
          <li>Access free and premium courses, including those with certificates.</li>
          <li>Connect with a global community of builders, learners, and mentors.</li>
          <li>Contribute your own favorite tools and resources to help others grow.</li>
        </ul>
      </div>
    </div>
    <div className="bg-blue-50 rounded-lg p-6 mb-10 shadow-inner">
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Our Vision</h3>
      <p className="text-gray-700">
        We believe that sharing knowledge and tools accelerates innovation. BuildOnCoffee aims to break down barriers for new and experienced developers alike, making it easier to find what you need to learn, build, and succeed.
      </p>
    </div>
    <div className="bg-yellow-50 rounded-lg p-6 mb-10 shadow-inner">
      <h3 className="text-xl font-semibold mb-2 text-yellow-800">How You Can Get Involved</h3>
      <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-lg">
        <li>Suggest new tools, resources, or courses via our contribution page.</li>
        <li>Share your feedback to help us improve the platform.</li>
        <li>Join our community discussions and events.</li>
        <li>Become a contributor and help curate the best content for everyone.</li>
      </ul>
    </div>
    <a
      href="https://github.com/anup2702/build-on-coffee"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition"
    >
      Visit our GitHub
    </a>
  </section>
);

export default About;