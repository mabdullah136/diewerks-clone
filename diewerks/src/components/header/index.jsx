import "./header.scss";
import React, { useState, useEffect } from "react";
import images from "../../assets";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="logo-wrapper">
          {/* Hamburger Menu */}
          <div
            className={`hamburger-wrapper ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              onClick={(e) => {
                e.target.animate(
                  [
                    { transform: "scale(0)", opacity: 0 },
                    { transform: "scale(1)", opacity: 1 },
                  ],
                  { duration: 300, fill: "forwards" }
                );
              }}
              src={menuOpen ? images.crossIcon : images.hamburgerIcon}
              alt="Menu"
              className="hamburger"
            />
          </div>

          {/* Logo */}
          <img src={images.logo} className="logo" alt="Logo" />

          {/* Nav Items */}
          {!isMobile && (
            <div className="nav-list">
              <ul className="nav-list__list">
                <li className="nav-list__list__item">
                  <a href="/" className="nav-list__list__item__link">
                    WERKS EDITION
                  </a>
                </li>
                <li className="nav-list__list__item">
                  <a href="/about" className="nav-list__list__item__link">
                    BIKE PARTS
                  </a>
                </li>
                <li className="nav-list__list__item">
                  <a href="/contact" className="nav-list__list__item__link">
                    ACCESSORIES
                  </a>
                </li>
                <li className="nav-list__list__item">
                  <a href="/contact" className="nav-list__list__item__link">
                    APPAREL
                  </a>
                </li>
                <li className="nav-list__list__item">
                  <a
                    href="/contact"
                    className="nav-list__list__item__link nav-list__list__item__link__sale"
                  >
                    SALE
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="icons-and-search-parent-wrapper">
          {/* Search Bar */}
          <div className="nav-and-search-wrapper">
            {isDesktop && (
              <div className="nav-wrapper">
                <li className="nav-wrapper__li">
                  <a href="/" className="nav-wrapper__li__a">
                    About Us
                  </a>
                </li>
                <li className="nav-wrapper__li">
                  <a href="/about" className="nav-wrapper__li__a">
                    Support
                  </a>
                  <img
                    src={images.downArrowIcon}
                    className="nav-wrapper__li__img"
                    alt=""
                  />
                </li>
              </div>
            )}
            {isDesktop && (
              <div className="search-wrapper">
                <input type="text" placeholder="Search" className="search" />
                <img
                  src={images.searchIcon}
                  alt="Icon 1"
                  className="search-image"
                />
              </div>
            )}
          </div>
          {/* Right-side icons */}
          <div className="icons-list">
            <div className="icons-list__icon-wrapper icons-list__icon-wrapper__search">
              <img
                src={images.searchIcon}
                alt="Icon 1"
                className="icons-list__icon-wrapper__icon"
              />
            </div>
            <div className="icons-list__icon-wrapper">
              <img
                src={images.flashIcon}
                alt="Icon 1"
                className="icons-list__icon-wrapper__icon"
              />
            </div>
            {!isMobile && (
              <div className="icons-list__icon-wrapper">
                <img
                  src={images.accountIcon}
                  alt="Icon 2"
                  className="icons-list__icon-wrapper__icon"
                />
              </div>
            )}
            <div className="icons-list__icon-wrapper">
              <img
                src={images.shoppingCartIcon}
                alt="Icon 3"
                className="icons-list__icon-wrapper__icon"
              />
              <span className="icons-list__icon-wrapper__text">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          <ul>
            <li>
              <a href="/">PARTS</a>
            </li>
            <li>
              <a href="/about">ACCESSORIES</a>
            </li>
            <li>
              <a href="/contact">HELMETS</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
