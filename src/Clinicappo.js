import React from 'react'
import './Clinicappo.css'
const Clinicappo = () => {
    return (
        <div class="container mt-3">
            <div className="row pt-1 gx-5">
                <div className='col-6 bg-white'>
                    
                    <div className="row pt-1 border-bottom">
                        <div className="col-12">
                            <div className="title"><i class="bi bi-hospital icon"></i>In-Clinic Appoinement</div>
                        </div>
                    </div>

                    <div className="row pt-1  border-bottom">
                        <div className="col-9 mb-3">
                            <div><i className="bi bi-calendar icon"></i>On Jun 08,2023</div>
                            <button>Change Date & Time</button>
                        </div>
                        <div className="col-3 mb-3">
                            <span><i class="bi bi-clock icon"></i>At 7:00PM</span>
                        </div>
                    </div>

                    <div className="row pt-3 border-bottom">
                        <div className="col-2">
                            <img style={{ alignItems: "center" }} src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" height="70px" width="70px" />
                        </div>
                        <div className="col-10 pb-3">
                            <h6>Dr.Sneha S</h6>
                            <span>MBBS,MS-General Surgery,MCh-Plastic Surgery<br />Plastic Surgeon,Hair Transplant Surgeon</span>
                        </div>

                    </div>

                    <div className="row pt-3 border-bottom">
                        <div className="col-2">
                            <img style={{ alignItems: "center" }} src="https://images1-fabric.practo.com/practices/1169251/life-is-beautiful-clinic-bangalore-5a1ff175cf233.jpg" height="70px" width="80px" />
                        </div>
                        <div className="col-10 pb-3">
                            <h6>Life Is Beautiful Clinic</h6>
                            <span>1/1,1st Floor,Sir MN Krishna Rao Road,Bangalore<br /><button>Get Direction</button></span>
                        </div>

                    </div>
                </div>




                <div className='col-6'>
                    <div className='mobile'>Enter Your mobile number</div>
                    <div className="mobile-name">Mobile<span className="red-asterisk">*</span></div>
                    <input type="number" className='mobilenumber' placeholder="Mobile Number" />
                    <div className="text1"> You will receive an OTP shortly.</div>
                    <div className="text2">We will send appoinement-related communications on this number.</div>
                    <button className="continue">Contiune</button>
                </div>


            </div>
        </div>
    )
}

export default Clinicappo