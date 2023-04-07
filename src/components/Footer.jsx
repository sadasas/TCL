import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <>
      <footer>
        <p className={styles.footer}>
          Design by
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/sadasas"
          >
            &nbsp; Wahyu SRP
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
