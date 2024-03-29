"use client";

import React, { useEffect } from "react";
import "./Hero.scss";
import floater1 from "../../../public/images/herobanner__6.svg";
// import woman from "../../../public/images/w2.png";
import woman from "../../../public/images/main-1.png";
import { scrollToElement } from "../utils";

export default function Hero() {
  return (
    <div className="Hero">
      {/* herobannerarea__section__start */}
      <div className="herobannerarea herobannerarea__box">
        <div className="container">
          <div className="row">
            <div class="Hero-icon--1 Hero-icon">
              <div class="Hero-icon-triangle"></div>
            </div>

            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-aos="fade-up">
              <div className="herobannerarea__content__wraper">
                <div className="herobannerarea__title">
                  <div className="herobannerarea__small__title">
                    <span className="text-h1">PROFESSORA PATRÍCIA FORTES</span>
                  </div>
                  <div className="herobannerarea__title__headding__2">
                    <h2 className="herobannerarea__title text-h1">
                      Psicopedagoga especialista em TDAH
                    </h2>
                  </div>
                </div>
                <div className="herobannerarea__text">
                  <p>
                    Especialista em TDAH e alfabetização com mais de 16 anos de
                    experiência internacional.
                  </p>
                </div>
                <div className="hreobannerarea__button">
                  <a className="herobannerarea__button__1" href="#">
                    Agendar 1ª Aula Grátis
                  </a>
                  <a
                    className="herobannerarea__button__2 button-hover"
                    href="#"
                    onClick={(e) => {
                      if (typeof window !== "undefined") {
                        e.preventDefault();
                        const $el = document.querySelector(`.Contact`);
                        scrollToElement($el);
                      }
                    }}>
                    <span>Mais informações</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-aos="fade-up">
              <div className="aboutarea__img__inner text-center">
                <div className="aboutarea__img" data-tilt="">
                  <img className="aboutimg__1" src={woman.src} alt="aboutimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Hero-icon--2 Hero-icon">
          <div class="Hero-icon-triangle"></div>
        </div>
        <div class="Hero-icon--3 Hero-icon">
          <div class="Hero-icon-triangle"></div>
        </div>
      </div>
      {/* herobannerarea__section__end*/}
    </div>
  );
}
