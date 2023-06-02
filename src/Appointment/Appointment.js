import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [checkbox2, setCheckbox2] = useState(false);

  const handleCheckboxChange = (e) => {
    setCheckbox2(e.target.checked);
  };

  const handleCreateAppoint = () => {
    // Handle the logic for creating the appointment
  };

  return (
    <div className="appointment-container d-flex justify-content-center align-items-center">
      <div className="card card-appointment w-50">
        <div className="card-body">
          <h5 className="card-title">
            This appointment is for
          </h5>
          <hr className="separator" />
          <div className="form-group row">
            <label htmlFor="patientName" className="col-sm-4 col-form-label">Patient Name:</label>
            <div className="col-sm-8">
              <input type="text" className="form-control mb-2" id="patientName" placeholder="Enter patient name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="genderSelect" className="col-sm-4 col-form-label">Select Gender:</label>
            <div className="col-sm-8">
              <select className="form-select mb-2" id="genderSelect" aria-label="Gender">
                <option selected disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="emailId" className="col-sm-4 col-form-label">Email ID:</label>
            <div className="col-sm-8">
              <input type="email" className="form-control mb-2" id="emailId" placeholder="Enter email (Optional)" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="mobileNumber" className="col-sm-4 col-form-label">Mobile Number:</label>
            <div className="col-sm-8">
              <input type="tel" className="form-control mb-2" id="mobileNumber" placeholder="Example +91-9999999999" />
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
                style={{ width: "100px", height: "45px", marginLeft: "-200px" }}
              />
            </div>
          </div>
          <br />
          <div>
            <p className="card-text" style={{ color: "gray" }}>
              You Will Receive an SMS with a verification code on this number.
            </p>
          </div>
          <br />
          <div className="input-checkbox">
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                checked={checkbox2}
                onChange={handleCheckboxChange}
              />
              By Booking this appointment you agree to MediPract's <a href="/">Terms & Conditions.</a>
            </label>
          </div>
          <br />
          <button
            className="create-appoint-button"
            disabled={!checkbox2}
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
