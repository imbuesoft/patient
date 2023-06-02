import React from 'react';
import './Review.css';

const Review = ({ data }) => {
  return (
    <div className='review m-auto'>
      {data.map((item, index) => (
        <div className="card mycard shadow" key={index}>
          <div className="card-header" style={{ backgroundColor: 'white' }}>
            <b>Patient Stories for Dr. {item.dr_name}</b>
          </div>
          <div className="card-body">
            <div className='feedback'>
              <div className='feedback_icon'>
                {item.cust_profile}
              </div>
              <div className="reviewer-name">
                <span style={{ color: "#787887" }}>{item.cust_name}</span>
                <span className='tag'>In-clinic</span>
                <span style={{ color: "#787887", fontSize: '13.5px', marginLeft: '35px' }}>{item.duraction}</span><br/>
              </div>
            </div>
            <div className='feedback_write'>
              <span><b>{item.Reason} </b></span><br/>
              <span style={{ marginBottom: '25px' }}>I recommend the doctor : {item.reccomend}</span>
            </div>
            <div className='reason'>
            <span>Happy with:</span>
              {item.g_tag.map(val=>{
              return(<span className='feedback__context'>{val}</span> )
              })
            }
              <br/><br/>
              <span className='reason_para'>{item.rev}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
