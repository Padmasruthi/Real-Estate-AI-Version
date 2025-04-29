import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaPhone } from "react-icons/fa";
import "../Navbar/navbar.css";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking on a link
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Menu Button */}
        <button 
          className="menu" 
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="d-sm-none d-md-block menu-text">MENU</span>
          <TbMenuDeep size={24} />
        </button>
      </div>

      {/* Fullscreen Menu with Backdrop */}
      <div className={`nav-menu-backdrop ${isOpen ? "open" : ""}`} onClick={closeMenu}></div>
      
      <nav className={`nav-menu ${isOpen ? "open" : ""}`} aria-label="Main navigation">
        {/* Close Button */}
        <button 
          className="close-icon" 
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span>CLOSE</span> <FiX size={24} />
        </button>

        {/* Navigation Links */}
        <ul className="nav-links d-flex gap-5 align-items-center">
          {[
            { path: "/", label: "HOME" },
            { path: "/about", label: "ABOUT" },
            { path: "/services", label: "SERVICE" },
            { path: "/interpreting-service", label: "INTERPRETING SERVICE" },
            { path: "/relocation-service", label: "RELOCATION SERVICE" },
            { path: "/contact", label: "CONTACT" }
          ].map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className="text-decoration-none text-secondary nav-items"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <hr className="header-hr" />
        
        {/* Social Media Icons */}
        <div className="header-social-icons gap-3">
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
          <a href="#" aria-label="Phone"><FaPhone /></a>
        </div>
      </nav>
    </header>
  );
}