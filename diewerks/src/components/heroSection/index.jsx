import "./heroSection.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="container hero-section-container">
        <div className="hero-section-content">
          <span className="hero-section-content__span"> ALL NEW</span>
          <h1 className="hero-section-content__title">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="hero-section-content__description">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="hero-section-content__button">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
