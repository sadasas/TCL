import React from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { TbSquareArrowRight, TbSquareArrowLeft } from "react-icons/tb";

import styles from "@/styles/product/HiglightProduct.module.scss";
import ProductItem from "./ProductItem";

function HigligthProduct({ items, title, logoUrl, colorTitle }) {
  const slideLeft = () => {
    let slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft = slider.scrollLeft - 400 - 10;
  };

  const slideRight = () => {
    let slider = document.getElementById(`slider-${title}`);
    slider.scrollLeft = slider.scrollLeft + 400 + 10;
  };

  return (
    <div className="container">
      <div className={styles["title-mobile"]}>
        <h2>{title}</h2>
      </div>
      <div className={styles["higlight-container"]}>
        <div
          style={{ backgroundColor: colorTitle }}
          className={styles["left-content"]}
        >
          <h2>{title}</h2>
          <BsArrowUpRightSquare className={styles["more-btn"]} />
        </div>
        <div className={styles["right-content"]}>
          <div id={`slider-${title}`} className={styles["slider-container"]}>
            {items.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
          <TbSquareArrowLeft
            onClick={slideLeft}
            className={`${styles.navigation} ${styles.left}`}
          />
          <TbSquareArrowRight
            onClick={slideRight}
            className={`${styles.navigation} ${styles.right}`}
          />
        </div>
      </div>
    </div>
  );
}

export default HigligthProduct;
