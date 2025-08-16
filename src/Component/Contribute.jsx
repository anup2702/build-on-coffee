import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, Github, ArrowRight, GitBranch, Code, TestTube, GitCommit, GitPullRequest, Eye } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Find an Issue or Idea:",
    content:
      "Check our GitHub Issues for existing tasks. If you have a new idea, feel free to open a new issue to discuss it with the community.",
    link: "https://github.com/anup2702/build-on-coffee/issues",
    icon: Eye,
  },
  {
    step: 2,
    title: "Fork the Repository:",
    content:
      "Fork the BuildOnCoffee repository to your own GitHub account. This creates a copy where you can make your changes.",
    link: "https://github.com/anup2702/build-on-coffee",
    icon: GitBranch,
  },
  {
    step: 3,
    title: "Clone Your Fork:",
    content:
      "Clone your forked repository to your local machine using `git clone [your-fork-url]`.",
    icon: Code,
  },
  {
    step: 4,
    title: "Create a New Branch:",
    content:
      "Always work on a new branch for your contributions: `git checkout -b feature/your-feature-name` or `bugfix/your-bugfix-name`.",
    icon: GitBranch,
  },
  {
    step: 5,
    title: "Make Your Changes:",
    content:
      "Implement your changes, whether it's code, documentation, design assets, or content. Ensure your code follows our coding standards (if any).",
    icon: Code,
  },
  {
    step: 6,
    title: "Test Your Changes:",
    content:
      "Before submitting, thoroughly test your changes to ensure they work as expected and don't introduce new bugs.",
    icon: TestTube,
  },
  {
    step: 7,
    title: "Commit Your Changes:",
    content:
      'Commit your changes with clear and concise commit messages: `git commit -m "feat: Add new feature X"` or `fix: Resolve bug Y`.',
    icon: GitCommit,
  },
  {
    step: 8,
    title: "Push to Your Fork:",
    content:
      "Push your changes to your forked repository on GitHub: `git push origin feature/your-feature-name`.",
    icon: GitBranch,
  },
  {
    step: 9,
    title: "Open a Pull Request (PR):",
    content:
      "Go to the original BuildOnCoffee repository on GitHub and open a new Pull Request. Provide a detailed description of your changes and reference any related issues.",
    icon: GitPullRequest,
  },
  {
    step: 10,
    title: "Review and Merge:",
    content:
      "Our team will review your PR. We might ask for changes or clarifications. Once approved, your contribution will be merged!",
    icon: CheckCircle,
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
    <div className="min-h-screen py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
            <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Open Source</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white">
            Contribute to BuildOnCoffee
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Join our community of developers and help us build the future of developer tools and resources.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* How to Contribute */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                How You Can Contribute
              </h2>
            </div>

            <div className="space-y-4">
              {steps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative cursor-pointer"
                    onClick={() => toggleContent(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                      <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
                          {item.title}
                        </h3>
                        {openIndex === index && (
                          <motion.div
                            className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.link ? (
                              <>
                                {item.content
                                  .split(/(GitHub Issues|BuildOnCoffee repository)/)
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
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Top Contributors */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                Our Top Contributors
              </h2>
            </div>

            <div className="space-y-4">
              {contributors.map((contributor, index) => (
                <motion.div
                  key={contributor.id}
                  className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={contributor.avatarUrl}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-2xl shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {contributor.name}
                      </h3>
                      <p className="text-sm text-emerald-600 font-medium dark:text-emerald-400">
                        {contributor.contributions} Contributions
                      </p>
                    </div>
                  </div>
                  <a
                    href={contributor.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    View Profile
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative bg-blue-50 dark:bg-blue-900/20 p-12 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                Ready to Make a Difference?
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Once you've completed your work, don't forget to raise a Pull Request on our GitHub repository!
            </p>
            <a
              href="https://github.com/anup2702/build-on-coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl group"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Raise a Pull Request</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContributePage;
