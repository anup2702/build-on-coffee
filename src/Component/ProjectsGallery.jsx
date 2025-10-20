/**
 * ProjectsGallery Component
 * 
 * Displays all approved projects from Supabase
 * Includes "Add New Project" button that opens form for authenticated users
 * 
 * @component
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/useAuth";
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  LayoutGrid, 
  Star, 
  Users,
  Plus,
  Heart,
  Eye 
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsGallery() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  
  // State management
  const [supabaseProjects, setSupabaseProjects] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [userLikes, setUserLikes] = useState(new Set());

  /**
   * Fetch approved projects from Supabase
   */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('is_published', true)
          .eq('status', 'approved')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching projects:', error);
          return;
        }

        setSupabaseProjects(data || []);
      } catch (err) {
        console.error('Error in fetchProjects:', err);
      } finally {
        setIsLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

  /**
   * Fetch user's likes if authenticated
   */
  useEffect(() => {
    const fetchUserLikes = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('project_likes')
          .select('project_id')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching user likes:', error);
          return;
        }

        const likedProjectIds = new Set(data.map(like => like.project_id));
        setUserLikes(likedProjectIds);
      } catch (err) {
        console.error('Error in fetchUserLikes:', err);
      }
    };

    fetchUserLikes();
  }, [user]);

  /**
   * Handle like/unlike project
   */
  const handleToggleLike = async (projectId) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    try {
      const { data, error } = await supabase
        .rpc('toggle_project_like', {
          project_uuid: projectId,
          user_uuid: user.id
        });

      if (error) {
        console.error('Error toggling like:', error);
        return;
      }

      // Update local state
      setUserLikes(prev => {
        const newLikes = new Set(prev);
        if (data) {
          newLikes.add(projectId);
        } else {
          newLikes.delete(projectId);
        }
        return newLikes;
      });

      // Update project likes count in local state
      setSupabaseProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            likes_count: data ? project.likes_count + 1 : project.likes_count - 1
          };
        }
        return project;
      }));
    } catch (err) {
      console.error('Error in handleToggleLike:', err);
    }
  };

  /**
   * Handle add new project button click
   */
  const handleAddProject = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/projects/add');
    }
  };

  // Combine static and Supabase projects
  const allProjects = [...supabaseProjects, ...projectsData];

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

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <LayoutGrid className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
              {isLoadingProjects ? '...' : allProjects.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Total Projects
            </div>
          </div>
          <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <Star className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
              Community
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Driven
            </div>
          </div>
          <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
            <Users className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
              Open
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Source
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoadingProjects && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoadingProjects && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {allProjects.map((project, i) => {
              const isSupabaseProject = project.user_id !== undefined;
              const isLiked = userLikes.has(project.id);

              return (
                <motion.div 
                  key={project.id || i} 
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-xl" 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }} 
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Project Image (if available) */}
                  {isSupabaseProject && project.image_url && (
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <img 
                        src={project.image_url} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  <h3 className="text-2xl font-black mb-4 text-center text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {isSupabaseProject ? project.title : project.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies/Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {(isSupabaseProject ? project.technologies : project.tags)?.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-sm font-semibold bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Difficulty & Category */}
                  <div className="flex justify-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                      <Star className="w-4 h-4" />
                      {isSupabaseProject ? project.difficulty_level : project.difficulty}
                    </span>
                    {isSupabaseProject && project.category && (
                      <span className="inline-flex items-center px-3 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold border border-purple-200 dark:border-purple-800">
                        {project.category}
                      </span>
                    )}
                  </div>

                  {/* Links and Actions */}
                  <div className="flex justify-center gap-4 mb-4">
                    {(isSupabaseProject ? project.github_url : project.github) && (
                      <a 
                        className="p-3 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-slate-600 group/link" 
                        href={isSupabaseProject ? project.github_url : project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                      </a>
                    )}

                    {!isSupabaseProject && project.linkedin && (
                      <a 
                        className="p-3 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-slate-600 group/link" 
                        href={project.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                      </a>
                    )}

                    {(isSupabaseProject ? project.live_demo_url : project.live) && (
                      <a 
                        className="p-3 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-slate-600 group/link" 
                        href={isSupabaseProject ? project.live_demo_url : project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                      </a>
                    )}
                  </div>

                  {/* Stats and Like Button (only for Supabase projects) */}
                  {isSupabaseProject && (
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {project.views_count || 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {project.likes_count || 0}
                        </span>
                      </div>
                      <button
                        onClick={() => handleToggleLike(project.id)}
                        className={`p-2 rounded-lg transition-all ${
                          isLiked 
                            ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400' 
                            : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600'
                        }`}
                        title={isLiked ? 'Unlike' : 'Like'}
                      >
                        <Heart 
                          className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} 
                        />
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Add Project CTA */}
        <motion.div 
          className="text-center mt-20" 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gray-50 dark:bg-slate-800/50 p-12 rounded-2xl border border-gray-200 dark:border-slate-700">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
              Have a Project to Share?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Showcase your creative builds and inspire others in the community. Share your projects and get feedback from fellow developers.
            </p>
            <button
              onClick={handleAddProject}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Project</span>
              <LayoutGrid className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            {!isAuthenticated && (
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Login required to submit projects
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}