import dynamic from "next/dynamic";

import styles from "@/styles/pages/category/Categories.module.scss";
import CategoriesLoader from "@/components/contentLoader/CategoriesLoader";
const CategoriesHeader = dynamic(
  () => import("../../components/categories/CategoriesHeader"),
  {
    loading: () => <CategoriesLoader />,
  }
);

export default function CategoryLayout({ children }) {
  return (
    <>
      <section id="categories" className="container">
        <div className={styles["categories-container"]}>
          <CategoriesHeader />
          {children}
        </div>
      </section>
    </>
  );
}
