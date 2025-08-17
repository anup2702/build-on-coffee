import React, { useState } from "react";
import { BookOpen, ChevronUp, ChevronDown } from "lucide-react";
import interviewQuestionsData from "../../../data/InterviewQuestions"; 

const InterviewQuestions = () => {
  const [expanded, setExpanded] = useState(null);


  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
     <div className="flex items-center justify-center gap-4 mb-5">
             <BookOpen className="w-10 h-10 text-blue-800 dark:text-blue-500" />
             <h1 className="text-3xl font-extrabold text-center text-gradient mb-2">Interview Questions</h1>
         </div>
      <p className="text-gray-600 mb-6 text-center text-2xl">
        Explore categorized interview questions with structured answers.
      </p>

      <div className="space-y-4">
        {Array.isArray(interviewQuestionsData) &&
        interviewQuestionsData.length > 0 ? (
          interviewQuestionsData.map((q) => (
            <div
              key={q.id}
              className="border rounded-xl shadow-sm  bg-gray-100 dark:bg-[#1e293b] overflow-hidden dark:hover:bg-[#334155] dark:hover:border-[#38bdf8]"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleExpand(q.id)}
              >
                <div>
                  <p className="font-semibold">{q.question}</p>
                  <div className="flex gap-2 text-xs text-gray-500 mt-1">
                    <span className="px-2 py-0.5 border rounded-full">
                      {q.category}
                    </span>
                    <span className="px-2 py-0.5 border rounded-full">
                      {q.difficulty}
                    </span>
                  </div>
                </div>
                {expanded === q.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </div>
              {expanded === q.id && (
                <div className="p-4  bg-gray-100 dark:bg-[#1e293b] text-sm border-t">{q.answer}</div>
              )}
            </div>
          ))
        ) : (
          <p className="text-red-500">⚠️ No questions found. Check your import.</p>
        )}
      </div>
    </div>
  );
};

export default InterviewQuestions;
