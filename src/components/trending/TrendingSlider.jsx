import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TrendingItem from "./TrendingItem";
import styles from "./trendingSlider.module.css";

function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <div className={styles["trending"]}>
      <div className="container">
        <div className={styles["title-btns"]}>
          <h3>Trending Now</h3>
          <div className={styles["btns"]}>
            <button title={styles["scroll-left"]} onClick={slideLeft}>
              <IoIosArrowBack />
            </button>
            <button title="scroll right" onClick={slideRight}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className={styles["row-container"]} id="slider">
          <TrendingItem />
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
