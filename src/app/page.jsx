import { gql } from "@apollo/client";
import dynamic from "next/dynamic";
import styles from "@/styles/pages/home/Home.module.scss";
import { getDataQueryServer } from "./api/getDataQuery";
import { getAccessToken } from "./api/getAccessToken";
import Featured from "@/components/Featured";
import ListLoader from "@/components/contentLoader/ListLoader";
import BannerLoader from "@/components/contentLoader/BannerLoader";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";

const ListProduct = dynamic(() => import("@/components/products/ListProduct"), {
  ssr: false,
  loading: () => <ListLoader />,
});

const Banner = dynamic(() => import("@/components/Banner"), {
  ssr: false,
  loading: () => <BannerLoader />,
});

const HigligthProduct = dynamic(
  () => import("@/components/products/HigligthProduct"),
  {
    ssr: false,
    loading: () => <HighligthLLoader />,
  }
);

const GET_PRODUCTS = gql`
  query Query {
    products(limit: 18) {
      _id
      img
      price
      title
      category
    }
  }
`;

async function Home() {
  const accessToken = await getAccessToken();
  const { products } = await getDataQueryServer(GET_PRODUCTS, accessToken);

  const featuredProducts = await products.slice(0, 7);
  const trendingProducts = await products.slice(8, 14);
  const discountProducts = await products.slice(5);
  const chairProducts = await products.filter(
    (item) => item.category == "chair"
  );

  const Banner1 = "/img/banner/banner1.jpg";
  const Banner2 = "/img/banner/banner2.jpg";
  return (
    <main className={styles["home-container"]}>
      <Featured />
      <ListProduct items={featuredProducts} title="Featured Product" />
      <Banner
        title="Elegant harmonious living"
        text=" All products are handmade by professional craftsmen."
        img={Banner1}
        justify="left"
      />
      <HigligthProduct
        logoUrl="/img/trending.svg"
        title={"Trending Items"}
        items={trendingProducts}
        colorTitle="#146C94"
      />
      <HigligthProduct
        logoUrl="/img/trending.svg"
        title={"Discount Items"}
        items={discountProducts}
        colorTitle="#E06469"
      />
      <Banner
        title="The furniture that defines you"
        text=" All products are handmade by professional craftsmen."
        img={Banner2}
        justify="right"
      />
      <ListProduct items={chairProducts} title="Chairs" />
    </main>
  );
}
export default Home;
