import React, { lazy } from "react";
import {
  LazyLoadComponent,
  trackWindowScroll,
} from "react-lazy-load-image-component";

import { items } from "@/AllData";
import Banner1 from "@/assets/img/banner/banner1.jpg";
import Banner2 from "@/assets/img/banner/banner2.jpg";
import styles from "@/styles/Home.module.scss";
import FeaturedLoader from "../components/contentLoader/FeaturedLoader";
import ListLoader from "../components/contentLoader/ListLoader";
import BannerLoader from "../components/contentLoader/BannerLoader";
import HighligthLLoader from "../components/contentLoader/HighligthLoader";
const ListProduct = lazy(() => import("../components/products/ListProduct"));
const HigligthProduct = lazy(() =>
  import("../components/products/HigligthProduct")
);
const Banner = lazy(() => import("@/components/Banner"));
const Featured = lazy(() => import("@/components/Featured"));

function Home({ scrollPosition }) {
  //TODO: Use  mongodb , nott like thiss dudeeeeeee
  const featuredProducts = items.filter((item) => item.id <= 8);
  const trendingProducts = items.filter((item) => item.id > 8);
  const discountProducts = items.filter((item) => item.id > 4);
  const chairProducts = items.filter((item) => item.category === "chair");
  return (
    <>
      <main className={styles["home-container"]}>
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          placeholder={<FeaturedLoader />}
        >
          <Featured />
        </LazyLoadComponent>
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          placeholder={<ListLoader />}
        >
          <ListProduct items={featuredProducts} title="Featured Product" />
        </LazyLoadComponent>
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          placeholder={<BannerLoader />}
        >
          <Banner
            title="Elegant harmonious living"
            text=" All products are handmade by professional craftsmen."
            img={Banner1}
            justify="left"
          />
        </LazyLoadComponent>
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          placeholder={<HighligthLLoader />}
        >
          <HigligthProduct
            logoUrl="/img/trending.svg"
            title={"Trending Items"}
            items={trendingProducts}
            colorTitle="#146C94"
          />
        </LazyLoadComponent>
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          placeholder={<HighligthLLoader />}
        >
          <HigligthProduct
            logoUrl="/img/trending.svg"
            title={"Discount Items"}
            items={discountProducts}
            colorTitle="#E06469"
          />
        </LazyLoadComponent>
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          placeholder={<BannerLoader />}
        >
          <Banner
            title="The furniture that defines you"
            text=" All products are handmade by professional craftsmen."
            img={Banner2}
            justify="right"
          />
        </LazyLoadComponent>
        <LazyLoadComponent
          scrollPosition={scrollPosition}
          placeholder={<ListLoader />}
        >
          <ListProduct items={chairProducts} title="Chairs" />
        </LazyLoadComponent>
      </main>
    </>
  );
}

export default trackWindowScroll(Home);
