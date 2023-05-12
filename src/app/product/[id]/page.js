"use client";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";

import { addItem } from "@/features/shoppingChartSlice";
import styles from "@/styles/pages/product/Product.module.scss";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";
import CartLoader from "@/components/contentLoader/CartLoader";
const HigligthProduct = dynamic(
  () => import("@/components/products/HigligthProduct"),
  {
    ssr: false,
    loading: () => <HighligthLLoader />,
  }
);

const GET_PRODUCTS = gql`
  query Query {
    products(limit: 18) {
      _id
      img
      title
      price
    }
  }
`;

const GET_PRODUCT_BY_ID = (id) => gql`
    query Query {
      products(query: { _id: ${JSON.stringify(id)} })  {
        _id
		category
		description
		img
    price
		otherImgs
        title
      }
    }
  `;

export default function Page({ params }) {
  const { id } = params;

  const {
    loading: loadingProduct,
    error: errorProduct,
    data: dataProduct,
  } = useQuery(GET_PRODUCT_BY_ID(id));
  const {
    loading: loadingFeaturedProducts,
    error: errorFeaturedProducts,
    data: dataFeaturedProducts,
  } = useQuery(GET_PRODUCTS);

  const [item, setItem] = useState();
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [quantity, setQuantity] = useState(1);

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
      item.piece = quantity;
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((e) => e - 1);
      item.piece = quantity;
    }
  };

  useEffect(() => {
    if (dataProduct) {
      setImage(dataProduct.products[0].img);
      setItem({ ...dataProduct.products[0], piece: 0 });
    }
  }, [dataProduct]);

  return (
    <div className="container">
      <div className={styles["product-container"]}>
        {!loadingProduct && item ? (
          <div className={styles["product-content-container"]}>
            <h1 className={styles["product-title-mobile"]}>{item.title}</h1>
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
                    src={item.img}
                    alt="product"
                  />
                </div>

                {item.otherImgs.length > 0 &&
                  item.otherImgs.map((item, index) => (
                    <div
                      key={index}
                      className={styles["secondary-img-wrapper"]}
                    >
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
              <div className={styles["item-price"]}>
                ${item.price * quantity}
              </div>
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
                <button className={styles["buy-btn"]}>buy now</button>
              </div>

              <p className={styles["product-detail"]}>{item.description}</p>
            </div>
          </div>
        ) : (
          <CartLoader />
        )}

        {!loadingFeaturedProducts && dataFeaturedProducts ? (
          <HigligthProduct
            logoUrl="/img/trending.svg"
            title={"Trending Items"}
            items={dataFeaturedProducts.products}
            colorTitle="#146C94"
          />
        ) : (
          <HighligthLLoader />
        )}
      </div>
    </div>
  );
}
