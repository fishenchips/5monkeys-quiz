import React from "react";
import styles from "./Keys.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { clickedKey } from "./../../../UI/animations/animations";

function Keys() {
  return (
    <div>
      <div className={styles.Row}>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          1
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          2
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          3
        </motion.div>
      </div>
      <div className={styles.Row}>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          4
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          5
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          6
        </motion.div>
      </div>
      <div className={styles.Row}>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          7
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          8
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          9
        </motion.div>
      </div>
      <div className={styles.Row}>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          <FontAwesomeIcon icon={faDeleteLeft} />
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          0
        </motion.div>
        <motion.div
          whileTap="press"
          variants={clickedKey}
          className={styles.keyValue}
        >
          <FontAwesomeIcon icon={faCheck} />
        </motion.div>
      </div>
    </div>
  );
}

export default Keys;
