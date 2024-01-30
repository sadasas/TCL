"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/featured/Featured.module.scss";

function Featured() {
  const Main1 = "/img/featured/elegant-life.jpg";
  const Main2 = "/img/featured/relaxing-lamp.jpg";
  const Main3 = "/img/featured/table.jpg";
  const Main4 = "/img/featured/kitchen.jpg";

  const imageLoader = ({ src, width, quality }) => {
    return `/img/placeholder/loadingImage.svg?w=${width}&q=${quality || 75}`;
  };

  const placeholderImg = "";
  return (
    <div className="container">
      <div className={styles["grid-container"]}>
        <div className={`${styles["featured"]} ${styles["grid-one"]}`}>
          <Link href="category/sofa">
            <div id="img1" className={styles["overlay"]}></div>
            <Image src={Main1} alt="img1" fill loading="eager" />
            <p className={styles["main-description"]}>Elegant live</p>
          </Link>
        </div>
        <div className={`${styles["featured"]} ${styles["grid-two"]}`}>
          <Link href="category/lamp">
            <div id="img2" className={styles["overlay"]}></div>
            <Image src={Main2} alt="img2" fill loading="eager" />
            <p className={styles["main-description"]}>Lamps</p>
          </Link>
        </div>
        <div className={`${styles["featured"]} ${styles["grid-four"]}`}>
          <Link href="category/table">
            <div id="img3" className={styles["overlay"]}></div>
            <Image src={Main3} alt="img3" fill loading="eager" />
            <p className={styles["main-description"]}>Table</p>
          </Link>
        </div>
        <div className={`${styles["featured"]} ${styles["grid-four-low"]}`}>
          <Link href="category/chair">
            <div id="img4" className={styles["overlay"]}></div>
            <Image src={Main4} alt="img4" fill loading="eager" />
            <p className={styles["main-description"]}>kitchen</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
