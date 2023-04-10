import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/categories/All";
import ProductPage from "./pages/ProductPage";
import React from "react";
import CategoriesItemChairs from "./components/categories/CategoriesItemChairs";
import CategoriesItemTables from "./components/categories/CategoriesItemTables";
import CategoriesItemLamp from "./components/categories/CategoriesItemLamps";
import CategoriesItemCupboards from "./components/categories/CategoriesItemCupboards";

function App() {
  return (
    <>
      <Navbar />
      <Routes forceRefresh={true}>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="sofa" element={<CategoriesItemChairs />} />
          <Route path="tables" element={<CategoriesItemTables />} />
          <Route path="lamps" element={<CategoriesItemLamp />} />
          <Route path="chairs" element={<CategoriesItemChairs />} />
          <Route path="cupboards" element={<CategoriesItemCupboards />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
