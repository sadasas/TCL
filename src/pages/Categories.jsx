import { Outlet } from "react-router";
import React from "react";

import CategoriesHeader from "../components/categories/CategoriesHeader";
import styles from "@/styles/Categories.module.scss";

function Categories() {
  return (
    <section id="categories" className="container">
      <div className={styles["categories-container"]}>
        <CategoriesHeader />
        <Outlet />
      </div>
    </section>
  );
}

export default Categories;
