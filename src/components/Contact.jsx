import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch</h2>
      <form className={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
