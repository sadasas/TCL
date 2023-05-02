import React from "react";
import ContentLoader from "react-content-loader";
import styles from "@/styles/ContentLoader.module.scss";

const HighligthLLoader = (props) => (
  <ContentLoader
    className={styles.container}
    width={700}
    height={575}
    viewBox="0 0 700 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
    <rect x="230" y="57" rx="2" ry="2" width="460" height="211" />
  </ContentLoader>
);

export default HighligthLLoader;
