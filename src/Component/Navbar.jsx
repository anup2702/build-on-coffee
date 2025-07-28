import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/contribute", label: "Contribute" },
    { to: "/free-certificates", label: "Free Certificate Courses" },
  ];
  const topLinks = [
    { key: "learn", label: "Learn" },
    { key: "tools", label: "Tools" },
    { key: "community", label: "Join our community" },
  ];

  const handleScroll = (key) => (e) => {
    setMenuOpen(false);
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
    <nav className="bg-white shadow p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <Link to="/">
          <img
            src="./perpex.png"
            alt="BuildOnCoffee Logo"
            className="w-12 h-12"
            /></Link>
          <Link to="/" className="text-2xl font-bold text-gray-900">
            BuildOnCoffee
          </Link>
        </div>
        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Desktop Nav */}
        <div className="hidden sm:flex flex-wrap gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-gray-700 px-3 py-1 rounded transition hover:bg-gray-200 hover:text-black font-medium ${location.pathname === link.to ? 'bg-gray-200 text-black' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          {topLinks.map((link) => (
            <a
              key={link.key}
              href={`#${link.key}`}
              onClick={handleScroll(link.key)}
              className={`text-gray-600 px-3 py-1 rounded transition hover:bg-gray-100 hover:text-black font-medium cursor-pointer ${link.key === 'community' ? 'bg-black text-white hover:bg-gray-800 font-semibold shadow-md' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block text-gray-700 px-3 py-2 rounded transition hover:bg-gray-200 hover:text-black font-medium ${location.pathname === link.to ? 'bg-gray-200 text-black' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          {topLinks.map((link) => (
            <a
              key={link.key}
              href={`#${link.key}`}
              onClick={handleScroll(link.key)}
              className={`block text-gray-600 px-3 py-2 rounded transition hover:bg-gray-100 hover:text-black font-medium cursor-pointer ${link.key === 'community' ? 'bg-black text-white hover:bg-gray-800 font-semibold shadow-md' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;