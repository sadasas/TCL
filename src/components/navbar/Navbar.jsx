"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import EmptyCart from "../carts/EmptyCart";

import styles from "@/styles/Navbar.module.scss";
import DotLoader from "../contentLoader/DotLoader";
const MobileNav = dynamic(() => import("./MobileNav"));
const Cart = dynamic(() => import("../carts/Cart"), {
  loading: () => <DotLoader />,
});

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
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />

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
          {cartItem.length < 1 ? <EmptyCart openCart={openCart} /> : <Cart />}
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
            <Link prefetch={false} className={styles.logo} href="/">
              <h2>TCL</h2>
            </Link>
            <Link prefetch={false} href="/category/sofa">
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
