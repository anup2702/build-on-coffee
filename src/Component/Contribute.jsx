import { useState , useEffect} from "react";

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
const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/anup2702/build-on-coffee/contributors")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .map((c, index) => ({
            id: index + 1,
            name: c.login,
            profileUrl: c.html_url,
            contributions: c.contributions,
            avatarUrl: c.avatar_url,
          }))
          .sort((a, b) => b.contributions - a.contributions)
          .slice(0, 7);
        setContributors(sorted);
      })
      .catch((err) => console.error("GitHub API Error:", err));
  }, []);


  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:bg-none">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-white/20 dark:bg-gray-900/90 dark:border-gray-800">
        {/* Page Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4 dark:bg-gradient-to-r dark:text-white">
            Contribute to BuildOnCoffee
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full dark:bg-gradient-to-r dark:from-blue-400 dark:to-indigo-500"></div>
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
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-indigo-200">
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
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors dark:text-white dark:group-hover:text-blue-300">
                        {item.title}
                      </h3>
                      {openIndex === index && (
                        <div className="text-sm text-gray-700 mt-2 dark:text-gray-200">
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
                                      className="text-blue-600 hover:text-blue-800 underline font-medium dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                      GitHub Issues
                                    </a>
                                  ) : text === "BuildOnCoffee repository" ? (
                                    <a
                                      key={idx}
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 underline font-medium dark:text-blue-400 dark:hover:text-blue-300"
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
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-indigo-200">
                Our Top Contributors
              </h2>
            </div>

          <div className="grid gap-4 mt-6">
  {contributors.map((contributor) => (
    <div
      key={contributor.id}
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 hover:border-blue-200 dark:bg-gray-900 dark:border-gray-700"
    >
      <div className="flex items-center space-x-4">
        <img
          src={contributor.avatarUrl}
          alt={contributor.name}
          className="w-12 h-12 rounded-full shadow-lg"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {contributor.name}
          </h3>
          <p className="text-sm text-blue-800 font-medium dark:text-blue-300">
            {contributor.contributions} Contributions
          </p>
        </div>
      </div>
      <a
        href={contributor.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        View Profile
      </a>
    </div>
  ))}
</div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16"></div>

            {/* Call to Action */}
            <div className="relative overflow-hidden absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-10 rounded-2xl"></div>
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
    </div>
  );
};

export default ContributePage;

// {
//   /* Call to Action */
// }
// <section className="relative overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-10 rounded-2xl"></div>
//   <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-10 rounded-2xl shadow-inner border border-blue-200 text-center">
//     <div className="mb-6">
//       <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13 10V3L4 14h7v7l9-11h-7z"
//           />
//         </svg>
//       </div>
//       <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
//         Ready to Make a Difference?
//       </h2>
//     </div>
//     <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
//       Once you've completed your work, don't forget to raise a Pull Request on
//       our GitHub repository!
//     </p>
//     <a
//       href="https://github.com/anup2702/build-on-coffee"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-gray-900 to-black text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700"
//     >
//       Raise a Pull Request
//       <svg
//         className="ml-3 -mr-1 h-6 w-6"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//       >
//         <path
//           fillRule="evenodd"
//           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.686-.233.686-.507 0-.25-.011-1.05-.016-1.845-2.759.593-3.346-1.187-3.346-1.187-.452-1.152-1.107-1.459-1.107-1.459-.905-.618.069-.607.069-.607 1.002.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.332-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.7 1.028 1.596 1.028 2.688 0 3.845-2.339 4.681-4.569 4.935.359.308.678.919.678 1.852 0 1.335-.012 2.41-.012 2.727 0 .275.215.596.695.503C21.133 20.203 24 16.447 24 12.017 24 6.484 19.522 2 14 2h-2z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </a>
//   </div>
// </section>;
