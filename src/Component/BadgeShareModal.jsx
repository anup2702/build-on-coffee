/**
 * BadgeShareModal Component
 * 
 * A modal dialog that allows users to share their quiz completion badges
 * on social media platforms (LinkedIn, X/Twitter) or download as an image.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback to close the modal
 * @param {string} props.quizName - Name of the completed quiz
 * @param {number} props.score - User's score on the quiz
 * @param {number} props.totalQuestions - Total number of questions in the quiz
 */

import React, { useState, useRef } from "react";
import { X, Share2, Download } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import html2canvas from "html2canvas";

const BadgeShareModal = ({ 
  isOpen, 
  onClose, 
  quizName, 
  score, 
  totalQuestions 
}) => {
  // State management
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Ref for badge element to capture as image
  const badgeElementRef = useRef(null);

  // Don't render if modal is closed
  if (!isOpen) return null;

  /**
   * Returns gradient colors for badge based on quiz topic
   * @param {string} topicName - Name of the quiz topic
   * @returns {string[]} Array of two hex color codes for gradient
   */
  const getBadgeGradientColors = (topicName) => {
    const colorPalette = {
      JavaScript: ["#F7DF1E", "#F0DB4F"],
      React: ["#61DAFB", "#5AC8FA"],
      "Node.js": ["#68A063", "#87C462"],
      CSS: ["#264de4", "#2965f1"],
      HTML: ["#e34c26", "#f06529"],
      DSA: ["#4A90E2", "#5CA3E5"],
      TypeScript: ["#3178C6", "#4B92D4"],
      Python: ["#3776AB", "#4B8BBE"],
      Java: ["#007396", "#0094CC"],
      Database: ["#8E44AD", "#A569BD"],
      default: ["#667EEA", "#764BA2"],
    };

    return colorPalette[topicName] || colorPalette.default;
  };

  // Get colors for current quiz
  const badgeColors = getBadgeGradientColors(quizName);
  
  // Calculate percentage score
  const percentageScore = Math.round((score / totalQuestions) * 100);

  /**
   * Generates shareable text for social media posts
   * @returns {string} Formatted text with emoji and hashtags
   */
  const generateShareableText = () => {
    return `🎉 I just completed the ${quizName} Quiz on Build On Coffee!\n\n📊 Score: ${score}/${totalQuestions} (${percentageScore}%)\n🏆 Keep learning, keep growing!\n\n#BuildOnCoffee #WebDevelopment #${quizName.replace(/\s+/g, "")}`;
  };

  // Platform share URLs
  const websiteUrl = "https://buildoncoffee.tech/quiz";
  const shareableText = generateShareableText();

  /**
   * Opens LinkedIn share dialog in a new window
   */
  const handleLinkedInShare = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      websiteUrl
    )}&summary=${encodeURIComponent(shareableText)}`;
    
    window.open(
      linkedInShareUrl, 
      "_blank", 
      "width=600,height=600,noopener,noreferrer"
    );
  };

  /**
   * Opens X (Twitter) share dialog in a new window
   */
  const handleXTwitterShare = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareableText
    )}&url=${encodeURIComponent(websiteUrl)}`;
    
    window.open(
      twitterShareUrl, 
      "_blank", 
      "width=600,height=600,noopener,noreferrer"
    );
  };

  /**
   * Converts the badge element to an image and downloads it
   * Uses html2canvas library to capture the DOM element
   */
  const handleBadgeDownload = async () => {
    if (!badgeElementRef.current) {
      console.error("Badge element reference not found");
      return;
    }

    setIsDownloading(true);

    try {
      // Convert badge element to canvas
      const canvas = await html2canvas(badgeElementRef.current, {
        backgroundColor: null, // Transparent background
        scale: 2, // Higher quality (2x resolution)
        logging: false, // Disable console logs
      });

      // Create download link
      const downloadLink = document.createElement("a");
      const sanitizedQuizName = quizName.replace(/\s+/g, "_");
      downloadLink.download = `${sanitizedQuizName}_Badge.png`;
      downloadLink.href = canvas.toDataURL("image/png");
      
      // Trigger download
      downloadLink.click();
    } catch (error) {
      console.error("Error downloading badge:", error);
      // TODO: Show error notification to user
    } finally {
      setIsDownloading(false);
    }
  };

  /**
   * Handles closing modal on backdrop click
   * @param {Event} event - Click event
   */
  const handleBackdropClick = (event) => {
    // Only close if clicking the backdrop, not the modal content
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="badge-modal-title"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <h2 
            id="badge-modal-title"
            className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
          >
            🎉 Congratulations!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            You've earned a badge! Share your achievement.
          </p>
        </div>

        {/* Badge Preview - This element will be captured as image */}
        <div
          ref={badgeElementRef}
          className="mb-6 p-8 rounded-2xl text-center"
          style={{
            background: `linear-gradient(135deg, ${badgeColors[0]}, ${badgeColors[1]})`,
          }}
          aria-label={`${quizName} quiz completion badge`}
        >
          {/* Trophy Icon */}
          <div className="text-6xl mb-4" role="img" aria-label="Trophy">
            🏆
          </div>

          {/* Quiz Name */}
          <h3 className="text-2xl font-bold text-white mb-2">
            {quizName} Quiz
          </h3>

          {/* Badge Level */}
          <div className="text-white/90 text-lg mb-3">Master</div>

          {/* Score Display */}
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
            <span className="text-white font-bold text-xl">
              {score}/{totalQuestions}
            </span>
            <span className="text-white/90 ml-2">({percentageScore}%)</span>
          </div>

          {/* Platform Branding */}
          <div className="mt-4 text-white/80 text-sm">Build On Coffee</div>
        </div>

        {/* Share Action Buttons */}
        <div className="space-y-3">
          {/* LinkedIn Share Button */}
          <button
            onClick={handleLinkedInShare}
            className="w-full flex items-center justify-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white py-3 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
            Share on LinkedIn
          </button>

          {/* X (Twitter) Share Button */}
          <button
            onClick={handleXTwitterShare}
            className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Share on X (formerly Twitter)"
          >
            <FaXTwitter className="w-5 h-5" />
            Share on X
          </button>

          {/* Download Badge Button */}
          <button
            onClick={handleBadgeDownload}
            disabled={isDownloading}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Download badge as image"
          >
            <Download className="w-5 h-5" />
            {isDownloading ? "Downloading..." : "Download Badge"}
          </button>
        </div>

        {/* Skip Button */}
        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default BadgeShareModal;