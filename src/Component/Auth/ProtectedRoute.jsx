import { useAuth } from "../../lib/useAuth";
import { Navigate } from "react-router-dom";

/**
 * Protects routes from unauthenticated access.
 * Only renders children if user is signed in.
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Wait until auth is loaded
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If not signed in, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If signed in, show protected content
  return children;
};

export default ProtectedRoute;
