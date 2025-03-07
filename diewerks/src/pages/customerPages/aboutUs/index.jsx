import React from "react";
import Header from "../../../components/header";
import SpecialDeal from "../../../components/specialDeal";
import Footer from "../../../components/footer";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import ImageTextContainer from "../../../components/imageTextContainer";
import "./aboutUs.scss";
import images from "../../../assets";

const AboutUs = () => {
  return (
    <>
      <SpecialDeal />
      <Header />
      {/* <DynamicTextContainer /> */}
      <div className="container about-us-container">
        <div className="about-us-container__heading">
          <h1 className="about-us-container__heading__title">About Us</h1>
        </div>
        <div className="about-us-container__content">
          <p className="about-us-container__content__text">
            Welcome to Die Werks, where passion meets precision, and friendship
            fuels innovation.
          </p>
        </div>
      </div>
      <div className="about-us-dynamic-container">
        <ImageTextContainer image={images.card} />
        <ImageTextContainer image={images.card} flexDirection="row-reverse" />
        <ImageTextContainer image={images.card} />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
