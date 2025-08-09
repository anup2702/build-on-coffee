import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

export default function Team() {
  const [view, setView] = useState("contributors"); // Default to contributors

  const interns = [
    {
      name: "Agrita Sofia",
      role: "Graphic Designer Intern",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQH4jZRvs_kkAw/profile-displayphoto-crop_800_800/B4DZfLPVHfGUAQ-/0/1751461483942?e=1757548800&v=beta&t=PiwPpoGV-GHNvKTLUk0QiQsPo1KojkO7V1JtSWze1EM",
      linkedIn: "https://www.linkedin.com/in/agritsasofia/",
    },
  ];

  const contributors = [
    { name: "Anup Kumar", skill: "Full Stack Developer", image: "https://avatars.githubusercontent.com/u/97333000?v=4", github: "https://github.com/anup2702" },
    { name: "Akshay Kumar", skill: "AI, Machine Learning, and Cybersecurity", image: "https://avatars.githubusercontent.com/u/82256067?v=4", github: "https://github.com/akshay0611" },
    { name: "Harshita Gupta", skill: "Backend Developer", image: "https://avatars.githubusercontent.com/u/110281535?v=4", github: "https://github.com/hershiee" },
    { name: "Aansh Malhotra", skill: "Full Stack Developer", image: "https://avatars.githubusercontent.com/u/178574389?v=4", github: "https://github.com/21aansh06" },
    { name: "Avantika", skill: "Fresher Software Engineer", image: "https://avatars.githubusercontent.com/u/144206149?v=4", github: "https://github.com/Avanti2023" },
    { name: "Sagar Chavan", skill: "AI and Machine Learning Enthusiast", image: "https://avatars.githubusercontent.com/u/134862057?v=4", github: "https://github.com/sagarc123" },
    { name: "Souvik Mukherjee", skill: "Full Stack Developer", image: "https://avatars.githubusercontent.com/u/129358938?v=4", github: "https://github.com/SouvikMukherjee199" },
  ];

  const data = view === "interns" ? interns : contributors;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-700 via-orange-500 to-amber-600 bg-clip-text text-transparent">
          Meet the {view === "interns" ? "Interns" : "Contributors"}
        </h1>

        {/* Toggle buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setView("interns")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 
              ${view === "interns"
                ? "bg-gradient-to-r from-red-700 via-orange-500 to-amber-600 text-white shadow-lg"
                : "bg-white text-red-700 border border-red-300 hover:bg-orange-100"}`}
          >
            Interns
          </button>
          <button
            onClick={() => setView("contributors")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 
              ${view === "contributors"
                ? "bg-gradient-to-r from-red-700 via-orange-500 to-amber-600 text-white shadow-lg"
                : "bg-white text-red-700 border border-red-300 hover:bg-orange-100"}`}
          >
            Contributors
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((person) => {
            const link = view === "interns" ? person.linkedIn : person.github;
            return (
              <a
                key={person.name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group relative border-2 border-transparent hover:border-gradient-to-r hover:from-red-700 hover:via-orange-500 hover:to-amber-600 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={person.image}
                      alt={`${person.name} - ${view === "interns" ? person.role : person.skill}`}
                      className="w-full h-64 object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition z-10">
                      {view === "interns" ? (
                        <Linkedin size={40} className="text-white" />
                      ) : (
                        <Github size={40} className="text-white" />
                      )}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-red-700 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                      {person.name}
                    </h3>
                    <p className="text-red-700">
                      {view === "interns" ? person.role : person.skill}
                    </p>
                  </div>
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
