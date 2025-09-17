import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbarstyle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container container-flex">
        {/* Logo - always left */}
        <div className="logo-container">
          <img src="/assets/imgs/logo.png" alt="logo" className="logo" />
        </div>

        {/* Nav Menu */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <div className="list">
            <NavLink to="/" className="list-item">Home</NavLink>
            <NavLink to="/about" className="list-item">About</NavLink>
            <NavLink to="/services" className="list-item">Services</NavLink>
            <NavLink to="/contact" className="list-item">Contact</NavLink>
            <NavLink to="/privacypolicy" className="list-item">Privacy Policy</NavLink>
          </div>
        </nav>

        {/* Right Section → burger + icons */}
        <div className="right-section">
          {/* Burger Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          {/* Right Icons */}
          <div className="right-icons">
            <i className="fas fa-search icons"></i>
            <i className="fas fa-user icons"></i>
            <i className="fas fa-phone-alt icons"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
