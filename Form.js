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
      const heightInMeters = val.Height / 100; // Convert height to meters
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
          <div className="user-box">
            <input type="text" name="Gender" required />
            <label>Gender</label>
          </div>
          <center>
            <button type="submit">Calculate</button>
          </center>
        </form>
      </div>
    </>
  );
};

export default Form;
