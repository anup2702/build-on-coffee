import React from "react";

const socialLinks = [
  {
    href: "https://instagram.com/yourprofile",
    label: "Instagram",
    icon: (
      <i className="fab fa-instagram text-xl" />
    ),
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: (
      <i className="fab fa-linkedin text-xl" />
    ),
  },
  {
    href: "https://discord.com/invite/yourinvite",
    label: "Discord",
    icon: (
      <i className="fab fa-discord text-xl" />
    ),
  },
  {
    href: "https://twitter.com/yourprofile",
    label: "Twitter",
    icon: (
      <i className="fab fa-twitter text-xl" />
    ),
  },
];

const Footer = () => (
  <footer className="relative bg-gradient-to-t from-gray-900 via-black to-gray-900 text-white py-10 px-4 border-t mt-12 shadow-inner">
    <div className="absolute top-0 left-0 w-32 h-32 bg-black opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-32 h-32 bg-black opacity-30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="flex justify-center gap-6 mb-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <p className="text-sm mb-2">
        This website is open source.{" "}
        <a
          href="https://github.com/anup2702/build-on-coffee"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-300 font-medium"
        >
          View on GitHub
        </a>
      </p>

      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold">BuildOnCoffee</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

// Optional animated Community Section
export const CommunitySection = () => (
  <section
    id="community"
    className="max-w-2xl mx-auto py-16 px-4 text-center animate-fade-in-up"
  >
    <h2 className="text-3xl font-bold mb-4 text-gray-900">
      Join Our Community
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      Connect, share, and grow with BuildOnCoffee.
    </p>
    <div className="flex justify-center gap-6 mb-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-600 hover:text-black transition-transform duration-300 transform hover:scale-125"
        >
          {link.icon}
        </a>
      ))}
    </div>
    <a
      href="https://discord.com/invite/yourinvite"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition font-semibold text-sm shadow-md"
    >
      Join our community
    </a>
  </section>
);

export default Footer;
