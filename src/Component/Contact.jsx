import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.name.value.trim();
    const email = form.current.user_email.value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!nameRegex.test(name)) {
      setStatus({ type: "error", msg: "Name must contain only alphabets." });
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus({ type: "error", msg: "Please enter a valid email starting with an alphabet." });
      return;
    }

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
      <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Contact Us</h2>
      <p className="text-gray-600 mb-8 text-center dark:text-gray-300">
        Have a question, suggestion, or want to contribute? Fill out the form below and we’ll get back to you!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white dark:bg-gray-800 shadow rounded-lg p-8 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Subject / Title"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition dark:bg-gray-700 dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition dark:bg-gray-700 dark:text-white"
          rows={4}
          required
        />
        <button
          type="submit"
          className={`bg-black text-white dark:bg-white dark:text-black py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <div
            className={`text-center mt-2 font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {status.msg}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
