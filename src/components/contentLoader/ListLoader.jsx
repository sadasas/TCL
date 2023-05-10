import ContentLoader from "react-content-loader";
import styles from "@/styles/ContentLoader.module.scss";

const ListLoader = () => (
  <ContentLoader
    className={styles.container}
    width={800}
    height={200}
    viewBox="0 0 800 200"
    backgroundColor="#EEEEEE"
    foregroundColor="#ffffff"
  >
    <rect x="14" y="30" rx="2" ry="2" width="200" height="11" />
    <rect x="12" y="58" rx="2" ry="2" width="150" height="150" />
    <rect x="180" y="57" rx="2" ry="2" width="150" height="150" />
    <rect x="350" y="56" rx="2" ry="2" width="150" height="150" />
    <rect x="520" y="57" rx="2" ry="2" width="150" height="150" />
  </ContentLoader>
);

export default ListLoader;
