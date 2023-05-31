import React from "react";
import SliderCard from "./SliderCard";
import logo from "./slidelogo.png";
import logo2 from "./slidelogo2.png";
import logo3 from "./slidelogo3.png";

const Slider = () => {
    return (
        <>
            <div className="w-100 h-auto mt-5">
                <div className="card" style={{ borderRadius: "24px" }}>
                    <div
                        className="card-body text-white d-flex flex-wrap justify-content-center align-items-center"
                        style={{
                            // padding: "5% 8% 8% 4%",
                            borderRadius: "24px",
                            fontFamily: "DM Sans, sans-serif",
                            backgroundColor: "#429CA5",
                        }}
                    >
                        <div className="d-flex w-100 justify-content-center align-items-center flex-column flex-lg-row">
                            <div className="order-2 w-100 px-3 d-flex justify-content-center align-items-center">
                                <SliderCard />
                            </div>
                            <div
                                className="order-1 w-100 px-3 text-start display-1"
                                style={{
                                    lineHeight: "86.4px",
                                    fontWeight: "500",
                                }}
                            >
                                Open your health
                                <br /> account
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center  flex-column flex-lg-row pt-4">
                            <div
                                className="text-left fs-4"
                                style={{
                                    fontWeight: "450",
                                    lineHeight: "24px",
                                }}
                            >
                                Trusted more than 3Cr Indians
                            </div>
                            <div className="pt-3 pt-lg-0">
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
                        </div>
                        <div className="row">
                            <div className='col-4'>
                                <img src={logo} alt="logo" style={{ margin: "44px 10px 0px 10px" }} /><br />
                                <span>NHA Approved</span>
                            </div>
                            <div className='col-4'>
                                <img src={logo2} alt="logo" style={{ margin: "44px 10px 0px 10px" }} /><br />
                                <span>Co-WIN Approved</span>
                            </div>
                            <div className='col-4'>
                                <img src={logo3} alt="logo" style={{ margin: "44px 10px 0px 10px" }} /><br />
                                <span>Private & Secure</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;