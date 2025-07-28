import { useState } from "react"; // Import useState for managing mobile menu state
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ scrollRefs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to control the mobile menu visibility

  // Define navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/contribute", label: "Contribute" },
    { to: "/free-certificates", label: "Free Certificate Courses" },
  ];

  // Define top links (e.g., "Join our community" button)
  const topLinks = [
    { key: "community", label: "Join our community" , url: "https://discord.com/invite/yourinvite" },
  ];

  // Handler for smooth scrolling to sections on the homepage
  const handleScroll = (key) => (e) => {
    // If on the homepage and the scrollRef exists, prevent default link behavior and scroll
    if (location.pathname === "/" && scrollRefs && scrollRefs[key] && scrollRefs[key].current) {
      e.preventDefault();
      scrollRefs[key].current.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on the homepage, navigate to home and then scroll
      navigate("/", { replace: false });
      setTimeout(() => {
        if (scrollRefs && scrollRefs[key] && scrollRefs[key].current) {
          scrollRefs[key].current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to allow navigation to complete
    }
    setMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 rounded-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center justify-between w-full sm:w-auto">
          {/* Logo and Title */}
          <div className="flex items-center gap-2"> {/* Added gap for spacing between logo and text */}
            <Link to="/">

              <img
                src="/perpex.png"
                alt="BuildOnCoffee Logo"
                className="w-12 h-12 rounded-full"
              />
            </Link>
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-black transition">
              BuildOnCoffee
            </Link>
          </div>

          {/* Hamburger Menu Button (visible only on small screens) */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

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
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded transition font-semibold shadow-md cursor-pointer
                ${link.key === 'community' ? 'bg-black text-white hover:bg-gray-800' : 'text-gray-200 hover:bg-gray-100 hover:text-black'}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
              className={`block text-gray-700 px-3 py-2 rounded transition hover:bg-gray-200 hover:text-black font-medium ${location.pathname === link.to ? 'bg-gray-200 text-black' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          {topLinks.map((link) => (
            <a
              key={link.key}
              href={`#${link.key}`}
              onClick={handleScroll(link.key)} // handleScroll also closes the menu
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
