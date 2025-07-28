
const ContributePage = () => {
  // In a real application, this would come from an API or we can add manually.
  const topContributors = [
    { id: 1, name: 'Alice Johnson', contributions: 15, profileUrl: '#' },
    { id: 2, name: 'Bob Williams', contributions: 12, profileUrl: '#' },
    { id: 3, name: 'Charlie Brown', contributions: 10, profileUrl: '#' },
    { id: 4, name: 'Diana Prince', contributions: 8, profileUrl: '#' },
    { id: 5, name: 'Eve Adams', contributions: 7, profileUrl: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-10 lg:p-12 border border-gray-200">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10 sm:mb-12">
          Contribute to BuildOnCoffee
        </h1>

        {/* Contribution Guide Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-3">
            How You Can Contribute
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We welcome contributions from everyone! Whether you're a seasoned developer, a budding writer, or a design enthusiast, your skills can help us grow. Here's a step-by-step guide to get started:
          </p>

          <ol className="list-decimal list-inside space-y-5 text-gray-700 text-lg">
            <li>
              <strong className="text-gray-900">Find an Issue or Idea:</strong>
              <p className="ml-4 mt-1">
                Check our <a href="https://github.com/anup2702/build-on-coffee/issues" target="_blank" className="text-blue-600 hover:underline font-medium">GitHub Issues</a> for existing tasks. If you have a new idea, feel free to open a new issue to discuss it with the community.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Fork the Repository:</strong>
              <p className="ml-4 mt-1">
                Fork the <a href="https://github.com/anup2702/build-on-coffee" target="_blank" className="text-blue-600 hover:underline font-medium">BuildOnCoffee repository</a> to your own GitHub account. This creates a copy where you can make your changes.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Clone Your Fork:</strong>
              <p className="ml-4 mt-1">
                Clone your forked repository to your local machine using `git clone [your-fork-url]`.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Create a New Branch:</strong>
              <p className="ml-4 mt-1">
                Always work on a new branch for your contributions: `git checkout -b feature/your-feature-name` or `bugfix/your-bugfix-name`.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Make Your Changes:</strong>
              <p className="ml-4 mt-1">
                Implement your changes, whether it's code, documentation, design assets, or content. Ensure your code follows our <a href="#" className="text-blue-600 hover:underline font-medium">coding standards</a> (if any).
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Test Your Changes:</strong>
              <p className="ml-4 mt-1">
                Before submitting, thoroughly test your changes to ensure they work as expected and don't introduce new bugs.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Commit Your Changes:</strong>
              <p className="ml-4 mt-1">
                Commit your changes with clear and concise commit messages: `git commit -m "feat: Add new feature X"` or `fix: Resolve bug Y`.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Push to Your Fork:</strong>
              <p className="ml-4 mt-1">
                Push your changes to your forked repository on GitHub: `git push origin feature/your-feature-name`.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Open a Pull Request (PR):</strong>
              <p className="ml-4 mt-1">
                Go to the original BuildOnCoffee repository on GitHub and open a new Pull Request. Provide a detailed description of your changes and reference any related issues.
              </p>
            </li>
            <li>
              <strong className="text-gray-900">Review and Merge:</strong>
              <p className="ml-4 mt-1">
                Our team will review your PR. We might ask for changes or clarifications. Once approved, your contribution will be merged!
              </p>
            </li>
          </ol>
        </section>

        {/* Top Contributors Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-3">
            Our Top Contributors
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            A huge thank you to our most active and dedicated contributors! Your efforts make BuildOnCoffee better for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topContributors.map((contributor) => (
              <div
                key={contributor.id}
                className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-4"
              >
                <div className="flex-shrink-0">
                  {/* Placeholder for avatar */}
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-semibold text-xl">
                    {contributor.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    <a href={contributor.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {contributor.name}
                    </a>
                  </h3>
                  <p className="text-gray-600">Contributions: {contributor.contributions}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action for PR */}
        <section className="text-center bg-blue-50 p-8 rounded-lg shadow-inner border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-700 mb-6">
            Once you've completed your work, don't forget to raise a Pull Request on our GitHub repository!
          </p>
          <a
            href="https://github.com/anup2702/build-on-coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-white items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md shadow-lgtext-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition transform hover:scale-105"
          >
            Raise a Pull Request
            <svg className="ml-3 -mr-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.233.686-.507 0-.25-.011-1.05-.016-1.845-2.759.593-3.346-1.187-3.346-1.187-.452-1.152-1.107-1.459-1.107-1.459-.905-.618.069-.607.069-.607 1.002.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.332-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.7 1.028 1.596 1.028 2.688 0 3.845-2.339 4.681-4.569 4.935.359.308.678.919.678 1.852 0 1.335-.012 2.41-.012 2.727 0 .275.215.596.695.503C21.133 20.203 24 16.447 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  );
};

export default ContributePage;
