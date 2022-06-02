import React from "react";
import CartDelivery from "./CartDelivery";
import styles from "./Cart.module.css";
import first from "./../../assets/Bosch700E.jpg";
import second from "./../../assets/BoschSticksagBlad.jpg";
import CartItem from "./CartItem";

const DUMMY_ITEMS = [
  {
    id: 1,
    brand: "Bosch",
    name: "PST 700 E",
    qty: 1,
    price: 599,
    img: first,
  },
  {
    id: 2,
    brand: "Bosch",
    name: "10-delars sticksågblad trä/metall",
    qty: 1,
    price: 139,
    img: second,
  },
];

function Cart() {
  return (
    <div className={styles.cart}>
      <div>
        {DUMMY_ITEMS.map((item) => (
          <CartItem
            key={item.id}
            brand={item.brand}
            name={item.name}
            qty={item.qty}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>

      <section className={styles.sectionBreak}></section>
      <CartDelivery />
    </div>
  );
}

export default Cart;
