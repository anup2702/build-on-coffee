// import { useSignIn } from "@clerk/clerk-react";
// import { useNavigate, Link } from "react-router-dom";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FcGoogle } from "react-icons/fc";
// import { LoaderCircle } from "lucide-react";

// const Login = () => {
//   const { signIn, setActive } = useSignIn();
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const result = await signIn.create({ identifier: email, password: pass });
//       await setActive({ session: result.createdSessionId });
//       navigate("/");
//     } catch (err) {
//       setError(err.errors[0]?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setGoogleLoading(true);
//     try {
//       await signIn.authenticateWithRedirect({
//         strategy: "oauth_google",
//         redirectUrl: window.location.origin,
//       });
//     } catch (err) {
//       setError(err.errors[0]?.message || "Google login failed");
//       setGoogleLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-600">
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-md text-white"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back 👋</h2>
//         <form onSubmit={handleLogin} className="space-y-5">
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
//             className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg text-white font-bold hover:scale-105 transition"
//             disabled={loading}
//           >
//             {loading && <LoaderCircle className="animate-spin" size={18} />}
//             Login
//           </button>
//         </form>

//         <div className="mt-4">
//           <button
//             type="button"
//             onClick={handleGoogleLogin}
//             className="flex items-center justify-center w-full gap-3 p-3 rounded-lg bg-white/20 hover:bg-white/30 transition text-white font-semibold"
//             disabled={googleLoading}
//           >
//             {googleLoading ? (
//               <LoaderCircle className="animate-spin" size={18} />
//             ) : (
//               <FcGoogle className="text-xl" />
//             )}
//             Login with Google
//           </button>
//         </div>

//         <p className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link
//             to="/signup"
//             className="underline text-cyan-200 hover:text-white"
//           >
//             Sign up
//           </Link>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;




// src/pages/Login.jsx
// import { useEffect } from "react";
// import { RedirectToSignIn } from "@clerk/clerk-react";

// const Login = () => {
//   useEffect(() => {
//     // Redirect to Clerk-hosted login page
//     RedirectToSignIn();
//   }, []);

//   return <RedirectToSignIn redirectUrl="/" />;
// };

// export default Login;


// src/pages/Login.jsx
// import React, { useState } from "react";
// import { useSignIn } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";
// import { Mail, Eye, EyeOff, Loader } from "lucide-react";

// const Login = () => {
//   const { signIn, setActive, isLoaded } = useSignIn();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErr("");

//     try {
//       const result = await signIn.create({
//         identifier: email,
//         password,
//       });

//       if (result.status === "complete") {
//         await setActive({ session: result.createdSessionId });
//         navigate("/");
//       }
//     } catch (err) {
//       setErr(err.errors[0]?.longMessage || "Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isLoaded) return null;

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#f7f8fc] to-[#e8ecf4] px-4">
//       <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign In to Your Account</h2>

//         <form onSubmit={handleLogin} className="space-y-5">
//           <div className="relative">
//             <input
//               type="email"
//               required
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 pl-10 text-sm focus:border-black focus:outline-none"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
//           </div>

//           <div className="relative">
//             <input
//               type={showPass ? "text" : "password"}
//               required
//               className="w-full rounded-xl border border-gray-300 px-4 py-3 pl-10 text-sm focus:border-black focus:outline-none"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {showPass ? (
//               <EyeOff
//                 className="absolute right-3 top-3.5 h-5 w-5 cursor-pointer text-gray-400"
//                 onClick={() => setShowPass(false)}
//               />
//             ) : (
//               <Eye
//                 className="absolute right-3 top-3.5 h-5 w-5 cursor-pointer text-gray-400"
//                 onClick={() => setShowPass(true)}
//               />
//             )}
//           </div>

//           {err && <p className="text-sm text-red-600">{err}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-xl bg-black px-4 py-3 text-white transition hover:bg-gray-900 flex items-center justify-center"
//           >
//             {loading ? <Loader className="animate-spin h-5 w-5" /> : "Sign In"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-500">
//           Don't have an account?{" "}
//           <a href="/signup" className="font-medium text-black hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    setLoading(true);
    try {
      const result = await signIn.create({ identifier: email, password });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      } else {
        setError("Login not complete");
      }
    } catch (err) {
      setError(err.errors?.[0]?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (!isLoaded) return;
    await signIn.authenticateWithRedirect({ strategy: "oauth_google", redirectUrl: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-400 px-4">
      <div className="w-full max-w-md bg-blue-400 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign in to your account</h2>
        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
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
            className="w-full bg-black text-blue-500 py-2 rounded-xl flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500">or</div>
        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full flex items-center justify-center gap-3 border py-2 rounded-xl hover:bg-yellow-500"
        >
          <FcGoogle className="text-xl text-black" /> Continue with Google
        </button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account? <a href="/signup" className="text-blue-800 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;