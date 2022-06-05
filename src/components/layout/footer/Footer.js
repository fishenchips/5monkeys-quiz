import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";
import KeyPadFooter from "./KeyPadFooter";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.checkoutFooter}>
        <div className={styles.footerBtn}>
          <FontAwesomeIcon icon={faShare} flip="horizontal" />
        </div>
        <p className={styles.footerText}>Fortsätt Handla</p>
      </div>
      <div className={styles.keyPadFooter}>
        <KeyPadFooter />
      </div>
    </footer>
  );
}

export default Footer;
