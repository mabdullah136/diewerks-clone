import "./dynamicTextContainer.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function DynamicTextContainer({
  headerFontSize = "3rem",
  headerText = "About Us",
  contentFontSize = "1.1rem",
  contentText = "Welcome to Die Werks, where passion meets precision, and friendship fuels innovation.",
  textDirection = "column",
}) {
  return (
    <div className="dynamic-text-container">
      {/* Dynamic Text Wrapper */}
      <div
        className="dynamic-text-wrapper"
        style={{ flexDirection: textDirection }}
      >
        {/* Header */}
        <div className="dynamic-text-wrapper__heading">
          <h1
            className="dynamic-text-wrapper__heading__title"
            style={{ fontSize: headerFontSize }}
          >
            {headerText}
          </h1>
        </div>
        {/* Content */}
        <div className="dynamic-text-wrapper__content">
          <p
            className="dynamic-text-wrapper__content__text"
            style={{ fontSize: contentFontSize }}
          >
            {contentText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DynamicTextContainer;
