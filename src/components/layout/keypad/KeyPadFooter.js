import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./KeyPadFooter.module.css";

function KeyPadFooter() {
  return (
    <div className={styles.footer}>
      <p>BESTÄLL</p>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
}

export default KeyPadFooter;
