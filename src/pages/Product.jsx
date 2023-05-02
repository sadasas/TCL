import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import { items } from "@/AllData";
import { addItem } from "../features/shoppingChartSlice";
import styles from "@/styles/Product.module.scss";
import Placeholder from "/img/placeholder/loadingImage.svg";
import HigligthProduct from "../components/products/HigligthProduct";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState(
    items.filter((item) => item.id === parseInt(id))
  );
  const [quantity, setQuantity] = useState(1);

  const [image, setImage] = useState(item[0].img);

  const trendingProducts = items.filter((item) => item.id > 8);

  const addToCartHandler = (i) => {
    const nitem = { ...i, piece: quantity };

    dispatch(addItem(nitem));
  };

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity((e) => e + 1);
      item[0].piece = quantity;
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((e) => e - 1);
      item[0].piece = quantity;
    }
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  useEffect(() => {
    const newItem = items.filter((item) => item.id === parseInt(id));
    setItem(newItem);
    setImage(newItem[0].img);
  }, [id]);

  return (
    <>
      <div className="container">
        <div className={styles["product-container"]}>
          <div className={styles["product-content-container"]}>
            <h1 className={styles["product-title-mobile"]}>
              {item[0].description}
            </h1>
            <div className={styles["product-left"]}>
              <div className={styles["primary-img"]}>
                <LazyLoadImage
                  placeholderSrc={Placeholder}
                  effect="blur"
                  src={image}
                />
              </div>
              <div className={styles["secondary-imgs"]}>
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                {item[0].otherImgs.length > 0 &&
                  item[0].otherImgs.map((item, index) => (
                    <img
                      id={item}
                      key={index}
                      onMouseOver={changeImage}
                      src={item}
                      alt="product"
                    />
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
                    showNotify();
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
          <HigligthProduct
            logoUrl="/img/trending.svg"
            title={"Trending Items"}
            items={trendingProducts}
            colorTitle="#146C94"
          />
        </div>
      </div>
    </>
  );
}

export default Product;
