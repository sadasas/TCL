import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import EmptyCart from "./EmptyCart";
import styles from "./cart.module.scss";

function Cart() {
  const cartItem = useSelector((state) => state.shoppingCart.value);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItem != null && cartItem.length > 0) {
      const newTotalPrice = cartItem.reduce(
        (acc, item) => acc + item.price * item.piece,
        0
      );
      setTotalPrice(newTotalPrice);
    }
  }, [cartItem]);

  return (
    <>
      <div className={styles["full-cart-div"]}>
        <div className={styles["full-cart"]}>
          {cartItem.length > 0 &&
            cartItem.map((item, id) => <CartItem key={id} item={item} />)}
        </div>
      </div>
      {cartItem.length == 0 && <EmptyCart />}
      {cartItem.length > 0 && (
        <div className={styles["subtotal-div"]}>
          <div className={styles["sub-right"]}>
            <p>Subtotal</p>
            <p className="total-price">{totalPrice + ".00$"}</p>
          </div>
          <div className={styles["sub-left"]}>
            <Link>Go to Checkout</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
