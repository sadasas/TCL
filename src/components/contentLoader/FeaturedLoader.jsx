import React from "react";
import ContentLoader from "react-content-loader";
import styles from "@/styles/ContentLoader.module.scss";

const FeaturedLoader = (props) => (
  <ContentLoader
    className={styles.container}
    width={800}
    height={420}
    viewBox="0 0 800 420"
    backgroundColor="#EEEEEE"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="12" y="5" rx="2" ry="2" width="311" height="400" />
    <rect x="340" y="5" rx="2" ry="2" width="211" height="190" />
    <rect x="567" y="5" rx="2" ry="2" width="211" height="400" />
    <rect x="340" y="220" rx="2" ry="2" width="211" height="190" />
  </ContentLoader>
);

export default FeaturedLoader;
