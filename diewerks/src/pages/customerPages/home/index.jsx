import React from "react";
import Header from "../../../components/header";
import SpecialDeal from "../../../components/specialDeal";
import Footer from "../../../components/footer";
import HeroSection from "../../../components/heroSection";
import FeatureCategories from "../../../components/featureCategories";
import ProductCard from "../../../components/productCard";
import TextContainer from "../../../components/textContainer";
import ShopNow from "../../../components/shopNow";
import "./home.scss";
import images from "../../../assets";

const Home = () => {
  return (
    <>
      <SpecialDeal />
      <Header />
      <HeroSection />
      <FeatureCategories />
      <ProductCard />
      <div className="promotion_container">
        <div className="promotion_wrapper">
          <TextContainer />
        </div>
      </div>
      <ShopNow />
      <Footer />
    </>
  );
};

export default Home;
