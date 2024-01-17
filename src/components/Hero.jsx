"use client";

import React, { useEffect } from "react";
import "./Hero.scss";
import floater1 from "../../public/images/herobanner__6.svg";
import colorfulBG from "../../public/images/colorful-bg.svg";

export default function Hero() {
  return (
    <>
      {/* herobannerarea__section__start */}
      <div className="herobannerarea herobannerarea__box">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-aos="fade-up">
              <div className="herobannerarea__content__wraper">
                <div className="herobannerarea__title">
                  <div className="herobannerarea__small__title">
                    <span>Psicopedagoga</span>
                  </div>
                  <div className="herobannerarea__title__headding__2">
                    <h2>Professora </h2>
                  </div>
                </div>
                <div className="herobannerarea__text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting
                    industry. Lorem Ipsum has been{" "}
                  </p>
                </div>
                <div className="hreobannerarea__button">
                  <a className="herobannerarea__button__1" href="#">
                    Agendar Aula
                  </a>
                  <a className="herobannerarea__button__2" href="#">
                    Mais informações
                    <i className="icofont-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-aos="fade-up">
              <div className="aboutarea__img__inner text-center">
                <div className="aboutarea__img" data-tilt="">
                  <img
                    className="aboutimg__1"
                    src={colorfulBG.src}
                    alt="aboutimg"
                  />
                  {/* <img
                    className="aboutimg__2"
                    src="img/about/about_1.png"
                    alt="aboutimg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="herobannerarea__icon">
          {/* <img
            className="hero__icon__1"
            src="img/register/register__2.png"
            alt="photo"
          />
          <img className="hero__icon__2" src={floater1} alt="photo" />
          <img
            className="hero__icon__3"
            src="img/herobanner/herobanner__7.png"
            alt="photo"
          />
          <img
            className="hero__icon__4"
            src="img/herobanner/herobanner__7.png"
            alt="photo"
          /> */}
        </div>
      </div>
      {/* herobannerarea__section__end*/}
    </>
  );
}
