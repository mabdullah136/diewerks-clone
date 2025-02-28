import "./footer.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-container__1">
          <h5 className="footer-container__1__heading">Shop</h5>
          <ul className="footer-container__1__list">
            <li className="footer-container__1__list__li">
              <a href="" className="footer-container__1__list__li__link">
                Werks Edition
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Accessories
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Special Deals
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Bike Parts
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Werks Edition
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Apparel
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container__1">
          <h5 className="footer-container__1__heading ">
            <span className="footer-container__1__heading__span">Support</span>
          </h5>
          <ul className="footer-container__1__list">
            <li className="footer-container__1__list__li">
              <a href="" className="footer-container__1__list__li__link">
                About Us
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Track Your Order
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Returns & Exchanges
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Warranty
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Freq. Asked Quesitons
              </a>
            </li>
            <li className="footer-container__1__list__li">
              <a href="/" className="footer-container__1__list__li__link">
                Installation Videos
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container__2">
          <h5 className="footer-container__2__heading">Contact</h5>
          <ul className="footer-container__2__list">
            <div>
              <li className="footer-container__2__list__li">
                <img
                  src={images.rootIcon}
                  alt="Root"
                  className="footer-container__2__list__li__img"
                />
                <p className="footer-container__2__list__li__text">
                  Send a Message
                </p>
              </li>
            </div>
            <li className="footer-container__2__list__li">
              <img
                src={images.phoneIcon}
                alt="Phone"
                className="footer-container__2__list__li__img"
              />
              <p className="footer-container__2__list__li__text">
                801-555-5555
              </p>
            </li>
            <li className="footer-container__2__list__li">
              <img
                src={images.clockIcon}
                alt="Clock"
                className="footer-container__2__list__li__img"
              />
              <p className="footer-container__2__list__li__text">
                Monday thru Friday 10:00am - 5:00pm MST
              </p>
            </li>
            <li className="footer-container__2__list__li">
              <img
                src={images.locationIcon}
                alt="Location"
                className="footer-container__2__list__li__img"
              />
              <p className="footer-container__2__list__li__text">
                212 18th St, Ogden, UT 84401
              </p>
            </li>
            {/* <li className="footer-container__2__list__li">
              <img
                src={images.rootIcon}
                alt="Root"
                className="footer-container__2__list__li__img"
              />
              <p className="footer-container__2__list__li__text">
                Send a Message
              </p>
            </li> */}
          </ul>
        </div>
        <div className="footer-container__3">
          <div className="footer-container__3__logo">
            <img
              src={images.whiteLogo}
              alt="Logo"
              className="footer-container__3__logo__img"
            />
          </div>
          <div className="footer-container__3__wrapper">
            <ul className="footer-container__3__list">
              <li className="footer-container__3__list__li">
                <img
                  src={images.youtubeIcon}
                  alt="Youtube"
                  className="footer-container__3__list__li__img"
                />
                <p className="footer-container__3__list__li__text">YouTube</p>
                <p className="footer-container__3__list__li__span">
                  @diewerksmoto
                </p>
              </li>
              <li className="footer-container__3__list__li">
                <img
                  src={images.instagramIcon}
                  alt="YouTube"
                  className="footer-container__3__list__li__img"
                />
                <p className="footer-container__3__list__li__text">Instagram</p>
                <p className="footer-container__3__list__li__span">
                  @diewerksmoto
                </p>
              </li>
              <li className="footer-container__3__list__li">
                <img
                  src={images.tiktokIcon}
                  alt="Youtube"
                  className="footer-container__3__list__li__img"
                />
                <p className="footer-container__3__list__li__text">TikTok</p>
                <p className="footer-container__3__list__li__span">
                  @diewerksmoto
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-container__4">
          <ul className="footer-container__4__list">
            <li className="footer-container__4__list__li">
              <p className="footer-container__4__list__li__text">
                All Rights Reserved. Die Werks Moto Shop
              </p>
            </li>
            <li className="footer-container__4__list__li">
              <p className="footer-container__4__list__li__text">
                Terms & Conditions
              </p>
            </li>
            <li className="footer-container__4__list__li">
              <p className="footer-container__4__list__li__text">
                Privacy Policy
              </p>
            </li>
            <li className="footer-container__4__list__li">
              <p className="footer-container__4__list__li__text">
                Accessibility Statement
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-desktop-container">
        <div className="footer-desktop-container__2__wrapper1">
          <div className="footer-desktop-container__1">
            <div className="footer-desktop-container__1__top">
              <h5 className="footer-desktop-container__1__top__heading">
                Shop
              </h5>
              <ul className="footer-desktop-container__1__top__list">
                <li className="footer-desktop-container__1__top__list__li">
                  <a
                    href=""
                    className="footer-desktop-container__1__top__list__li__link"
                  >
                    Werks Edition
                  </a>
                </li>
                <li className="footer-desktop-container__1__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__1__top__list__li__link"
                  >
                    Accessories
                  </a>
                </li>
                <li className="footer-desktop-container__1__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__1__top__list__li__link"
                  >
                    Special Deals
                  </a>
                </li>
                <li className="footer-desktop-container__1__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__1__top__list__li__link"
                  >
                    Bike Parts
                  </a>
                </li>
                <li className="footer-desktop-container__1__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__1__top__list__li__link"
                  >
                    Werks Edition
                  </a>
                </li>
                <li className="footer-desktop-container__1__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__1__top__list__li__link"
                  >
                    Apparel
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-desktop-container__1__bottom">
              <div className="footer-desktop-container__1__bottom__logo">
                <div className="footer-desktop-container__1__bottom__logo__img">
                  <img
                    src={images.whiteLogo}
                    alt="logo"
                    className="footer-desktop-container__1__bottom__logo__img__img"
                  />
                </div>
                <div className="footer-desktop-container__1__bottom__list">
                  <ul className="footer-desktop-container__1__bottom__list__wrapper">
                    <li className="footer-desktop-container__1__bottom__list__wrapper__li">
                      <img
                        src={images.youtubeIcon}
                        alt="Youtube"
                        className="footer-desktop-container__1__bottom__list__wrapper__li__img"
                      />
                      <p className="footer-desktop-container__1__bottom__list__wrapper__li__text">
                        YouTube
                      </p>
                      <p className="footer-desktop-container__1__bottom__list__wrapper__li__span">
                        @diewerksmoto
                      </p>
                    </li>
                    <li className="footer-desktop-container__1__bottom__list__wrapper__li">
                      <img
                        src={images.instagramIcon}
                        alt="Youtube"
                        className="footer-desktop-container__1__bottom__list__wrapper__li__img"
                      />
                      <p className="footer-desktop-container__1__bottom__list__wrapper__li__text">
                        Instagram
                      </p>
                      <p className="footer-desktop-container__1__bottom__list__wrapper__li__span">
                        @diewerksmoto
                      </p>
                    </li>
                    <li className="footer-desktop-container__1__bottom__list__wrapper__li">
                      <img
                        src={images.tiktokIcon}
                        alt="Youtube"
                        className="footer-desktop-container__1__bottom__list__wrapper__li__img"
                      />
                      <p className="footer-desktop-container__1__bottom__list__wrapper__li__text">
                        TikTok
                      </p>
                      <p className="footer-desktop-container__1__bottom__list__wrapper__li__span">
                        @diewerksmoto
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-desktop-container__2">
            <div className="footer-desktop-container__2__top">
              <h5 className="footer-desktop-container__2__top__heading">
                Support
              </h5>
              <ul className="footer-desktop-container__2__top__list">
                <li className="footer-desktop-container__2__top__list__li">
                  <a
                    href=""
                    className="footer-desktop-container__2__top__list__li__link"
                  >
                    About Us
                  </a>
                </li>
                <li className="footer-desktop-container__2__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__2__top__list__li__link"
                  >
                    Track Your Order
                  </a>
                </li>
                <li className="footer-desktop-container__2__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__2__top__list__li__link"
                  >
                    Returns & Exchanges
                  </a>
                </li>
                <li className="footer-desktop-container__2__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__2__top__list__li__link"
                  >
                    Warranty
                  </a>
                </li>
                <li className="footer-desktop-container__2__top__list__li">
                  <a
                    href="/"
                    className="footer-desktop-container__2__top__list__li__link"
                  >
                    Freq. Asked Quesitons
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-desktop-container__2__bottom">
              <h5 className="footer-desktop-container__2__bottom__heading">
                Contact
              </h5>
              <ul className="footer-desktop-container__2__bottom__list">
                <li className="footer-desktop-container__2__bottom__list__li">
                  <img
                    src={images.phoneIcon}
                    alt="Phone"
                    className="footer-desktop-container__2__bottom__list__li__img"
                  />
                  <p className="footer-desktop-container__2__bottom__list__li__text">
                    801-555-5555
                  </p>
                </li>
                <li className="footer-desktop-container__2__bottom__list__li">
                  <img
                    src={images.clockIcon}
                    alt="Clock"
                    className="footer-desktop-container__2__bottom__list__li__img"
                  />
                  <p className="footer-desktop-container__2__bottom__list__li__text">
                    Monday thru Friday 10:00am - 5:00pm MST
                  </p>
                </li>
                <li className="footer-desktop-container__2__bottom__list__li">
                  <img
                    src={images.locationIcon}
                    alt="Location"
                    className="footer-desktop-container__2__bottom__list__li__img"
                  />
                  <p className="footer-desktop-container__2__bottom__list__li__text">
                    212 18th St, Ogden, UT 84401
                  </p>
                </li>
                <li className="footer-desktop-container__2__bottom__list__li">
                  <img
                    src={images.rootIcon}
                    alt="Root"
                    className="footer-desktop-container__2__bottom__list__li__img"
                  />
                  <p className="footer-desktop-container__2__bottom__list__li__text">
                    Send a Message
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-desktop-container__2__wrapper2">
          <div className="footer-desktop-container__2__wrapper2__parent">
            <ul className="footer-desktop-container__2__wrapper2__list">
              <li className="footer-desktop-container__2__wrapper2__list__li">
                <p className="footer-desktop-container__2__wrapper2__list__li__text">
                  All Rights Reserved. Die Werks Moto Shop
                </p>
              </li>
              <li>
                <a
                  href="/"
                  className="footer-desktop-container__2__wrapper2__list__li__link"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="footer-desktop-container__2__wrapper2__list__li__link"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="footer-desktop-container__2__wrapper2__list__li__link"
                >
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-wrapper__logo">
        <img
          src={images.seagullIcon}
          alt="Logo"
          className="footer-wrapper__logo__img"
        />
      </div>
    </div>
  );
}

export default Footer;
