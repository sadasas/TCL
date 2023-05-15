import CategoriesLoader from "@/components/contentLoader/CategoriesLoader";
import styles from "@/styles/Loading.module.scss";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles["loading-container"]}>
      <CategoriesLoader />;
    </div>
  );
}
