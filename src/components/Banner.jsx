import React from "react";
import { Link } from "react-router-dom";

import styles from "@/styles/Banner.module.scss";

function Banner({ title, text, img, justify }) {
  return (
    <div className="container">
      <div
        className={`${
          justify === "left"
            ? styles["banner-container"]
            : styles["banner-container-reverse"]
        }`}
      >
        <div
          style={{ "--bg-image": "url('" + img + "')" }}
          className={styles["left-container"]}
        >
          <div className={styles["text-container"]}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
              <button>Shop now</button>
            </Link>
          </div>
        </div>
        <div className={styles["right-container"]}>
          <img src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
