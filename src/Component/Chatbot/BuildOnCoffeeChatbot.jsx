import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Coffee,
  Code,
  BookOpen,
  Settings,
  Lightbulb,
  ChevronDown,
  Bot,
  User,
} from "lucide-react";

const BuildOnCoffeeChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Sample knowledge base for BuildOnCoffee
  const knowledgeBase = {
    courses: {
      "data structures":
        "Our Data Structures course covers Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs with hands-on examples.",
      algorithms:
        "Learn sorting, searching, dynamic programming, and algorithm analysis with visual demonstrations.",
      "operating systems":
        "Understand processes, memory management, file systems, and concurrency in modern OS.",
      databases:
        "Master SQL, NoSQL, database design, indexing, and query optimization.",
      "system design":
        "Learn to design scalable systems, microservices architecture, and distributed systems.",
      networks:
        "Explore TCP/IP, HTTP, network protocols, and network security fundamentals.",
    },
    tools: {
      snapfolio:
        "SnapFolio is a portfolio builder tool available on our platform for creating stunning developer portfolios.",
      "code editor":
        "We recommend VS Code, Sublime Text, and Vim for different development needs.",
      "version control":
        "Git and GitHub are essential tools covered in our version control resources.",
      deployment:
        "Learn about Vercel, Netlify, and AWS for deploying your projects.",
    },
    general: {
      contribute:
        "You can contribute by forking our GitHub repository, creating a new branch, and submitting a pull request.",
      "getting started":
        "Start by exploring our Learn section, pick a topic that interests you, and follow the structured curriculum.",
      about:
        "BuildOnCoffee is an open-source platform for discovering developer tools and CS learning resources.",
      contact:
        "You can reach out through our GitHub repository or contribute directly to the project.",
    },
  };

  const quickSuggestions = [
    "What courses are available?",
    "How do I get started?",
    "Tell me about Data Structures",
    "What tools do you recommend?",
    "How can I contribute?",
    "System Design resources",
  ];

  const initialMessage = {
    id: 1,
    text: "Hey there! ☕ I'm your BuildOnCoffee AI assistant. I can help you find courses, tools, and resources for your CS journey. What would you like to explore today?",
    sender: "bot",
    timestamp: new Date(),
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([initialMessage]);
      setSuggestions(quickSuggestions.slice(0, 3));
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Check for course-related queries
    for (const [course, info] of Object.entries(knowledgeBase.courses)) {
      if (message.includes(course)) {
        return `📚 ${info} You can find detailed tutorials and resources in our Learn section!`;
      }
    }

    // Check for tool-related queries
    for (const [tool, info] of Object.entries(knowledgeBase.tools)) {
      if (message.includes(tool)) {
        return `🔧 ${info} Check out our Tools section for more developer resources!`;
      }
    }

    // Check for general queries
    for (const [keyword, info] of Object.entries(knowledgeBase.general)) {
      if (message.includes(keyword)) {
        return `💡 ${info}`;
      }
    }

    // Pattern matching for common questions
    if (
      message.includes("course") ||
      message.includes("learn") ||
      message.includes("study")
    ) {
      return "📖 We offer courses in Data Structures, Algorithms, Operating Systems, Networks, Databases, and System Design. Each course includes video tutorials, documentation, and practical exercises. Which topic interests you most?";
    }

    if (message.includes("tool") || message.includes("recommend")) {
      return "🛠️ Our Tools section features carefully curated developer tools including SnapFolio for portfolios, code editors, version control systems, and deployment platforms. What type of tool are you looking for?";
    }

    if (message.includes("help") || message.includes("start")) {
      return "🚀 I'd love to help! You can:\n• Explore our Learn section for CS courses\n• Check out Tools for developer resources\n• Contribute to our open-source project\n• Browse topics like Data Structures, Algorithms, or System Design\n\nWhat sounds most interesting to you?";
    }

    if (message.includes("coffee") || message.includes("☕")) {
      return "☕ Great choice! At BuildOnCoffee, we believe the best code is written with a good cup of coffee. While I can't brew coffee, I can definitely help you brew some knowledge! What would you like to learn today?";
    }

    // Default response with suggestions
    return "🤔 I'm not sure about that specific question, but I can help you with:\n• Finding courses and learning resources\n• Recommending developer tools\n• Information about contributing to the project\n• Guidance on CS topics\n\nTry asking me about Data Structures, System Design, or our available tools!";
  };

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Update suggestions based on user input
    const newSuggestions = quickSuggestions
      .filter((s) => !s.toLowerCase().includes(messageText.toLowerCase()))
      .slice(0, 3);
    setSuggestions(newSuggestions);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-pulse"
            aria-label="Open chat"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Coffee className="w-8 h-8" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">BuildOnCoffee AI</h3>
                <p className="text-xs opacity-90">Your CS Learning Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === "user"
                        ? "bg-amber-500 text-white"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-amber-500 text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm border border-gray-200"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">
                      {message.text}
                    </div>
                    <div
                      className={`text-xs mt-1 opacity-70 ${
                        message.sender === "user"
                          ? "text-amber-100"
                          : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {suggestions.length > 0 && (
            <div className="px-4 py-2 bg-white border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(suggestion)}
                    className="text-xs bg-amber-50 text-amber-700 hover:bg-amber-100 px-3 py-1 rounded-full transition-colors border border-amber-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about courses, tools, or how to get started..."
                  className="w-full p-3 pr-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  rows="1"
                  style={{ minHeight: "44px", maxHeight: "100px" }}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by BuildOnCoffee AI • Press Enter to send
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BuildOnCoffeeChatbot;
