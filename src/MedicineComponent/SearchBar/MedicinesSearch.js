import React, { useState } from 'react';
import './MedicinesSearch.css'
import logo from './logo.svg'

const MedicinesSearch = () => {

    const [pincode, setPincode] = useState('');
    const [click, setClick] = useState(false);

    const handleButtonClick = async () => {
        setClick(true);
        const response = await fetch('https://ipapi.co/json/')
        .then(function(response) {
        response.json().then(jsonData => {
            console.log(jsonData);
            setPincode(jsonData.postal);
        });
       })
    };
    
    const handlePINChange =(e) =>{ setPincode(e.target.value);}
    
    const handleSearch = () =>{
        setClick(false);
    }

    return (
    <div className='container-fluid navBar  '>
        <div className="row pt-4">
            <div className="col-1 me-5">
                <img src={logo} className='companyLogo'/>
            </div>
            <div className="col ms-5">
                <div className='row bg-white searchbar'>
                    <div className='col-4 text-start'>
                        <button type='button' className='locationBtn my-1 ms-2 border-0 border-end  text-start'  onClick={handleButtonClick}>
                        Deliver to <span className='fs-6 pincode fw-bold ms-2 mt-2'>{pincode}</span>
                        </button>
                    </div>

                    <div className='col text-start'>
                        <input className='mediSearch m-1' onClick={handleSearch} placeholder='Search for medicines & wellness products...'/>
                    </div>
                </div>
            
                <div className="mt-2 mainDeliveryBox">
                { click ? 
                <div className='deliveryBox p-4 text-start'>
                    <h5>Where do you want the delivery?</h5>
                    <p className='text-secondary mt-3'>Get access to your Addresses, Orders, and Wishlist</p>
                    <button type='button' className='signInAndLoc my-3'>Sign in to see your Location</button>
                    <hr/>
                    <h5>Or Enter Pincode</h5>
                    <p className='text-secondary '>Select pincode to see product availability.</p>
                    <div className='pinEnterIcon px-3 mb-2'><i className="bi bi-pin-map-fill"></i>
                    <input className='pinEnter ms-3' placeholder='Enter Pincode' value={pincode} onChange={handlePINChange}/></div>
                    <i className="ps-3 bi bi-plus-circle-dotted DetBtn"></i><button className='DetBtn' onClick={handleButtonClick}>Detect my location</button>
                </div>: ""
                }
                </div>
            </div>
            <div className="col-1 text-white fw-bold fs-5"><i className="bi bi-cart-check-fill fs-3 me-3"></i>Cart</div>
            <div className="col-2 text-white fw-bold fs-5"><i className="bi bi-person-circle fs-3 me-3"></i>Sign in & Sign</div>
        </div>
    </div>
  )
}

export default MedicinesSearch