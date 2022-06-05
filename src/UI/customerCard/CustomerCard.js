import React from "react";
import CustomerContact from "./CustomerContact";
import CustomerHeader from "./CustomerHeader";
import CustomerName from "./CustomerName";
import SSNCard from "./SSNCard";

function CustomerCard() {
  return (
    <aside style={{ marginLeft: "2.5rem" }}>
      <CustomerHeader />
      <SSNCard />
      <CustomerName />
      <CustomerContact />
    </aside>
  );
}

export default CustomerCard;
