import React, { useState } from "react";
import Card from "../Card";
import styles from "./SSNCard.module.css";

function SSNCard() {
  const [birthDate, setBirthDate] = useState("720324");
  const [lastFour, setLastFour] = useState("1083");

  const handleBirthDate = (e) => {
    //only accept numbers and backspace
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setBirthDate({ value: e.target.value });
    }

    setBirthDate(e.target.value);

    //if user has entered 6 digits, move to the next input
    if (e.target.value.length === 6) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);

      form.elements[index + 1].focus();
    }
  };

  const handleLastFour = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setLastFour({ value: e.target.value });
    }

    setLastFour(e.target.value);
  };

  return (
    <Card>
      <label className={styles.label}>PERSONNUMMER:</label>
      <form className={styles.ssnForm}>
        <input
          className={styles.birthDateInput}
          type="text"
          maxLength="6"
          value={birthDate}
          onChange={handleBirthDate}
        ></input>
        <h2>-</h2>
        <input
          className={styles.lastFourInput}
          type="text"
          maxLength="4"
          value={lastFour}
          onChange={handleLastFour}
        ></input>
      </form>
    </Card>
  );
}

export default SSNCard;
