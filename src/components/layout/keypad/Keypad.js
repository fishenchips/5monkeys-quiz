import React from "react";
import styles from "./Keypad.module.css";
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
    </aside>
  );
}

export default Keypad;
