import { projectsData } from "../../data/projectsData";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectGallery() {
    const floatingVariants = {
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="mx-auto py-16 px-10 text-center animate-fade-in dark:bg-gray-900 min-h-screen">
            <h2 className="text-5xl font-extrabold mb-6 text-gradient leading-normal">
                Explore Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projectsData.map((project, i) => (
                    <motion.div
                        key={i}
                        className="relative p-6 rounded-xl border transition-all duration-300 flex flex-col items-center justify-between h-full bg-white/80 border-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:border-blue-700 dark:hover:bg-gray-700"
                        whileHover={{ scale: 1.05, y: -2 }}
                        variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: i * 0.2 }}
                    >
                        <h3 className="text-xl font-black mb-2 text-gray-900 dark:text-white">
                            {project.name}
                        </h3>
                        <p className="text-sm font-medium text-center mb-4 text-gray-600 dark:text-gray-400">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm font-semibold mb-2 text-blue-600 dark:text-blue-400">
                            Difficulty: {project.difficulty}
                        </p>
                        <div className="flex justify-center space-x-6 text-gray-500 mt-3">
                            <a className="hover:text-teal-400 dark:hover:text-teal-400" href={project.github}>
                                <Github size={24} className="opacity=0.5" />

                            </a>
                            <a className="hover:text-blue-600 dark:hover:text-blue-400"  href={project.linkedin}>
                                <Linkedin size={24} className="opacity=0.5" />

                            </a>
                            <a className="hover:text-blue-600 dark:hover:text-green-400"  href={project.live}>
                                <ExternalLink size={24} className="opacity=0.5" />

                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <button className="bg-green-500 mt-5 font-bold p-2 rounded-lg cursor-pointer text-white">
                <a href="https://forms.gle/HyvM61KMqHLcthEXA">Add New Project
                </a></button>

        </section>
    );
}
