import styles from "@/styles/cart/EmptyCart.module.scss";

function EmptyCart({ openCart }) {
  const emptyCartImg = "/img/cart/emptyCart.svg";
  return (
    <div className={styles["empty-cart"]}>
      <img src={emptyCartImg} alt="empty-cart" />
      <h2>Your cart is empty</h2>
    </div>
  );
}

export default EmptyCart;
