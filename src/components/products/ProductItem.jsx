import { items } from "../AllData";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./productItem.module.css";

function ProductItem() {
  const filteredItems = items.filter((item) => item.id <= 8);

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
              <img src={item.img} alt="product1" />
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
