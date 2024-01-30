import CartLoader from "@/components/contentLoader/CartLoader";
import styles from "@/styles/product/loading.module.scss";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles["container"]}>
      <CartLoader />;
    </div>
  );
}
