import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code } from "lucide-react"; 
import dsaQuestions from "../../data/dsa";
import htmlQuestions from "../../data/html";

const quizzes = {
  DSA: {
    questions: dsaQuestions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your Data Structures & Algorithms basics.",
  },
  HTML: {
    questions: htmlQuestions,
    icon: <BookOpen className="w-8 h-8 text-green-500" />,
    description: "Check your HTML knowledge with 5 quick questions.",
  },
};

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(false);

  const startQuiz = (quizName) => {
    setSelectedQuiz(quizName);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setChecked(false);
  };

  const handleCheck = () => {
    const quizData = quizzes[selectedQuiz].questions;
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setChecked(true);
  };

  const handleNext = () => {
    const quizData = quizzes[selectedQuiz].questions;
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setChecked(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setSelectedOption(null);
    setChecked(false);
  };

  if (!selectedQuiz) {
    // Quiz selection cards
    return (
      <div className="min-h-screen py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
              Choose a Quiz
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Test your knowledge with topic-specific quizzes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {Object.keys(quizzes).map((quiz, i) => (
              <motion.div
                key={quiz}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => startQuiz(quiz)}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                    {quizzes[quiz].icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                  {quiz} Quiz
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {quizzes[quiz].description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  const quizData = quizzes[selectedQuiz].questions;

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        {!showResult ? (
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Progress */}
            <div className="flex justify-between mb-6">
              <span className="font-medium">
                Question {currentQuestion + 1} / {quizData.length}
              </span>
              <span className="font-medium">Score: {score}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{
                  width: `${checked ? ((currentQuestion + 1) / quizData.length) * 100 : (currentQuestion / quizData.length) * 100}%`,
                }}
              />
            </div>

            {/* Question */}
            <h2 className="text-xl font-semibold mb-6">
              {quizData[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {quizData[currentQuestion].options.map((option, i) => {
                let bgClass = "border";
                if (checked) {
                  if (option === quizData[currentQuestion].answer) bgClass = "bg-emerald-500";
                  else if (option === selectedOption) bgClass = "bg-red-500";
                } else if (option === selectedOption) {
                  bgClass = "bg-blue-100 dark:bg-slate-700 border-blue-300";
                }
                return (
                  <button
                    key={i}
                    onClick={() => !checked && setSelectedOption(option)}
                    className={`block w-full rounded-xl px-4 py-3 transition ${bgClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-3">
              {!checked && (
                <button
                  onClick={handleCheck}
                  disabled={selectedOption === null}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold disabled:opacity-50"
                >
                  Check
                </button>
              )}
              {checked && (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
                >
                  Next
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h2>
            <p className="text-lg mb-2">
              Your Score: {score} / {quizData.length}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {score >= quizData.length / 2
                ? "Great job! 🚀"
                : "Keep practicing 💪"}
            </p>
            <button
              onClick={resetQuiz}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
            >
              Back to Quizzes
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
