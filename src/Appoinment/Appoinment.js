import React from 'react'
import './Form.css'
const Appoinment = () => {
  return (  
    <div className='row p-5 text-start'>
        <div className='col p-3 bg-white'>
            <h4 className=' pb-3'><i className="bi bi-hospital icon"></i>In-Clinic Appointment</h4>
            <hr/>
            <div className=' row'>
            <div className='col-9'>
            <div className='date'><i className="bi bi-calendar"></i>on <b>Jun 08,2023</b></div>
            <button className='date-time change-date btn text-info'>Change Date & Time</button>
            </div>
            <div className='col-3'>
                <div className='time'><i className="bi bi-clock"></i>At<b>7:00PM</b></div>
            </div>
            </div>
            <div className='row mt-3'>
                <div className='col-4 text-center'>
                    <img className='drImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NQrQWJURrClcREPA7QNvAM2n3_3JnPQ9kuLHvLxMEdVeA5B9ZzwRUD1SUCi5t1o_x1ybj5-ASAE&usqp=CAU&ec=48665701' alt=''></img>
                </div>
                <div className='col-8 '>
                    <h5>Dr.Suhas S</h5>
                    <p>MBES, MS - General Surgery, MCh - Plastic Surgery<br/>Plastic Surgeon, Hair Transplant Surgeon</p>
                </div>
                <hr/>
            </div>
            <div className='row mt-3'>
                <div className='col-4 text-center'>
                    <img className='drImg' src='https://images1-fabric.practo.com/practices/1273268/family-doctor-clinic-bangalore-5edf56dcf3179.jpg' alt=''></img>
                </div>
                <div className='col-8'>
                    <h5>Life Is Beautiful Clinic</h5>
                    <p>1/1, 1st Floor, Sir MN Krishna Rao Road,<br/>Bangalore</p>
                    <span className='direction fw-bold text-info'>Get Directions</span>
                </div>
                <hr/>
            </div>
        </div>
        <div className='col p-3 ps-5'>
            <h4 className='my-4'>Enter Your Mobile Number</h4>
                    <div className="mobile-name">Mobile<span className="red-asterisk">*</span></div>
            <input className='mno my-2' type='number' maxLength={10} placeholder='Mobile number' required/><br/>
            <div className='text1'>You will receive an OTP shortly.</div>
            <div className='text2'>We vill send appointment. related communications on this number.</div>
            <button className='continueBtn mt-5'>Continue</button>
        </div>
    </div>
  )
}

export default Appoinment;