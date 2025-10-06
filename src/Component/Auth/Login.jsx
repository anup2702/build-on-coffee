import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";
import { useAuth } from "../../lib/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("Starting Google sign-in...");
      const result = await signInWithGoogle();
      console.log("Google sign-in result:", result);
    } catch (err) {
      console.error("Error during Google sign-in:", err);
      setError("Google sign-in failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">B</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Welcome Back!</h2>
          <p className="text-gray-600 dark:text-gray-400">Sign in with Google to continue your journey.</p>
        </div>
        
        {error && (
          <div className="text-red-500 dark:text-red-400 text-sm mb-6 text-center p-3 bg-red-100 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            {error}
          </div>
        )}
        
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 btn-primary py-4 text-lg font-medium"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <>
              <FcGoogle className="text-2xl" /> 
              Continue with Google
            </>
          )}
        </button>
        
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
