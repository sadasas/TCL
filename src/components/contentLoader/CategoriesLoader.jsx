import ContentLoader from "react-content-loader";
import styles from "@/styles/ContentLoader.module.scss";

const CategoriesLoader = () => (
  <ContentLoader
    className={styles.container}
    width={560}
    height={110}
    viewBox="0 0 560 110"
    backgroundColor="#EEEEEE"
    foregroundColor="#ffffff"
  >
    <rect x="12" y="0" rx="2" ry="2" width="100" height="100" />
    <rect x="120" y="0" rx="2" ry="2" width="100" height="100" />
    <rect x="230" y="0" rx="2" ry="2" width="100" height="100" />
    <rect x="340" y="0" rx="2" ry="2" width="100" height="100" />
    <rect x="450" y="0" rx="2" ry="2" width="100" height="100" />
  </ContentLoader>
);

export default CategoriesLoader;
