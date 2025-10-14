import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, CheckCircle } from "lucide-react";
import dsaQuestions from "../../data/dsa";
import htmlQuestions from "../../data/html";
import cssQuestions from "../../data/css";
import javascriptQuestions from "../../data/javascript.js";
import reactQuestions from "../../data/react.js";
import nodejsQuestions from "../../data/nodejs.js";
import databaseQuestions from "../../data/database.js";
import gitQuestions from "../../data/git.js";
import { databaseQuiz } from "../../data/databaseQuiz.js";
import { typescriptQuiz } from "../../data/typescriptQuiz.js";
import { expressjsQuiz } from "../../data/expressjsQuiz.js";
import { nextjsQuiz } from "../../data/nextjsQuiz.js";
import { tailwindQuiz } from "../../data/tailwindQuiz.js";
import { accessibilityAndPerformanceQuiz } from "../../data/accessibilityAndPerformanceQuiz.js";
import { pythonQuiz } from "../../data/pythonQuiz.js";


import { responsiveDesignQuiz } from "../../data/responsiveDesignQuiz.js";
import { stateManagementQuiz } from "../../data/stateManagementQuiz.js";
import ciCdPipelinesQuestions from "../../data/ciCdPipelines.js";



import { designPatternsQuiz } from "../../data/designPatternsQuiz.js";
import { webAPIsQuiz } from "../../data/webAPIsQuiz.js";
import ciCdPipelinesQuestions from "../../data/ciCdPipelines.js";
import { webSecurityBasicsQuiz } from "../../data/webSecurityBasicsQuiz.js";
import javaQuestions from "../../data/java.js";
import cloudNativeConceptsQuestions from "../../data/cloudNativeConcepts.js";
import iacQuestions from "../../data/iac.js";
import kubernetesQuestions from "../../data/kubernetes.js";
import containersDockerQuestions from "../../data/containersDocker.js";
import cloudFundamentalsQuestions from "../../data/cloudFundamentals.js";
import { authenticationAndAuthorizationQuiz } from "../../data/authenticationAndAuthorizationQuiz.js";
import { restVsGraphQLQuiz } from "../../data/restVsGraphQLQuiz.js";
import { microservicesArchitectureQuiz } from "../../data/microservicesArchitectureQuiz.js";
import { databaseOptimizationAndIndexingQuiz } from "../../data/databaseOptimizationAndIndexingQuiz.js";
import { cachingQuiz } from "../../data/cachingQuiz.js";
import { linuxAndShellScriptingQuiz } from "../../data/linuxAndShellScriptingQuiz.js";
import { monitoringAndLoggingQuiz } from "../../data/monitoringAndLoggingQuiz.js";
import { serverlessComputingQuiz } from "../../data/serverlessComputingQuiz.js";  
import { networkingFundamentalsQuiz } from "../../data/networkingFundamentalsQuiz.js";
import { algorithmsAndProblemSolvingQuiz } from "../../data/algorithmsAndProblemSolvingQuiz.js";

