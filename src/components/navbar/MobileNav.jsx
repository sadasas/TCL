"use client";

import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

import styles from "@/styles/Navbar.module.scss";

function MobileNav({ mobileNav, setMobileNav }) {
  return (
    <div
      className={`${styles["mobile-nav-full"]} ${
        mobileNav ? styles["open-flex"] : styles["closed-flex"]
      }`}
    >
      <h2 className={styles["close-btn"]}>
        <AiOutlineClose
          onClick={(e) => {
            e.preventDefault();
            setMobileNav(!mobileNav);
          }}
        />
      </h2>

      <div className={styles["mobile-links"]}>
        <Link
          onClick={(e) => {
            e.preventDefault();
            setMobileNav(!mobileNav);
          }}
          href="/category/sofa"
        >
          categories
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            setMobileNav(!mobileNav);
          }}
          href="/category/lamp"
        >
          lamps
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            setMobileNav(!mobileNav);
          }}
          href="/category/chair"
        >
          chairs
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
