import "./specialDeal.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function SpecialDeal() {
  return (
    <div className="specialDeal__wrapper">
      <div className="container specialDeal__container">
        <div className="specialDeal__content__wrapper">
          <p className="specialDeal__content__wrapper__text">
            Special Deals 15% Off
          </p>
        </div>
        <div className="specialDeal__link__wrapper">
          <a href="/" className="specialDeal__link__wrapper__text">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default SpecialDeal;
