import React from "react";
import Card from "../Card";
import styles from "./SSNCard.module.css";

function SSNCard() {
  return (
    <Card>
      <label className={styles.label}>PERSONNUMMER:</label>
      <form className={styles.ssnForm}>
        <input type="number" min="0" max="9" maxLength="6"></input>
        <h2>-</h2>
        <input type="number" min="0" max="9" maxLength="4"></input>
      </form>
    </Card>
  );
}

export default SSNCard;
