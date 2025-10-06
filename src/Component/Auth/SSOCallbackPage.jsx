import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

const SSOCallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the OAuth callback from Supabase
    const handleAuthCallback = async () => {
      try {
        console.log("Handling OAuth callback...");
        console.log("Current URL:", window.location.href);
        
        // Wait for Supabase to process the URL hash
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Get the session from the URL hash
        const { data, error } = await supabase.auth.getSession();
        
        console.log("Session data:", data);
        console.log("Session error:", error);
        
        if (error) {
          console.error("Error handling auth callback:", error);
          navigate("/login", { replace: true });
          return;
        }

        if (data.session) {
          console.log("User authenticated, redirecting to profile");
          // User is authenticated, redirect to profile
          navigate("/profile", { replace: true });
        } else {
          console.log("No session found, redirecting to login");
          // No session, redirect to login
          navigate("/login", { replace: true });
        }
      } catch (err) {
        console.error("Error in auth callback:", err);
        navigate("/login", { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <Loader2 className="animate-spin text-blue-500" size={48} />
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Completing sign in...</p>
      </div>
    </div>
  );
};

export default SSOCallbackPage;
