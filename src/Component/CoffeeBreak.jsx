import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Lightbulb } from "lucide-react";
import { challenges } from "../../data/challenges";

const CoffeeBreak = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredChallenge, setHoveredChallenge] = useState(null);
  const navigate = useNavigate();

  const handleChallengeClick = (challenge) => {
    if (challenge.external) {
      window.open(challenge.route, "_blank");
    } else if (challenge.route) {
      navigate(challenge.route);
    }
  };

  const updatedChallenges = [
    ...challenges,
    {
      id: "challenge-ideas",
      name: " challenge Ideas",
      description:
        " challenge Ideas for beginner, intermediate, and advanced developers to enhance their skills. ",
      icon: Lightbulb,
      route: "",
      color: "bg-yellow-500",
      borderColor: "border-yellow-200",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
      hoverColor: "group-hover:text-yellow-600",
      external: false,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
            ☕ Coffee Break Challenges
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Bite-sized coding challenges to sharpen your skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updatedChallenges.map((challenge, index) => {
              const Icon = challenge.icon || Lightbulb;
              return (
                <motion.div
                  key={challenge.id}
                  className={`group relative overflow-hidden rounded-2xl p-8 cursor-pointer border-2 ${challenge.borderColor || "border-gray-200"} ${challenge.bgColor || "bg-gray-50 dark:bg-slate-800"} hover:shadow-xl transition-all duration-300 card-hover`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredChallenge(challenge.id)}
                  onHoverEnd={() => setHoveredChallenge(null)}
                  onClick={() => handleChallengeClick(challenge)}
                >
                  <div className="flex justify-center mb-8">
                    <div className={`p-6 rounded-2xl ${challenge.color || "bg-blue-500"} shadow-lg`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3
                      className={`text-2xl font-black text-gray-900 dark:text-white mb-6 transition-colors duration-300 ${challenge.hoverColor || "group-hover:text-blue-600"}`}
                    >
                      {challenge.name || challenge.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                      {challenge.description}
                    </p>
                    <motion.button
                      className={`inline-flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${challenge.color || "bg-blue-500"} text-white hover:shadow-lg shadow-md`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <motion.div
                    className={`absolute inset-0 rounded-2xl ${challenge.color || "bg-blue-500"} opacity-0`}
                    initial={false}
                    animate={{
                      opacity: hoveredChallenge === challenge.id ? 0.05 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeBreak;
