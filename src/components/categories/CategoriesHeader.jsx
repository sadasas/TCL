"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { TbSquareArrowRight, TbSquareArrowLeft } from "react-icons/tb";
import detectElementOverflow from "detect-element-overflow";
import Image from "next/image";

import styles from "@/styles/categories/CategoriesHeader.module.scss";

function Box({ category, imgURL, innerRef }) {
  return (
    <Link ref={innerRef} className={styles.box} href={`/category/${category}`}>
      <div className={styles["img-container"]}>
        <Image sizes="60px" alt="category" fill={true} src={imgURL} />
      </div>
      <h6>{category}</h6>
    </Link>
  );
}

function CategoriesHeader() {
  const lastCategory = useRef(null);
  const slider = useRef(null);

  const [isSliderOvervlow, setIsSliderOvervlow] = useState(false);

  const sofa = "/img/categories/sofa.png";
  const table = "/img/categories/table.png";
  const chair = "/img/categories/chair.png";
  const lamp = "/img/categories/lamp.png";
  const cupboard = "/img/categories/cupboard.png";

  const slideLeft = (e) => {
    e.preventDefault();
    let slider = document.getElementById(`slider-category`);
    slider.scrollLeft = slider.scrollLeft - 400 - 10;
  };

  const slideRight = (e) => {
    e.preventDefault();
    let slider = document.getElementById(`slider-category`);
    slider.scrollLeft = slider.scrollLeft + 400 + 10;
  };

  useEffect(() => {
    if (lastCategory.current && slider.current) {
      const collision = detectElementOverflow(
        lastCategory.current,
        slider.current
      );
      setIsSliderOvervlow(collision.collidedRight);
    }
  }, [lastCategory]);

  return (
    <div className={styles["categories-header-container"]}>
      <div className={styles["slider-wrapper"]}>
        <div
          ref={slider}
          id="slider-category"
          className={styles["filter-btns"]}
        >
          <Box category="sofa" imgURL={sofa} />
          <Box category="table" imgURL={table} />
          <Box category="lamp" imgURL={lamp} />
          <Box category="chair" imgURL={chair} />
          <Box innerRef={lastCategory} category="cupboard" imgURL={cupboard} />
        </div>
        <TbSquareArrowLeft
          onClick={slideLeft}
          className={`${styles.navigation} ${styles.left} ${
            isSliderOvervlow ? styles["navigation-active"] : null
          }`}
        />
        <TbSquareArrowRight
          onClick={slideRight}
          className={`${styles.navigation} ${styles.right} ${
            isSliderOvervlow ? styles["navigation-active"] : null
          } `}
        />
      </div>
    </div>
  );
}

export default CategoriesHeader;
