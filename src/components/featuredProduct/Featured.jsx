import { Link } from "react-router-dom";
import React from "react";
import Main1 from "../../img/featured/elegant-life.jpg";
import Main2 from "../../img/featured/relaxing-lamp.jpg";
import Main3 from "../../img/featured/table.jpg";
import Main4 from "../../img/featured/kitchen.jpg";
import styles from "./featured.module.css";

function Featured() {
  return (
    <>
      <div className={styles["home-container"]}>
        <div className="container">
          <div className={styles["grid-container"]}>
            <div className={`${styles["featured"]} ${styles["grid-one"]}`}>
              <Link to="categories/sofa">
                <div id="img1" className={styles["lil-overlay"]}></div>
                <img src={Main1} alt="img1" />
                <p className={styles["main-description"]}>Elegant live</p>
              </Link>
            </div>
            <div className={`${styles["featured"]} ${styles["grid-two"]}`}>
              <Link to="categories/lamps">
                <div id="img2" className={styles["lil-overlay"]}></div>
                <img src={Main2} alt="img2" />
                <p className={styles["main-description"]}>Lamps</p>
              </Link>
            </div>
            <div className={`${styles["featured"]} ${styles["grid-four"]}`}>
              <Link to="categories/tables">
                <div id="img3" className={styles["lil-overlay"]}></div>
                <img src={Main3} alt="img3" />
                <p className={styles["main-description"]}>Table</p>
              </Link>
            </div>
            <div className={`${styles["featured"]} ${styles["grid-four-low"]}`}>
              <Link to="categories/chairs">
                <div id="img4" className={styles["lil-overlay"]}></div>
                <img src={Main4} alt="img4" />
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
