
import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const { signUp, setActive, isLoaded } = useSignUp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    setLoading(true);
    try {
      const result = await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      await signUp.attemptEmailAddressVerification({ code: "000000" }); // assume instant verify for demo
      await setActive({ session: result.createdSessionId });
      navigate("/");
    } catch (err) {
      setError(err.errors?.[0]?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    if (!isLoaded) return;
    await signUp.authenticateWithRedirect({ strategy: "oauth_google", redirectUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-500 px-4">
      <div className="w-full max-w-md bg-blue-400 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Create your account</h2>
        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
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
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-yellow py-2 rounded-xl flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center text-black">or</div>
        <button
          onClick={handleGoogleSignup}
          className="mt-4 w-full flex items-center justify-center gap-3 border py-2 rounded-xl hover:bg-yellow-500"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-800 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
