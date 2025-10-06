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
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("Error handling auth callback:", error);
          navigate("/login");
          return;
        }

        if (data.session) {
          // User is authenticated, redirect to profile
          navigate("/profile");
        } else {
          // No session, redirect to login
          navigate("/login");
        }
      } catch (err) {
        console.error("Error in auth callback:", err);
        navigate("/login");
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
