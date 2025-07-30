const ContributePage = () => {
  // In a real application, this would come from an API or we can add manually.
  const topContributors = [
    { id: 1, name: "Alice Johnson", contributions: 15, profileUrl: "#" },
    { id: 2, name: "Bob Williams", contributions: 12, profileUrl: "#" },
    { id: 3, name: "Charlie Brown", contributions: 10, profileUrl: "#" },
    { id: 4, name: "Diana Prince", contributions: 8, profileUrl: "#" },
    { id: 5, name: "Eve Adams", contributions: 7, profileUrl: "#" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-white/20">
        {/* Page Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
            Contribute to BuildOnCoffee
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Contribution Guide Section */}
        <section className="mb-16">
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              How You Can Contribute
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We welcome contributions from everyone! Whether you're a seasoned
              developer, a budding writer, or a design enthusiast, your skills
              can help us grow. Here's a step-by-step guide to get started:
            </p>
          </div>

          <div className="space-y-6">
            {[
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
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content.includes("GitHub Issues") && (
                        <>
                          Check our{" "}
                          <a
                            href="https://github.com/anup2702/build-on-coffee/issues"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                          >
                            GitHub Issues
                          </a>{" "}
                          for existing tasks. If you have a new idea, feel free
                          to open a new issue to discuss it with the community.
                        </>
                      )}
                      {item.content.includes("BuildOnCoffee repository") && (
                        <>
                          Fork the{" "}
                          <a
                            href="https://github.com/anup2702/build-on-coffee"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                          >
                            BuildOnCoffee repository
                          </a>{" "}
                          to your own GitHub account. This creates a copy where
                          you can make your changes.
                        </>
                      )}
                      {!item.content.includes("GitHub Issues") &&
                        !item.content.includes("BuildOnCoffee repository") &&
                        item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Contributors Section */}
        <section className="mb-16">
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Top Contributors
            </h2>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
            <p className="text-lg text-gray-700">
              A huge thank you to our most active and dedicated contributors!
              Your efforts make BuildOnCoffee better for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {contributor.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                      {contributor.name}
                    </h3>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-lg mb-4">
                      <span className="text-blue-800 font-semibold">
                        {contributor.contributions} Contributions
                      </span>
                    </div>
                    <a
                      href={contributor.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-blue-600 hover:border-blue-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.233.686-.507 0-.25-.011-1.05-.016-1.845-2.759.593-3.346-1.187-3.346-1.187-.452-1.152-1.107-1.459-1.107-1.459-.905-.618.069-.607.069-.607 1.002.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.332-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.7 1.028 1.596 1.028 2.688 0 3.845-2.339 4.681-4.569 4.935.359.308.678.919.678 1.852 0 1.335-.012 2.41-.012 2.727 0 .275.215.596.695.503C21.133 20.203 24 16.447 24 12.017 24 6.484 19.522 2 14 2h-2z" />
                      </svg>
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action for PR */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-10 rounded-2xl"></div>
          <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-10 rounded-2xl shadow-inner border border-blue-200 text-center">
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
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
                Ready to Make a Difference?
              </h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Once you've completed your work, don't forget to raise a Pull
              Request on our GitHub repository!
            </p>
            <a
              href="https://github.com/anup2702/build-on-coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-gray-900 to-black text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
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
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.233.686-.507 0-.25-.011-1.05-.016-1.845-2.759.593-3.346-1.187-3.346-1.187-.452-1.152-1.107-1.459-1.107-1.459-.905-.618.069-.607.069-.607 1.002.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.332-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.7 1.028 1.596 1.028 2.688 0 3.845-2.339 4.681-4.569 4.935.359.308.678.919.678 1.852 0 1.335-.012 2.41-.012 2.727 0 .275.215.596.695.503C21.133 20.203 24 16.447 24 12.017 24 6.484 19.522 2 14 2h-2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContributePage;
