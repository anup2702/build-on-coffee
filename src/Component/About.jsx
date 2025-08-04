const About = () => (
<section className="max-w-6xl mx-auto py-20 px-6 text-center animate-fade-in overflow-hidden">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
      About BuildOnCoffee
    </h2>
    <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl mx-auto mb-6 dark:text-gray-300">
      <span className="font-bold text-blue-700">BuildOnCoffee</span> is a{" "}
      <span className="font-semibold text-gray-900 dark:text-gray-300">
        modern, community-driven platform
      </span>{" "}
      dedicated to helping developers discover, share, and use the best tools
      and resources for building software.
    </p>
    <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl mx-auto mb-10 dark:text-gray-300">
      Our mission is to{" "}
      <span className="text-purple-700 font-medium">
        empower developers of all backgrounds
      </span>{" "}
      by providing a curated collection of{" "}
      <span className="font-semibold text-green-700">
        productivity tools, learning resources
      </span>
      , and a vibrant space for collaboration.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-20 dark:text-gray-300">
      <img
        src="./perpex.png"
        alt="BuildOnCoffee Logo"
        className="w-full max-w-sm mx-auto   hover:scale-105 transition-transform"
      />

      <div className="text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-black dark:text-white">
          Why BuildOnCoffee?
        </h2>

        <ul className=" text-lg md:text-xl leading-relaxed text-gray-800 max-w-3xl mx-auto list-none dark:text-gray-300">
          <li>
            <span className="font-semibold text-blue-700">Discover</span>{" "}
            top-rated tools and resources for developers, all in one place.
          </li>
          <li>
            <span className="font-semibold text-purple-700">Stay updated</span>{" "}
            with the latest trends in technology, productivity, and learning.
          </li>
          <li>
            <span className="font-semibold text-green-700">Access</span> free
            and premium courses, including those with certificates.
          </li>
          <li>
            <span className="font-semibold text-pink-700">Connect</span> with a
            global community of builders, learners, and mentors.
          </li>
          <li>
            <span className="font-semibold text-yellow-700">Contribute</span>{" "}
            your own favorite tools and resources to help others grow.
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-50 rounded-xl p-8 mb-12 shadow-lg text-left max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-3 text-blue-800">Our Vision</h3>
      <p className="text-gray-700 leading-relaxed">
        We believe that sharing knowledge and tools accelerates innovation.
        BuildOnCoffee aims to break down barriers for new and experienced
        developers alike, making it easier to find what you need to learn,
        build, and succeed.
      </p>
    </div>

    <div className="bg-yellow-50 rounded-xl p-8 mb-12 shadow-lg text-left max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-3 text-yellow-800">
        How You Can Get Involved
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Suggest new tools, resources, or courses via our contribution page.
        </li>
        <li>Share your feedback to help us improve the platform.</li>
        <li>Join our community discussions and events.</li>
        <li>
          Become a contributor and help curate the best content for everyone.
        </li>
      </ul>
    </div>

    <a
      href="https://github.com/anup2702/build-on-coffee"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-medium"
    >
      🌟 Visit our GitHub
    </a>
  </section>
);

export default About;
