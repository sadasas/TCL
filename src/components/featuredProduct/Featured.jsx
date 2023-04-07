import { Link } from "react-router-dom";
import React, { useState } from "react";
import Main1 from "../../img/featured/elegant-life.jpg";
import Main2 from "../../img/featured/relaxing-lamp.jpg";
import Main3 from "../../img/featured/table.jpg";
import Main4 from "../../img/featured/kitchen.jpg";
import styles from "./featured.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MyLoader from "../ContentLoader";

function Featured() {
  const [IsLoadImg, setIsLoadImg] = useState(false);
  return (
    <>
      <div className={styles["home-container"]}>
        <div className="container">
          <div className={styles["grid-container"]}>
            <div className={`${styles["featured"]} ${styles["grid-one"]}`}>
              <Link to="categories/sofa">
                <div id="img1" className={styles["lil-overlay"]}></div>
                {IsLoadImg && <MyLoader />}
                <LazyLoadImage
                  beforeLoad={() => setIsLoadImg(true)}
                  afterLoad={() => setIsLoadImg(false)}
                  src={Main1}
                  alt="img1"
                />
                <p className={styles["main-description"]}>Elegant live</p>
              </Link>
            </div>
            <div className={`${styles["featured"]} ${styles["grid-two"]}`}>
              <Link to="categories/lamps">
                <div id="img2" className={styles["lil-overlay"]}></div>
                {IsLoadImg && <MyLoader />}
                <LazyLoadImage
                  beforeLoad={() => setIsLoadImg(true)}
                  afterLoad={() => setIsLoadImg(false)}
                  src={Main2}
                  alt="img2"
                />
                <p className={styles["main-description"]}>Lamps</p>
              </Link>
            </div>
            <div className={`${styles["featured"]} ${styles["grid-four"]}`}>
              <Link to="categories/tables">
                <div id="img3" className={styles["lil-overlay"]}></div>
                {IsLoadImg && <MyLoader />}
                <LazyLoadImage
                  beforeLoad={() => setIsLoadImg(true)}
                  afterLoad={() => setIsLoadImg(false)}
                  src={Main3}
                  alt="img3"
                />
                <p className={styles["main-description"]}>Table</p>
              </Link>
            </div>
            <div className={`${styles["featured"]} ${styles["grid-four-low"]}`}>
              <Link to="categories/chairs">
                <div id="img4" className={styles["lil-overlay"]}></div>
                {IsLoadImg && <MyLoader />}
                <LazyLoadImage
                  beforeLoad={() => setIsLoadImg(true)}
                  afterLoad={() => setIsLoadImg(false)}
                  src={Main4}
                  alt="img4"
                />
                <p className={styles["main-description"]}>kitchen</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
