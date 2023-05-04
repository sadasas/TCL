import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "@/styles/Navbar.module.scss";

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
        <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/sofa">
          categories
        </Link>
        <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/lamp">
          lamps
        </Link>
        <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/chair">
          chairs
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
