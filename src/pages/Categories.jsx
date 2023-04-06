import CategoriesHeader from "../components/categories/CategoriesHeader";
import { Outlet } from "react-router";
import React from "react";
import styles from "./categories.module.css";
import Footer from "../components/Footer";
function Categories() {
  return (
    <div className={styles.container}>
      <CategoriesHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Categories;
