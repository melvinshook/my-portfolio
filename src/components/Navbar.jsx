import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Melvin Shook</div>

      <div
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/video-reels" onClick={closeMenu}>
            Video Reels
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
