import { items } from "../AllData";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./productItem.module.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";
import MyLoader from "../ContentLoader";

function ProductItem() {
  const filteredItems = items.filter((item) => item.id <= 8);

  const [IsLoadImg, setIsLoadImg] = useState(false);

  return (
    <>
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className={`${styles["product"]} ${styles["normal"]}`}
        >
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div className={styles["product-header"]}>
              {IsLoadImg && <MyLoader />}
              <LazyLoadImage
                className={styles["img-container"]}
                beforeLoad={() => setIsLoadImg(true)}
                afterLoad={() => setIsLoadImg(false)}
                src={item.img}
                effect="blur"
                alt="product1"
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
