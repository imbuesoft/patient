import React from 'react'
import './mycss.css'
import videoconsult from './videoconsult.jpg';
const VideoConsult = () => {
    return (
        <div className="d-flex">
            <div className="row m-auto w-auto h-auto">
                <div className="col-12 col-md-6">

                    <div className="video_consult_img_container pb-4 py-md-5 d-flex px-5 px-sm-0">
                        <img className="m-auto ms-md-auto me-md-5 video_consult_img w-100" style={{ maxWidth: "24rem" }} src={videoconsult} alt='img' />
                    </div>

                </div>
                <div className="col-12 col-md-6">

                    <div className='h-100 d-flex flex-column justify-content-center align-items-center'
                        style={{ maxWidth: "44rem" }}>
                        <div className="w-100 display-6 fw-semibold">
                            Download the Medipract App
                        </div>
                        <div className="w-100 mt-3">
                            <p>Access video consultation with India's top doctors on the MediPract app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                        </div>
                        <h6 className="w-100 mt-2 mt-md-5">Get the link to download the app</h6>
                        <div className="w-100 row">
                            <div className="col-12 col-sm-8 p-1">
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">+91</span>
                                    <input className="form-control py-3" type="text" placeholder="Enter Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 p-1">
                                <button type="button" className="w-100 h-100 btn btn-info fw-semibold text-white">Send SMS</button>
                            </div>
                        </div>
                        <div className="w-100 mt-4 d-flex flex-column flex-sm-row text-center gap-3">
                            <a href='/' className='h-100 w-auto'>
                                <img
                                    className="h-100 object-fit-contain"
                                    style={{ maxHeight: "3em", minHeight:"3em" }}
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="bn45"
                                />
                            </a>
                            <a href='/' className='h-100 w-auto'>
                                <img
                                    className="h-100 object-fit-contain"
                                    style={{ maxHeight: "3em", minHeight:"3em" }}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                    alt="bn45"
                                />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoConsult