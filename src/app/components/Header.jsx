"use client";

import React from "react";
import logo from "../../../public/images/paty-fortes-logo.png";
import { scrollToElement } from "../utils";
import "./Header.scss";

export default function Header() {
  return (
    <>
      {/* headar section start */}
      <header className="Header">
        <div className="headerarea headerarea__2 header__sticky header__area">
          <div className="container desktop__menu__wrapper">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="headerarea__left">
                  <div className="headerarea__left__logo">
                    <a href="index-2.html" onClick={(e) => {}}>
                      <img src={logo.src} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 main_menu_wrap">
                <div className="headerarea__main__menu">
                  {/* <nav>
                    <ul>
                      <li className="mega__menu position-static">
                        <a
                          className="headerarea__has__dropdown"
                          href="#about"
                          onClick={(e) => {
                            e.preventDefault();
                            const $el = document.querySelector(`.About`);
                            scrollToElement($el);
                          }}>
                          Sobre
                          <i className="icofont-rounded-down" />{" "}
                        </a>
                      </li>
                      <li className="mega__menu position-static">
                        <a
                          className="headerarea__has__dropdown"
                          href="#contact">
                          Contacto
                          <i className="icofont-rounded-down" />{" "}
                        </a>
                      </li>
                    </ul>
                  </nav> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mob_menu_wrapper">
            <div className="Header-mobile-wrapper row align-items-center">
              <div className="col-6">
                <div className="mobile-logo">
                  <a className="logo__dark" href="#">
                    <img src={logo.src} alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header section end */}
    </>
  );
}
