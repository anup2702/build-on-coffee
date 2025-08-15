import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Users, Award } from "lucide-react";
import { useTheme } from "./context/ThemeContext";

export default function Team() {
  const { isDark } = useTheme();

  const interns = [
    {
      name: "Agrita Sofia",
      role: "Graphic Designer Intern",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQH4jZRvs_kkAw/profile-displayphoto-crop_800_800/B4DZfLPVHfGUAQ-/0/1751461483942?e=1757548800&v=beta&t=PiwPpoGV-GHNvKTLUk0QiQsPo1KojkO7V1JtSWze1EM",
      linkedIn: "https://www.linkedin.com/in/agritsasofia/",
    },
    {
      name: "Apekshaa Yadav",
      role: "Graphic Designer Intern",
      image: "apeksha.jpg",
      linkedIn: "https://www.linkedin.com/in/apekshaa-yadav-80a093350",
    },
  ];

  const contributors = [
    {
      name: "Anup Kumar",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEf08fzs5zY1A/profile-displayphoto-shrink_800_800/B56ZVeYqyUHEAc-/0/1741045283255?e=1757548800&v=beta&t=DwUQ_TmsG5ur-iXCZxSNW8CAQcSsKtsjpLYDvwZijEs",
      github: "https://github.com/anup2702",
      linkedIn: "https://www.linkedin.com/in/anup001/",
    },
    {
      name: "Akshay Kumar",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQH0WmRigmV2OQ/profile-displayphoto-shrink_800_800/B56ZfL5mkeH8Ak-/0/1751472567182?e=1757548800&v=beta&t=tDIV-jrcojX7Mc6K-iOMY_d2QQMcOg8FFtzMEqRIMvA",
      github: "https://github.com/akshay0611",
      linkedIn: "https://www.linkedin.com/in/akshaykumar0611/",
    },
    {
      name: "Harshita Gupta",
      image: "https://avatars.githubusercontent.com/u/110281535?v=4",
      github: "https://github.com/hershiee",
      linkedIn: "#",
    },
    {
      name: "Aansh Malhotra",
      image: "https://avatars.githubusercontent.com/u/178574389?v=4",
      github: "https://github.com/21aansh06",
      linkedIn: "https://www.linkedin.com/in/aansh-malhotra-a28423320/",
    },
    {
      name: "Avantika",
      image: "https://avatars.githubusercontent.com/u/144206149?v=4",
      github: "https://github.com/Avanti2023",
      linkedIn: "#",
    },
    {
      name: "Sagar Chavan",
      image: "https://avatars.githubusercontent.com/u/134862057?v=4",
      github: "https://github.com/sagarc123",
      linkedIn: "https://www.linkedin.com/in/sagar-chavan-a6937b194/",
    },
    {
      name: "Souvik Mukherjee",
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQG9JPLK2vS3PA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738065305869?e=1755439200&v=beta&t=wBsj9eFngV1AzxlUtj9LOS7SIBKcDpRYJAwuiyX-ahA",
      github: "https://github.com/SouvikMukherjee199",
      linkedIn: "https://www.linkedin.com/in/souvikmukherjee/",
    },
  ];

  const TeamCard = ({ person, isContributor }) => (
    <motion.div
      key={person.name + (person.role || "")}
      whileHover={{ scale: 1.05, y: -8 }}
      className={`flex flex-col items-center text-center rounded-2xl shadow-lg p-6 transition-all duration-300 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:shadow-xl`}
    >
      <div className="relative mb-4">
        <img
          src={person.image}
          alt={person.name}
          className="w-20 h-20 rounded-2xl object-cover shadow-md"
        />
        {isContributor && (
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            Core
          </div>
        )}
      </div>
      <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
        {person.name}
      </h3>
      {person.role && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
          {person.role}
        </p>
      )}
      <div className="flex gap-3 justify-center">
        {isContributor && person.github && (
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} GitHub`}
            className="p-2 bg-gray-100 dark:bg-slate-700 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300"
          >
            <Github size={18} className="text-gray-600 dark:text-gray-400" />
          </a>
        )}
        {person.linkedIn && (
          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} LinkedIn`}
            className="p-2 bg-gray-100 dark:bg-slate-700 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300"
          >
            <Linkedin size={18} className="text-gray-600 dark:text-gray-400" />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
            <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Our Amazing Team</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white">
            Meet Team BuildOnCoffee
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            A passionate group of developers, designers, and creators working together to build the future of developer tools and resources.
          </p>
        </motion.div>

        {/* Contributors */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 px-6 py-3 rounded-full mb-6 border border-emerald-200 dark:border-emerald-800">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">Core Contributors</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
              Contributors
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {contributors.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <TeamCard person={person} isContributor />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-orange-50 dark:bg-orange-900/20 px-6 py-3 rounded-full mb-6 border border-orange-200 dark:border-orange-800">
              <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-semibold text-orange-800 dark:text-orange-200">Growing Talent</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
              Interns
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {interns.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <TeamCard person={person} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
