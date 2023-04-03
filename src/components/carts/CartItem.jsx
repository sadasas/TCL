import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/shoppingChartSlice";

import styles from "./cartItem.module.css";

function CartItem({ id, item }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const delCartItem = (i) => dispatch(removeItem(id));
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

  useEffect(() => {
    setQuantity(item.piece);
  }, [item]);

  return (
    <>
      <div key={id} id={id} className={styles["cart-item"]}>
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
          <AiOutlineDelete
            className={styles["delete-btn"]}
            onClick={(e) => {
              e.preventDefault();
              delCartItem(item.id);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CartItem;
