import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Male from './male.png';

const  App = () =>{
    
  const [data,setData] = useState({});
  const [bmi,setBmi] = useState(0);
  const [category, setCategory] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [showImage, setShowImages] = useState(false);
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const handleButtonClick = (type) => {
    setSelectedButton(type);
  };
  const submit=(e)=>{
    e.preventDefault();
    const bmi=(data.weight) / ((data.height/100) * (data.height/100));
    setBmi(bmi.toFixed(2));
    if (bmi < 18.5) {
      setCategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
      setCategory('Normal weight');
    } else if (bmi >= 25 && bmi < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
    setShowImages(true);
  } ;
  let reload =()=>{
    window.location.reload();
  }
  return (
    <div className="app">
    <div className="container">
      <form onSubmit={submit}>
        <h1 className="h1">BMI Calculater</h1>
        <div className="form-group">
        <label htmlFor="Height">  Gender:</label>
        <button className={`icon-button ${selectedButton === 'female' ? 'selected' : ''}`} onClick={() => handleButtonClick('female')}>
          <FontAwesomeIcon icon={faFemale}/>
      </button>
      <button className={`icon-button ${selectedButton === 'male' ? 'selected' : ''}`}  onClick={() => handleButtonClick('male')}>
      <FontAwesomeIcon icon={faMale}/>
      </button>
    
  </div>  
  <div className="form-group">
    <label htmlFor="Height">Height:</label>
    <input type="number" className=" form-control" id="height"  placeholder="Enter Height in cm" name="height" onChange={handleChange} value={data.height} />
  </div>
  <div className="form-group">
    <label htmlFor="Weight">Weight:</label>
    <input type="number" className="form-control" id="weight"  placeholder="Enter Weight in kg" name="weight" onChange={handleChange} value={data.weight}/>
  </div>
  <div className="form-group">
    <label htmlFor="Age">Age:</label>
    <input type="number" className="age" id="Age"  placeholder="Enter Age" name="age" onChange={handleChange} value={data.age}/>
   </div>

  <button type="submit" className="btn btn-primary">
    Calculate BMI
  </button> 
  <button type="submit" className="btn btn-outline" onClick={reload}>
    Reset
  </button>
  <div className="mt-3">
      {showImage && (
        <div>
          {selectedButton === 'female' && (
             <p>Your Gender is Female
            <img className="img" src="https://cdn.iconscout.com/icon/free/png-256/free-woman-female-person-avatar-user-31835.png" alt="Female" /></p>
          )}
          {selectedButton === 'male' && (
            <p>Your Gender is Male
            <img className="img" src={Male} alt="Male" /></p>
          )}
          </div> 
          )}
        <br/>
          <h2>Bmi is : {bmi}</h2><br></br>
          <p>Category: {category}</p> 

  </div>

  
</form>

</div>
</div>
  );
};

export default App;
