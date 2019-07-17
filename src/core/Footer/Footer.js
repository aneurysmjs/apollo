// @flow strict
import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="text-center">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Made with love</h3>
            <div className="d-flex align-items-center justify-content-around"> 
              <figure className="footer__thumbnails">
                <img className="img-fluid" src="assets/img/react-logo.png" alt="react" />
              </figure>
              <figure className="footer__thumbnails">
                <img className="img-fluid" src="assets/img/bootstrap-logo.png" alt="bootstrap" />
              </figure>
              <figure className="footer__thumbnails">
                <img className="img-fluid" src="assets/img/webpack-logo.png" alt="webpack" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            Shop with Apollo { new Date().getFullYear() }
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
