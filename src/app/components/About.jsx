"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./About.scss";
import Image from "next/image";
import bookIcon from "../../../public/images/book-icon.png";
import woman from "../../../public/images/w2.png";
import manIcon from "../../../public/images/man-icon.png";
import child from "../../../public/images/child.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import { Odometer } from "odometer_countup";

export default function About() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const countupRef = useRef(null);
  let countUpAnim;

  useEffect(() => {}, []);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const countUpModule = await import("countup.js");
        countUpAnim = new countUpModule.CountUp(countupRef.current, 16, {
          // plugin: new Odometer({ duration: 0.5, lastDigitDelay: 0 }),
          duration: 4,
        });

        if (inView) {
          countUpAnim.start();
        } else {
          countUpAnim.reset();
        }
      }
    })();
  }, [inView]);

  return (
    <div className="About" ref={ref}>
      <>
        {/* aboutarea__2__section__start */}
        <div className="aboutarea__2 sp_top_90 sp_bottom_40">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                data-aos="fade-up">
                <div className="about__right__wraper__2">
                  <div className="educationarea__img" data-tilt="">
                    <img
                      loading="lazy"
                      className="About-icon-1 aboutarea__2__img__1"
                      alt="Lightbulb icon"
                      src={bookIcon.src}
                    />
                    <LazyLoadImage src={child.src}></LazyLoadImage>
                  </div>
                  <div className="aboutarea__2__text">
                    <div className="aboutarea__counter">
                      <span ref={countupRef} className="counter ">
                        16
                      </span>{" "}
                      +
                    </div>
                    <p>ANOS DE EXPERIÊNCIA INTERNACIONAL</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                data-aos="fade-up">
                <div className="aboutarea__content__wraper">
                  <div className="aboutarea__button">
                    <div className="default__small__button">
                      Sobre o atendimento
                    </div>
                  </div>
                  <div className="aboutarea__headding heading__underline">
                    <h2>
                      Atendimento <span>personalizado</span> conforme as
                      necessidades do aluno
                    </h2>
                  </div>
                  <div className="aboutarea__para aboutarea__para__2">
                    <p>Agende uma consulta se seu filho apresentar:</p>
                  </div>
                  <div className="aboutarea__list__2">
                    <ul>
                      <li>
                        <span className="About-svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                          </svg>
                        </span>{" "}
                        <span>Falta de atenção;</span>
                      </li>
                      <li>
                        <span className="About-svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                          </svg>
                        </span>{" "}
                        <span>Baixo desempenho escolar;</span>
                      </li>
                      <li>
                        <span className="About-svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                          </svg>
                        </span>{" "}
                        <span>Dificuldade de leitura e escrita;</span>
                      </li>
                      <li>
                        <span className="About-svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z" />
                          </svg>
                        </span>{" "}
                        <span>Alfabetização lenta;</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* aboutarea__2__section__end */}
      </>
    </div>
  );
}
