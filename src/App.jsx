import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/categories/All";
import Furnitures from "./components/categories/Furnitures";
import Lamps from "./components/categories/Lamps";
import Kitchen from "./components/categories/Kitchen";
import Chairs from "./components/categories/Chairs";
import ProductPage from "./pages/ProductPage";
import React from "react";
import Table from "./components/categories/Tables";
import Cupboards from "./components/categories/Cupboards";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="tables" element={<Table />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="cupboards" element={<Cupboards />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
