"use client";

import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const { signUp, isLoaded, setActive } = useSignUp();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    setLoadingEmail(true);
    setError("");
    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
        username,
      });
      
      switch (result.status) {
        case "complete":
          if (result.createdSessionId) {
            await setActive({ session: result.createdSessionId });
            navigate("/");
          } else {
            setError("Session not created. Please try logging in.");
          }
          break;
        case "needs_email_verification":
          toast.success("Sign up successful. Please check your email to verify your account.");
          navigate("/verify-email");
          break;
        default:
          console.warn("Unexpected sign-up status:", result.status);
          setError("Something went wrong during sign-up. Please try again.");
          break;
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError(err.errors?.[0]?.message || "Signup failed");
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (!isLoaded) return;
    setLoadingGoogle(true);
    setError("");
    try {
      // Redirect to the login page with a success flag in the URL
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/login",
        redirectUrlComplete: "/login",
      });
    } catch (err) {
      console.error("Error during Google signup:", err);
      setError("Google signup failed");
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">Create Your Account</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Join the community and start your journey.</p>

        {error && (
          <div className="text-red-500 dark:text-red-400 text-sm mb-4 text-center p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">{error}</div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="input-modern"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="input-modern"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-modern"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isLoaded && <div id="clerk-captcha"></div>}
          <button
            type="submit"
            disabled={loadingEmail || loadingGoogle}
            className="w-full btn-primary flex items-center justify-center"
          >
            {loadingEmail ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
         
        <button
          onClick={handleGoogleSignup}
          disabled={loadingGoogle || loadingEmail}
          className="mt-6 w-full flex items-center justify-center gap-3 btn-secondary"
        >
          {loadingGoogle ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <FcGoogle className="text-2xl" /> Continue with Google
            </>
          )}
        </button>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
            Login
          </Link>
        </p>
        
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Signup;
