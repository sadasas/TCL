"use client";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import Link from "next/link";

import styles from "@/styles/product/ProductItem.module.scss";

function ProductItem({ item, scrollPosition }) {
  const PlaceholderImg = "/img/placeholder/loadingImage.svg";
  return (
    <div className={`${styles["product"]}`}>
      <Link href={`/product/${item.id}`}>
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
  );
}

export default trackWindowScroll(ProductItem);
