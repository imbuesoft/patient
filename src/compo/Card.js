import React from 'react'
import './Card.css';
import doct from './doct.png';

const Cards = () => {                               
  return (
    <div className='container'>
        <div  className="card">
        <img src={doct} alt="Card Image" className='card-img'/>
        <div className="info">
          <div className='row-1'><h3>Instant Video Consultation</h3></div>
          <div className='row-2'><p>Connect within 60 secs</p></div>
        </div>
        </div>
    </div>

  )
}

export  default Cards;
