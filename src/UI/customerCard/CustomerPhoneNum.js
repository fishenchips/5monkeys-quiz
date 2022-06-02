import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import styles from "./CustomerPhoneNum.module.css";

function CustomerPhoneNum() {
  return (
    <div className={styles.phoneDiv}>
      <div className={styles.phoneForm}>
        <label className={styles.phoneLabel}>MOBILNUMMER:</label>
        <form>
          <input type="number" maxLength="9" min="0" max="9" />
        </form>
      </div>
      <div className={styles.changePhone}>
        <FontAwesomeIcon icon={faPencil} />
      </div>
    </div>
  );
}

export default CustomerPhoneNum;
