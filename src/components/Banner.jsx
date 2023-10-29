"use client";
import Link from "next/link";
import Image from "next/image";

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
            <Link href="category/sofa">
              <button>Shop now</button>
            </Link>
          </div>
        </div>
        <div className={styles["right-container"]}>
          <Image fill src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
