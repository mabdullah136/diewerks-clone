import "./shopNow.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function ShopNow({
  shopNow = [
    {
      title: "Bike Parts",
      description: "aliquip ex commodo consequat",
      image: images.card,
    },
    {
      title: "Bike Parts",
      description: "aliquip ex commodo consequat",
      image: images.card,
    },
  ],
}) {
  return (
    <div className="shopNow-container">
      {shopNow.map((shopNow, index) => (
        <div className="container shopNow-wrapper">
          <div className="shopNow-wrapper__heading1">
            <h2 className="shopNow-wrapper__heading1__title">
              {shopNow.title}
            </h2>
          </div>
          <div className="shopNow-wrapper__heading2">
            <h2 className="shopNow-wrapper__heading2__title">
              {shopNow.description}
            </h2>
          </div>
          <div className="shopNow-wrapper__image-button-wrapper">
            <img
              src={shopNow.image}
              alt="image"
              className="shopNow-wrapper__image-button-wrapper__image"
            />
            <button className="shopNow-wrapper__image-button-wrapper__button-wrapper">
              <a
                href="/"
                className="shopNow-wrapper__image-button-wrapper__button-wrapper__link"
              >
                SHOP NOW
              </a>
            </button>
          </div>
        </div>
      ))}
      {/* <div className="container shopNow-wrapper">
        <div className="shopNow-wrapper__heading1">
          <h2 className="shopNow-wrapper__heading1__title">Bike Parts</h2>
        </div>
        <div className="shopNow-wrapper__heading2">
          <h2 className="shopNow-wrapper__heading2__title">
            aliquip ex commodo consequat
          </h2>
        </div>
        <div className="shopNow-wrapper__image-button-wrapper">
          <img
            src={images.card}
            alt="image"
            className="shopNow-wrapper__image-button-wrapper__image"
          />
          <button className="shopNow-wrapper__image-button-wrapper__button-wrapper">
            <a
              href="/"
              className="shopNow-wrapper__image-button-wrapper__button-wrapper__link"
            >
              SHOP NOW
            </a>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default ShopNow;
