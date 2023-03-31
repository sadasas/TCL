import React from "react";
import { Link } from "react-router-dom";
import { items } from "../AllData";
import styles from "./categoriesItem.module.css";

function CategoriesItemLamp() {
  const filteredItems = items.filter((item) => item.category === "lamp");
  return (
    <>
      <div className={styles["category-container"]}>
        <div className="container">
          <div className={styles["products-grid"]}>
            {filteredItems.map((item) => (
              <div key={item.id} className={`${styles["product"]} ${"normal"}`}>
                <Link to={`/categories/product/${item.id}`}>
                  <div className={styles["product-header"]}>
                    <img src={item.img} alt="product1" />
                  </div>
                  <div className={styles["product-details"]}>
                    <p>{item.description}</p>
                    <p className={styles["item-price"]}>{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItemLamp;
