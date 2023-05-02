import React from "react";
import { useParams } from "react-router";
import {
  LazyLoadComponent,
  trackWindowScroll,
} from "react-lazy-load-image-component";

import { items } from "../../AllData";
import styles from "@/styles/categories/CategoriesItem.module.scss";
import ProductItem from "../products/ProductItem";
import ListLoader from "../contentLoader/ListLoader";

function CategoriesItem({ scrollPosition }) {
  const { type } = useParams();
  const categoryProducts = items.filter((item) => item.category === type);
  return (
    <LazyLoadComponent
      scrollPosition={scrollPosition}
      placeholder={<ListLoader />}
    >
      <div className={styles["product-container"]}>
        <div className={styles.title}>{type}</div>
        <div className={styles["products-content-container"]}>
          {categoryProducts.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </LazyLoadComponent>
  );
}

export default trackWindowScroll(CategoriesItem);
