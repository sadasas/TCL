import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TrendingItem from "./TrendingItem";
import styles from "./trendingSlider.module.scss";

function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className={styles["trending"]}>
      <div className="container">
        <div className={styles["title-btns"]}>
          <h3>Trending Now</h3>
          <div className={styles["btns"]}>
            <button onClick={slideLeft}>
              <IoIosArrowBack />
            </button>
            <button onClick={slideRight}>
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
