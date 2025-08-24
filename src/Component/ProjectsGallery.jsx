import { useState, useEffect } from "react";
import { projectsData } from "../../data/projectsData";
import { Github, Linkedin, ExternalLink, LayoutGrid, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

// Helper: Load & Save reviews in localStorage
const loadReviews = () => JSON.parse(localStorage.getItem("reviews") || "{}");
const saveReviews = (data) => localStorage.setItem("reviews", JSON.stringify(data));

export default function ProjectGallery() {
    const [reviews, setReviews] = useState({});
    const [feedbackText, setFeedbackText] = useState({});

    useEffect(() => {
        setReviews(loadReviews());
    }, []);

    const handleAddReview = (projectId, feedback) => {
        if (!feedback.trim()) return; // ignore empty feedback
        const updated = { ...reviews };
        if (!updated[projectId]) updated[projectId] = [];
        updated[projectId].push({ rating: 5, feedback });
        setReviews(updated);
        saveReviews(updated);
        // Clear only this project's textarea
        setFeedbackText(prev => ({ ...prev, [projectId]: "" }));
    };

    return (
        <div className="min-h-screen py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* ======= Page Header ======= */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
                        <LayoutGrid className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                            Creative Builds
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white">
                        Explore Projects
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover amazing projects built by our community. Get inspired and showcase your own creative builds.
                    </p>
                </motion.div>

                {/* ======= Stats Section ======= */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                        <LayoutGrid className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                        <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                            {projectsData.length}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Total Projects</div>
                    </div>
                    <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                        <Star className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                        <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">Community</div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Driven</div>
                    </div>
                    <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
                        <Users className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                        <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">Open</div>
                        <div className="text-gray-600 dark:text-gray-300 font-medium">Source</div>
                    </div>
                </motion.div>

                {/* ======= Projects Grid ======= */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {projectsData.map((project, i) => {
                        const projectReviews = reviews[project.id] || [];
                        const avgRating =
                            projectReviews.length > 0
                                ? (
                                    projectReviews.reduce((acc, r) => acc + r.rating, 0) /
                                    projectReviews.length
                                ).toFixed(1)
                                : null;

                        return (
                            <motion.div
                                key={i}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-xl"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                {/* Project Title */}
                                <h3 className="text-2xl font-black mb-4 text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.name}
                                </h3>

                                {/* Project Description */}
                                <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm font-semibold bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Difficulty */}
                                <div className="text-center mb-6">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                                        <Star className="w-4 h-4" />
                                        Difficulty: {project.difficulty}
                                    </span>
                                </div>
                                {/* Review Info */}
                                <div className="text-center mb-4">
                                    {avgRating ? (
                                        <p className="text-sm text-gray-700 dark:text-gray-300">
                                            ⭐ {avgRating}/5 ({projectReviews.length} reviews)
                                        </p>
                                    ) : (
                                        <p className="text-sm text-gray-500">No rating yet</p>
                                    )}
                                </div>
                                {/* Review Project Button (Google Form) */}
                                <div className="flex justify-center mb-4">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfjdGStv4XwFDAp24W3gBEL2-b-kZnN1dDBrzkOX_dPyka4aw/viewform?usp=sharing&ouid=101737463918265922632" // replace with your actual form link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold"
                                    >
                                        Review Project
                                    </a>
                                </div>


                                <div className="flex flex-col items-center mb-4">
                                    <textarea
                                        className="w-full p-3 border rounded-lg mb-2 text-gray-900 dark:text-gray-200 dark:bg-slate-700 border-gray-300 dark:border-slate-600"
                                        placeholder="Write your feedback (optional)"
                                        value={feedbackText[project.id] || ""} // <-- unique for each project
                                        onChange={(e) =>
                                            setFeedbackText(prev => ({ ...prev, [project.id]: e.target.value })) // <-- update only this project
                                        }
                                        rows={3}
                                    />
                                    <button
                                        onClick={() => {
                                            const feedback = feedbackText[project.id] || "";
                                            if (!feedback.trim()) return; // ignore empty feedback
                                            handleAddReview(project.id, feedback);
                                            // Clear only this project's textarea
                                            setFeedbackText(prev => ({ ...prev, [project.id]: "" }));
                                        }}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold"
                                    >
                                        Submit Review
                                    </button>
                                </div>

                                {/* Sample / Latest Reviews */}
                                <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-200">
                                    {projectReviews.length > 0 ? (
                                        <>
                                            <p className="font-semibold mb-1">Latest Review:</p>
                                            <p className="italic">
                                                "{projectReviews[projectReviews.length - 1].feedback}"
                                            </p>
                                        </>
                                    ) : (
                                        <p className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-200">No reviews yet</p>
                                    )}
                                </div>


                                {/* Social Links */}
                                <div className="flex justify-center gap-4 mt-6">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-slate-600 group/link">
                                        <Github size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                                    </a>
                                    <a href={project.linkedin} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-slate-600 group/link">
                                        <Linkedin size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-slate-600 group/link">
                                        <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                                    </a>
                                 </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
