import { Link } from "react-router-dom";
import React, { useEffect, useState, lazy } from "react";
import { useSelector } from "react-redux";

import styles from "@/styles/cart/Cart.module.scss";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import CartLoader from "../contentLoader/CartLoader";
const CartItem = lazy(() => import("./CartItem"));

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
            cartItem.map((item, id) => (
              <LazyLoadComponent placeholder={<CartLoader />} key={id}>
                <CartItem item={item} />
              </LazyLoadComponent>
            ))}
        </div>
      </div>

      <div className={styles["subtotal-container"]}>
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

export default Cart;
