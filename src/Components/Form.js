import React, { useState } from "react";
import "./Form.css";

const Form = () => {

  const [val, setVal] = useState({});
  const [bmi, setBmi] = useState(0);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setVal((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const calculateBMI = () => {
    if (val.Weight && val.Height) {
      const heightInMeters = val.Height / 1000;
      const bmiValue = val.Weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateBMI();
  };

  return (
    <>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1 className="dip mb-3">{bmi}</h1>
          <div className="user-box">
            <input
              type="number"
              name="Height"
              required
              onChange={inputEvent}
              value={val.Height}
            />
            <label>Height</label>
          </div>
          <div className="user-box">
            <input
              type="number"
              name="Weight"
              required
              value={val.Weight}
              onChange={inputEvent}
            />
            <label>Weight</label>
          </div>
          <div className="user-box">
            <input type="number" name="Age" required />
            <label>Age</label>
          </div>
          <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
    />
    <label className="form-check-label" htmlFor="flexRadioDefault1">
      Female
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
      Male
    </label>
  </div>
</>
          <center>
            <button type="submit">Calculate</button>
          </center>
        </form>
      </div>
    </>
  );
};

export default Form;
