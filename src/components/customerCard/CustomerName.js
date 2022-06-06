import React from "react";
import Card from "../Card";
import styles from "./CustomerName.module.css";

function CustomerName() {
  return (
    <Card>
      <p className={styles.name}>Bo Göran</p>
      <p>Rävgatan 1b</p>
      <p>123 45 Boliden</p>
    </Card>
  );
}

export default CustomerName;
