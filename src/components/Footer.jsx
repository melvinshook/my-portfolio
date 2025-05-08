import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Melvin Shook | All Rights Reserved
      </p>
      <div className={styles.links}>
        <a href="mailto:melvinshook122193@gmail.com" className={styles.link}>
          Email
        </a>
        <a
          href="https://www.instagram.com/melvin.shook.media"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
