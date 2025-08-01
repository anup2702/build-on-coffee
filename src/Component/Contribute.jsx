import { useState, useEffect } from "react";

const steps = [
  {
    step: 1,
    title: "Find an Issue or Idea:",
    content:
      "Check our GitHub Issues for existing tasks. If you have a new idea, feel free to open a new issue to discuss it with the community.",
    link: "https://github.com/anup2702/build-on-coffee/issues",
  },
  {
    step: 2,
    title: "Fork the Repository:",
    content:
      "Fork the BuildOnCoffee repository to your own GitHub account. This creates a copy where you can make your changes.",
    link: "https://github.com/anup2702/build-on-coffee",
  },
  {
    step: 3,
    title: "Clone Your Fork:",
    content:
      "Clone your forked repository to your local machine using `git clone [your-fork-url]`.",
  },
  {
    step: 4,
    title: "Create a New Branch:",
    content:
      "Always work on a new branch for your contributions: `git checkout -b feature/your-feature-name` or `bugfix/your-bugfix-name`.",
  },
  {
    step: 5,
    title: "Make Your Changes:",
    content:
      "Implement your changes, whether it's code, documentation, design assets, or content. Ensure your code follows our coding standards (if any).",
  },
  {
    step: 6,
    title: "Test Your Changes:",
    content:
      "Before submitting, thoroughly test your changes to ensure they work as expected and don't introduce new bugs.",
  },
  {
    step: 7,
    title: "Commit Your Changes:",
    content:
      'Commit your changes with clear and concise commit messages: `git commit -m "feat: Add new feature X"` or `fix: Resolve bug Y`.',
  },
  {
    step: 8,
    title: "Push to Your Fork:",
    content:
      "Push your changes to your forked repository on GitHub: `git push origin feature/your-feature-name`.",
  },
  {
    step: 9,
    title: "Open a Pull Request (PR):",
    content:
      "Go to the original BuildOnCoffee repository on GitHub and open a new Pull Request. Provide a detailed description of your changes and reference any related issues.",
  },
  {
    step: 10,
    title: "Review and Merge:",
    content:
      "Our team will review your PR. We might ask for changes or clarifications. Once approved, your contribution will be merged!",
  },
];

