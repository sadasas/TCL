"use client";
import Link from "next/link";
import { useEffect, useState, lazy } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

import styles from "@/styles/cart/Cart.module.scss";
import CartLoader from "../contentLoader/CartLoader";
const CartItem = dynamic(() => import("./CartItem"), {
  ssr: false,
  loading: () => <CartLoader />,
});

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
      <div className={styles["cart-container"]}>
        <div className={styles["cart-content-container"]}>
          {cartItem.length > 0 &&
            cartItem.map((item, id) => <CartItem key={id} item={item} />)}
        </div>
      </div>

      <div className={styles["subtotal-container"]}>
        <div className={styles["sub-right"]}>
          <p>Subtotal</p>
          <p className="total-price">{totalPrice + ".00$"}</p>
        </div>
        <div className={styles["sub-left"]}>
          <Link href="">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
