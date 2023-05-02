import React from "react";

import styles from "@/styles/Footer.module.scss";

function Footer() {
  return (
    <>
      <section id="footer">
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
      </section>
    </>
  );
}

export default Footer;
