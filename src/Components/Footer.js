import React from "react";
// import "../index.css";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block"></div>
          <div>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>About
                  Imbuesoft
                </h6>
                <p>
                  We are serving in these many different technologies like
                  Laravel, CodeIgniter, Asp.Net, ReactJS, NodeJS, AngularJS,
                  Android, iOS, Flutter, ReactNative, Wordpress, Magento and
                  Shopify. We need to assist our esteemed clients with promoting
                  their organizations, services, and products through the
                  excellent medium of the net to enable them to get maximum
                  exposure, results, and benefits.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="/" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> 205,Ganesh
                  Trade Center, Above Kalupur Bank, Near Indira Circle, Rajkot -
                  360005
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  Gujaratiprakash@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> +91 96010
                  26377
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i>+91 90998
                  85205
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="/">
            imbuesoft.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
