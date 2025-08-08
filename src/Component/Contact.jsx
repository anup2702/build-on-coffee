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
    <section className="bg-[#F3E5D0] dark:bg-[#1A14178] py-12 px-4 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white dark:bg-[#2B1F1B] shadow-lg rounded-2xl overflow-hidden transition-colors duration-300">
        
        {/* Left Column */}
        <div className="bg-[#FFF8F0] dark:bg-[#1F1715] p-8 flex flex-col justify-between border-r border-[#E6D2B5] dark:border-[#3B2A25]">
          <div>
            <h2 className="text-2xl font-bold text-[#4B2E2A] dark:text-[#EADAC5] mb-4">
              Let’s Chat Over Coffee ☕
            </h2>
            <p className="text-[#6B4E42] dark:text-[#C2A896] mb-6">
              Whether it’s a project idea, collaboration request, or feedback — 
              we’d love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-[#C49A6C] dark:text-[#E0B98E]" />
                <a
                  href="mailto:contact@buildoncoffee.dev"
                  className="text-[#4B2E2A] dark:text-[#EADAC5] hover:underline"
                >
                  buildoncoffee@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#C49A6C] dark:text-[#E0B98E]" />
                <span className="text-[#4B2E2A] dark:text-[#EADAC5]">
                  +91 1234567890
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#4B2E2A] dark:text-[#EADAC5] mb-3">
                Connect with us
              </h3>
              <div className="flex gap-4 text-[#4B2E2A] dark:text-[#EADAC5]">
                <a href="https://github.com/anup2702/build-on-coffee" className="hover:text-[#C49A6C] dark:hover:text-[#E0B98E]"><Github /></a>
                <a href="https://www.linkedin.com/company/build-on-coffee/" className="hover:text-[#C49A6C] dark:hover:text-[#E0B98E]"><Linkedin /></a>
                <a href="https://x.com/buildoncoffee" className="hover:text-[#C49A6C] dark:hover:text-[#E0B98E]"><Twitter /></a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <img
              src="perpex.png"
              alt="Coffee Cup"
              className="w-24 opacity-70"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-[#4B2E2A] dark:text-[#EADAC5] mb-4">
                Brew Your Message
              </h2>
              <p className="text-[#6B4E42] dark:text-[#C2A896] mb-6">
                Tell us what’s on your mind, and we’ll get back to you within 48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className="w-full border border-[#E6D2B5] dark:border-[#3B2A25] bg-white dark:bg-[#2B1F1B] text-[#4B2E2A] dark:text-[#EADAC5] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49A6C] dark:focus:ring-[#E0B98E]"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className="w-full border border-[#E6D2B5] dark:border-[#3B2A25] bg-white dark:bg-[#2B1F1B] text-[#4B2E2A] dark:text-[#EADAC5] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49A6C] dark:focus:ring-[#E0B98E]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <select
                  name="subject"
                  className="w-full border border-[#E6D2B5] dark:border-[#3B2A25] bg-white dark:bg-[#2B1F1B] text-[#4B2E2A] dark:text-[#EADAC5] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49A6C] dark:focus:ring-[#E0B98E]"
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
                  className="w-full border border-[#E6D2B5] dark:border-[#3B2A25] bg-white dark:bg-[#2B1F1B] text-[#4B2E2A] dark:text-[#EADAC5] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49A6C] dark:focus:ring-[#E0B98E]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#4B2E2A] dark:bg-[#C49A6C] text-white dark:text-[#2B1F1B] p-3 rounded-lg hover:bg-[#6B4E42] dark:hover:bg-[#E0B98E] transition"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-6 bg-[#FFF8F0] dark:bg-[#1F1715] p-4 rounded-lg text-sm text-[#4B2E2A] dark:text-[#EADAC5]">
                <p> You’ll hear back via the email you provided.</p>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl font-bold text-[#4B2E2A] dark:text-[#EADAC5] mb-2">
                Thanks for Reaching Out! ☕
              </h2>
              <p className="text-[#6B4E42] dark:text-[#C2A896]">
                We’ll brew a reply and get back to you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
