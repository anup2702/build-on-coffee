import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call here
    setSubmitted(true);
  };

  return (
  <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-12 transition-colors duration-300">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white dark:bg-slate-800 shadow-lg rounded-2xl overflow-hidden transition-colors duration-300">

    {/* Left Column */}
    <div className="bg-cyan-50 dark:bg-gray-800 p-8 flex flex-col justify-between border-r border-cyan-200 dark:border-gray-700">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 dark:text-white mb-4">
          Let’s Chat Over Coffee ☕
        </h2>
        <p className="text-cyan-700 dark:text-gray-200 mb-6">
          Whether it’s a project idea, collaboration request, or feedback — we’d love to hear from you.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-cyan-500 dark:text-gray-300" />
            <a
              href="mailto:contact@buildoncoffee.dev"
              className="text-blue-700 dark:text-white hover:underline"
            >
              buildoncoffee@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-cyan-500 dark:text-gray-300" />
            <span className="text-blue-700 dark:text-white">
              +91 1234567890
            </span>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-blue-700 dark:text-white mb-3">
            Connect with us
          </h3>
          <div className="flex gap-4 text-blue-700 dark:text-gray-300">
            <a href="https://github.com/anup2702/build-on-coffee" className="hover:text-cyan-500 dark:hover:text-white"><Github /></a>
            <a href="https://www.linkedin.com/company/build-on-coffee/" className="hover:text-cyan-500 dark:hover:text-white"><Linkedin /></a>
            <a href="https://x.com/buildoncoffee" className="hover:text-cyan-500 dark:hover:text-white"><Twitter /></a>
          </div>
        </div>
      </div>

    <div className="mt-12">
  <img
    src="perpex.png"
    alt="Coffee Cup"
    className="w-24 opacity-80 
               [filter:brightness(0)_invert(25%)_sepia(100%)_saturate(3000%)_hue-rotate(190deg)_contrast(0.9)]
               dark:invert dark:brightness-0 dark:contrast-100"
  />
</div>


    </div>

    {/* Right Column */}
    <div className="p-8">
      {!submitted ? (
        <>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white mb-4">
            Brew Your Message
          </h2>
          <p className="text-cyan-700 dark:text-gray-300 mb-6">
            Tell us what’s on your mind, and we’ll get back to you within 48 hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="w-full border border-cyan-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-blue-700 dark:text-white p-3 rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              className="w-full border border-cyan-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-blue-700 dark:text-white p-3 rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="subject"
              className="w-full border border-cyan-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-blue-700 dark:text-white p-3 rounded-lg"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="collaboration">Collaboration</option>
              <option value="feedback">Feedback</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="5"
              className="w-full border border-cyan-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-blue-700 dark:text-white p-3 rounded-lg"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="
                w-full 
                bg-blue-600
                dark:bg-green-700
                text-white 
                p-3 
                rounded-lg 
                hover:bg-blue-800 
                dark:hover:bg-green-900 
                transition
              "
            >
              Send Message
            </button>
          </form>

          <div
            className="
              mt-6 
              bg-cyan-50 
              dark:bg-gray-900
              p-4 
              rounded-lg 
              text-sm 
              text-blue-700
              dark:text-white
              shadow-md
            "
          >
            <p>You’ll hear back via the email you provided.</p>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-[#F4E3C1] mb-2">
            Thanks for Reaching Out! ☕
          </h2>
          <p className="text-cyan-700 dark:text-[#CBBFA5] max-w-md">
            We’ll brew a reply and get back to you shortly.
          </p>
        </div>
      )}
    </div>
  </div>
</section>


  );
}
