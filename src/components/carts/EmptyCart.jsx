import React from "react";
import EmptyCartImg from "../../img/cart/empty-cart.png";
import styles from "./emptyCart.module.css";

function EmptyCart({ openCart }) {
  return (
    <div className={styles["empty-cart"]}>
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
    </div>
  );
}

export default EmptyCart;
