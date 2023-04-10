import { items } from "../AllData";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./trendingItem.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MyLoader from "../ContentLoader";

function TrendingItem() {
  const [IsLoadImg, setIsLoadImg] = useState(false);
  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={styles["row-item"]}>
          <Link
            onClick={() => {
              location.reload();
              window.scrollTo(0, 0);
            }}
            to={`/categories/product/${item.id}`}
          >
            <div className={styles["item-header"]}>
              {IsLoadImg && <MyLoader />}
              <LazyLoadImage
                beforeLoad={() => setIsLoadImg(true)}
                afterLoad={() => setIsLoadImg(false)}
                src={item.img}
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