const ContributePage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const topContributors = [
    { id: 1, name: "Alice Johnson", contributions: 15, profileUrl: "#" },
    { id: 2, name: "Bob Williams", contributions: 12, profileUrl: "#" },
    { id: 3, name: "Charlie Brown", contributions: 10, profileUrl: "#" },
    { id: 4, name: "Diana Prince", contributions: 8, profileUrl: "#" },
    { id: 5, name: "Eve Adams", contributions: 7, profileUrl: "#" },
  ];

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

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900" 
        : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    }`}>
      <div className={`max-w-7xl mx-auto backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 border transition-all duration-500 ${
        isDarkMode 
          ? "bg-gray-800/80 border-gray-700/50" 
          : "bg-white/80 border-white/20"
      }`}>
        {/* Page Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className={`text-5xl font-extrabold bg-clip-text text-transparent mb-4 ${
            isDarkMode 
              ? "bg-gradient-to-r from-white via-blue-300 to-indigo-300" 
              : "bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900"
          }`}>
            Contribute to BuildOnCoffee
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* How to Contribute */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className={`text-3xl font-bold bg-clip-text text-transparent ${
                isDarkMode 
                  ? "bg-gradient-to-r from-white to-gray-300" 
                  : "bg-gradient-to-r from-gray-800 to-gray-900"
              }`}>
                How You Can Contribute
              </h2>
            </div>

            <div className="space-y-6">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => toggleContent(index)}
                >
                  <div className={`flex items-start space-x-4 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border ${
                    isDarkMode 
                      ? "bg-gray-700/50 border-gray-600/50 hover:border-blue-400/50" 
                      : "bg-white border-gray-100 hover:border-blue-200"
                  }`}>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-medium transition-colors ${
                        isDarkMode 
                          ? "text-white group-hover:text-blue-300" 
                          : "text-gray-900 group-hover:text-blue-700"
                      }`}>
                        {item.title}
                      </h3>
                      {openIndex === index && (
                        <div className={`text-sm mt-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}>
                          {item.link ? (
                            <>
                              {item.content
                                .split(
                                  /(GitHub Issues|BuildOnCoffee repository)/
                                )
                                .map((text, idx) =>
                                  text === "GitHub Issues" ? (
                                    <a
                                      key={idx}
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`underline font-medium ${
                                        isDarkMode 
                                          ? "text-blue-400 hover:text-blue-300" 
                                          : "text-blue-600 hover:text-blue-800"
                                      }`}
                                    >
                                      GitHub Issues
                                    </a>
                                  ) : text === "BuildOnCoffee repository" ? (
                                    <a
                                      key={idx}
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`underline font-medium ${
                                        isDarkMode 
                                          ? "text-blue-400 hover:text-blue-300" 
                                          : "text-blue-600 hover:text-blue-800"
                                      }`}
                                    >
                                      BuildOnCoffee repository
                                    </a>
                                  ) : (
                                    <span key={idx}>{text}</span>
                                  )
                                )}
                            </>
                          ) : (
                            item.content
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Contributors */}
          <section>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className={`text-3xl font-bold bg-clip-text text-transparent ${
                isDarkMode 
                  ? "bg-gradient-to-r from-white to-gray-300" 
                  : "bg-gradient-to-r from-gray-800 to-gray-900"
              }`}>
                Our Top Contributors
              </h2>
            </div>

            <div className="space-y-4">
              {topContributors.map((contributor) => (
                <div
                  key={contributor.id}
                  className={`flex items-center justify-between p-4 rounded-xl shadow-sm hover:shadow-md transition border ${
                    isDarkMode 
                      ? "bg-gray-700/50 border-gray-600/50 hover:border-blue-400/50" 
                      : "bg-white border-gray-100 hover:border-blue-200"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {contributor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {contributor.name}
                      </h3>
                      <p className={`text-sm font-medium ${
                        isDarkMode ? "text-blue-300" : "text-blue-800"
                      }`}>
                        {contributor.contributions} Contributions
                      </p>
                    </div>
                  </div>
                  <a
                    href={contributor.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:scale-110 transition-transform ${
                      isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-1.03-.02-1.87-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.03a9.58 9.58 0 012.5-.34c.85.01 1.71.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16"></div>

            {/* Call to Action */}
            <div className="relative overflow-hidden absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-10 rounded-2xl"></div>
            <div className={`relative p-10 rounded-2xl shadow-inner border text-center transition-all duration-500 ${
              isDarkMode 
                ? "bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border-blue-700/50" 
                : "bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-blue-200"
            }`}>
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className={`text-4xl font-bold bg-clip-text text-transparent mb-4 ${
                  isDarkMode 
                    ? "bg-gradient-to-r from-blue-300 to-indigo-300" 
                    : "bg-gradient-to-r from-blue-800 to-indigo-900"
                }`}>
                  Ready to Make a Difference?
                </h2>
              </div>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Once you've completed your work, don't forget to raise a Pull
                Request on our GitHub repository!
              </p>
              <a
                href="https://github.com/anup2702/build-on-coffee"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border ${
                  isDarkMode 
                    ? "bg-gradient-to-r from-gray-700 to-gray-800 text-white border-gray-600 hover:border-gray-500" 
                    : "bg-gradient-to-r from-gray-900 to-black text-white border-gray-800 hover:border-gray-700"
                }`}
              >
                Raise a Pull Request
                <svg
                  className="ml-3 -mr-1 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.233.686-.507 0-.25-.011-1.05-.016-1.845-2.759.593-3.346-1.187-3.346-1.187-.452-1.152-1.107-1.459-1.107-1.459-.905-.618.069-.607.069-.607 1.002.07 1.531 1.032 1.53 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.332-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.7 1.028 1.596 1.028 2.688 0 3.845-2.339 4.681-4.569 4.935.359.308.678.919.678 1.852 0 1.335-.012 2.41-.012 2.727 0 .275.215.596.695.503C21.133 20.203 24 16.447 24 12.017 24 6.484 19.522 2 14 2h-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContributePage;
