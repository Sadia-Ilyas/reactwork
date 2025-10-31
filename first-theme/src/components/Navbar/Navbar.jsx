import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbarstyle.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.containerFlex}`}>
        {/* Logo - always left */}
        <div className={styles.logoContainer}>
          <img src="/assets/imgs/logo.png" alt="logo" className={styles.logo} />
        </div>

        {/* Nav Menu */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <div className={styles.list}>
            <NavLink to="/" className={styles.listItem}>Home</NavLink>
            <NavLink to="/about" className={styles.listItem}>About</NavLink>
            <NavLink to="/services" className={styles.listItem}>Services</NavLink>
            <NavLink to="/contact" className={styles.listItem}>Contact</NavLink>
            <NavLink to="/privacypolicy" className={styles.listItem}>Privacy Policy</NavLink>
          </div>
        </nav>

        {/* Right Section → burger + icons */}
        <div className={styles.rightSection}>
          {/* Burger Icon */}
          <div
            className={styles.menuIcon}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          {/* Right Icons */}
          <div className={styles.rightIcons}>
            <i className={`fas fa-search ${styles.icon}`}></i>
            <i className={`fas fa-user ${styles.icon}`}></i>
            <i className={`fas fa-phone-alt ${styles.icon}`}></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
