"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Reviews.scss";
import { Carousel } from "react-responsive-carousel";

import bookIcon from "../../../public/images/book-icon.png";
import woman from "../../../public/images/w2.png";
import manIcon from "../../../public/images/man-icon.png";
import review_0 from "../../../public/images/review_0.jpg";
import review_1 from "../../../public/images/review_1.jpg";
import review_2 from "../../../public/images/review_2.jpg";
import review_3 from "../../../public/images/review_3.jpg";
import review_4 from "../../../public/images/review_4.jpg";
import review_5 from "../../../public/images/review_5.jpg";
import review_6 from "../../../public/images/review_6.jpg";
import review_7 from "../../../public/images/review_7.jpg";
import review_8 from "../../../public/images/review_8.jpg";
import review_9 from "../../../public/images/review_9.jpg";
import review_10 from "../../../public/images/review_10.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

// import { Odometer } from "odometer_countup";

export default function Reviews() {
  return (
    <div className="Reviews">
      <>
        {/* aboutarea__2__section__start */}
        <div className="aboutarea__2 ">
          <div className="container">
            <hr />
            <div className="">
              <div className="aboutarea__headding heading__underline">
                <h2>Pais e mães satisfeitos:</h2>
              </div>

              <Carousel emulateTouch={true} className="Reviews-images">
                <figure>
                  <LazyLoadImage src={review_0.src}></LazyLoadImage>
                </figure>

                <figure>
                  <LazyLoadImage src={review_1.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_2.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_3.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_4.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_5.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_6.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_7.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_8.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_9.src}></LazyLoadImage>
                </figure>
                <figure>
                  <LazyLoadImage src={review_10.src}></LazyLoadImage>
                </figure>
              </Carousel>
            </div>
          </div>
        </div>
        {/* aboutarea__2__section__end */}
      </>
    </div>
  );
}
