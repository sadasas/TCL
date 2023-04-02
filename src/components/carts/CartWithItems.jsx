import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import EmptyCart from "./EmptyCart";
import styles from "./cartWithItems.module.css";

function CartWithItems() {
  const cartItem = useSelector((state) => state.items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  return (
    <>
      <div className={styles["full-cart-div"]}>
        <div className={styles["full-cart"]}>
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} />
            ) : (
              <EmptyCart key={id} />
            )
          )}
        </div>
      </div>
      <div className={styles["subtotal-div"]}>
        <div className={styles["sub-right"]}>
          <p>Subtotal</p>
          <p className="total-price">{totalPrice + ".00$"}</p>
        </div>
        <div className={styles["sub-left"]}>
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
