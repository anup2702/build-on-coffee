import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    company: "TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "BuildOnCoffee has been a game-changer for my learning journey. The curated resources and community support helped me land my dream job.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Frontend Engineer",
    company: "StartupXYZ",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "The project ideas section gave me the perfect starting point for building my portfolio. Highly recommended for any developer!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "DevOps Engineer",
    company: "CloudTech",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "The roadmaps are incredibly well-structured. I went from beginner to intermediate in just 3 months following their learning paths.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Mobile Developer",
    company: "AppStudio",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Free certificates from top platforms? Yes, please! This platform saved me thousands on learning resources.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UI/UX Designer",
    company: "DesignHub",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content:
      "The community is amazing! I've connected with so many like-minded developers and learned from their experiences.",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Backend Developer",
    company: "DataFlow",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content:
      "The tools section introduced me to productivity tools I never knew existed. My development workflow has improved dramatically.",
    rating: 5,
  },
];

const Testimonials = forwardRef((props, ref) => {
  const { inView, ref: inViewRef } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // merge both refs
  const setRefs = (el) => {
    if (ref) ref.current = el; // navbar scroll ref
    inViewRef(el); // animation ref
  };

  return (
    <section
      ref={setRefs}
      id="testimonials"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full mb-8 border border-blue-200 dark:border-blue-800">
            <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
              Community Voices
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white">
            What Our Community Says
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Join thousands of developers who have transformed their careers with
            BuildOnCoffee.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            className="flex gap-8 testimonials-scroll"
            style={{ width: "max-content" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 w-96 bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-slate-600"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
