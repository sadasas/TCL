import { Link } from "react-router-dom";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Main1 from "@/assets/img/featured/elegant-life.jpg";
import Main2 from "@/assets/img/featured/relaxing-lamp.jpg";
import Main3 from "@/assets/img/featured/table.jpg";
import Main4 from "@/assets/img/featured/kitchen.jpg";
import styles from "@/styles/featured/Featured.module.scss";
import placeholderImg from "/img/placeholder/loadingImage.svg";

function Featured() {
  return (
    <>
      <div className="container">
        <div className={styles["grid-container"]}>
          <div className={`${styles["featured"]} ${styles["grid-one"]}`}>
            <Link to="categories/sofa">
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
            <Link to="categories/lamp">
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
            <Link to="categories/table">
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
            <Link to="categories/chair">
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
    </>
  );
}

export default Featured;
