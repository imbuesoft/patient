import React, { useState } from 'react';
import './Searchbar.css'
const CityLocationDetector = (props) => {
  const [cityName, setCityName] = useState('');
  // const [pincode, setPincode] = useState('');

  const handleButtonClick = async () => {
    const response = await fetch('https://ipapi.co/json/')
    .then(function(response) {
      response.json().then(jsonData => {
        console.log(jsonData);
        props.onDetect(jsonData.city)
        setCityName(jsonData.city);
        // setPincode(jsonData.pincode);
      });
    })
  };

  return (
    <div className='detectLocation d-flex text-white bg-secondary'>
      <i className="bi bi-search fs-6 pt-2 px-3 align-item-start"/>
      <button className='CurrentLoc text-start text-white ps-3 border-0 bg-transparent fw-bold' onClick={handleButtonClick}>Current Location</button>
    </div>   
  );
};

export default CityLocationDetector;