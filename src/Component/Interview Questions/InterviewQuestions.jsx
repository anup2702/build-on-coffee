import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ExternalLink } from "lucide-react";
import interviewSubjects from "../../../data/InterviewQuestions";

const Card = ({ subject }) => {
  const Icon = subject.icon;

 
  if (subject.external && subject.link) {
    return (
      <a
        href={subject.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-6 border rounded-2xl shadow-sm bg-gray-100 dark:bg-[#1e293b] hover:shadow-lg hover:border-blue-500 transition flex flex-col gap-3"
      >
        <div className="flex items-center gap-4">
          <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold">{subject.name}</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{subject.description}</p>
        <div className="flex items-center justify-end text-blue-600 dark:text-blue-400">
          <span className="mr-1 text-sm">Open</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>
    );
  }

 
  return (
    <Link
      to={subject.path || "#"}
      className="group p-6 border rounded-2xl shadow-sm bg-gray-100 dark:bg-[#1e293b] hover:shadow-lg hover:border-blue-500 transition flex flex-col gap-3"
    >
      <div className="flex items-center gap-4">
        <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold">{subject.name}</h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{subject.description}</p>
      <div className="flex items-center justify-end text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition">
        <span className="mr-1 text-sm">Open</span>
        <ExternalLink className="w-4 h-4" />
      </div>
    </Link>
  );
};

const InterviewQuestions = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <BookOpen className="w-10 h-10 text-blue-800 dark:text-blue-500" />
        <h1 className="text-3xl font-extrabold text-center text-gradient">
          Interview Questions
        </h1>
      </div>

      <p className="text-gray-600 mb-8 text-center text-lg">
        Pick a subject to explore curated interview questions and practice sets.
      </p>

      {/* Subject cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interviewSubjects.map((subject) => (
          <Card key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestions;
