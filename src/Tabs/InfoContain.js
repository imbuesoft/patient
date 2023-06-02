import React, { useState } from 'react'
import './Tabs.css'
import Rating from './Rating'

const InfoContain = () => {
  const [rate,setRate]= useState('')
  const handleRating =(e) =>{
    setRate(e.target.value);
  }
  return (
    <div className='row py-3'>
        <div className='col col-lg-4 col-xxl-3 col-sm-6'>
            <p className='fs-5'>Gandhipuram, Coimbatore</p>    
            <b className='text-info smallFont'>Royal care super Specialty Hospital</b>
            <div className='rating text-succes my-3 p-2'>
              <input className='ratingInput text-center fw-bold'  value={rate} onChange={handleRating}/>
              <Rating value={rate}/>
            </div>
            <p className='smallFont'>1/50, L&T Road,....(address)</p>
            <b className='smallFont text-info'>Get Directions</b>
            
             <div className='row footerIMG'>
              {[...Array(5)].map((e,i)=>{
                return(
                <div className='col-2' key={i}>
                  <img  src='https://img.freepik.com/free-vector/doctor-clinic-illustration_1270-69.jpg' alt=''/>
                </div>
              )})
              }
             </div>
            
        </div>
        
        <div className='col col-lg-5 col-xxl-6 col-sm-6'>
            <h5>History: </h5>
            <p className='smallFont'>
              Dr. Jay Sanghani is a specialist in ABC specialist from National Forensic Sciences University, India
            </p>
            <p className='smallFont'>
              He is a develop, Interventional, the institute of NFSU, XYZ Companay, India. (XYZ Companay, Grant road, Mumbai)
            </p>
        </div>

        <div className='col col-xxl-2'>
          <button className='callToDr bg-info my-4 border-0'><i class="bi bi-telephone-outbound-fill me-2"></i> Call Now</button>
          <div className='timingOfDr'>
            <b>Mon - Sun</b><br/><span className='smallFont'>07:00 P.M. - 09:00 P.M.</span>
          </div>
        </div>
    </div>
  )
}

export default InfoContain