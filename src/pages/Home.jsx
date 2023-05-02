import React from "react";

import { items } from "@/AllData";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Banner1 from "@/assets/img/banner/banner1.jpg";
import Banner2 from "@/assets/img/banner/banner2.jpg";
import styles from "@/styles/Home.module.scss";
import ListProduct from "../components/products/ListProduct";
import HigligthProduct from "../components/products/HigligthProduct";

function Home() {
  //TODO: Use  mongodb , nott like thiss dudeeeeeee
  const featuredProducts = items.filter((item) => item.id <= 8);
  const trendingProducts = items.filter((item) => item.id > 8);
  const discountProducts = items.filter((item) => item.id > 4);
  const chairProducts = items.filter((item) => item.category === "chair");
  return (
    <>
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
    </>
  );
}

export default Home;
