import "./contentLinks.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function ContentLinks({
  contentLinks = [
    {
      heading: (
        <span>
          You’ve got <span className="blue"> Questions</span>, We’ve got{" "}
          <span className="blue"> Answers</span>
        </span>
      ),
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "View our Installation Videos",
    },
    {
      heading: (
        <span>
          You’ve got <span className="blue"> Questions</span>, We’ve got{" "}
          <span className="blue"> Answers</span>
        </span>
      ),
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "View our Installation Videos",
    },
    {
      heading: (
        <span>
          You’ve got <span className="blue"> Questions</span>, We’ve got{" "}
          <span className="blue"> Answers</span>
        </span>
      ),
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "View our Installation Videos",
    },
  ],
}) {
  return (
    <div className="content-links">
      <div className="content-links-container">
        <div className="content-links-container__1">
          <div className="content-links-container__1__image">
            <img
              src={images.flashIcon}
              alt="icon"
              className="content-links-container__1__image__img"
            />
          </div>
          <div className="content-links-container__1__line"></div>
        </div>
        <div className="content-links-container__2">
          {contentLinks.map((contentLink, index) => (
            <div className="content-links-container__2__parent" key={index}>
              <h1 className="content-links-container__2__parent__heading">
                {contentLink.heading}
              </h1>
              <p className="content-links-container__2__parent__content">
                {contentLink.content}
              </p>
              <a href="/" className="content-links-container__2__parent__link">
                {contentLink.link}
              </a>
            </div>
          ))}
        </div>
        <div className="content-links-container__3">
          <div className="content-links-container__3__line"></div>
        </div>
      </div>
    </div>
  );
}

export default ContentLinks;
