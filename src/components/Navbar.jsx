import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Melvin Shook</div>
      <ul className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="video-reels">Video Reels</Link>
        <Link to="contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
