import React from "react";

import styles from "@/styles/product/ListProducts.module.scss";
import ProductItem from "./ProductItem";

function ListProduct({ items, title }) {
  return (
    <div className="container">
      <div className={styles["product-container"]}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles["products-content-container"]}>
          {items.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
