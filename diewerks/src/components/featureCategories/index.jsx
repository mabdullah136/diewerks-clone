import "./featureCategories.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function FeatureCategories({
  // Props
  categories = [],
}) {
  return (
    <div className=" feature-categories-wrapper">
      <div className="container feature-categories-container">
        <div className="feature-categories-content">
          <h2 className="feature-categories-content__title">Our Products</h2>
          <div className="feature-categories-content__categories">
            <div className="feature-categories-content__categories__wrapper">
              <div className="feature-categories-content__category">
                <img
                  src={images.ducati}
                  alt="Category 1"
                  className="feature-categories-content__category__img"
                />
              </div>
              <div className="feature-categories-content__category">
                <img
                  src={images.card}
                  alt="Category 2"
                  className="feature-categories-content__category__img"
                />
              </div>
              <div className="feature-categories-content__category">
                <img
                  src={images.ducati}
                  alt="Category 3"
                  className="feature-categories-content__category__img"
                />
              </div>
              <div className="feature-categories-content__category">
                <img
                  src={images.card}
                  alt="Category 4"
                  className="feature-categories-content__category__img"
                />
              </div>
              <div className="feature-categories-content__category">
                <img
                  src={images.ducati}
                  alt="Category 1"
                  className="feature-categories-content__category__img"
                />
              </div>
              {categories.map((category, index) => (
                <div
                  className="feature-categories-content__category"
                  key={index}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="feature-categories-content__category__img"
                  />
                </div>
              ))}
            </div>
            <div className="feature-categories-content__wrapper">
              <div className="feature-categories-content__detail">
                <a
                  href="/"
                  className="feature-categories-content__detail__title"
                >
                  WERKS EDITION
                  <img
                    src={images.rightArrowIcon}
                    alt="icon"
                    className="feature-categories-content__detail__img"
                  />
                </a>
              </div>
              <div className="feature-categories-content__detail">
                <a
                  href="/"
                  className="feature-categories-content__detail__title"
                >
                  WERKS EDITION & WERKS EDITION & WERKS EDITION
                  <img
                    src={images.rightArrowIcon}
                    alt="icon"
                    className="feature-categories-content__detail__img"
                  />
                </a>
              </div>
              <div className="feature-categories-content__detail">
                <a
                  href="/"
                  className="feature-categories-content__detail__title"
                >
                  WERKS EDITION
                  <img
                    src={images.rightArrowIcon}
                    alt="icon"
                    className="feature-categories-content__detail__img"
                  />
                </a>
              </div>
              <div className="feature-categories-content__detail">
                <a
                  href="/"
                  className="feature-categories-content__detail__title"
                >
                  WERKS EDITION
                  <img
                    src={images.rightArrowIcon}
                    alt="icon"
                    className="feature-categories-content__detail__img"
                  />
                </a>
              </div>
              <div className="feature-categories-content__detail">
                <a
                  href="/"
                  className="feature-categories-content__detail__title"
                >
                  WERKS EDITION
                  <img
                    src={images.rightArrowIcon}
                    alt="icon"
                    className="feature-categories-content__detail__img"
                  />
                </a>
              </div>
              {categories.map((category, index) => (
                <div className="feature-categories-content__detail" key={index}>
                  <a
                    href={category.link}
                    className="feature-categories-content__detail__title"
                  >
                    {category.title}
                    <img
                      src={images.rightArrowIcon}
                      alt="icon"
                      className="feature-categories-content__detail__img"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCategories;
