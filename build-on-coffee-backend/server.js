// server.js - Backend server with Gemini integration for Vite project
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173", "https://build-on-coffee.vercel.app/"], // Vite dev server URLs
    credentials: true,
  })
);
app.use(express.json());

// Initialize Gemini with your API key (store in .env file)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// BuildOnCoffee context for the AI
const SYSTEM_PROMPT = `You are a helpful AI assistant for BuildOnCoffee, an open-source platform for discovering developer tools and CS learning resources. 

You can help users with:
- Data Structures, Algorithms, Operating Systems, Networks, Databases, and System Design courses
- Developer tools like SnapFolio (portfolio builder), code editors, version control, deployment platforms
- Information about contributing to the open-source project
- General guidance on computer science topics

Be friendly, helpful, and enthusiastic about learning. Use emojis appropriately and maintain a conversational tone. Always relate answers back to BuildOnCoffee resources when relevant.

Keep responses concise but informative, ideally 2-4 sentences unless more detail is specifically requested.`;

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Received message:", message);

    // Build conversation context
    const historyText = conversationHistory
      .map((msg) => `${msg.role.toUpperCase()}: ${msg.content}`)
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}\n\nConversation so far:\n${historyText}\n\nUSER: ${message}\nASSISTANT:`;

    // Call Gemini API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);

    const aiResponse = result.response.text();

    console.log("AI Response:", aiResponse);

    res.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    // Provide a helpful fallback response
    const fallbackResponse =
      "I'm having trouble connecting to the AI service right now. But I can still help! BuildOnCoffee offers courses in Data Structures, Algorithms, System Design, and more. We also have tools like SnapFolio for building portfolios. What specific topic would you like to explore?";

    res.status(500).json({
      success: false,
      error: "Failed to get AI response",
      fallback: fallbackResponse,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "BuildOnCoffee API is running",
    timestamp: new Date().toISOString(),
  });
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend is working!",
    geminiConfigured: !!process.env.GEMINI_API_KEY,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🤖 Gemini configured: ${!!process.env.GEMINI_API_KEY}`);
});
