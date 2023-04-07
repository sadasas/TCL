import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./categoriesHeader.module.scss";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className={styles["catego-header"]}>
          <div className={styles["title-home"]}>
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className={styles["filter-btns"]}>
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="sofa">
              <button onClick={() => handleBtnName("furnitures")}>Sofa</button>
            </Link>
            <Link to="tables">
              <button onClick={() => handleBtnName("tables")}>Tables</button>
            </Link>
            <Link to="lamps">
              <button onClick={() => handleBtnName("lamps")}>Lamps</button>
            </Link>

            <Link to="chairs">
              <button onClick={() => handleBtnName("chairs")}>Chairs</button>
            </Link>
            <Link to="cupboards">
              <button onClick={() => handleBtnName("cupboard")}>
                CupBoards
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
