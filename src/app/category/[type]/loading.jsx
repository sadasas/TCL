import ListLoader from "@/components/contentLoader/ListLoader";
import styles from "@/styles/Loading.module.scss";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles["loading-container-body"]}>
      <ListLoader />
    </div>
  );
}
