import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  // Replace these with your actual EmailJS values
  const SERVICE_ID = "your_service_id";
  const TEMPLATE_ID = "your_template_id";
  const PUBLIC_KEY = "your_public_key";

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
    <section className="max-w-xl mx-auto py-16 px-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-gray-600 mb-8 text-center">
        Have a question, suggestion, or want to contribute? Fill out the form below and we’ll get back to you!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow rounded-lg p-8 flex flex-col gap-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
          rows={4}
          required
        />
        <button
          type="submit"
          className={`bg-black text-white py-2 rounded hover:bg-gray-800 transition ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <div
            className={`text-center mt-2 font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"
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