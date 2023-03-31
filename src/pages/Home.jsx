import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/featuredProduct/Featured";
import Footer from "../components/Footer";
import ProudProducts from "../components/featuredProduct/FeaturedProducts";
import TrendingSlider from "../components/trending/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";

function Home() {
  return (
    <>
      <Featured />
      <ProudProducts />
      <Banner
        title="Elegant harmonious living"
        text=" All products are handmade by professional craftsmen."
        img={Banner1}
      />
      <TrendingSlider />
      <Footer />
    </>
  );
}

export default Home;
