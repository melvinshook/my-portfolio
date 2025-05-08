import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Melvin Shook</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#videos">Videos</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
