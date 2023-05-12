import CartLoader from "@/components/contentLoader/CartLoader";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";
import styles from "@/styles/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles["loading-container"]}>
      <CartLoader />
      <HighligthLLoader />
    </div>
  );
}
