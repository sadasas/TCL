import { Link } from "react-router-dom";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { items } from "../../AllData";
import styles from "./productItem.module.scss";
import MyLoader from "../ContentLoader";

function ProductItem() {
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={`${styles["product"]}`}>
          <Link to={`/categories/product/${item.id}`}>
            <div className={styles["product-header"]}>
              <LazyLoadImage
                className={styles["img-container"]}
                effect="blur"
                src={item.img}
              />
            </div>
            <div className={styles["product-details"]}>
              <p>{item.description}</p>
              <p className={styles["item-price"]}>
                <strong>{item.price}$</strong>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductItem;
