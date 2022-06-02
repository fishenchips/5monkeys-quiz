import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHotel } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartDelivery.module.css";

function CartDelivery(props) {
  const [extraFee, setExtraFee] = useState(0);

  let checkoutSum = 0;
  let deliveryFee = 79;

  props.cartItems.map((item) => (checkoutSum += item.qty * item.price));

  const addDeliveryFee = () => {
    setExtraFee(79);
  };

  const removeDeliveryFee = () => {
    setExtraFee(0);
  };

  return (
    <div className={styles.deliveryDiv}>
      <div className={styles.deliveryChoice}>
        <FontAwesomeIcon icon={faTruck} flip="horizontal" />
        <input type="radio" name="delivery" id="home" value="home" />
        <img />
        <label htmlFor="home" id="home" onClick={addDeliveryFee}>
          Hemleverans
        </label>
        <span className={styles.deliveryFee}>{deliveryFee} kr</span>
      </div>
      <div className={styles.deliveryBreak}></div>
      <div className={styles.deliveryChoice}>
        <FontAwesomeIcon icon={faHotel} />
        <input type="radio" name="delivery" id="store" value="store" />
        <img />
        <label htmlFor="store" id="store" onClick={removeDeliveryFee}>
          Hämta i butik
        </label>
      </div>

      <p>Att betala: {checkoutSum + extraFee} kr</p>
      <p>
        Varav moms: {Math.round((checkoutSum + extraFee) * 0.25)}
        kr
      </p>
    </div>
  );
}

export default CartDelivery;
