import React from "react";
import Card from "../../UI/Card";
import CustomerPhoneNum from "./CustomerPhoneNum";
import styles from "./CustomerContact.module.css";

function CustomerContact() {
  return (
    <Card>
      <div className={styles.contactDiv}>
        <p className={styles.header}>Kontaktuppgifter</p>
        <p>Fyll i ditt mobilnummer för att få ett SMS när din order är redo.</p>
      </div>
      <div>
        <CustomerPhoneNum />
      </div>
    </Card>
  );
}

export default CustomerContact;
