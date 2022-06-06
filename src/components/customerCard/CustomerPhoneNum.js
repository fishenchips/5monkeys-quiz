import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import styles from "./CustomerPhoneNum.module.css";
import { motion } from "framer-motion";
import { formHover } from "./../animations/animations";

function CustomerPhoneNum() {
  const [phoneNum, setPhoneNum] = useState("070125678");

  const handlePhoneNumber = (e) => {
    setPhoneNum(e.target.value);
  };

  return (
    <motion.div
      whileHover="hover"
      variants={formHover}
      className={styles.phoneDiv}
    >
      <div className={styles.innerPhoneDiv}>
        <div className={styles.phoneForm}>
          <label className={styles.phoneLabel}>MOBILNUMMER:</label>
          <form>
            <div>
              <input
                className={styles.phoneInput}
                type="text"
                maxLength="9"
                value={phoneNum}
                onChange={handlePhoneNumber}
              />
              <div className={styles.spanDiv}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.changePhone}>
          <FontAwesomeIcon icon={faPencil} />
        </div>
      </div>
    </motion.div>
  );
}

export default CustomerPhoneNum;
