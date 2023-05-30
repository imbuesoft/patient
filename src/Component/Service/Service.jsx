import React from 'react'
import './Service.css';
import videoconsult from './videoconsult.png';

const Service = () => {
    return (
        <div className='col-sm-6 col-md-3 col-lg-2'>
            <div className="card servicecard">
                <img src={videoconsult} alt="video consult" className='card-img servicecardimg' />
                <div className="info">
                    <div className='row-1'><h3>Instant Video Consultation</h3></div>
                    <div className='row-2'><p>Connect within 60 secs</p></div>
                </div>
            </div>
        </div>
    )
}

export default Service