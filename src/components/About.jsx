import React from "react";
import styles from "./About.module.css"; // keep if you want scoped styles

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <p>
            I’m a passionate photographer and videographer based in Columbia,
            MD.
          </p>
          <p>Let's turn your visions into reality.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
