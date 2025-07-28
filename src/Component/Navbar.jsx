import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/contribute", label: "Contribute" },
    { to: "/free-certificates", label: "Free Certificate Courses" },
  ];
  const topLinks = [
    { key: "community", label: "Join our community" },
  ];

  const handleScroll = (key) => (e) => {
    if (location.pathname === "/" && scrollRefs && scrollRefs[key] && scrollRefs[key].current) {
      e.preventDefault();
      scrollRefs[key].current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        if (scrollRefs && scrollRefs[key] && scrollRefs[key].current) {
          scrollRefs[key].current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
<nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-2 rounded-xl">
      <div className="flex items-center gap-6 w-full sm:w-auto justify-between">
        <Link to="/" className="text-2xl font-bold">BuildOnCoffee</Link>
      </div>
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-gray-700 px-3 py-1 rounded transition hover:bg-gray-200 hover:text-black font-medium ${location.pathname === link.to ? 'bg-gray-200 text-black' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        {topLinks.map((link) => (
          <a
            key={link.key}
            href={`#${link.key}`}
            onClick={handleScroll(link.key)}
            className={`text-gray-600 px-3 py-1 rounded transition hover:bg-gray-100 hover:text-black font-medium cursor-pointer ${location.pathname === "/" ? '' : ''} ${link.key === 'community' ? 'bg-black text-white hover:bg-gray-800 font-semibold shadow-md' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;