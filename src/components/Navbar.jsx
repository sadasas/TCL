import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "@/styles/Navbar.module.scss";
import EmptyCart from "./carts/EmptyCart";
import Cart from "./carts/Cart";

function MobileNav({ mobileNav, setMobileNav }) {
  return (
    <div
      className={`${styles["mobile-nav-full"]} ${
        mobileNav ? styles["open-flex"] : styles["closed-flex"]
      }`}
    >
      <h2 className={styles["close-btn"]}>
        <AiOutlineClose onClick={() => setMobileNav(!mobileNav)} />
      </h2>

      <div className={styles["mobile-links"]}>
        <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
          categories
        </Link>
        <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/lamps">
          lamps
        </Link>
        <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/chairs">
          chairs
        </Link>
      </div>
    </div>
  );
}

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
      {/* mobile nav */}
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      {/* overlay */}
      <div
        onClick={openCart}
        className={`${styles["page-overlay"]} ${
          cart ? styles["open-flex"] : styles["closed-flex"]
        }`}
      ></div>

      {/* cart */}
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
            <Link className={styles.logo} to="/">
              <h2>TCL</h2>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
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
