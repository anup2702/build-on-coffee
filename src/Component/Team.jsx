import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
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
      image: "https://via.placeholder.com/150", // placeholder
      linkedIn: "#",
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
      linkedIn:
        "https://www.linkedin.com/in/aansh-malhotra-a28423320/",
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
      linkedIn:
        "https://www.linkedin.com/in/sagar-chavan-a6937b194/",
    },
    {
      name: "Souvik Mukherjee",
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQG9JPLK2vS3PA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738065305869?e=1755439200&v=beta&t=wBsj9eFngV1AzxlUtj9LOS7SIBKcDpRYJAwuiyX-ahA",
      github: "https://github.com/SouvikMukherjee199",
      linkedIn: "https://www.linkedin.com/in/souvikmukherjee/",
    },
  ];

  const cardSizeClasses = "w-48 h-60"; // slightly taller for role text

  // Card component
  const TeamCard = ({ person, isContributor }) => (
    <motion.div
      key={person.name + (person.role || "")}
      whileHover={{ scale: 1.05 }}
      className={`rounded-lg shadow-lg overflow-hidden group relative border-2 border-transparent transition-all duration-300 ${
        isDark
          ? "bg-gray-800"
          : "bg-white"
      } ${cardSizeClasses}`}
    >
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-4 text-center">
        <h3
          className={`text-lg font-semibold bg-clip-text text-transparent mb-1 ${
            isDark
              ? "bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400"
              : "bg-gradient-to-r from-red-700 via-orange-500 to-amber-600"
          }`}
        >
          {person.name}
        </h3>
        {person.role && (
          <p
            className={`text-sm mb-2 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {person.role}
          </p>
        )}
        <div className="flex justify-center space-x-6 text-gray-500">
          {isContributor && person.github && (
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} GitHub`}
              className="hover:text-gray-700 dark:hover:text-teal-400"
            >
              <Github size={24} />
            </a>
          )}
          {person.linkedIn && (
            <a
              href={person.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} LinkedIn`}
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className={`min-h-screen py-10 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200"
          : "bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Main heading */}
        <h1
          className={`text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent ${
            isDark
              ? "bg-gradient-to-r from-red-800 via-red-900 to-red-950"
              : "bg-gradient-to-r from-red-900 via-red-800 to-rose-900"
          }`}
        >
          Meet Our Team BuildOnCoffee
        </h1>

        {/* Contributors */}
        <h1
          className={`text-4xl font-bold text-center mb-8 bg-clip-text text-transparent ${
            isDark
              ? "bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400"
              : "bg-gradient-to-r from-red-700 via-orange-500 to-amber-600"
          }`}
        >
          Contributors
        </h1>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 justify-center mb-16">
          {contributors.map((person) => (
            <TeamCard key={person.name} person={person} isContributor />
          ))}
        </div>

        {/* Interns */}
        <h1
          className={`text-4xl font-bold text-center mb-8 bg-clip-text text-transparent ${
            isDark
              ? "bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400"
              : "bg-gradient-to-r from-red-700 via-orange-500 to-amber-600"
          }`}
        >
          Interns
        </h1>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {interns.map((person) => (
            <TeamCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}
