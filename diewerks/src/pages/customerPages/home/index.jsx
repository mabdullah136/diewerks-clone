import React from "react";
import Header from "../../../components/header";
import SpecialDeal from "../../../components/specialDeal";
import Footer from "../../../components/footer";
import HeroSection from "../../../components/heroSection";
import FeatureCategories from "../../../components/featureCategories";
import "./home.scss";
import images from "../../../assets";

const Home = () => {
  return (
    <>
      <SpecialDeal />
      <Header />
      <HeroSection />
      <FeatureCategories />
      <Footer />
    </>
  );
};

export default Home;
