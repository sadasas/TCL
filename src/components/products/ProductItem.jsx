"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/product/ProductItem.module.scss";

function ProductItem({ item }) {
  const PlaceholderImg = "/img/placeholder/loadingImage.svg";
  return (
    <div className={`${styles["product"]}`}>
      <Link href={`/product/${item._id}`}>
        <div className={styles["product-header"]}>
          <Image
            fill
            sizes="100vw"
            alt="product"
            className={styles["img-container"]}
            src={item.img}
          />
        </div>
        <div className={styles["product-details"]}>
          <p>{item.title}</p>
          <p className={styles["item-price"]}>
            <strong>{item.price}$</strong>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
