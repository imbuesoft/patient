import React from "react";
import logo from "./slidelogo.png";
import logo2 from "./slidelogo2.png";
import logo3 from "./slidelogo3.png";
import SliderCard from "./SliderCard";

const Slider = () => {
    return (
        <>
            <div className="container-fluid px-5 mt-5">
                <div className="card" style={{ borderRadius: "24px" }}>
                    <div
                        className="card-body text-white"
                        style={{
                            padding: "2% 8% 3% 4%",
                            borderRadius: "24px",
                            fontFamily: "DM Sans, sans-serif",
                            backgroundColor: "#429CA5",
                        }}
                    >
                        <SliderCard />
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
                        <div className="row">
                            <div className='col-4'>
                                <img src={logo} alt="logo" style={{ margin: "44px 10px 0px 10px" }} /><br/>
                                <span>NHA Approved</span>
                            </div>
                            <div className='col-4'>
                                <img src={logo2} alt="logo" style={{ margin: "44px 10px 0px 10px" }} /><br/>
                                <span>Co-WIN Approved</span>
                            </div>
                            <div className='col-4'>
                                <img src={logo3} alt="logo" style={{ margin: "44px 10px 0px 10px" }} /><br/>
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