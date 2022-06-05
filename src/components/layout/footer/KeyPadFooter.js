import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./KeyPadFooter.module.css";

function KeyPadFooter() {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>BESTÄLL</p>
      <button className={styles.btn}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default KeyPadFooter;
