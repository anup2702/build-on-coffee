import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_USER_ID;

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-theme");
    setIsDarkMode(isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDarkMode(document.body.classList.contains("dark-theme"));
        }
      });
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus({ type: "success", msg: "Message sent successfully!" });
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus({ type: "error", msg: "Failed to send message. Please try again." });
          setLoading(false);
        }
      );
  };

  return (
    <section className={`max-w-xl mx-auto py-16 px-4 animate-fade-in transition-all duration-500 ${
      isDarkMode ? "text-white" : "text-gray-900"
    }`}>
      <h2 className={`text-3xl font-bold mb-4 text-center ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}>Contact Us</h2>
      <p className={`mb-8 text-center ${
        isDarkMode ? "text-gray-300" : "text-gray-600"
      }`}>
        Have a question, suggestion, or want to contribute? Fill out the form below and we'll get back to you!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`shadow rounded-lg p-8 flex flex-col gap-4 transition-all duration-500 ${
          isDarkMode 
            ? "bg-gray-800/50 border border-gray-700/50" 
            : "bg-white"
        }`}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`border p-3 rounded focus:outline-none focus:ring-2 transition ${
            isDarkMode 
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "border-gray-300 focus:ring-black"
          }`}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className={`border p-3 rounded focus:outline-none focus:ring-2 transition ${
            isDarkMode 
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "border-gray-300 focus:ring-black"
          }`}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Subject / Title"
          className={`border p-3 rounded focus:outline-none focus:ring-2 transition ${
            isDarkMode 
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "border-gray-300 focus:ring-black"
          }`}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={`border p-3 rounded focus:outline-none focus:ring-2 transition ${
            isDarkMode 
              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500" 
              : "border-gray-300 focus:ring-black"
          }`}
          rows={4}
          required
        />
        <button
          type="submit"
          className={`py-2 rounded transition ${
            isDarkMode 
              ? "bg-blue-600 text-white hover:bg-blue-700" 
              : "bg-black text-white hover:bg-gray-800"
          } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <div
            className={`text-center mt-2 font-medium ${
              status.type === "success" 
                ? isDarkMode ? "text-green-400" : "text-green-600" 
                : isDarkMode ? "text-red-400" : "text-red-600"
            }`}
          >
            {status.msg}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
