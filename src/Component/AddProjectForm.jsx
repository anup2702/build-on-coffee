/**
 * AddProjectForm Component
 * 
 * Form for authenticated users to submit their projects
 * Stores data in Supabase database
 * 
 * @component
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Save, 
  X, 
  Upload, 
  Link as LinkIcon, 
  Code, 
  Image as ImageIcon,
  AlertCircle,
  CheckCircle 
} from "lucide-react";
import { useAuth } from "../lib/useAuth";
import { supabase } from "../lib/supabase";

// Available categories
const PROJECT_CATEGORIES = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Blockchain",
  "Game Development",
  "Desktop Application",
  "API/Backend",
  "UI/UX Design",
  "Other",
];

// Difficulty levels
const DIFFICULTY_LEVELS = ["Beginner", "Intermediate", "Advanced"];

// Common technologies (for autocomplete/suggestions)
const COMMON_TECHNOLOGIES = [
  "React", "Vue", "Angular", "Next.js", "Node.js", "Express",
  "Python", "Django", "Flask", "FastAPI", "Java", "Spring Boot",
  "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase",
  "Docker", "Kubernetes", "AWS", "Azure", "GCP",
  "TensorFlow", "PyTorch", "Scikit-learn", "Pandas",
  "React Native", "Flutter", "Swift", "Kotlin",
  "Git", "GitHub", "GitLab", "CI/CD",
];

const AddProjectForm = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    difficultyLevel: "",
    githubUrl: "",
    liveDemoUrl: "",
    imageUrl: "",
    technologies: [],
  });

  // UI state
  const [techInput, setTechInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /**
   * Redirect if not authenticated
   */
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  /**
   * Handle input changes
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error on input change
  };

  /**
   * Add technology tag
   */
  const handleAddTechnology = (event) => {
    if (event.key === "Enter" && techInput.trim()) {
      event.preventDefault();
      
      if (!formData.technologies.includes(techInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          technologies: [...prev.technologies, techInput.trim()],
        }));
      }
      setTechInput("");
    }
  };

  /**
   * Remove technology tag
   */
  const handleRemoveTechnology = (techToRemove) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((tech) => tech !== techToRemove),
    }));
  };

  /**
   * Add technology from suggestions
   */
  const handleAddSuggestedTech = (tech) => {
    if (!formData.technologies.includes(tech)) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, tech],
      }));
    }
  };

  /**
   * Validate form data
   */
  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Project title is required");
      return false;
    }
    if (formData.title.length < 5) {
      setError("Project title must be at least 5 characters");
      return false;
    }
    if (!formData.description.trim()) {
      setError("Project description is required");
      return false;
    }
    if (formData.description.length < 50) {
      setError("Project description must be at least 50 characters");
      return false;
    }
    if (!formData.category) {
      setError("Please select a category");
      return false;
    }
    if (!formData.difficultyLevel) {
      setError("Please select a difficulty level");
      return false;
    }
    if (formData.technologies.length === 0) {
      setError("Please add at least one technology");
      return false;
    }
    
    // Validate URLs if provided
    if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
      setError("GitHub URL is not valid");
      return false;
    }
    if (formData.liveDemoUrl && !isValidUrl(formData.liveDemoUrl)) {
      setError("Live demo URL is not valid");
      return false;
    }
    if (formData.imageUrl && !isValidUrl(formData.imageUrl)) {
      setError("Image URL is not valid");
      return false;
    }

    return true;
  };

  /**
   * Check if URL is valid
   */
  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Supabase
      const projectData = {
        user_id: user.id,
        title: formData.title.trim(),
        description: formData.description.trim(),
        category: formData.category,
        difficulty_level: formData.difficultyLevel,
        github_url: formData.githubUrl.trim() || null,
        live_demo_url: formData.liveDemoUrl.trim() || null,
        image_url: formData.imageUrl.trim() || null,
        technologies: formData.technologies,
        status: "pending", // Admin approval required
        is_published: false, // Not published until approved
      };

      // Insert into Supabase
      const { data, error: insertError } = await supabase
        .from("projects")
        .insert([projectData])
        .select();

      if (insertError) {
        throw insertError;
      }

      console.log("Project submitted successfully:", data);
      setSuccess(true);

      // Redirect to projects page after 2 seconds
      setTimeout(() => {
        navigate("/projects");
      }, 2000);
    } catch (err) {
      console.error("Error submitting project:", err);
      setError(err.message || "Failed to submit project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handle cancel
   */
  const handleCancel = () => {
    navigate("/projects");
  };

  // Show success message
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4">
        <motion.div
          className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Project Submitted!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your project has been submitted for review. You'll be notified once it's approved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Redirecting to projects page...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Submit Your Project
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Share your work with the community
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          {/* Project Title */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Project Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="My Awesome Project"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your project, its features, and what problem it solves..."
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Minimum 50 characters ({formData.description.length}/50)
            </p>
          </div>

          {/* Category and Difficulty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                {PROJECT_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Difficulty Level *
              </label>
              <select
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select difficulty</option>
                {DIFFICULTY_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* GitHub URL */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              <LinkIcon className="w-4 h-4 inline mr-1" />
              GitHub Repository URL
            </label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleInputChange}
              placeholder="https://github.com/username/project"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Live Demo URL */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              <Code className="w-4 h-4 inline mr-1" />
              Live Demo URL
            </label>
            <input
              type="url"
              name="liveDemoUrl"
              value={formData.liveDemoUrl}
              onChange={handleInputChange}
              placeholder="https://your-project.vercel.app"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              <ImageIcon className="w-4 h-4 inline mr-1" />
              Project Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="https://your-image-url.com/image.png"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Tip: Upload to Cloudinary, Imgur, or use your GitHub repo image
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Technologies Used *
            </label>
            
            {/* Tech Input */}
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyPress={handleAddTechnology}
              placeholder="Type a technology and press Enter"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            />

            {/* Added Technologies */}
            {formData.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTechnology(tech)}
                      className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Suggested Technologies */}
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Quick add:
              </p>
              <div className="flex flex-wrap gap-2">
                {COMMON_TECHNOLOGIES.filter(
                  (tech) => !formData.technologies.includes(tech)
                ).slice(0, 10).map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => handleAddSuggestedTech(tech)}
                    className="px-3 py-1 text-xs border border-gray-300 dark:border-slate-600 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    + {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Submit Project
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="px-6 py-3 border border-gray-300 dark:border-slate-600 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>

          {/* Info Note */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> Your project will be reviewed before being published. 
              You can view all your submissions in your profile page.
            </p>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default AddProjectForm;