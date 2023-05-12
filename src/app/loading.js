import BannerLoader from "@/components/contentLoader/BannerLoader";
import CategoriesLoader from "@/components/contentLoader/CategoriesLoader";
import FeaturedLoader from "@/components/contentLoader/FeaturedLoader";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";
import ListLoader from "@/components/contentLoader/ListLoader";
import styles from "@/styles/Loading.module.scss";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles["loading-container"]}>
      <FeaturedLoader />;
      <BannerLoader />
      <ListLoader />
      <HighligthLLoader />
      <HighligthLLoader />
    </div>
  );
}
