import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import { items } from "../AllData";
import TrendingSlider from "../components/trending/TrendingSlider";
import Footer from "../components/Footer";
import { addItem } from "../features/shoppingChartSlice";
import styles from "./productPage.module.scss";
import Placeholder from "/img/placeholder/loadingImage.svg";

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState(
    items.filter((item) => item.id === parseInt(id))
  );
  const [quantity, setQuantity] = useState(1);

  const [image, setImage] = useState(item[0].img);

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

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
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
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`${styles[notify]} ${notify ? styles["slide-in"] : null}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className={styles["product-page-div"]}>
        <div className="container">
          <div className={styles["product-div"]}>
            <h1 className={styles["product-big-name"]}>
              {item[0].description}
            </h1>
            <div className={styles["product-left"]}>
              <div className={styles["big-img"]}>
                <LazyLoadImage
                  placeholderSrc={Placeholder}
                  effect="blur"
                  src={image}
                />
              </div>
              <div className={styles["small-imgs"]}>
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className={styles["product-right"]}>
              <p className={styles["product-spec"]}>{item[0].specs}</p>
              <div className={styles["product-quant"]}>
                <p>Quantity</p>
                <div className={styles["product-btns"]}>
                  <button onClick={decrease}>-</button>
                  <p className={styles["quantity"]}>{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className={styles["product-price"]}>
                  {calcPrice(quantity)}.00$
                </p>
              </div>
              <div className={styles["atc-buy"]}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCartHandler(item[0]);
                    showNotify();
                  }}
                  className={styles["atc-btn"]}
                >
                  add to cart
                </button>
                <button className={styles["buy-btn"]}>buy now</button>
              </div>
            </div>
          </div>
        </div>
        <TrendingSlider />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
