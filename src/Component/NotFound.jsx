import React from "react";
import { Link } from "react-router-dom";
import { Coffee, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="relative">
        <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-tr from-emerald-400 via-orange-400 to-blue-500 rounded-full w-72 h-72 translate-x-6 -translate-y-6" />
        <Coffee className="w-16 h-16 text-emerald-500 mx-auto" />
      </div>
      <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
        404
        <span className="sr-only"> - </span>
        <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-orange-400 to-blue-500">
          Page not found
        </span>
      </h1>
      <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-300">
        Looks like this page got lost brewing in the background. The link you followed may be broken, or the page may have been removed.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          Contact us
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        <a href="/courses" className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-emerald-400 transition">
          <p className="font-semibold">Explore Courses</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Level up your CS fundamentals</p>
        </a>
        <a href="/tools" className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-400 transition">
          <p className="font-semibold">Developer Tools</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Discover curated productivity tools</p>
        </a>
        <a href="/roadmap" className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 transition">
          <p className="font-semibold">Roadmaps</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Structured learning paths</p>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
