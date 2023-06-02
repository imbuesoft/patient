import React from "react";
import user from "./user.jpg";
import bag from "./bag.jpg";
import location from "./location.jpg";
import './Experience.css'
const Experience = () => {
  return (
    <div>
      <div style={{ width: 570 }}>
        <h3 style={{ textAlign: "center" }}>We do great</h3>
        <div style={{ display: "flex" }}>
          <div style={{ justifyContent: "space-around", marginLeft: 10 }}>
            <img className="container" src={user} alt="User" />
            <h4 style={{ width: 170, textAlign: "center" }}>
              15 Million users every month
            </h4>
          </div>
          <div style={{ justifyContent: "space-between", marginLeft: 10 }}>
            <img className="container" src={bag} alt="Bag" />
            <h4 style={{ width: 170, textAlign: "center" }}>
              Trusted by 2,00,000 healthcare professionals
            </h4>
          </div>
          <div style={{ justifyContent: "space-between", marginLeft: 10 }}>
            <img className="container" src={location} alt="Location" />
            <h4 style={{ width: 170, textAlign: "center" }}>
              We serve in 9 cities
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
