"use client";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { removeItem } from "@/features/shoppingChartSlice";
import styles from "@/styles/cart/CartItem.module.scss";
import { updateItem } from "@/features/shoppingChartSlice";

function CartItem({ id, item }) {
  const [quantity, setQuantity] = useState(item.piece);
  const dispatch = useDispatch();

  const updateItemQuantityHandler = (name, q) =>
    dispatch(updateItem({ description: name, piece: q }));

  const delCartItem = (i) => dispatch(removeItem(i));
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

  const calcPrice = (q, i) => {
    return q * i;
  };

  useEffect(() => {
    setQuantity(item.piece);
  }, [item]);

  useEffect(() => {
    updateItemQuantityHandler(item.description, quantity);
  }, [quantity]);

  return (
    <>
      <div key={id} id={id} className={styles["cart-item"]}>
        <div className={styles["cart-img"]}>
          <img src={item.img} alt="product" />
        </div>
        <div className={styles["cart-middle"]}>
          <p className={styles["cart-name"]}>{item.title}</p>
          <div className={styles["cart-btns"]}>
            <h2 onClick={decrease}>-</h2>
            <p className={styles.quantity}>{quantity}</p>
            <h2 onClick={increase}>+</h2>
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
              delCartItem(item.description);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CartItem;
