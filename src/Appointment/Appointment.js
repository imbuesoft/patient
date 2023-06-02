import React, { useState } from 'react';
import './Appointment.css';
//import Autocomplete from './Autocomplete';

const Appointment = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [patientName, setPatientName] = useState('');
  const options = [
    'Prakash Gujarati',
    'Happy Pachani',
    'Dhara Ramavat',
    'Harshal Katakiya',
    'MediPract',
    'Miraj Sakdecha',
    'Jay Parmar',
  ];

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleCreateAppoint = () => {
    // Handle the logic for creating the appointment
  };

  // const handlePatientNameSelect = (name) => {
  //   setPatientName(name);
  // };

  return (
    <div className="appointment-container d-flex justify-content-center align-items-center">
      <div className="card card-appointment w-50">
        <div className="card-body">
          <h5 className="card-title">This appointment is for</h5>
          <hr className="separator" style={{marginLeft: "80px", marginRight: "80px"}} />
          <div className="form-group row">
            <label htmlFor="patientName" className="col-sm-4 col-form-label">
              Patient Name:
            </label>
            <div className="col-sm-8">
            {/* <Autocomplete options={options} onSelect={handlePatientNameSelect} /> */}
            <select
              className="form-select mb-2"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}>
              <option value="">Select Profile</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="genderSelect" className="col-sm-4 col-form-label">
              Select Gender:
            </label>
            <div className="col-sm-8">
              <select className="form-select mb-2" id="genderSelect" aria-label="Gender">
                <option defaultValue>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="emailId" className="col-sm-4 col-form-label">
              Email ID:
            </label>
            <div className="col-sm-8">
              <input type="email" className="form-control mb-2" id="emailId" placeholder="Enter email (Optional)" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="mobileNumber" className="col-sm-4 col-form-label">
              Mobile Number:
            </label>
            <div className="col-sm-8">
              <input
                type="tel"
                className="form-control mb-2"
                id="mobileNumber"
                placeholder="Example +91-9999999999"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="consultationFees" className="col-sm-4 col-form-label">
              Consultation Fees:
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="btn btn-primary"
                id="consultationFees"
                value="Rs 500"
                disabled
                style={{ width: '100px', height: '45px', marginLeft: '-200px' }}
              />
            </div>
          </div>
          <br />
          <div>
            <p className="card-text" style={{ color: 'gray' }}>
              You will receive an SMS with a verification code on this number.
            </p>
          </div>
          <br />
          <div className="input-checkbox">
            <label>
              <input
                type="checkbox"
                name="checkbox"
                checked={checkbox}
                onChange={handleCheckboxChange}
                style={{marginRight: "5px", marginTop: "5px"}}
              />
              By booking this appointment, you agree to MediPract's <a href="/">Terms & Conditions.</a>
            </label>
          </div>
          <br />
          <button
            className="create-appoint-button"
            disabled={!checkbox}
            onClick={handleCreateAppoint}
          >
            Pay & Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
