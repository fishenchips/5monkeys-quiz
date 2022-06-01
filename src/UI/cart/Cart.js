import React from "react";
import CartDelivery from "../../components/cartItems/CartDelivery";
import CartItems from "../../components/cartItems/CartItems";

function Cart() {
  return (
    <div>
      <CartItems />
      <CartDelivery />
    </div>
  );
}

export default Cart;
