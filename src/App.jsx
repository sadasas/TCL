import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/categories/All";
import Lamps from "./components/categories/Lamps";

import Chairs from "./components/categories/Chairs";
import ProductPage from "./pages/ProductPage";
import React from "react";
import Table from "./components/categories/Tables";
import Cupboards from "./components/categories/Cupboards";
import Sofa from "./components/categories/Sofa";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="sofa" element={<Sofa />} />
          <Route path="tables" element={<Table />} />
          <Route path="lamps" element={<Lamps />} />

          <Route path="chairs" element={<Chairs />} />
          <Route path="cupboards" element={<Cupboards />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
