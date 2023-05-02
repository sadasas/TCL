import { Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import { ScrollToTop } from "./components/scrollToTop";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import CategoriesItem from "./components/categories/CategoriesItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="categories/" element={<Categories />}>
            <Route path=":type" element={<CategoriesItem />}></Route>
          </Route>
          <Route path="categories/product/:id" element={<Product />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
