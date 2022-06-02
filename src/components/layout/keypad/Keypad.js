import React from "react";
import styles from "./Keypad.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCheck,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";

function Keypad() {
  return (
    <aside className={styles.aside}>
      <div>
        <p>Kassan</p>
        <p>
          Använd knappsatsen nedan för att mata in ditt personnummer respektive
          mobilnummer i formuläret till vänster. Välj sedan ditt önskade
          leveranssätt och klicka på "beställ".
        </p>
      </div>

      <div>
        <FontAwesomeIcon icon={faDeleteLeft} />
        <FontAwesomeIcon icon={faCheck} />
      </div>

      <div>
        <p>BESTÄLL</p>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </aside>
  );
}

export default Keypad;
