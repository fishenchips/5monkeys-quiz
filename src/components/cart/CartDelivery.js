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
    setExtraFee(deliveryFee);
  };

  const removeDeliveryFee = () => {
    setExtraFee(0);
  };

  return (
    <>
      <div className={styles.deliveryDiv}>
        <div className={styles.deliveryChoice}>
          <FontAwesomeIcon
            icon={faTruck}
            flip="horizontal"
            className={styles.icon}
          />
          <input type="radio" name="delivery" id="home" value="home" />
          <img />
          <label
            htmlFor="home"
            id="home"
            className={styles.label}
            onClick={addDeliveryFee}
          >
            Hemleverans
          </label>
          <span className={styles.deliveryFee}>{deliveryFee} kr</span>
        </div>
        <div className={styles.deliveryBreak}></div>
        <div className={styles.deliveryChoice}>
          <FontAwesomeIcon icon={faHotel} className={styles.icon} />
          <input type="radio" name="delivery" id="store" value="store" />
          <img />
          <label
            htmlFor="store"
            id="store"
            className={styles.label}
            onClick={removeDeliveryFee}
          >
            Hämta i butik
          </label>
        </div>
      </div>
      <div className={styles.checkoutDiv}>
        <div className={styles.checkoutText}>
          <p className={styles.checkoutSumText}>Att betala:</p>
          <p className={styles.checkoutTaxText}>Varav moms:</p>
        </div>
        <div>
          <p className={styles.totalSum}>{checkoutSum + extraFee} kr</p>
          <p className={styles.taxSum}>
            {Math.round((checkoutSum + extraFee) * 0.25)} kr
          </p>
        </div>
      </div>
    </>
  );
}

export default CartDelivery;
