import React, { useState, useRef } from 'react';
import './AabhaCard.css';
import logo from './logo.png';

const AabhaCard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setInput1('');
    setInput2('');
    setInput3('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'input1') {
      setInput1(value);
      if (value.length === 4 && input2Ref.current) {
        input2Ref.current.focus();
      }
    } else if (name === 'input2') {
      setInput2(value);
      if (value.length === 4 && input3Ref.current) {
        input3Ref.current.focus();
      }
    } else if (name === 'input3') {
      setInput3(value);
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'checkbox1') {
      setCheckbox1(checked);
    } else if (name === 'checkbox2') {
      setCheckbox2(checked);
    }
  };

  const handleCreateABHA = () => {
    if (checkbox2) {
      // Perform the create ABHA action
      console.log('ABHA created!');
    }
  };

  return (
    <div className="card">
      <div className="card-info">
        <h2>
          Create Ayushman Bharat Health Account<br />
          <p style={{textAlign: "center", color: "#E58075"}}>ABHA (Health ID) Card</p> 
          <p style={{textAlign: "center", fontWeight: "600", fontSize: "15px"}}>USING</p>
        </h2>
        <div className="radio-group">
          <label
            htmlFor="filter1-0"
            className={`radio-button ${selectedOption === 'aadhar' ? 'selected' : ''}`}
          >
            Aadhar Number
            <input
              type="radio"
              id="filter1-0"
              value="aadhar"
              checked={selectedOption === 'aadhar'}
              onChange={handleOptionChange}
              defaultChecked
            />
          </label>
          <label
            htmlFor="filter1-1"
            className={`radio-button ${selectedOption === 'mobile' ? 'selected' : ''}`}
          >
            Mobile Number
            <input
              type="radio"
              id="filter1-1"
              value="mobile"
              checked={selectedOption === 'mobile'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div className="input-group">
          {selectedOption === 'aadhar' && (
            <>
              <input
                type="text"
                name="input1"
                value={input1}
                onChange={handleInputChange}
                maxLength={4}
                placeholder="xxxx"
                style={{textAlign: "center"}}
                className="form-control"
              />
              <input
                type="text"
                name="input2"
                value={input2}
                onChange={handleInputChange}
                maxLength={4}
                placeholder="xxxx"
                style={{textAlign: "center"}}
                className="form-control"
                ref={input2Ref}
              />
              <input
                type="text"
                name="input3"
                value={input3}
                onChange={handleInputChange}
                maxLength={4}
                placeholder="xxxx"
                style={{textAlign: "center", width: "auto", height: "25px"}}
                className="form-control"
                ref={input3Ref}
              />
            </>
          )}
          {selectedOption === 'mobile' && (
            <>
              <input
                type="text"
                name="input1"
                value="+91"
                style={{ width: '40px', alignContent: "center" }}
                disabled
                className="form-control"
              />
              <input
                type="text"
                name="input2"
                value={input2}
                onChange={handleInputChange}
                maxLength={10}
                placeholder="Enter your number"
                style={{textAlign: "center", width: "auto", height: "25px"}}
                className="form-control"
              />
            </>
          )}
        </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkbox1}
              onChange={handleCheckboxChange}
            />
            Send ABHA Card on WhatsApp
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkbox2}
              onChange={handleCheckboxChange}
            />
            I agree to give the necessary permission to Eka Care to set up my ABHA Health Locker. Learn More
          </label>
        </div>
        <button
          className="create-abha-button btn btn-primary"
          disabled={!checkbox2}
          onClick={handleCreateABHA}
          style={{width: "230px"}}
        >
          Create ABHA
        </button>
      </div>
      <br></br>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ textAlign: "center", marginRight: "10px" }}>
          APPROVED BY NHA
        </p>
        <img src={logo} alt="NHA Logo" style={{ height: "60px", width: "90px" }} />
      </div>

      <div>
        <p style={{textAlign: "center"}}>By continuing, you agree to eka.care <a href='/'>Terms of Service</a> &  
        <a href='/'>Privacy Policy</a></p>
      </div>
    </div>
  );
};

export default AabhaCard;
