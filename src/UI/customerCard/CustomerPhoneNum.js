import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import styles from "./CustomerPhoneNum.module.css";

function CustomerPhoneNum() {
  const [phoneNum, setPhoneNum] = useState("070125678");

  const handlePhoneNumber = (e) => {
    setPhoneNum(e.target.value);
  };

  return (
    <div className={styles.phoneDiv}>
      <div className={styles.innerPhoneDiv}>
        <div className={styles.phoneForm}>
          <label className={styles.phoneLabel}>MOBILNUMMER:</label>
          <form>
            <input
              type="text"
              maxLength="9"
              value={phoneNum}
              onChange={handlePhoneNumber}
            />
          </form>
        </div>
        <div className={styles.changePhone}>
          <FontAwesomeIcon icon={faPencil} />
        </div>
      </div>
    </div>
  );
}

export default CustomerPhoneNum;
