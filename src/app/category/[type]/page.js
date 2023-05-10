import dynamic from "next/dynamic";

import { items } from "@/AllData";
import ListLoader from "@/components/contentLoader/ListLoader";
import styles from "@/styles/categories/CategoriesItem.module.scss";
const ProductItem = dynamic(() => import("@/components/products/ProductItem"), {
  loading: () => <ListLoader />,
});
function CategoriesItem({ params }) {
  const categoryProducts = items.filter(
    (item) => item.category === params.type
  );

  return (
    <div className={styles["product-container"]}>
      <div className={styles.title}>{params.type}</div>
      <div className={styles["products-content-container"]}>
        {categoryProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesItem;
