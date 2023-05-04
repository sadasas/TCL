import React from "react";
import ContentLoader from "react-content-loader";
import styles from "@/styles/ContentLoader.module.scss";

const BannerLoader = (props) => (
  <ContentLoader
    className={styles.container}
    width={800}
    height={220}
    viewBox="0 0 800 220"
    backgroundColor="#EEEEEE"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="12" y="0" rx="2" ry="2" width="380" height="211" />
    <rect x="400" y="0" rx="2" ry="2" width="380" height="211" />
  </ContentLoader>
);

export default BannerLoader;
