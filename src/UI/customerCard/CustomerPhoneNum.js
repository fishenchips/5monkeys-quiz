import React from "react";

function CustomerPhoneNum() {
  return (
    <div>
      <label>MOBILNUMMER:</label>
      <form>
        <input type="number" maxLength="9" min="0" max="9" />
      </form>
    </div>
  );
}

export default CustomerPhoneNum;
