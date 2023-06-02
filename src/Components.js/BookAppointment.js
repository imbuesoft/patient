import React, { useState } from 'react';


const BookAppointment = () => {
  const [city, setCity] = useState('');
  const [ailment, setAilment] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAilmentChange = (event) => {
    setAilment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform appointment booking logic here

    // Reset form fields after booking appointment
    setCity('');
    setAilment('');
    setName('');
    setContactNumber('');
  };

  const moreStyle = {
    color: '#5bc3e3',
    fontWeight: 600,
    paddingLeft: '5px',
    verticalAlign: 'top',
    boxSizing: 'inherit',
  };
 

  const citiesOfIndia = [
    'Mumbai',
    'Delhi',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Ahmedabad',
    'Pune',
    'Surat',
    'Jaipur',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Indore',
    'Thane',
    'Bhopal',
    'Visakhapatnam',
    'Pimpri-Chinchwad',
    'Patna',
    'Vadodara',
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400%', padding: '100px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            width: '450px',
            borderRadius: '8px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
            padding: '20px',
          }}
        >
          <center><h4>Book your consultation today</h4></center>
          <form onSubmit={handleSubmit}>
            <select value={city} onChange={handleCityChange} style={{ width: '100%' }}>
              <option value="">Bangalore</option>
              {citiesOfIndia.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <br />
            <br />
            <select value={ailment} onChange={handleAilmentChange} style={{ width: '100%' }}>
              <option value="">Select Ailment*</option>
              <option value="Knee & Joints related">Knee & Joints related</option>
              <option value="General Surgery">General Surgery</option>
              <option value="Anus related">Anus related</option>
              <option value="Eye related">Eye related</option>
              <option value="Cardiology related">Cardiology related</option>
              <option value="Cosmetic Surgery related">Cosmetic Surgery related</option>
              <option value="Kidney related">Kidney related</option>
              <option value="Gynaecology related">Gynaecology related</option>
              <option value="Dentist">Dentist</option>
              <option value="Neurology related">Neurology related</option>
              <option value="Nephrology related">Nephrology related</option>
            
              
              
            </select>
            <br />
            <br />
            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={handleNameChange}
              style={{ width: '100%' }}
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Contact Number*"
              value={contactNumber}
              onChange={handleContactNumberChange}
              style={{ width: '100%' }}
            />
            <br />
            <br />
            <button
              type="submit"
              style={{ backgroundColor: '#531787', color: 'white', height: '100%', width: '100%', borderRadius: '7px' }}
            >
              Book Appointment
            </button>
            <center>
            <h9>
              By submitting the form, you agree to MediPract's <span style={moreStyle}>T&amp;C</span>
            </h9>
            </center>
          </form>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '500px' }}>
          <hr style={{ width: '30%' }} />
          <span style={{ margin: '0 10px', color: 'black' }}>OR</span>
          <hr style={{ width: '30%' }} />
        </div>
        <div
      style={{
        width: '450px',
        height: '70px',
        borderRadius: '5px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        padding: '1px',
      }}
    >
      <center>
      <div className='card-container'height={10} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '500px' }}>
          <div>
            <p>Reach out to us on&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
           
          </div>

           <div style={{ borderLeft: '1px solid gray', paddingLeft: '10px', marginLeft: '10px' }}></div> &nbsp;&nbsp;&nbsp;&nbsp;
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<span role="img" aria-label="Phone Call" backgroundColor='blue'>&#x1F4DE;</span> 08045685554
            </p>
        </div>
      </center>
    </div>
    
       
      </div>
    </div>
  );
};

export default BookAppointment;