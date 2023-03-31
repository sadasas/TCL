import CategoriesHeader from "../components/Categories-pages/CategoriesHeader";
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
