import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Use your actual logo path

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Reliant Renewables" />
        </Link>
        
        {/* Hamburger Icon */}
        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop Nav */}
        <div className="nav-center nav-desktop">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/projects">PROJECTS</Link>
        </div>
        <div className="nav-buttons nav-desktop">
          <Link to="/calculator" className="calculator-button">
            Calculator
          </Link>
          <Link to="/contact" className="contact-button">
            Contact us
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}>
          <div className="nav-center nav-mobile">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </div>
          <div className="nav-buttons nav-mobile">
            <Link to="/calculator" className="calculator-button" onClick={() => setMenuOpen(false)}>
              Calculator
            </Link>
            <Link to="/contact" className="contact-button" onClick={() => setMenuOpen(false)}>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
