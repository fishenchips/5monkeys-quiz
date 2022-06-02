import React from "react";
import Card from "../Card";
import CustomerPhoneNum from "./CustomerPhoneNum";
import styles from "./CustomerContact.module.css";

function CustomerContact() {
  return (
    <Card>
      <p className={styles.header}>Kontaktuppgifter</p>
      <p>Fyll i ditt mobilnummer för att få ett SMS när din order är redo.</p>
      <div>
        <CustomerPhoneNum />
      </div>
    </Card>
  );
}

export default CustomerContact;
