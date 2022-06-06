import React from "react";
import styles from "./CustomerHeader.module.css";
import Card from "../Card";

function CustomerHeader() {
  return (
    <Card>
      <p className={styles.header}>Kunduppgifter</p>
      <p>Hämta dina adressuppgifter genom att fylla i ditt personnummer.</p>
    </Card>
  );
}

export default CustomerHeader;
