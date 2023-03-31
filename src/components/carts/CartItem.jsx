import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductPage";
import styles from "./cartItem.module.css";

function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };

  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <>
      {cartItem.map((item, id) => (
        <div key={id} className={styles["cart-item"]}>
          <div className={styles["cart-img"]}>
            <img src={item.img} alt="product" />
          </div>
          <div className={styles["cart-middle"]}>
            <p className={styles["cart-name"]}>{item.description}</p>
            <div className={styles["cart-btns"]}>
              <button onClick={decrease}>-</button>
              <p className={styles.quantity}>{quantity}</p>
              <button onClick={increase}>+</button>
            </div>
          </div>
          <div className={styles["cart-right"]}>
            <p className={styles["cart-price"]}>
              {calcPrice(quantity, item.price)}.00$
            </p>
            <i
              onClick={() => removeFromCart(item.id)}
              className="fa-sharp fa-solid fa-xmark"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
