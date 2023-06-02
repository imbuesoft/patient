import React, { useState } from "react";
import DateSlider from "./DateSlider";
import "./style.css";
const Bappointment = () => {
 
  return (
    <div>
      <div className="container">
       
       <DateSlider></DateSlider>

        <hr></hr>
        {/* <div className='button'></div> */}
        <div className="shedule">
          <p>Evening</p>
          <div className="first-button">
            <button>6:00 PM</button>
          </div>
          <div className="second-button">
            <button>7:00 PM</button>
          </div>
        </div>
        <div className="celender">
          <button className="cel">Chose form Celender</button>
        </div>
      </div>
    </div>
  );
};

export default Bappointment;
