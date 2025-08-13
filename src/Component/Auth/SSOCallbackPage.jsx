"use client";

import React, { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const SSOCallbackPage = () => {
  const { handleRedirectCallback, isLoaded } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    // This function is crucial for handling the redirect from the OAuth provider.
    // It completes the sign-in/sign-up process and then redirects the user.
    if (isLoaded) {
      handleRedirectCallback()
        .then(() => {
          // Redirect the user to the home page after successful sign-in
          navigate("/login");
        })
        .catch((err) => {
          console.error("Error handling redirect:", err);
          // Handle errors or redirect to a login/error page
          navigate("/login"); 
        });
    }
  }, [isLoaded, handleRedirectCallback, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-xl">
        <Loader2 className="animate-spin text-blue-500" size={48} />
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default SSOCallbackPage;
