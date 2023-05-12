import dynamic from "next/dynamic";
import { gql } from "@apollo/client";

import styles from "@/styles/pages/home/Home.module.scss";
import FeaturedLoader from "@/components/contentLoader/FeaturedLoader";
import BannerLoader from "@/components/contentLoader/BannerLoader";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";
import ListLoader from "@/components/contentLoader/ListLoader";
import { getDataQueryServer } from "./api/getDataQuery";
import { getAccessToken } from "./api/getAccessToken";
import Featured from "@/components/Featured";
import ListProduct from "@/components/products/ListProduct";
import Banner from "@/components/Banner";
import HigligthProduct from "@/components/products/HigligthProduct";
import { Suspense } from "react";

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
      <Suspense fallback={<FeaturedLoader />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<ListLoader />}>
        <ListProduct items={featuredProducts} title="Featured Product" />
      </Suspense>
      <Suspense fallback={<BannerLoader />}>
        <Banner
          title="Elegant harmonious living"
          text=" All products are handmade by professional craftsmen."
          img={Banner1}
          justify="left"
        />
      </Suspense>
      <Suspense fallback={<HighligthLLoader />}>
        <HigligthProduct
          logoUrl="/img/trending.svg"
          title={"Trending Items"}
          items={trendingProducts}
          colorTitle="#146C94"
        />
      </Suspense>
      <Suspense fallback={<HighligthLLoader />}>
        <HigligthProduct
          logoUrl="/img/trending.svg"
          title={"Discount Items"}
          items={discountProducts}
          colorTitle="#E06469"
        />
      </Suspense>
      <Suspense fallback={<BannerLoader />}>
        <Banner
          title="The furniture that defines you"
          text=" All products are handmade by professional craftsmen."
          img={Banner2}
          justify="right"
        />
      </Suspense>
      <Suspense fallback={<ListLoader />}>
        <ListProduct items={chairProducts} title="Chairs" />
      </Suspense>
    </main>
  );
}
export default Home;
