import { Link } from "react-router-dom";
import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

import styles from "@/styles/product/ProductItem.module.scss";
import PlaceholderImg from "/img/placeholder/loadingImage.svg";

function ProductItem({ item, scrollPosition }) {
  return (
    <>
      <div className={`${styles["product"]}`}>
        <Link to={`/categories/product/${item.id}`}>
          <div className={styles["product-header"]}>
            <LazyLoadImage
              scrollPosition={scrollPosition}
              className={styles["img-container"]}
              placeholderSrc={PlaceholderImg}
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
    </>
  );
}

export default trackWindowScroll(ProductItem);
