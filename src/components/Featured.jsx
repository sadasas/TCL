"use client";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "@/styles/featured/Featured.module.scss";

function Featured() {
  const Main1 = "/img/featured/elegant-life.jpg";
  const Main2 = "/img/featured/relaxing-lamp.jpg";
  const Main3 = "/img/featured/table.jpg";
  const Main4 = "/img/featured/kitchen.jpg";
  const placeholderImg = "/img/placeholder/loadingImage.svg";
  return (
    <div className="container">
      <div className={styles["grid-container"]}>
        <div className={`${styles["featured"]} ${styles["grid-one"]}`}>
          <Link prefetch={false} href="category/sofa">
            <div id="img1" className={styles["overlay"]}></div>

            <LazyLoadImage
              placeholderSrc={placeholderImg}
              src={Main1}
              alt="img1"
            />
            <p className={styles["main-description"]}>Elegant live</p>
          </Link>
        </div>
        <div className={`${styles["featured"]} ${styles["grid-two"]}`}>
          <Link prefetch={false} href="category/lamp">
            <div id="img2" className={styles["overlay"]}></div>

            <LazyLoadImage
              placeholderSrc={placeholderImg}
              src={Main2}
              alt="img2"
            />
            <p className={styles["main-description"]}>Lamps</p>
          </Link>
        </div>
        <div className={`${styles["featured"]} ${styles["grid-four"]}`}>
          <Link prefetch={false} href="category/table">
            <div id="img3" className={styles["overlay"]}></div>

            <LazyLoadImage
              placeholderSrc={placeholderImg}
              src={Main3}
              alt="img3"
            />
            <p className={styles["main-description"]}>Table</p>
          </Link>
        </div>
        <div className={`${styles["featured"]} ${styles["grid-four-low"]}`}>
          <Link href="category/chair">
            <div id="img4" className={styles["overlay"]}></div>

            <LazyLoadImage
              placeholderSrc={placeholderImg}
              src={Main4}
              alt="img4"
            />
            <p className={styles["main-description"]}>kitchen</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
