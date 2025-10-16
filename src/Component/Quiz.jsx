/**
 * Quiz Component
 * 
 * Main quiz interface that manages quiz selection, question navigation,
 * scoring, and badge generation. Supports multiple difficulty levels
 * (beginner, intermediate, advanced) for each quiz topic.
 * 
 * Features:
 * - Multi-level quiz progression
 * - Score tracking across levels
 * - Badge generation on completion
 * - Login prompt for unauthenticated users
 * - Badge sharing via social media
 * 
 * @component
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, CheckCircle } from "lucide-react";
import { useAuth } from "../lib/useAuth";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import BadgeShareModal from "./BadgeShareModal";

// Import all quiz data
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

// Constants
const QUIZ_DIFFICULTY_LEVELS = ["beginner", "intermediate", "advanced"];
const MINIMUM_PASSING_SCORE = 7; // 70% passing threshold
const LOCAL_STORAGE_KEY_QUIZ_COMPLETION = "quizCompletion";

/**
 * Quiz configuration object
 * Maps quiz names to their question sets, icons, and descriptions
 */
const QUIZ_CONFIGURATION = {
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
    description: "Test your JavaScript knowledge from basics to advanced concepts.",
  },
  Java: {
    questions: javaQuestions,
    icon: <Code className="w-8 h-8 text-indigo-700" />,
    description: "Test your Java knowledge from basics to advanced concepts.",
  },
  React: {
    questions: reactQuestions,
    icon: <Code className="w-8 h-8 text-sky-500" />,
    description: "Test your React knowledge from fundamentals to advanced topics.",
  },
  "Node.js": {
    questions: nodejsQuestions,
    icon: <Code className="w-8 h-8 text-green-500" />,
    description: "Test your Node.js knowledge from core fundamentals to practical concepts.",
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
    description: "Test your knowledge of the Node.js web application framework.",
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
  "Responsive Design": {
    questions: responsiveDesignQuiz.questions,
    icon: <Code className="w-8 h-8 text-blue-500" />,
    description: "Test your knowledge of responsive web design.",
  },
  "State Management": {
    questions: stateManagementQuiz.questions,
    icon: <Code className="w-8 h-8 text-purple-500" />,
    description: "Test your knowledge of state management concepts.",
  },
  "Design Patterns": {
    questions: designPatternsQuiz.questions,
    icon: <Code className="w-8 h-8 text-purple-500" />,
    description: "Test your knowledge of Design Patterns in JavaScript & React.",
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
  Caching: {
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
  },
  "Algorithms & Problem Solving": {
    questions: algorithmsAndProblemSolvingQuiz.questions,
    icon: <Code className="w-8 h-8 text-red-500" />,
    description: "Test your knowledge of algorithms and problem solving.",
  },
};

const Quiz = () => {
  // Authentication and navigation hooks
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Quiz state management
  const [selectedQuizName, setSelectedQuizName] = useState(null);
  const [currentDifficultyLevelIndex, setCurrentDifficultyLevelIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentLevelScore, setCurrentLevelScore] = useState(0);
  const [shouldShowResult, setShouldShowResult] = useState(false);
  const [selectedAnswerOption, setSelectedAnswerOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState({});
  
  // Badge-related state
  const [shouldShowBadgeModal, setShouldShowBadgeModal] = useState(false);
  const [shouldShowLoginPrompt, setShouldShowLoginPrompt] = useState(false);
  const [finalTotalScore, setFinalTotalScore] = useState(0);
  const [accumulatedScoreAcrossLevels, setAccumulatedScoreAcrossLevels] = useState(0);

  /**
   * Load completed quizzes from localStorage on component mount
   */
  useEffect(() => {
    const storedCompletionData = localStorage.getItem(LOCAL_STORAGE_KEY_QUIZ_COMPLETION);
    
    if (storedCompletionData) {
      try {
        const parsedData = JSON.parse(storedCompletionData);
        setCompletedQuizzes(parsedData);
      } catch (error) {
        console.error("Error parsing quiz completion data:", error);
      }
    }
  }, []);

  /**
   * Saves a badge to the Supabase database for authenticated users
   * 
   * @param {string} quizName - Name of the completed quiz
   * @param {number} userScore - User's total score
   * @param {number} totalQuestions - Total number of questions
   * @returns {Promise<Object|null>} Badge data or null if error
   */
  const saveBadgeToDatabase = async (quizName, userScore, totalQuestions) => {
    if (!user) {
      console.warn("Cannot save badge: User not authenticated");
      return null;
    }

    try {
      const badgeData = {
        user_id: user.id,
        quiz_name: quizName,
        badge_type: "completion",
        score: userScore,
        total_questions: totalQuestions,
        earned_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from("quiz_badges")
        .insert([badgeData])
        .select();

      if (error) {
        console.error("Error saving badge to database:", error);
        return null;
      }

      console.log("Badge saved successfully:", data);
      return data[0];
    } catch (error) {
      console.error("Unexpected error in saveBadgeToDatabase:", error);
      return null;
    }
  };

  /**
   * Initializes a new quiz session
   * Resets all quiz-related state variables
   * 
   * @param {string} quizName - Name of the quiz to start
   */
  const initializeQuizSession = (quizName) => {
    setSelectedQuizName(quizName);
    setCurrentDifficultyLevelIndex(0);
    setCurrentQuestionIndex(0);
    setCurrentLevelScore(0);
    setShouldShowResult(false);
    setSelectedAnswerOption(null);
    setIsAnswerChecked(false);
    setShouldShowLoginPrompt(false);
    setShouldShowBadgeModal(false);
    setFinalTotalScore(0);
    setAccumulatedScoreAcrossLevels(0);
  };

  /**
   * Validates the selected answer and updates score
   */
  const handleAnswerValidation = () => {
    const currentDifficultyLevel = QUIZ_DIFFICULTY_LEVELS[currentDifficultyLevelIndex];
    const currentQuizData = QUIZ_CONFIGURATION[selectedQuizName].questions[currentDifficultyLevel];
    const correctAnswer = currentQuizData[currentQuestionIndex].answer;

    // Check if selected answer is correct
    if (selectedAnswerOption === correctAnswer) {
      setCurrentLevelScore(currentLevelScore + 1);
    }

    setIsAnswerChecked(true);
  };

  /**
   * Handles navigation to next question or level
   * Manages level progression and quiz completion logic
   */
  const handleNextQuestion = async () => {
    const currentDifficultyLevel = QUIZ_DIFFICULTY_LEVELS[currentDifficultyLevelIndex];
    const currentQuizData = QUIZ_CONFIGURATION[selectedQuizName].questions[currentDifficultyLevel];
    const totalQuestionsInCurrentLevel = currentQuizData.length;

    // Check if there are more questions in current level
    if (currentQuestionIndex + 1 < totalQuestionsInCurrentLevel) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerOption(null);
      setIsAnswerChecked(false);
    } else {
      // Level completed - check if user passed
      const didPassLevel = currentLevelScore >= MINIMUM_PASSING_SCORE;

      if (didPassLevel) {
        const hasMoreLevels = currentDifficultyLevelIndex + 1 < QUIZ_DIFFICULTY_LEVELS.length;

        if (hasMoreLevels) {
          // Progress to next difficulty level
          setAccumulatedScoreAcrossLevels(accumulatedScoreAcrossLevels + currentLevelScore);
          setCurrentDifficultyLevelIndex(currentDifficultyLevelIndex + 1);
          setCurrentQuestionIndex(0);
          setCurrentLevelScore(0);
          setSelectedAnswerOption(null);
          setIsAnswerChecked(false);
        } else {
          // All levels completed - quiz finished!
          await handleQuizCompletion();
        }
      } else {
        // User failed the level
        setShouldShowResult(true);
      }
    }
  };

  /**
   * Handles quiz completion logic
   * Calculates final score, saves badge, and shows appropriate UI
   */
  const handleQuizCompletion = async () => {
    // Calculate total score across all levels
    const totalScoreAcrossAllLevels = currentLevelScore + accumulatedScoreAcrossLevels;
    
    // Calculate total questions in quiz
    const totalQuestionsInQuiz = QUIZ_DIFFICULTY_LEVELS.reduce(
      (total, level) => total + QUIZ_CONFIGURATION[selectedQuizName].questions[level].length,
      0
    );

    setFinalTotalScore(totalScoreAcrossAllLevels);

    // Mark quiz as completed in localStorage
    const updatedCompletedQuizzes = { 
      ...completedQuizzes, 
      [selectedQuizName]: true 
    };
    setCompletedQuizzes(updatedCompletedQuizzes);
    localStorage.setItem(
      LOCAL_STORAGE_KEY_QUIZ_COMPLETION, 
      JSON.stringify(updatedCompletedQuizzes)
    );

    // Handle badge generation based on authentication status
    if (isAuthenticated && user) {
      // User is logged in - save badge to database
      await saveBadgeToDatabase(
        selectedQuizName, 
        totalScoreAcrossAllLevels, 
        totalQuestionsInQuiz
      );
      setShouldShowBadgeModal(true);
    } else {
      // User is not logged in - prompt to login
      setShouldShowLoginPrompt(true);
    }

    setShouldShowResult(true);
  };

  /**
   * Resets quiz state and returns to quiz selection screen
   */
  const handleResetQuiz = () => {
    setSelectedQuizName(null);
  };

  /**
   * Calculates total number of questions in the selected quiz
   * @returns {number} Total question count
   */
  const getTotalQuestionsInQuiz = () => {
    if (!selectedQuizName) return 0;
    
    return QUIZ_DIFFICULTY_LEVELS.reduce(
      (total, level) => 
        total + QUIZ_CONFIGURATION[selectedQuizName].questions[level].length,
      0
    );
  };

  // Render quiz selection screen if no quiz is selected
  if (!selectedQuizName) {
    return (
      <div className="min-h-screen py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header Section */}
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

          {/* Quiz Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {Object.keys(QUIZ_CONFIGURATION).map((quizName, index) => {
              const quiz = QUIZ_CONFIGURATION[quizName];
              const isCompleted = completedQuizzes[quizName];

              return (
                <motion.div
                  key={quizName}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => initializeQuizSession(quizName)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      initializeQuizSession(quizName);
                    }
                  }}
                  aria-label={`Start ${quizName} quiz`}
                >
                  {/* Completion Badge */}
                  {isCompleted && (
                    <div className="absolute top-4 right-4" aria-label="Quiz completed">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  )}

                  {/* Quiz Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                      {quiz.icon}
                    </div>
                  </div>

                  {/* Quiz Title */}
                  <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    {quizName} Quiz
                  </h3>

                  {/* Quiz Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {quiz.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    );
  }

  // Get current quiz data
  const currentDifficultyLevel = QUIZ_DIFFICULTY_LEVELS[currentDifficultyLevelIndex];
  const currentQuizData = QUIZ_CONFIGURATION[selectedQuizName].questions[currentDifficultyLevel];
  const currentQuestion = currentQuizData[currentQuestionIndex];

  /**
   * Determines styling classes for answer options
   * @param {string} option - Answer option text
   * @returns {Object} Object containing CSS classes for styling
   */
  const getAnswerOptionStyling = (option) => {
    const correctAnswer = currentQuestion.answer;
    const isSelected = option === selectedAnswerOption;
    const isCorrect = option === correctAnswer;

    let backgroundClass = "border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700";
    let hoverClass = "hover:bg-blue-50 dark:hover:bg-slate-600";
    let textClass = "text-gray-900 dark:text-white";

    if (isAnswerChecked) {
      // Show correct/incorrect feedback after answer is checked
      if (isCorrect) {
        backgroundClass = "bg-emerald-500 border-emerald-500";
        textClass = "text-white";
      } else if (isSelected) {
        backgroundClass = "bg-red-500 border-red-500";
        textClass = "text-white";
      }
      hoverClass = ""; // Disable hover effect
    } else if (isSelected) {
      // Show selection state before checking
      backgroundClass = "bg-blue-400 border-blue-500";
      textClass = "text-white";
      hoverClass = ""; // Disable hover effect
    }

    return { backgroundClass, hoverClass, textClass };
  };

  // Render quiz interface or result screen
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        {!shouldShowResult ? (
          // Quiz Question Interface
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Quiz Header - Level and Score Info */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">
                  Level: {currentDifficultyLevel.charAt(0).toUpperCase() + currentDifficultyLevel.slice(1)}
                </span>
                <br />
                <span className="font-medium text-gray-900 dark:text-white">
                  Question {currentQuestionIndex + 1} / {currentQuizData.length}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                Score: {currentLevelScore}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    ((currentQuestionIndex + (isAnswerChecked ? 1 : 0)) / currentQuizData.length) * 100
                  }%`,
                }}
                role="progressbar"
                aria-valuenow={currentQuestionIndex + (isAnswerChecked ? 1 : 0)}
                aria-valuemin={0}
                aria-valuemax={currentQuizData.length}
              />
            </div>

            {/* Question Text */}
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {currentQuestion.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-4" role="radiogroup" aria-label="Answer options">
              {currentQuestion.options.map((option, index) => {
                const { backgroundClass, hoverClass, textClass } = getAnswerOptionStyling(option);

                return (
                  <button
                    key={index}
                    onClick={() => !isAnswerChecked && setSelectedAnswerOption(option)}
                    disabled={isAnswerChecked}
                    className={`block w-full rounded-xl px-4 py-3 transition duration-200 ${backgroundClass} ${hoverClass} ${textClass} cursor-pointer text-left disabled:cursor-not-allowed`}
                    role="radio"
                    aria-checked={option === selectedAnswerOption}
                    aria-label={`Option ${index + 1}: ${option}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 gap-3">
              {!isAnswerChecked && (
                <button
                  onClick={handleAnswerValidation}
                  disabled={selectedAnswerOption === null}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Check answer"
                >
                  Check
                </button>
              )}
              {isAnswerChecked && (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next question"
                >
                  Next
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          // Result Screen
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {completedQuizzes[selectedQuizName] ? (
              // Quiz Completed Successfully
              <>
                <div className="text-6xl mb-4" role="img" aria-label="Celebration">
                  🎉
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Quiz Completed!
                </h2>
                <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
                  You have successfully passed all levels.
                </p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  Final Score: {finalTotalScore} / {getTotalQuestionsInQuiz()}
                </p>

                {/* Login Prompt for Unauthenticated Users */}
                {shouldShowLoginPrompt && !isAuthenticated && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-3">
                      🔒 Save Your Achievement!
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">
                      Login to save your badge and share it on LinkedIn & X!
                    </p>
                    <button
                      onClick={() => navigate("/login")}
                      className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Login to Save Badge
                    </button>
                  </div>
                )}

                {/* Badge Earned Confirmation for Authenticated Users */}
                {isAuthenticated && !shouldShowLoginPrompt && (
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                      🏆 Badge Earned!
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Your achievement has been saved to your profile!
                    </p>
                  </div>
                )}
              </>
            ) : (
              // Quiz Failed
              <>
                <div className="text-6xl mb-4" role="img" aria-label="Disappointed">
                  😔
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Level Failed
                </h2>
                <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
                  Your Score: {currentLevelScore} / {currentQuizData.length}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  You need a score of {MINIMUM_PASSING_SCORE} or higher to pass this level.
                  Keep practicing! 💪
                </p>
              </>
            )}

            {/* Back to Quiz Selection Button */}
            <button
              onClick={handleResetQuiz}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Back to Quizzes
            </button>
          </motion.div>
        )}
      </div>

      {/* Badge Share Modal */}
      <BadgeShareModal
        isOpen={shouldShowBadgeModal}
        onClose={() => setShouldShowBadgeModal(false)}
        quizName={selectedQuizName || ""}
        score={finalTotalScore}
        totalQuestions={getTotalQuestionsInQuiz()}
      />
    </div>
  );
};

export default Quiz;