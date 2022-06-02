import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHotel } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartDelivery.module.css";

function CartDelivery() {
  let deliveryFee = 79;

  return (
    <div className={styles.deliveryDiv}>
      <div className={styles.deliveryChoice}>
        <FontAwesomeIcon icon={faTruck} flip="horizontal" />
        <input type="radio" name="delivery" id="home" value="home" />
        <img />
        <label htmlFor="home">Hemleverans</label>
        <span className={styles.deliveryFee}>{deliveryFee} kr</span>
      </div>
      <div className={styles.deliveryBreak}></div>
      <div className={styles.deliveryChoice}>
        <FontAwesomeIcon icon={faHotel} />
        <input type="radio" name="delivery" id="store" value="store" />
        <img />
        <label htmlFor="store">Hämta i butik</label>
      </div>
    </div>
  );
}

export default CartDelivery;
