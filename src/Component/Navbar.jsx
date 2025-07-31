import { useState , useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Mail,
  UserPlus,
  Award,
  MoonStar,
  Users,
  Coffee,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-theme");
  };

  const navLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
    { to: "/contribute", label: "Contribute", icon: <UserPlus className="w-4 h-4" /> },
    { to: "/free-certificates", label: "Certificates", icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <header className="w-full bg-white border-b navbar border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-300/20 backdrop-blur-lg shadow-md border border-blue-200/30 w-fit">
            <Coffee className="w-6 h-6 text-blue-500" />
          </div>
          <div className="leading-tight">
            <h1
              className="text-xl font-extrabold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0d9dadff, #17c8c8ee, #0f7ec8ff)",
              }}
            >
              BuildOnCoffee
            </h1>
            <p className="text-xs text-gray-500">Code • Learn • Create</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 px-4 py-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-300/20 backdrop-blur-lg border border-blue-200/30 shadow text-blue-500"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}

          {/* Theme Toggle Button (Desktop) */}
          <button className="p-2 rounded-full transition" onClick={toggleDarkMode}>
            <MoonStar className="w-5 h-5 toggle-dark-mode-icon" />
          </button>
        </nav>

        {/* Mobile Icons (Menu + Dark Toggle) */}
        <div className="md:hidden flex items-center gap-3 px-4 py-2">
          {/* Hamburger icon */}
          <button
            className="p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>

          {/* Dark mode toggle (Mobile) */}
          <button className="p-2 rounded-full transition" onClick={toggleDarkMode}>
            <MoonStar className="w-5 h-5 toggle-dark-mode-icon" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://discord.com/invite/yourinvite"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Join Community
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
