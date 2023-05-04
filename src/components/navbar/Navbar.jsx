import React, { useState, useEffect, lazy, Suspense } from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import styles from "@/styles/Navbar.module.scss";
import DotLoader from "../contentLoader/DotLoader";
const MobileNav = lazy(() => import("./MobileNav"));
const EmptyCart = lazy(() => import("../carts/EmptyCart"));
const Cart = lazy(() => import("../carts/Cart"));

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const cartItem = useSelector((state) => state.shoppingCart.value);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <LazyLoadComponent>
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </LazyLoadComponent>

      <div
        onClick={openCart}
        className={`${styles["page-overlay"]} ${
          cart ? styles["open-flex"] : styles["closed-flex"]
        }`}
      ></div>

      <div
        className={`${styles["cart-container"]} ${
          cart ? styles["open-cart"] : styles["closed-cart"]
        }`}
      >
        <h2 className={styles["cart-title"]}>Cart ({cartItem.length})</h2>

        <AiOutlineClose
          className={styles["cart-close-btn"]}
          onClick={openCart}
        />
        <div className={styles["cart-content-container"]}>
          <Suspense fallback={<DotLoader />}>
            {cartItem.length < 1 ? (
              <LazyLoadComponent placeholder={<DotLoader />}>
                <EmptyCart openCart={openCart} />
              </LazyLoadComponent>
            ) : (
              <LazyLoadComponent placeholder={<DotLoader />}>
                <Cart />
              </LazyLoadComponent>
            )}
          </Suspense>
        </div>
      </div>

      <nav className={styles.container}>
        <div
          className={`${styles["nav-container"]} ${
            sticky ? styles["nav-container-sticky"] : null
          }`}
        >
          <div
            className={`${styles["nav-content-container"]} ${styles["nav-links"]}`}
          >
            <Link className={styles.logo} to="/">
              <h2>TCL</h2>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/categories/sofa">
              <h2>categories</h2>
            </Link>
          </div>
          <div className={styles["nav-content-container"]}>
            <h2
              className={` ${styles["cart-icon"]} ${
                cartItem.length > 0 ? styles["cart-icon-with-items"] : null
              }`}
              data-array-length={cartItem.length}
            >
              <AiOutlineShoppingCart onClick={openCart} />
            </h2>
            <RxHamburgerMenu
              onClick={() => setMobileNav(!mobileNav)}
              className={styles["hamburger-icon"]}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
