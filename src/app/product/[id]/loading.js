import CartLoader from "@/components/contentLoader/CartLoader";
import ListLoader from "@/components/contentLoader/ListLoader";
import styles from "@/styles/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles["loading-container"]}>
      <CartLoader />
      <ListLoader />
    </div>
  );
}
