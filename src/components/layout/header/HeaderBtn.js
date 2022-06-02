import React from "react";
import styles from "./HeaderBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function HeaderBtn() {
  return (
    <button className={styles.btn}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
}

export default HeaderBtn;
