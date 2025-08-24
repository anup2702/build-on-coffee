// components/PortfolioSpotlight.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contributors = [
  {
    name: "Sanika Satappa Patil",
    image: "https://avatars.githubusercontent.com/u/176334299?v=4",
    github: "https://github.com/Sanika-Patil27",
    linkedIn: "https://www.linkedin.com/in/sanika-patil-b96144252",
    bio: "Full-Stack Developer, Data Analyst",
    portfolioLink: "https://github.com/Sanika-Patil27/Portfolio",
    portfolioScreenshot:
      "https://img.freepik.com/free-vector/letter-w-logo-ring-wedding-logo-business-branding-template-designs-inspiration-isolated-white-background_384344-1313.jpg?semt=ais_hybrid&w=740",
    projects: [
      {
        name: "Breast Cancer Prediction",
        description:
          "Developed a web app for early breast cancer detection using ML, implementing probability-based predictions to classify tumors as benign or malignant accurately",
        github: "https://github.com/Sanika-Patil27/Breast-Cancer-Detection",
        liveLink: "https://breast-cancer-detection-tamz2wkkldjo4ue7g6sxpw.streamlit.app/",
      },
    ],
  },
];

// Helper function: calculate current week
function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor((now - start) / (24 * 60 * 60 * 1000));
  return Math.floor(days / 7);
}

const PortfolioSpotlight = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const weekNumber = getWeekNumber();
  const spotlightUser = contributors[weekNumber % contributors.length];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Portfolio Spotlight
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Every week we showcase an outstanding developer portfolio from our
            community. Here’s this week’s highlight ✨
          </p>
        </motion.div>

        {/* Spotlight Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white/80 dark:bg-slate-800/80 rounded-2xl p-10 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Profile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left py-10">
            <img
              src={spotlightUser.image}
              alt={spotlightUser.name}
              className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-md mb-6 object-cover"
            />
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
              {spotlightUser.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {spotlightUser.bio}
            </p>
            <div className="flex gap-4">
              <a
                href={spotlightUser.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-white font-semibold rounded-lg shadow-md transition bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                View Portfolio
              </a>
              <a
                href={spotlightUser.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-8 h-8"
                />
              </a>
              <a
                href={spotlightUser.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <motion.div
            className="relative rounded-xl overflow-hidden px-5 space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {spotlightUser.projects && spotlightUser.projects.length > 0 ? (
              spotlightUser.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-md"
                >
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                          alt="GitHub"
                          className="w-8 h-8"
                        />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/841/841364.png"
                          alt="Live Project"
                          className="w-8 h-8"
                        />
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <a
                href={spotlightUser.portfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <img
                  src={
                    spotlightUser.portfolioScreenshot ||
                    "https://via.placeholder.com/600x400?text=Portfolio+Preview"
                  }
                  alt={`${spotlightUser.name} Portfolio`}
                  className="w-full object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSpotlight;
