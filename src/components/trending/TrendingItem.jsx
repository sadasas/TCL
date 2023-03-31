import { items } from "../AllData";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./trendingItem.module.css";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={styles["row-item"]}>
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div className={styles["item-header"]}>
              <img src={item.img} alt="product" />
            </div>
            <div className={styles["item-description"]}>
              <p>{item.description}</p>
              <p className={styles["item-price"]}>{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
