import React from "react";
import styles from "./Keypad.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Keys from "./Keys";

function Keypad() {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideKeyPad}>
        <div className={styles.asideText}>
          <p className={styles.asideHeader}>Kassan</p>
          <p>
            Använd knappsatsen nedan för att mata in ditt personnummer
            respektive mobilnummer i formuläret till vänster. Välj sedan ditt
            önskade leveranssätt och klicka på "beställ".
          </p>
        </div>

        <Keys />
      </div>
      <div>
        <p>BESTÄLL</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </aside>
  );
}

export default Keypad;
