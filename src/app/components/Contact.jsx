import React from "react";

import "./Contact.scss";
import woman from "../../../public/images/w2.png";
import whatsapp from "../../../public/images/wp.png";

export default function Contact() {
  return (
    <div className=" Contact registerarea sp_top_90 sp_bottom_90">
      {/* register__section__start*/}
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            data-aos="fade-up">
            <div className="registerarea__wraper">
              <div className="section__title registerarea__section__title">
                <div className="section__title__button">
                  <div className="default__small__button">Contacto</div>
                </div>
                <div className="section__title__heading heading__underline">
                  <h2>
                    Para esclarecer dúvidas, envie um mensagem no{" "}
                    <span>
                      <a href="#">
                        <small>Whatsapp</small>
                      </a>
                    </span>
                    ,{" "}
                    <span>
                      <a href="#">
                        <small>Instagram</small>
                      </a>
                    </span>{" "}
                    ou{" "}
                    <span>
                      <a href="#">
                        <small>e-mail</small>
                      </a>
                    </span>
                    .
                  </h2>
                </div>
              </div>
              <div className="registerarea__content">
                <div className="registerarea__video">
                  <div className="video__pop__btn"></div>
                  <div className="registerarea__para">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis autem vitae labore cumque sunt a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="Contact-bottom col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            data-aos="fade-up">
            <div className="registerarea__wraper">
              <div className="Contact-items">
                <div className="Contact-item">
                  <div className="Contact-image">
                    <img loading="lazy" src={whatsapp.src} alt="Whatsapp " />
                  </div>
                  <div className="Contact-text ">
                    <a
                      className="button-hover"
                      href="whatsapp://send?abid=phonenumber&text=Olá,%2C%20gostaria%2C%20de%2C%20esclarecer%2C%20algumas%2C%20dúvidas.">
                      +351 999 999 999
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="registerarea__img"></div>
      {/* register__section__end*/}
    </div>
  );
}
