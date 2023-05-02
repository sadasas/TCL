import React from "react";
import { useParams } from "react-router";

import { items } from "../../AllData";
import styles from "@/styles/categories/CategoriesItem.module.scss";
import ProductItem from "../products/ProductItem";

function CategoriesItem() {
  const { type } = useParams();
  const categoryProducts = items.filter((item) => item.category === type);
  return (
    <div className={styles["product-container"]}>
      <div className={styles.title}>{type}</div>
      <div className={styles["products-content-container"]}>
        {categoryProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesItem;
