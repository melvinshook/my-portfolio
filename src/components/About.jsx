import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <p>
          I’m a passionate photographer and videographer based in Columbia, MD.
        </p>
        <p>Let's turn your visions into reality</p>
        {/* More text here */}
      </div>
    </section>
  );
}
