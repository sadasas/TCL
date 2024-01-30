"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addItem } from "features/shoppingChartSlice";
import checkUser from "utils/checkUser";
import { useDispatch } from "react-redux";

import styles from "@/styles/pages/product/Product.module.scss";
import Image from "next/image";

const ProductDetail = ({ product }) => {
  const [item, setItem] = useState({ ...product, piece: 0 });
  const dispatch = useDispatch();
  const [image, setImage] = useState(product.img);
  const [quantity, setQuantity] = useState(1);
  const route = useRouter();

  const Placeholder = "/img/placeholder/loadingImage.svg";

  const addToCartHandler = (i) => {
    const nitem = { ...i, piece: quantity };

    dispatch(addItem(nitem));
  };

  const buyHandler = (e) => {
    e.preventDefault();
    if (!checkUser()) route.push("/login");
  };
  const changeImage = (e) => {
    e.preventDefault();
    setImage(e.target.src);
  };

  const increase = (e) => {
    e.preventDefault();
    if (quantity >= 1) {
      setQuantity((e) => e + 1);
      item.piece = quantity;
    }
  };

  const decrease = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity((e) => e - 1);
      item.piece = quantity;
    }
  };

  return (
    <div className={styles["product-content-container"]}>
      <h1 className={styles["product-title-mobile"]}>{item.title}</h1>
      <div className={styles["product-left"]}>
        <div className={styles["primary-img"]}>
          <Image
            alt="product"
            placeholderSrc={Placeholder}
            fill
            sizes="100vw"
            src={image}
          />
        </div>
        <div className={styles["secondary-imgs"]}>
          <div className={styles["secondary-img-wrapper"]}>
            <Image
              sizes="(max-width: 420px) 40px, 75px"
              fill={true}
              onMouseOver={changeImage}
              src={item.img}
              alt="product"
            />
          </div>

          {item.otherImgs.length > 0 &&
            item.otherImgs.map((item, index) => (
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
        <h1 className={styles["product-title"]}>{item.title}</h1>
        <div className={styles["item-price"]}>${item.price * quantity}</div>
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
              addToCartHandler(item);
            }}
            className={styles["chart-btn"]}
          >
            add to cart
          </button>
          <button onClick={buyHandler} className={styles["buy-btn"]}>
            buy now
          </button>
        </div>

        <p className={styles["product-detail"]}>{item.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
