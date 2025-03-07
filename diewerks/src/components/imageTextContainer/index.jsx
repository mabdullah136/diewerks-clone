import "./imageTextContainer.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";
import DynamicTextContainer from "../dynamicTextContainer";

function ImageTextContainer({
  image,
  headerText = "Grassroots and Good Times",
  contentText = "Established by a group of friends united by their love for motorcycles, we turned our weekend rides and garage projects into a venture dedicated to crafting top-quality parts and accessories that embody the rider lifestyle.",
  flexDirection = "row",
}) {
  return (
    <div className="image-text-container">
      <div
        className="image-text-wrapper"
        style={{ flexDirection: flexDirection }}
      >
        <div className="image-text-wrapper__image">
          <img
            src={image}
            alt="Product"
            className="image-text-wrapper__image__img"
          />
        </div>
        {/* Dynamic Text Wrapper */}
        <div className="dynamic-text-wrapper">
          {/* Header */}
          <div className="dynamic-text-wrapper__heading">
            <h1 className="dynamic-text-wrapper__heading__title">
              {headerText}
            </h1>
          </div>
          {/* Content */}
          <div className="dynamic-text-wrapper__content">
            <p className="dynamic-text-wrapper__content__text">{contentText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageTextContainer;
