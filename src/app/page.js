import dynamic from "next/dynamic";

import { items } from "@/AllData";

import styles from "@/styles/pages/home/Home.module.scss";
import FeaturedLoader from "@/components/contentLoader/FeaturedLoader";
import BannerLoader from "@/components/contentLoader/BannerLoader";
import HighligthLLoader from "@/components/contentLoader/HighligthLoader";
import ListLoader from "@/components/contentLoader/ListLoader";
const ListProduct = dynamic(() => import("@/components/products/ListProduct"), {
  loading: () => <ListLoader />,
});
const HigligthProduct = dynamic(
  () => import("@/components/products/HigligthProduct"),
  {
    loading: () => <HighligthLLoader />,
  }
);
const Banner = dynamic(() => import("@/components/Banner"), {
  loading: () => <BannerLoader />,
});
const Featured = dynamic(() => import("@/components/Featured"), {
  loading: () => <FeaturedLoader />,
});

async function Home() {
  //TODO: Use  mongodb , nott like thiss dudeeeeeee
  const featuredProducts = await items.filter((item) => item.id <= 8);
  const trendingProducts = await items.filter((item) => item.id > 8);
  const discountProducts = await items.filter((item) => item.id > 4);
  const chairProducts = await items.filter((item) => item.category === "chair");

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
