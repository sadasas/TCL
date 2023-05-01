import React from "react";

import EmptyCartImg from "/img/cart/emptyCart.svg";
import styles from "@/styles/cart/EmptyCart.module.scss";

function EmptyCart({ openCart }) {
  return (
    <div className={styles["empty-cart"]}>
      <img src={EmptyCartImg} alt="empty-cart" />
      <h2>Your cart is empty</h2>
    </div>
  );
}

export default EmptyCart;
