// components/PortfolioSpotlight.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contributors = [
  {
    name: "Anup Kumar",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEf08fzs5zY1A/profile-displayphoto-shrink_800_800/B56ZVeYqyUHEAc-/0/1741045283255?e=1757548800&v=beta&t=DwUQ_TmsG5ur-iXCZxSNW8CAQcSsKtsjpLYDvwZijEs",
    github: "https://github.com/anup2702",
    linkedIn: "https://www.linkedin.com/in/anup001/",
    bio: "Full-Stack Developer | Building sleek & scalable apps",
    portfolioLink: "https://snapfolio.example.com/anup2702",
    portfolioScreenshot:
      "https://img.freepik.com/free-vector/letter-w-logo-ring-wedding-logo-business-branding-template-designs-inspiration-isolated-white-background_384344-1313.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Akshay Kumar",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH0WmRigmV2OQ/profile-displayphoto-shrink_800_800/B56ZfL5mkeH8Ak-/0/1751472567182?e=1757548800&v=beta&t=tDIV-jrcojX7Mc6K-iOMY_d2QQMcOg8FFtzMEqRIMvA",
    github: "https://github.com/akshay0611",
    linkedIn: "https://www.linkedin.com/in/akshaykumar0611/",
    bio: "Passionate about AI & Web Development",
    portfolioLink: "https://snapfolio.example.com/akshay0611",
    portfolioScreenshot:
      "https://img.freepik.com/free-vector/letter-w-logo-ring-wedding-logo-business-branding-template-designs-inspiration-isolated-white-background_384344-1313.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Harshita Gupta",
    image: "https://avatars.githubusercontent.com/u/110281535?v=4",
    github: "https://github.com/hershiee",
    linkedIn: "#",
    bio: "Frontend Developer | Love building UI/UX",
    portfolioLink: "https://snapfolio.example.com/hershiee",
    portfolioScreenshot:
      "https://img.freepik.com/free-vector/letter-w-logo-ring-wedding-logo-business-branding-template-designs-inspiration-isolated-white-background_384344-1313.jpg?semt=ais_hybrid&w=740",
  },
];

// ✅ Helper function: calculate current week
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 dark:bg-slate-800/80 rounded-2xl p-10 border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
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

          {/* Portfolio Screenshot */}
          <motion.div
            className="relative rounded-xl overflow-hidden px-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={spotlightUser.portfolioScreenshot}
              alt="Portfolio Screenshot"
              className="w-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSpotlight;