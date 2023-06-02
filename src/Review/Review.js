import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <div className='review m-auto'>
      <div className="card mycard">
        <div className="card-header" style={{backgroundColor:'white'}}>
          <b>Patient Stories for Dr. Ramesh Srinivasan</b>
        </div>
            <div className="card-body" >
              <div className='feedback'>
                <div className='feedback_icon'>
                  K
                </div>
                <div className="reviewer-name">
                  <span style={{color: "#787887"}}>Kumar MVS(Verified)</span>
                  <span className='tag'>In-clinic</span>
                  <span style={{color: "#787887",fontSize:'13.5px',marginLeft:'35px'}}>a month ago</span><br/>
                </div>
              </div>
              <div className='feedback_write'>
                  <span><b>Visited for Royal care super Specilalty lab </b></span><br/>
                  <span style={{marginBottom:'25px'}}>I recommend the lab</span>
              </div>
              <div className='reason'>
                <span>Happy with:</span><span className='feedback__context'>Best Service</span><br/><br/>
                <span className='reason_para'>The lab is very Closely releted to te patients.They Provide best service and effectively.We satisfied with the Lab. </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Review
