import "./productCard.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function ProductCard({ productCard = [] }) {
  return (
    <div className="product-card-wrapper">
      <div className="container product-card-container">
        <div className="product-card-container__head">
          <h2 className="product-card-container__head__title">Best Sellers</h2>
        </div>
        <div className="product-card-container__category">
          <div className="product-card-container__category__linka">
            <a href="/" className="product-card-container__category__linka__a">
              WERKS ED.
            </a>
          </div>
          <div className="product-card-container__category__linkb">
            <a href="/" className="product-card-container__category__linkb__b">
              PARTS
            </a>
          </div>
          <div className="product-card-container__category__linkb">
            <a href="/" className="product-card-container__category__linkb__b">
              ACCESSORIES
            </a>
          </div>
        </div>
        <div className="product-card-container__card">
          {productCard.map((product, index) => (
            <div className="product-card-container__card__wrapper" key={index}>
              <div className="product-card-container__card__image">
                <img
                  src={product.image}
                  alt="Product"
                  className="product-card-container__card__image__img"
                />
                <div className="product-card-container__card__content__parent">
                  <h3 className="product-card-container__card__content__title">
                    {product.title}
                  </h3>
                  <div className="product-card-container__card__content__wrapper">
                    <div className="product-card-container__card__content__wrapper__brand">
                      <p className=" product-card-container__card__content__wrapper__brand__name">
                        {product.brand}
                      </p>
                    </div>
                    <div className="product-card-container__card__content__wrapper__brand">
                      <p className=" product-card-container__card__content__wrapper__brand__name">
                        {product.id}
                      </p>
                    </div>
                  </div>
                  <p className="product-card-container__card__content__price">
                    {product.price}
                  </p>
                </div>
                <img
                  src={images.wishlistIcon}
                  alt=""
                  className="product-card-container__card__image__wishlist"
                />
              </div>
            </div>
          ))}
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
  );
}

export default ProductCard;
