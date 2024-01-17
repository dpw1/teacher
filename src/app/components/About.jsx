"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./About.scss";

export default function About() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const countupRef = useRef(null);
  let countUpAnim;

  // useEffect with empty dependency array runs once when component is mounted

  useEffect(() => {}, []);

  useEffect(() => {
    (async () => {
      const countUpModule = await import("countup.js");
      countUpAnim = new countUpModule.CountUp(countupRef.current, 15, {
        duration: 5,
      });

      if (inView) {
        countUpAnim.start();
      } else {
        countUpAnim.reset();
      }
    })();
  }, [inView]);

  async function initCountUp() {
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  return (
    <div className="About" ref={ref}>
      <>
        {/* aboutarea__2__section__start */}
        <div className="aboutarea__2 sp_top_30">
          <h2>{`Header inside viewport ${inView}.`}</h2>
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                data-aos="fade-up">
                <div className="about__right__wraper__2">
                  <div className="educationarea__img" data-tilt="">
                    <img
                      className="aboutarea__2__img__1"
                      src="img/about/about_2.png"
                      alt="education"
                    />
                    <img
                      className="aboutarea__2__img__2"
                      src="img/about/about_3.png"
                      alt="education"
                    />
                    <img
                      className="aboutarea__2__img__3"
                      src="img/about/about_4.png"
                      alt="education"
                    />
                    <img
                      className="aboutarea__2__img__4"
                      src="img/about/about_11.png"
                      alt="education"
                    />
                  </div>
                  <div className="aboutarea__2__text">
                    <div className="aboutarea__counter">
                      <span ref={countupRef} className="counter ">
                        15
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
                    <p>
                      25+Contrary to popular belief, Lorem Ipsum is not simply
                      random text roots in a piece of classical Latin literature
                      from 45 BC
                    </p>
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
                        <span>Lorem Ipsum is simply dummy</span>
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
                        <span>
                          Explore a variety of fresh educational teach
                        </span>
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
                        <span>Lorem Ipsum is simply dummy text of</span>
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
