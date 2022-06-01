import React from "react";
import Card from "../Card";

function SSNCard() {
  return (
    <Card>
      <label>PERSONNUMMER:</label>
      <form>
        <input type="number" min="0" max="9" maxLength="6"></input>
        <h2>-</h2>
        <input type="number" min="0" max="9" maxLength="4"></input>
      </form>
    </Card>
  );
}

export default SSNCard;
