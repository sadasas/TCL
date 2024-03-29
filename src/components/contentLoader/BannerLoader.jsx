import ContentLoader from "react-content-loader";
import styles from "@/styles/ContentLoader.module.scss";

const BannerLoader = () => (
  <ContentLoader
    className={styles.container}
    width={800}
    height={300}
    viewBox="0 0 800 300"
    backgroundColor="#EEEEEE"
    foregroundColor="#ffffff"
  >
    <rect x="12" y="58" rx="2" ry="2" width="380" height="211" />
    <rect x="400" y="57" rx="2" ry="2" width="380" height="211" />
  </ContentLoader>
);

export default BannerLoader;
