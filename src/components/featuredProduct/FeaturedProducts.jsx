import React from "react";
import ProductItem from "../products/ProductItem";
import styles from "./featuredProducts.module.css";

function FeaturedProducts() {
  return (
    <div className={styles["featured-container"]}>
      <h2 className={`container ${styles["featured-h2"]}`}>Featured Product</h2>
      <div className="container">
        <div className={styles["products-grid"]}>
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
