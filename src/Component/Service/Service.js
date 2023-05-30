import React from 'react'
import './Card.css';
import videoconsult from './videoconsult.png';

const Service = () => {
    return (
        <div className='col-2'>
            <div className="card servicecard">
                <img src={videoconsult} alt="Card Image" className='card-img servicecardimg' />
                <div className="info">
                    <div className='row-1'><h3>Instant Video Consultation</h3></div>
                    <div className='row-2'><p>Connect within 60 secs</p></div>
                </div>
            </div>
        </div>
    )
}

export default Service