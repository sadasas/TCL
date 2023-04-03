import CategoriesHeader from "../components/categories/CategoriesHeader";
import { Outlet } from "react-router";
import React from "react";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
