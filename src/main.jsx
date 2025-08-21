import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Component/context/ThemeContext.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <ScrollToTop />
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
