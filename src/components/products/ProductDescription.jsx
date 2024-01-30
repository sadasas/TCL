"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { addItem } from "@/features/shoppingChartSlice";
import styles from "@/styles/pages/product/ProductDescription.module.scss";

function ProductDescription({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const [image, setImage] = useState(item[0].img);

  const Placeholder = "/img/placeholder/loadingImage.svg";

  const addToCartHandler = (i) => {
    const nitem = { ...i, piece: quantity };

    dispatch(addItem(nitem));
  };

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const increase = (e) => {
    e.preventDefault();
    if (quantity >= 1) {
      setQuantity((e) => e + 1);
      item[0].piece = quantity;
    }
  };

  const decrease = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity((e) => e - 1);
      item[0].piece = quantity;
    }
  };

  return (
    <div className={styles["product-content-container"]}>
      <h1 className={styles["product-title-mobile"]}>{item[0].description}</h1>
      <div className={styles["product-left"]}>
        <div className={styles["primary-img"]}>
          <Image alt="product" src={image} />
        </div>
        <div className={styles["secondary-imgs"]}>
          <div className={styles["secondary-img-wrapper"]}>
            <Image
              sizes="(max-width: 420px) 40px, 75px"
              fill={true}
              onMouseOver={changeImage}
              src={item[0].img}
              alt="product"
            />
          </div>

          {item[0].otherImgs.length > 0 &&
            item[0].otherImgs.map((item, index) => (
              <div key={index} className={styles["secondary-img-wrapper"]}>
                <Image
                  sizes="(max-width: 420px) 40px, 75px"
                  fill={true}
                  id={item}
                  onMouseOver={changeImage}
                  src={item}
                  alt="product"
                />
              </div>
            ))}
        </div>
      </div>
      <div className={styles["product-right"]}>
        <h1 className={styles["product-title"]}>{item[0].description}</h1>
        <div className={styles.btns}>
          <div className={styles["quantity-btn-container"]}>
            <div className={styles["quantity-btn"]}>
              <h3 onClick={decrease}>-</h3>
              <p className={styles.quantity}>{quantity}</p>
              <h3 onClick={increase}>+</h3>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCartHandler(item[0]);
            }}
            className={styles["chart-btn"]}
          >
            add to cart
          </button>
          <button className={styles["buy-btn"]}>buy now</button>
        </div>

        <p className={styles["product-detail"]}>{item[0].specs}</p>
      </div>
    </div>
  );
}

export default ProductDescription;
