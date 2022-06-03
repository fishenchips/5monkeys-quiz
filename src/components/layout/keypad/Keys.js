import React from "react";
import styles from "./Keys.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function Keys() {
  return (
    <div>
      <div className={styles.Row}>
        <div className={styles.keyValue}>1</div>
        <div className={styles.keyValue}>2</div>
        <div className={styles.keyValue}>3</div>
      </div>
      <div className={styles.Row}>
        <div className={styles.keyValue}>4</div>
        <div className={styles.keyValue}>5</div>
        <div className={styles.keyValue}>6</div>
      </div>
      <div className={styles.Row}>
        <div className={styles.keyValue}>7</div>
        <div className={styles.keyValue}>8</div>
        <div className={styles.keyValue}>9</div>
      </div>
      <div className={styles.Row}>
        <div className={styles.keyValue}>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </div>
        <div className={styles.keyValue}>0</div>
        <div className={styles.keyValue}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
    </div>
  );
}

export default Keys;
