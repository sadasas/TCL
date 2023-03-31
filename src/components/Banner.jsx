import React from "react";
import { Link } from "react-router-dom";
import styles from "./banner.module.css";

function Banner({ title, text, img }) {
  return (
    <div className={styles["banner"]}>
      <div className="container">
        <div className={styles["banner-container"]}>
          <div
            style={{ "--bg-image": "url('" + img + "')" }}
            className={styles["text-side"]}
          >
            <div className={styles["text"]}>
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className={styles["img-side"]}>
            <img src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
