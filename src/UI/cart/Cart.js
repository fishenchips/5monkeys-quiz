import React from "react";
import CartDelivery from "../../components/cartItems/CartDelivery";
import CartItems from "../../components/cartItems/CartItems";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <div className={styles.cart}>
      <CartItems />
      <section className={styles.sectionBreak}></section>
      <CartDelivery />
    </div>
  );
}

export default Cart;
