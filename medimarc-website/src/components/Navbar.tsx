import { useEffect, useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom"; // Regular Link for routing
import "../styles/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="/" className="logo-text">
            MEDIMARC
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="/#" className="nav-link">
            Home
            <div className="nav-link-underline"></div>
          </a>
          <RouterLink to="/products" className="nav-link">
            {" "}
            Products
            <div className="nav-link-underline"></div>
          </RouterLink>
          <a href="/#about-us" className="nav-link">
            {" "}
            About Us
            <div className="nav-link-underline"></div>
          </a>
          <a href="/#contact-us" className="nav-link">
            {" "}
            Contacts
            <div className="nav-link-underline"></div>
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-container">
            <nav className="mobile-nav-links">
              <a href="/#" className="nav-link">
                Home
                <div className="nav-link-underline"></div>
              </a>
              <RouterLink to="/products" className="mobile-nav-link">
                Products
              </RouterLink>
              <a href="/#about-us" className="mobile-nav-link">
                About Us
              </a>
              <a href="/#contact-us" className="mobile-nav-link">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
