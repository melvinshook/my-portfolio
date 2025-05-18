// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Melvin.Shook.Media</h1>
        <p className={styles.subtitle}>My Photos & Videos</p>
      </div>
    </section>
  );
}

export default Hero;
