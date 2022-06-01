import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHotel } from "@fortawesome/free-solid-svg-icons";

function CartDelivery() {
  return (
    <div>
      CartDelivery
      <div>
        <FontAwesomeIcon icon={faTruck} flip="horizontal" />
        <FontAwesomeIcon icon={faHotel} />
      </div>
    </div>
  );
}

export default CartDelivery;
