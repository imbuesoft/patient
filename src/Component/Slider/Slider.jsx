import React from "react";
import SliderCard from "./SliderCard";
import nha from "./nha-logo.png";
import cowin from "./cowin-logo.svg";
import secured from "./secured-logo.svg";
import './Slider.css'

const Slider = () => {
    return (
        <>
            <div className="w-100 h-auto mt-5">
                <div className="card" style={{ borderRadius: "24px" }}>
                    <div
                        className="card-body text-white d-flex flex-wrap justify-content-center align-items-center"
                        style={{ borderRadius: "24px", fontFamily: "DM Sans, sans-serif", backgroundColor: "#429CA5", }} >
                        <div className="row w-100">
                            <div className="d-none d-lg-flex col-12 col-lg-6 order-2 px-3 justify-content-center align-items-center">
                                <SliderCard />
                            </div>
                            <div className="col-12 col-lg-6 d-flex flex-column p-3 p-md-5 order-1 text-start lh-base" style={{ lineHeight: "86.4px", fontWeight: "500", }}>
                                <div className=" display-1">
                                    Open your health account
                                </div>
                                <div
                                    className="text-left fs-4"
                                    style={{
                                        fontWeight: "450",
                                        lineHeight: "24px",
                                    }}
                                >
                                    Trusted more than 3Cr Indians
                                </div>
                                <div className="d-flex d-lg-none col-12 col-lg-6 mt-4 justify-content-center align-items-center">
                                    <SliderCard />
                                </div>
                                <div className="w-100 gap-2 mt-4 d-flex justify-content-md-center justify-content-lg-start flex-column flex-md-row gap-md-3 text-center">
                                    <a href='/' className='h-auto'>
                                        <img
                                            className=" object-fit-contain slider-store-image"
                                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                            alt="bn45"
                                        />
                                    </a>
                                    <a href='/' className='h-auto'>
                                        <img
                                            className=" object-fit-contain slider-store-image"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                            alt="bn45"
                                        />
                                    </a>
                                </div>
                                <div className="d-flex flex-row gap-4 mt-4 mt-lg-5">
                                    <div className=' flex-grow-1 flex-lg-grow-0 d-flex flex-column justify-content-around align-items-center'>
                                        <img src={nha} className="w-100 object-fit-contain " style={{ height: "2.5em" }} alt="nha" />
                                        <span className="fs-6 mt-3  lh-base text-center">NHA Approved</span>
                                    </div>
                                    <div className='  flex-grow-1 flex-lg-grow-0 d-flex flex-column justify-content-around align-items-center'>
                                        <img src={cowin} className="w-100 object-fit-contain " style={{ height: "2.5em" }} alt="cowin" />
                                        <span className="fs-6 mt-3  lh-base text-center">Co-WIN Approved</span>
                                    </div>
                                    <div className='  flex-grow-1 flex-lg-grow-0 d-flex flex-column justify-content-around align-items-center'>
                                        <img src={secured} className="w-100 object-fit-contain " style={{ height: "2.5em" }} alt="secured" />
                                        <span className="fs-6 mt-3  lh-base text-center">Private & Secure</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Slider;