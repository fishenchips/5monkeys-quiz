import React from "react";
import styles from "./CartItem.module.css";

function CartItem(props) {
  return (
    <div className={styles.productDiv}>
      <div className={styles.productImg}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.productName}>
        <p>{props.brand}</p>
        <p>{props.name}</p>
      </div>
      <div className={styles.productQty}>
        <button>+</button>
        <p>{props.qty}st </p>
        <button>-</button>
      </div>
      <div className={props.productPrice}>
        <p>{props.price} kr </p>
      </div>
    </div>
  );
}

export default CartItem;
