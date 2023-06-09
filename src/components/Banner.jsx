"use client";
import Link from "next/link";

import styles from "@/styles/Banner.module.scss";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function Banner({ title, text, img, justify, scrollPosition }) {
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
            <Link  href="category/sofa">
              <button>Shop now</button>
            </Link>
          </div>
        </div>
        <div className={styles["right-container"]}>
          <LazyLoadImage
            scrollPosition={scrollPosition}
            src={img}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(Banner);
