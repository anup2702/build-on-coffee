import React from 'react';
import { useAuth } from './context/AuthContext';
import { User, Mail, Shield, GitPullRequest, AlertCircle, GitCommit, Bookmark, Wrench, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-8">
        {/* User Info Section */}
        <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-coffee-400 to-mocha-500 rounded-full flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>
           <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Provider: {user.provider}</p>
        </div>

        {/* Contribution Stats */}
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contribution Stats</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <GitPullRequest className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-4" />
                    <div>
                        <p className="font-bold text-xl text-gray-800 dark:text-white">{user.contributions.pullRequests}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Pull Requests</p>
                    </div>
                </div>
                 <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mr-4" />
                    <div>
                        <p className="font-bold text-xl text-gray-800 dark:text-white">{user.contributions.issues}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Issues</p>
                    </div>
                </div>
                 <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <GitCommit className="w-6 h-6 text-green-500 dark:text-green-400 mr-4" />
                    <div>
                        <p className="font-bold text-xl text-gray-800 dark:text-white">{user.contributions.commits}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Commits</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bookmarked Courses */}
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Bookmarked Courses</h3>
            <div className="space-y-3">
                {user.bookmarkedCourses.map(course => (
                    <Link to={`/courses/${course.id}`} key={course.id} className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-4" />
                        <p className="font-medium text-gray-800 dark:text-white">{course.name}</p>
                    </Link>
                ))}
            </div>
        </div>

        {/* Favorite Tools */}
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Favorite Tools</h3>
            <div className="space-y-3">
                {user.favoriteTools.map(tool => (
                    <Link to="/tools" key={tool.id} className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <Wrench className="w-5 h-5 text-pink-500 dark:text-pink-400 mr-4" />
                        <p className="font-medium text-gray-800 dark:text-white">{tool.name}</p>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
