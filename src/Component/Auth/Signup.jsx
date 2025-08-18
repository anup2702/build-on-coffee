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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-500 px-4">
      <div className="w-full max-w-md bg-blue-400 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h2>

        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isLoaded && <div id="clerk-captcha"></div>}
          <button
            type="submit"
            disabled={loadingEmail || loadingGoogle}
            className="w-full bg-black text-white py-2 rounded-xl flex items-center justify-center transition-colors duration-200"
          >
            {loadingEmail ? (
              <Loader2 className="animate-spin text-white" size={20} />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-black">or</div>
         
        <button
          onClick={handleGoogleSignup}
          disabled={loadingGoogle || loadingEmail}
          className="mt-4 w-full flex items-center justify-center gap-3 border py-2 rounded-xl hover:bg-yellow-500 transition-colors duration-200"
        >
          {loadingGoogle ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <FcGoogle className="text-xl" /> Continue with Google
            </>
          )}
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-800 hover:underline">
            Login
          </Link>
        </p>
        
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default Signup;
