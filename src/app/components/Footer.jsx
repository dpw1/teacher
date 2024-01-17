import React from "react";
import "./Footer.scss";
import logo from "../../../public/images/paty-fortes-logo.png";

export default function Footer() {
  return (
    <>
      {/* footer__section__start */}
      <div className="footerarea Footer">
        <div className="container">
          <div className="footerarea__copyright__wrapper footerarea__copyright__wrapper__2">
            <div className="row">
              <div className="col-xl-3 col-lg-3">
                <div className="copyright__logo">
                  <a href="https://html.themewin.com/">
                    <img src={logo.src} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="footerarea__copyright__content footerarea__copyright__content__2">
                  <p>
                    Copyright © <span>2024</span> by Patricia Fortes. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="footerarea__icon footerarea__icon__2">
                  <ul>
                    <li>
                      <a href="http://facebook.com/">
                        <i className="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="http://twitter.com/">
                        <i className="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="http://vimeo.com/">
                        <i className="icofont-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <i className="icofont-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="http://skype.com/">
                        <i className="icofont-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer__section__end */}
    </>
  );
}
