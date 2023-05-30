import React from 'react'
import './Service.css';
import video_consult from './video_consult.png';

const Service = () => {
    return (
        <div className='col-6 col-md-4 col-lg-3 col-xxl-2 py-3 px-2 d-grid service_card_container'>
            <div className="card service_card m-auto">
                <img src={video_consult} alt="video consult" className='card-img service_card_img' />
                <div className="service_info">
                    <div className='row-1'><h5 className=''>Instant Video Consultation</h5></div>
                    <div className='row-2'><p>Connect within 60 secs</p></div>
                </div>
            </div>
        </div>
    )
}

export default Service