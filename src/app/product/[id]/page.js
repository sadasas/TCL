"use client";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import Image from "next/image";

import { items } from "@/AllData";
import { addItem } from "@/features/shoppingChartSlice";
import styles from "@/styles/pages/product/Product.module.scss";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";
const HigligthProduct = dynamic(
  () => import("@/components/products/HigligthProduct"),
  {
    ssr: false,
    loading: () => <HighligthLLoader />,
  }
);

export default function Page({ params }) {
  const dispatch = useDispatch();
  const item = items.filter((item) => item.id == params.id);
  const [image, setImage] = useState(item[0].img);
  const [quantity, setQuantity] = useState(1);

  const trendingProducts = items.filter((item) => item.id > 8);
  const Placeholder = "/img/placeholder/loadingImage.svg";

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

  return (
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

        <HigligthProduct
          logoUrl="/img/trending.svg"
          title={"Trending Items"}
          items={trendingProducts}
          colorTitle="#146C94"
        />
      </div>
    </div>
  );
}
