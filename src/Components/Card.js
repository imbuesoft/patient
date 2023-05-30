import React from "react";
import logo from "../img/logo.png"; 


const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card mt-4 w-150" style={{ borderRadius: "24px" }}>
          <div
            className="card-body text-white"
            style={{
              padding: "5% 13% 13% 4%",
              borderRadius: "24px",
              fontFamily: "DM Sans, sans-serif",
              backgroundColor: "#6567ec",
            }}
          >
            <div
              className="card"
              style={{
                width: "20rem",
                float: "right",
                marginTop: "20px",
                height: "27rem",
                backgroundColor: "#4042b2",
                borderRadius: "10.62px",
                borderColor: "#4042b2",
              }}
            >
              <img
                src="https://www.eka.care/_next/image?url=https%3A%2F%2Fcdn.eka.care%2Fvagus%2Fcl5guuf6h000b0sh95v9z4yza.png&w=1920&q=75"
                className="card-img-top"
                alt="sym"
                style={{
                  height: "34%",
                  backgroundColor: "#232477",
                  borderRadius: "50%",
                  width: "55%",
                  shapeImageThreshold: "circle",
                  padding: "14px",
                  margin: "24px",
                }}
              />
              <h4
                style={{
                  textAlign: "topright",
                  position: "absolute",
                  top: "40px",
                  right: "16px",
                  color: "#64e3fb",
                }}
              >
                Step<h1 style={{ textalign: "center" }}>01</h1>
              </h4>
              <div
                className="card-body"
                style={{
                  color: "white",
                  fontFamily: "DM Sans, sans-serif",
                  lineHeight: "24px",
                }}
              >
                <h2>Store your medical records</h2>
                <p className="card-text" style={{ fontSize: "17px" }}>
                  Started by downloading your covid certificate
                </p>
                <button
                  type="button"
                  className="btn btn"
                  style={{
                    backgroundColor: "#232477",
                    color: "white",
                    height: "20%",
                  }}
                >
                  Create Now &#8594;
                </button>
              </div>
            </div>
            <div
              className="text-left"
              style={{
                fontSize: "70px",
                lineHeight: "86.4px",
                fontWeight: "500",
              }}
            >
              Open your health
              <br /> account
            </div>
            <div
              className="text-left"
              style={{
                fontSize: "25px",
                fontWeight: "450",
                lineHeight: "24px",
                paddingTop: "20px",
              }}
            >
              Trusted more than 3Cr Indians
            </div>
            <div style={{ paddingTop: "20px" }}>
              <a href="/" tabIndex="0">
                <img
                  className="img-fluid"
                  style={{ width: "170px", height: "50px" }}
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="bn45"
                />
              </a>
              <a href="/" tabIndex="0">
                <img
                  className="img-fluid"
                  style={{ width: "170px", height: "50px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="bn45"
                />
              </a>
            </div>
            <img src={logo} alt="logo" style={{ marginTop: "44px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
