import Image from "next/image";

import styles from "@/styles/cart/EmptyCart.module.scss";

function EmptyCart({ openCart }) {
  const emptyCartImg = "/img/cart/emptyCart.svg";
  return (
    <div className={styles["empty-cart"]}>
      <Image width={300} height={300} src={emptyCartImg} alt="empty-cart" />
      <h2>Your cart is empty</h2>
    </div>
  );
}

export default EmptyCart;
