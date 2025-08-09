import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

/**
 * Protects routes from unauthenticated access.
 * Only renders children if user is signed in.
 */
const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait until Clerk is loaded
  if (!isLoaded) return null;

  // If not signed in, redirect to login
  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  // If signed in, show protected content
  return children;
};

export default ProtectedRoute;
