import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBtn}>
        <FontAwesomeIcon icon={faShare} flip="horizontal" />
      </div>
      <p className={styles.footerText}>Fortsätt Handla</p>
    </footer>
  );
}

export default Footer;
