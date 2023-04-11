import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { items } from "../../AllData";
import MyLoader from "../ContentLoader";
import styles from "./categoriesItem.module.scss";

function CategoriesItemSofa() {
  const filteredItems = items.filter((item) => item.category === "sofa");
  return (
    <>
      <div className={styles["category-container"]}>
        <div className="container">
          <div className={styles["products-grid"]}>
            {filteredItems.map((item) => (
              <div key={item.id} className={`${styles["product"]} ${"normal"}`}>
                <Link to={`/categories/product/${item.id}`}>
                  <div className={styles["product-header"]}>
                    <LazyLoadImage src={item.img} />
                  </div>
                  <div className={styles["product-details"]}>
                    <p>{item.description}</p>
                    <p className={styles["item-price"]}>{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItemSofa;
