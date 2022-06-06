import React, { useState } from "react";
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
  const [cartItems, setCartItems] = useState(DUMMY_ITEMS);

  const increaseQty = (item) => {
    item.qty++;
    setCartItems([...cartItems]);

    //cap qty at 9
    if (item.qty >= 9) {
      item.qty = 9;
    }

    console.log(item.qty);
  };

  const decreaseQty = (item) => {
    //set minimum qty to 1
    if (item.qty === 1) {
      item.qty = 1;
    } else {
      item.qty--;
    }
    setCartItems([...cartItems]);
    console.log(item.qty);
  };

  return (
    <div className={styles.cart}>
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            brand={item.brand}
            name={item.name}
            qty={item.qty}
            price={item.price}
            img={item.img}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            item={item}
          />
        ))}
      </div>

      <section className={styles.sectionBreak}></section>
      <CartDelivery cartItems={cartItems} />
    </div>
  );
}

export default Cart;
