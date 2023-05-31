import React from 'react'
import './mycss.css'
import videoconsult from './videoconsult.jpg';
const VideoConsult = () => {
    return (
        <div className='wraper mywraper'>
            <div className='maincontainer'>
                <div className='imagecontainer'>
                    <img className='video_consult_img' src={videoconsult} alt='img' />
                </div>
                <div className='infocontainer'>
                    <div className='heading'>
                        Download the Medipract App
                    </div>
                    <div className='paragrph'>
                        <p>Access video consultation with India’s top doctors on the Medipract app.Connect with doctors online, available 24/7, from the comfort of yourhome.</p>
                    </div>
                    <h6 className='linkadd'>Get the link to download the app</h6>
                    <div className='input-btn myinput-btn'>
                        <div className="input-group myinput-group mb-3">
                            <span className="input-group-text myinput-group-text" id="basic-addon1">+91</span>
                            <input className='input-no form-control' type="text" placeholder="Enter Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <button type="button" className="mybtn btn-primary">Send SMS</button>
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
            </div>
        </div>
    )
}

export default VideoConsult