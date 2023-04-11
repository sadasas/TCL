import { items } from "../../AllData";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./trendingItem.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MyLoader from "../ContentLoader";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={styles["row-item"]}>
          <Link to={`/categories/product/${item.id}`}>
            <div className={styles["item-header"]}>
              <LazyLoadImage
                placeholder={<MyLoader />}
                src={item.img}
                effect="blur"
                alt="product"
              />
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
