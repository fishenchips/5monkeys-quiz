import React from "react";
import Card from "../Card";
import CustomerPhoneNum from "./CustomerPhoneNum";

function CustomerContact() {
  return (
    <Card>
      <h1>Kontaktuppgifter</h1>
      <p>Fyll i ditt mobilnummer för att få ett SMS när din order är redo.</p>
      <div>
        <CustomerPhoneNum />
      </div>
    </Card>
  );
}

export default CustomerContact;
