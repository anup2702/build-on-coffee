import { useState, useEffect } from "react";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-theme");
    setIsDarkMode(isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDarkMode(document.body.classList.contains("dark-theme"));
        }
      });
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`max-w-6xl mx-auto py-20 px-6 text-center animate-fade-in overflow-hidden transition-all duration-500 ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
        About BuildOnCoffee
      </h2>
      <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 ${
        isDarkMode ? "text-gray-300" : "text-gray-800"
      }`}>
        <span className="font-bold text-blue-400">BuildOnCoffee</span> is a{" "}
        <span className={`font-semibold ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          modern, community-driven platform
        </span>{" "}
        dedicated to helping developers discover, share, and use the best tools
        and resources for building software.
      </p>
      <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 ${
        isDarkMode ? "text-gray-300" : "text-gray-800"
      }`}>
        Our mission is to{" "}
        <span className="text-purple-400 font-medium">
          empower developers of all backgrounds
        </span>{" "}
        by providing a curated collection of{" "}
        <span className="font-semibold text-green-400">
          productivity tools, learning resources
        </span>
        , and a vibrant space for collaboration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-20">
        <img
          src="./perpex.png"
          alt="BuildOnCoffee Logo"
          className="w-full max-w-sm mx-auto hover:scale-105 transition-transform"
        />

        <div className="text-left">
          <h2 className={`text-2xl md:text-3xl font-extrabold mb-2 text-transparent bg-clip-text ${
            isDarkMode ? "bg-gradient-to-r from-white to-gray-300" : "bg-black"
          }`}>
            Why BuildOnCoffee?
          </h2>

          <ul className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto list-disc list-inside ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}>
            <li>
              <span className="font-semibold text-blue-400">Discover</span>{" "}
              top-rated tools and resources for developers, all in one place.
            </li>
            <li>
              <span className="font-semibold text-purple-400">Stay updated</span>{" "}
              with the latest trends in technology, productivity, and learning.
            </li>
            <li>
              <span className="font-semibold text-green-400">Access</span> free
              and premium courses, including those with certificates.
            </li>
            <li>
              <span className="font-semibold text-pink-400">Connect</span> with a
              global community of builders, learners, and mentors.
            </li>
            <li>
              <span className="font-semibold text-yellow-400">Contribute</span>{" "}
              your own favorite tools and resources to help others grow.
            </li>
          </ul>
        </div>
      </div>

      <div className={`rounded-xl p-8 mb-12 shadow-lg text-left max-w-4xl mx-auto ${
        isDarkMode ? "bg-blue-900/30 border border-blue-700/30" : "bg-blue-50"
      }`}>
        <h3 className={`text-2xl font-semibold mb-3 ${
          isDarkMode ? "text-blue-300" : "text-blue-800"
        }`}>Our Vision</h3>
        <p className={`leading-relaxed ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
          We believe that sharing knowledge and tools accelerates innovation.
          BuildOnCoffee aims to break down barriers for new and experienced
          developers alike, making it easier to find what you need to learn,
          build, and succeed.
        </p>
      </div>

      <div className={`rounded-xl p-8 mb-12 shadow-lg text-left max-w-4xl mx-auto ${
        isDarkMode ? "bg-yellow-900/30 border border-yellow-700/30" : "bg-yellow-50"
      }`}>
        <h3 className={`text-2xl font-semibold mb-3 ${
          isDarkMode ? "text-yellow-300" : "text-yellow-800"
        }`}>
          How You Can Get Involved
        </h3>
        <ul className={`list-disc list-inside space-y-2 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
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
        className={`inline-block mt-6 px-8 py-3 border-2 rounded-full transition-colors duration-300 font-medium ${
          isDarkMode 
            ? "border-white text-white hover:bg-white hover:text-black" 
            : "border-black text-black hover:bg-black hover:text-white"
        }`}
      >
        🌟 Visit our GitHub
      </a>
    </section>
  );
};

export default About;
