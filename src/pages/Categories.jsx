import { Outlet } from "react-router";
import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import CategoriesHeader from "../components/categories/CategoriesHeader";
import styles from "@/styles/Categories.module.scss";
import CategoriesLoader from "../components/contentLoader/CategoriesLoader";

function Categories() {
  return (
    <section id="categories" className="container">
      <div className={styles["categories-container"]}>
        <LazyLoadComponent placeholder={<CategoriesLoader />}>
          <CategoriesHeader />
        </LazyLoadComponent>
        <Outlet />
      </div>
    </section>
  );
}

export default Categories;
