import React from 'react';
import offer1 from './offer1.jpg';

const Offer = () => {
    return (
        <div className="main card border-0" style={{ width: '500px' }}>
            <img src={offer1} className="offer1" alt="..." style={{ height: '100%', width: '100%  ' }} />
            <div className="card-body">
                <div className='row'>
                    <div className='col-8 text-start'>
                        <span className="code mb-1 text-start mb-4">DEAL100</span><br />
                        <span className='coupon text-secondary text-start'>Coupon Code</span>
                    </div>
                    <div className='col-4 mb-4'>
                        <button type="button" className="copycode btn btn-light ">COPY CODE</button>
                    </div>
                </div>
                <p className="text-justify text-start">
                    Today only! Get Flat 18% OFF* (max. discount: Rs. 2000) on PrePaid/COD medicine orders & 100% NMS SuperCash* (max. cashback: Rs. 1000) on ‘PrePaid’ medicine orders. *Minimum order (along with ANY other products) required: Rs 1299. *T&Cs
                </p>
                <hr width={'90%'} />
                <div className='row'>
                    <div className='col-7 mt-2  text-start'>
                        <span className="text-success fw-bold status text-start ">VALID TILL 31 MAY 2023</span></div>
                    <div className='col-5  text-end'>
                        <button type="button" className="viwedetails text-gray btn btn-white-border ">View Details</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Offer