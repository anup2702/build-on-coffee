/**
 * Profile Component
 * 
 * Displays user profile information including:
 * - User details and avatar
 * - Earned quiz badges with sharing functionality
 * - Submitted projects (NEW)
 * - Contribution statistics
 * - Bookmarked courses
 * - Favorite tools
 * 
 * Features:
 * - Fetches badges from Supabase
 * - Fetches user's submitted projects from Supabase
 * - Badge sharing via BadgeShareModal
 * - Responsive design with dark mode support
 * - Empty states for no badges/projects
 * 
 * @component
 */

import React, { useState, useEffect } from 'react';
import { 
  User, 
  GitPullRequest, 
  AlertCircle, 
  GitCommit, 
  BookOpen, 
  Wrench, 
  Award, 
  Share2,
  LayoutGrid,
  Github,
  ExternalLink,
  Eye,
  Heart,
  Clock,
  Trash2,
  Edit
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import BadgeShareModal from './BadgeShareModal';
import { useAuth } from '../lib/useAuth';

// Constants
const BADGE_COLOR_PALETTE = {
  JavaScript: ['#F7DF1E', '#F0DB4F'],
  React: ['#61DAFB', '#5AC8FA'],
  'Node.js': ['#68A063', '#87C462'],
  CSS: ['#264de4', '#2965f1'],
  HTML: ['#e34c26', '#f06529'],
  DSA: ['#4A90E2', '#5CA3E5'],
  TypeScript: ['#3178C6', '#4B92D4'],
  Python: ['#3776AB', '#4B8BBE'],
  Java: ['#007396', '#0094CC'],
  Database: ['#8E44AD', '#A569BD'],
  default: ['#667EEA', '#764BA2'],
};

const Profile = () => {
  const navigate = useNavigate();
  // Authentication hook
  const { user, logout, loading: isAuthLoading } = useAuth();

  // State management
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [isFetchingBadges, setIsFetchingBadges] = useState(true);
  const [selectedBadgeForSharing, setSelectedBadgeForSharing] = useState(null);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);

  // ✅ NEW: Projects state
  const [userProjects, setUserProjects] = useState([]);
  const [isFetchingProjects, setIsFetchingProjects] = useState(true);
  const [projectToDelete, setProjectToDelete] = useState(null);

  /**
   * Fetches user's earned badges from Supabase
   * Runs when user changes or component mounts
   */
  useEffect(() => {
    const fetchUserBadges = async () => {
      if (!user) {
        setIsFetchingBadges(false);
        return;
      }

      try {
        const { data: badgesData, error: fetchError } = await supabase
          .from('quiz_badges')
          .select('*')
          .eq('user_id', user.id)
          .order('earned_at', { ascending: false });

        if (fetchError) {
          console.error('Error fetching user badges:', fetchError);
          return;
        }

        setEarnedBadges(badgesData || []);
      } catch (error) {
        console.error('Unexpected error in fetchUserBadges:', error);
      } finally {
        setIsFetchingBadges(false);
      }
    };

    fetchUserBadges();
  }, [user]);

  /**
   * ✅ NEW: Fetches user's submitted projects from Supabase
   */
  useEffect(() => {
    const fetchUserProjects = async () => {
      if (!user) {
        setIsFetchingProjects(false);
        return;
      }

      try {
        const { data: projectsData, error: fetchError } = await supabase
          .from('projects')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (fetchError) {
          console.error('Error fetching user projects:', fetchError);
          return;
        }

        setUserProjects(projectsData || []);
      } catch (error) {
        console.error('Unexpected error in fetchUserProjects:', error);
      } finally {
        setIsFetchingProjects(false);
      }
    };

    fetchUserProjects();
  }, [user]);

  /**
   * Returns gradient colors for a badge based on quiz topic
   */
  const getBadgeGradientColors = (quizTopicName) => {
    return BADGE_COLOR_PALETTE[quizTopicName] || BADGE_COLOR_PALETTE.default;
  };

  /**
   * Handles opening the share modal for a specific badge
   */
  const handleOpenBadgeShareModal = (badgeData) => {
    setSelectedBadgeForSharing(badgeData);
    setIsShareModalVisible(true);
  };

  /**
   * Handles closing the share modal and resetting selected badge
   */
  const handleCloseBadgeShareModal = () => {
    setIsShareModalVisible(false);
    setSelectedBadgeForSharing(null);
  };

  /**
   * Formats a date string to a readable format
   */
  const formatBadgeDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  /**
   * ✅ NEW: Get status badge color
   */
  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
      case 'rejected':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  /**
   * ✅ NEW: Handle project deletion
   */
  const handleDeleteProject = async (projectId) => {
    if (!confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId)
        .eq('user_id', user.id); // Ensure user can only delete their own projects

      if (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project. Please try again.');
        return;
      }

      // Remove from local state
      setUserProjects(prev => prev.filter(p => p.id !== projectId));
    } catch (err) {
      console.error('Unexpected error deleting project:', err);
      alert('Failed to delete project. Please try again.');
    }
  };

  // Loading state
  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Not authenticated state
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You are not signed in.
          </p>
          <Link 
            to="/login" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  // Placeholder data for demonstration
  const userContributionStats = {
    pullRequests: 5,
    issues: 2,
    commits: 15
  };

  const userBookmarkedCourses = [
    { id: '1', name: 'Introduction to React' },
    { id: '2', name: 'Full-Stack Development' }
  ];

  const userFavoriteTools = [
    { id: '1', name: 'VS Code' },
    { id: '2', name: 'Git' }
  ];

  // Extract user display name
  const userDisplayName = 
    user.user_metadata?.full_name || 
    user.user_metadata?.name || 
    user.email?.split('@')[0] ||
    'User';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* User Information Section */}
        <section 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          aria-labelledby="user-info-heading"
        >
          <div className="flex flex-col items-center text-center">
            {/* User Avatar */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
              {user.user_metadata?.avatar_url ? (
                <img 
                  src={user.user_metadata.avatar_url} 
                  alt={`${userDisplayName}'s profile`}
                  className="rounded-full w-24 h-24 object-cover" 
                />
              ) : (
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              )}
            </div>

            {/* User Name and Email */}
            <h2 
              id="user-info-heading"
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              {userDisplayName}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {user.email}
            </p>
          </div>
        </section>

        {/* ✅ NEW: My Projects Section */}
        <section 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          aria-labelledby="projects-heading"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 
              id="projects-heading"
              className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2"
            >
              <LayoutGrid className="w-7 h-7 text-blue-500" />
              My Projects
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
                {userProjects.length} submitted
              </span>
              <Link
                to="/projects/add"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <LayoutGrid className="w-4 h-4" />
                Add Project
              </Link>
            </div>
          </div>

          {/* Projects Content */}
          {isFetchingProjects ? (
            // Loading State
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading projects...
              </p>
            </div>
          ) : userProjects.length > 0 ? (
            // Projects List
            <div className="space-y-4">
              {userProjects.map((project) => (
                <div
                  key={project.id}
                  className="border border-gray-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        {project.is_published && (
                          <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium">
                            Published
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies?.slice(0, 5).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies?.length > 5 && (
                          <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatBadgeDate(project.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {project.views_count || 0} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {project.likes_count || 0} likes
                        </span>
                        <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                          {project.difficulty_level}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 ml-4">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </a>
                      )}
                      {project.live_demo_url && (
                        <a
                          href={project.live_demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </a>
                      )}
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </button>
                    </div>
                  </div>

                  {/* Status Messages */}
                  {project.status === 'pending' && (
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        ⏳ Your project is under review. You'll be notified once it's approved.
                      </p>
                    </div>
                  )}
                  {project.status === 'rejected' && (
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-sm text-red-800 dark:text-red-200">
                        ❌ Your project was not approved. Please review and resubmit with improvements.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-16 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
              <LayoutGrid className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mb-2">
                No projects submitted yet
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
                Share your amazing work with the community!
              </p>
              <Link
                to="/projects/add"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <LayoutGrid className="w-5 h-5 mr-2" />
                Add Your First Project
              </Link>
            </div>
          )}
        </section>

        {/* Quiz Badges Section */}
        <section 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          aria-labelledby="badges-heading"
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 
              id="badges-heading"
              className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2"
            >
              <Award className="w-7 h-7 text-yellow-500" />
              Quiz Badges
            </h3>
            <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
              {earnedBadges.length} earned
            </span>
          </div>

          {/* Badges Content */}
          {isFetchingBadges ? (
            // Loading State
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading badges...
              </p>
            </div>
          ) : earnedBadges.length > 0 ? (
            // Badges Grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {earnedBadges.map((badge) => {
                const gradientColors = getBadgeGradientColors(badge.quiz_name);
                const scorePercentage = Math.round(
                  (badge.score / badge.total_questions) * 100
                );

                return (
                  <div
                    key={badge.id}
                    className="relative group bg-gradient-to-br p-[2px] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
                    }}
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 h-full">
                      {/* Badge Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl" role="img" aria-label="Trophy">
                          🏆
                        </div>
                        
                        {/* Share Button */}
                        <button
                          onClick={() => handleOpenBadgeShareModal(badge)}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          title="Share Badge"
                          aria-label={`Share ${badge.quiz_name} badge`}
                        >
                          <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>

                      {/* Badge Title */}
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {badge.quiz_name}
                      </h4>

                      {/* Score Display */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {badge.score}/{badge.total_questions}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 font-medium">
                          {scorePercentage}%
                        </span>
                      </div>

                      {/* Earned Date */}
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Earned {formatBadgeDate(badge.earned_at)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-16 bg-gray-50 dark:bg-gray-700/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
              <Award className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mb-2">
                No badges earned yet
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
                Complete quizzes to earn your first badge!
              </p>
              <Link
                to="/quiz"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Take a Quiz
              </Link>
            </div>
          )}
        </section>

        {/* Contribution Statistics Section */}
        <section 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          aria-labelledby="contributions-heading"
        >
          <h3 
            id="contributions-heading"
            className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
          >
            Contribution Stats
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Pull Requests */}
            <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <GitPullRequest 
                className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-4" 
                aria-hidden="true"
              />
              <div>
                <p className="font-bold text-xl text-gray-800 dark:text-white">
                  {userContributionStats.pullRequests}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Pull Requests
                </p>
              </div>
            </div>

            {/* Issues */}
            <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <AlertCircle 
                className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mr-4"
                aria-hidden="true"
              />
              <div>
                <p className="font-bold text-xl text-gray-800 dark:text-white">
                  {userContributionStats.issues}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Issues
                </p>
              </div>
            </div>

            {/* Commits */}
            <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <GitCommit 
                className="w-6 h-6 text-green-500 dark:text-green-400 mr-4"
                aria-hidden="true"
              />
              <div>
                <p className="font-bold text-xl text-gray-800 dark:text-white">
                  {userContributionStats.commits}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Commits
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bookmarked Courses Section */}
        <section 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          aria-labelledby="bookmarked-courses-heading"
        >
          <h3 
            id="bookmarked-courses-heading"
            className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
          >
            Bookmarked Courses
          </h3>
          
          <div className="space-y-3">
            {userBookmarkedCourses.map(course => (
              <Link 
                to={`/courses/${course.id}`} 
                key={course.id} 
                className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={`View ${course.name} course`}
              >
                <BookOpen 
                  className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-4"
                  aria-hidden="true"
                />
                <p className="font-medium text-gray-800 dark:text-white">
                  {course.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Favorite Tools Section */}
        <section 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          aria-labelledby="favorite-tools-heading"
        >
          <h3 
            id="favorite-tools-heading"
            className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
          >
            Favorite Tools
          </h3>
          
          <div className="space-y-3">
            {userFavoriteTools.map(tool => (
              <Link 
                to="/tools" 
                key={tool.id} 
                className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label={`View ${tool.name} tool`}
              >
                <Wrench 
                  className="w-5 h-5 text-pink-500 dark:text-pink-400 mr-4"
                  aria-hidden="true"
                />
                <p className="font-medium text-gray-800 dark:text-white">
                  {tool.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Badge Share Modal */}
      {selectedBadgeForSharing && (
        <BadgeShareModal
          isOpen={isShareModalVisible}
          onClose={handleCloseBadgeShareModal}
          quizName={selectedBadgeForSharing.quiz_name}
          score={selectedBadgeForSharing.score}
          totalQuestions={selectedBadgeForSharing.total_questions}
        />
      )}
    </div>
  );
};

export default Profile;