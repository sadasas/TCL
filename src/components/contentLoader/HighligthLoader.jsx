import ContentLoader from "react-content-loader";
import styles from "@/styles/ContentLoader.module.scss";

const HighligthLLoader = () => (
  <ContentLoader
    className={styles.container}
    width={700}
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#EEEEEE"
    foregroundColor="#ffffff"
  >
    <rect x="4" y="8" rx="3" ry="3" width="7" height="250" />
    <rect x="6" y="250" rx="3" ry="3" width="669" height="8" />
    <rect x="670" y="9" rx="3" ry="3" width="6" height="250" />
    <rect x="4" y="8" rx="16" ry="16" width="200" height="250" />
    <rect x="210" y="19" width="200" height="225" />
    <rect x="420" y="19" width="200" height="225" />
    <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
  </ContentLoader>
);

export default HighligthLLoader;
