import React from "react";
import "./textContainer.scss";
import images from "../../assets";

const TextContainer = () => {
  return (
    <div className="text_container">
      <div className="header_image">
        <h1 className="header_image__header">We Are Die Werks Moto</h1>
        <img
          src={images.pinkFlashIcon}
          alt="icon"
          className="header_image__icon"
        />
      </div>
      <div className="text_wrapper">
        <p className="text_wrapper__text">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="parent_wrapper">
        <div className="line_text_wrapper">
          <div className="line_text_wrapper__line"></div>
          <p className="line_text_wrapper__text">
            Originated in Ogden, Utah in 2020
          </p>
          <div className="line_text_wrapper__line"></div>
          <p className="line_text_wrapper__text">Rider Founded and Supported</p>
          <div className="line_text_wrapper__line"></div>
          <p className="line_text_wrapper__text">Award winning bike builders</p>
          <div className="line_text_wrapper__line"></div>
        </div>
        <div className="button_wrapper">
          <a href="/" className="button_wrapper__a">
            LEARN MORE ABOUT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
