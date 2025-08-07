// import { useSignUp } from "@clerk/clerk-react";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FcGoogle } from "react-icons/fc";
// import { LoaderCircle } from "lucide-react";

// const Signup = () => {
//   const { signUp } = useSignUp();
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signUp.create({ emailAddress: email, password: pass });
//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
//       await setActive({ session: result.createdSessionId });

//       navigate("/");
//     } catch (err) {
//       setError(err.errors[0]?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     setGoogleLoading(true);
//     try {
//       await signUp.authenticateWithRedirect({
//         strategy: "oauth_google",
//         redirectUrl: window.location.origin,
//       });
//     } catch (err) {
//       setError(err.errors[0]?.message || "Google signup failed");
//       setGoogleLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 via-blue-500 to-purple-600">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-md text-white"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center">Create an Account 🚀</h2>
//         <form onSubmit={handleSignup} className="space-y-5">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             required
//           />
//           {error && <p className="text-red-400 text-sm">{error}</p>}
//           <button
//             type="submit"
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-600 p-3 rounded-lg text-white font-bold hover:scale-105 transition"
//             disabled={loading}
//           >
//             {loading && <LoaderCircle className="animate-spin" size={18} />}
//             Sign Up
//           </button>
//         </form>

//         <div className="mt-4">
//           <button
//             type="button"
//             onClick={handleGoogleSignup}
//             className="flex items-center justify-center w-full gap-3 p-3 rounded-lg bg-white/20 hover:bg-white/30 transition text-white font-semibold"
//             disabled={googleLoading}
//           >
//             {googleLoading ? (
//               <LoaderCircle className="animate-spin" size={18} />
//             ) : (
//               <FcGoogle className="text-xl" />
//             )}
//             Sign up with Google
//           </button>
//         </div>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="underline text-cyan-200 hover:text-white">
//             Login
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Signup;
// src/pages/Signup.jsx
// import { useEffect } from "react";
// import { RedirectToSignIn, RedirectToSignUp } from "@clerk/clerk-react";

// const Signup = () => {
//   useEffect(() => {
//     // Redirect to Clerk-hosted signup page
//     RedirectToSignUp();
//   }, []);

//   return <RedirectToSignIn redirectUrl="/" />; // no UI needed
// };

// export default Signup;






// src/pages/Signup.jsx
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
