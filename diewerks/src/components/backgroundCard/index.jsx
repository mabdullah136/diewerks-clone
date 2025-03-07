import "./backgroundCard.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function BackgroundCard({ productCard = [] }) {
  return (
    <div className="background-card">
      <div className="background-card-container">
        <div className="background-card-wrapper">
          <div className="background-card-wrapper__heading">
            <h1 className="background-card-wrapper__heading__title">
              WERKS EDITION
            </h1>
          </div>
          <div className="background-card-wrapper__content">
            <div className="product-card-container__card__wrapper">
              <div className="product-card-container__card__image">
                <img
                  src={images.card}
                  alt="Product"
                  className="product-card-container__card__image__img"
                />
                <div className="product-card-container__card__content__parent">
                  <h3 className="product-card-container__card__content__title">
                    Product Name
                  </h3>
                  <div className="product-card-container__card__content__wrapper">
                    <div className="product-card-container__card__content__wrapper__brand">
                      <p className=" product-card-container__card__content__wrapper__brand__name">
                        BrandName
                      </p>
                    </div>
                    <div className="product-card-container__card__content__wrapper__brand">
                      <p className=" product-card-container__card__content__wrapper__brand__name">
                        10011025-001
                      </p>
                    </div>
                  </div>
                  <p className="product-card-container__card__content__price">
                    $85.00
                  </p>
                </div>
                <img
                  src={images.wishlistIcon}
                  alt=""
                  className="product-card-container__card__image__wishlist"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundCard;