const quizzes = {
  DSA: {
    questions: dsaQuestions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your Data Structures & Algorithms knowledge.",
  },
  HTML: {
    questions: htmlQuestions,
    icon: <BookOpen className="w-8 h-8 text-green-500" />,
    description: "Test your HTML skills from beginner to advanced.",
  },
  CSS: {
    questions: cssQuestions,
    icon: <BookOpen className="w-8 h-8 text-red-500" />,
    description: "Test your CSS knowledge across all levels.",
  },
  JavaScript: {
    questions: javascriptQuestions,
    icon: <Code className="w-8 h-8 text-yellow-500" />,
    description:
      "Test your JavaScript knowledge from basics to advanced concepts.",
  },
  Java: {
    questions: javaQuestions,
    icon: <Code className="w-8 h-8 text-indigo-700" />,
    description: "Test your Java knowledge from basics to advanced concepts.",
  },
  React: {
    questions: reactQuestions,
    icon: <Code className="w-8 h-8 text-sky-500" />,
    description:
      "Test your React knowledge from fundamentals to advanced topics.",
  },
  "Node.js": {
    questions: nodejsQuestions,
    icon: <Code className="w-8 h-8 text-green-500" />,
    description:
      "Test your Node.js knowledge from core fundamentals to practical concepts.",
  },

  "Git & GitHub": {
    questions: gitQuestions,
    icon: <Code className="w-8 h-8 text-orange-500" />,
    description: "Test your practical version control concepts.",
  },

  "Cloud-Native Concepts": {
    questions: cloudNativeConceptsQuestions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your knowledge of cloud-native concepts.",
  },

  "Infrastructure as Code (IaC)": {
    questions: iacQuestions,
    icon: <Code className="w-8 h-8 text-purple-500" />,
    description: "Test your knowledge of Infrastructure as Code.",
  },

  "CI/CD Pipelines": {
    questions: ciCdPipelinesQuestions,
    icon: <Code className="w-8 h-8 text-green-500" />,
    description: "Test your knowledge of CI/CD pipelines.",
  },

  Kubernetes: {
    questions: kubernetesQuestions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your knowledge of Kubernetes.",
  },

  "Containers & Docker": {
    questions: containersDockerQuestions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your knowledge of containers and Docker.",
  },

  "Cloud Fundamentals": {
    questions: cloudFundamentalsQuestions,
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    description: "Test your knowledge of fundamental cloud concepts.",
  },

  Database: {
    questions: databaseQuiz.questions,
    icon: <BookOpen className="w-8 h-8 text-purple-500" />,
    description: "Test your knowledge of both SQL and NoSQL databases.",
  },

  TypeScript: {
    questions: typescriptQuiz.questions,
    icon: <Code className="w-8 h-8 text-blue-600" />,
    description: "Test your knowledge of the typed superset of JavaScript.",
  },

  "Express.js": {
    questions: expressjsQuiz.questions,
    icon: <Code className="w-8 h-8 text-gray-500" />,
    description:
      "Test your knowledge of the Node.js web application framework.",
  },

  "Next.js": {
    questions: nextjsQuiz.questions,
    icon: <Code className="w-8 h-8 text-black" />,
    description: "Test your knowledge of the React framework for production.",
  },

  "Tailwind CSS": {
    questions: tailwindQuiz.questions,
    icon: <Code className="w-8 h-8 text-teal-500" />,
    description: "Test your knowledge of the utility-first CSS framework.",
  },

  "Accessibility & Performance": {
    questions: accessibilityAndPerformanceQuiz.questions,
    icon: <Code className="w-8 h-8 text-purple-500" />,
    description: "Test your knowledge on web accessibility and performance.",
  },

  Python: {
    questions: pythonQuiz.questions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your Python basics knowledge.",
  },


  "Responsive Design" : {
    questions: responsiveDesignQuiz.questions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your knowledge of responsive web design.",
  "State Management": {
    questions: stateManagementQuiz.questions,
    icon: <Code className="w-8 h-8 text-purple-500" />,
    description: "Test your knowledge of state management concepts.",


  "Design Patterns": {
    questions: designPatternsQuiz.questions,
    icon: <Code className="w-8 h-8 text-purple-500" />,
    description:
      "Test your knowledge of Design Patterns in JavaScript & React.",
  },

  "Web APIs": {
    questions: webAPIsQuiz.questions,
    icon: <Code className="w-8 h-8 text-orange-500" />,
    description: "Test your Web APIs knowledge.",
  },
  "Web Security Basics": {
    questions: webSecurityBasicsQuiz.questions,
    icon: <Code className="w-8 h-8 text-red-500" />,
    description: "Test your knowledge of web security fundamentals.",
  },
  "Authentication & Authorization": {
    questions: authenticationAndAuthorizationQuiz.questions,
    icon: <Code className="w-8 h-8 text-red-500" />,
    description: "Test your knowledge of authentication & authorization.",
  },
  "REST vs GraphQL": {
    questions: restVsGraphQLQuiz.questions,
    icon: <Code className="w-8 h-8 text-red-500" />,
    description: "Test your knowledge of REST vs GraphQL.",
  },
  "Microservices Architecture": {
    questions: microservicesArchitectureQuiz.questions,
    icon: <Code className="w-8 h-8 text-cyan-500" />,
    description: "Test your knowledge of microservices architecture.",
  }, 
  "Database Optimization & Indexing": {
    questions: databaseOptimizationAndIndexingQuiz.questions,
    icon: <Code className="w-8 h-8 text-green-500" />,
    description: "Test your knowledge of database optimization and indexing.",
  },
  "Caching": {
    questions: cachingQuiz.questions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your knowledge of caching concepts.",
  },
  "Linux & Shell Scripting": {
    questions: linuxAndShellScriptingQuiz.questions,
    icon: <Code className="w-8 h-8 text-gray-500" />,
    description: "Test your knowledge of Linux and shell scripting.",
  },
  "Monitoring & Logging": {
    questions: monitoringAndLoggingQuiz.questions,
    icon: <Code className="w-8 h-8 text-yellow-500" />,
    description: "Test your knowledge of monitoring and logging.",
  },
  "Serverless Computing": {
    questions: serverlessComputingQuiz.questions,
    icon: <Code className="w-8 h-8 text-orange-500" />,
    description: "Test your knowledge of serverless computing.",
  },
  "Networking Fundamentals": {
    questions: networkingFundamentalsQuiz.questions,
    icon: <Code className="w-8 h-8 text-purple-500" />,
    description: "Test your knowledge of networking fundamentals.",

    "Web Security Basics": {
      questions: webSecurityBasicsQuiz.questions,
      icon: <Code className="w-8 h-8 text-red-500" />,
      description: "Test your knowledge of web security fundamentals.",
    },

  },
  "Algorithms & Problem Solving": {
    questions: algorithmsAndProblemSolvingQuiz.questions,
    icon: <Code className="w-8 h-8 text-red-500" />,
    description: "Test your knowledge of algorithms and problem solving.",

    "Web Security Basics": {
      questions: webSecurityBasicsQuiz.questions,
      icon: <Code className="w-8 h-8 text-red-500" />,
      description: "Test your knowledge of web security fundamentals.",
    },

  },
};

const levels = ["beginner", "intermediate", "advanced"];
const MIN_CUTOFF = 7; // 70% min cutoff score

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(false);
  const [quizCompletion, setQuizCompletion] = useState({});

  useEffect(() => {
    const storedCompletion = localStorage.getItem("quizCompletion");
    if (storedCompletion) {
      setQuizCompletion(JSON.parse(storedCompletion));
    }
  }, []);

  const startQuiz = (quizName) => {
    setSelectedQuiz(quizName);
    setCurrentLevel(0);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setChecked(false);
  };

  const handleCheck = () => {
    const level = levels[currentLevel];
    const quizData = quizzes[selectedQuiz].questions[level];
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setChecked(true);
  };

  const handleNext = () => {
    const level = levels[currentLevel];
    const quizData = quizzes[selectedQuiz].questions[level];

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setChecked(false);
    } else {
      // level completed check score
      if (score >= MIN_CUTOFF) {
        if (currentLevel + 1 < levels.length) {
          // move to next level
          setCurrentLevel(currentLevel + 1);
          setCurrentQuestion(0);
          setScore(0);
          setSelectedOption(null);
          setChecked(false);
        } else {
          // all levels completed
          const newCompletion = { ...quizCompletion, [selectedQuiz]: true };
          setQuizCompletion(newCompletion);
          localStorage.setItem("quizCompletion", JSON.stringify(newCompletion));
          setShowResult(true);
        }
      } else {
        // failed level
        setShowResult(true);
      }
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
  };

  if (!selectedQuiz) {
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                {quizCompletion[quiz] && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                )}
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

  const level = levels[currentLevel];
  const quizData = quizzes[selectedQuiz].questions[level];

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
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="font-medium">
                  Level: {level.charAt(0).toUpperCase() + level.slice(1)}
                </span>
                <br />
                <span className="font-medium">
                  Question {currentQuestion + 1} / {quizData.length}
                </span>
              </div>
              <span className="font-medium">Score: {score}</span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{
                  width: `${
                    ((currentQuestion + (checked ? 1 : 0)) / quizData.length) *
                    100
                  }%`,
                }}
              />
            </div>

            <h2 className="text-xl font-semibold mb-6">
              {quizData[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {quizData[currentQuestion].options.map((option, i) => {
                let bgClass = "border border-gray-300 dark:border-slate-600";
                let hoverClass = "hover:bg-blue-50 dark:hover:bg-slate-700";
                if (checked) {
                  if (option === quizData[currentQuestion].answer)
                    bgClass = "bg-emerald-500";
                  else if (option === selectedOption) bgClass = "bg-red-500";
                  hoverClass = ""; //disabled hover effect
                } else if (option === selectedOption) {
                  bgClass = "bg-blue-400 border-blue-500";
                  hoverClass = ""; //disabled hover effect
                }
                return (
                  <button
                    key={i}
                    onClick={() => !checked && setSelectedOption(option)}
                    className={`block w-full rounded-xl px-4 py-3 transition duration-200 ${bgClass} ${hoverClass} cursor-pointer`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end mt-6 gap-3">
              {!checked && (
                <button
                  onClick={handleCheck}
                  disabled={selectedOption === null}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold disabled:opacity-50 cursor-pointer"
                >
                  Check
                </button>
              )}
              {checked && (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold cursor-pointer"
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
            {quizCompletion[selectedQuiz] ? (
              <>
                <h2 className="text-3xl font-bold mb-4">Quiz Completed! 🎉</h2>
                <p className="text-lg mb-6">
                  You have successfully passed all levels.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4">Level Failed</h2>
                <p className="text-lg mb-2">
                  Your Score: {score} / {quizData.length}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You need a score of {MIN_CUTOFF} or higher to pass this level.
                  Keep practicing! 💪
                </p>
              </>
            )}
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
