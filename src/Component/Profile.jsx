/**
 * Profile Component
 * 
 * Displays user profile information including:
 * - User details and avatar
 * - Earned quiz badges with sharing functionality
 * - Contribution statistics
 * - Bookmarked courses
 * - Favorite tools
 * 
 * Features:
 * - Fetches badges from Supabase
 * - Badge sharing via BadgeShareModal
 * - Responsive design with dark mode support
 * - Empty states for no badges
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
  Share2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
  // Authentication hook
  const { user, logout, loading: isAuthLoading } = useAuth();

  // State management
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [isFetchingBadges, setIsFetchingBadges] = useState(true);
  const [selectedBadgeForSharing, setSelectedBadgeForSharing] = useState(null);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);

  /**
   * Fetches user's earned badges from Supabase
   * Runs when user changes or component mounts
   */
  useEffect(() => {
    const fetchUserBadges = async () => {
      // Exit early if no user is authenticated
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
   * Returns gradient colors for a badge based on quiz topic
   * 
   * @param {string} quizTopicName - Name of the quiz topic
   * @returns {string[]} Array of two hex color codes
   */
  const getBadgeGradientColors = (quizTopicName) => {
    return BADGE_COLOR_PALETTE[quizTopicName] || BADGE_COLOR_PALETTE.default;
  };

  /**
   * Handles opening the share modal for a specific badge
   * 
   * @param {Object} badgeData - Badge object to share
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
   * 
   * @param {string} dateString - ISO date string
   * @returns {string} Formatted date (e.g., "Jan 15, 2024")
   */
  const formatBadgeDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
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
  // TODO: Replace with actual data from API
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