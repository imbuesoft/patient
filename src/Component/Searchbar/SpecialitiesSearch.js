import React, { useState } from 'react'
import "./Searchbar.css";

const SpecialitiesSearch = () => {
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Hematology",
    "Infectious Disease",
    "Nephrology",
    "Neurology",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Pulmonology",
    "Radiology",
    "Surgery"
  ]
  const [click, setClick] = useState(false);
  const [input, setInput] = useState('');
  const filteredSpecialities = specialties.filter((specialty) =>
    specialty.toLowerCase().includes(input.toLowerCase())
  );
  const handleFocus = () => {
    setClick(true);
  };

  const handleOptionClick = (specialty) => {
    setInput(specialty)
    setClick(false);
  }

  return (
    <div className="input-group">
      <i className="bi bi-search fs-5 p-2 mx-2 my-auto"></i>
      <input className="drSearch border-0 fs-5" value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={handleFocus}
        onBlur={() => setClick(false)}
        placeholder="Search doctor, clinics, hospitals, etc." />

      <div className="mt-2 suggestionBoxSp overflow-auto">
        {
          click ? filteredSpecialities.map((specialty, index) => {
            return (
              <div className="row py-3" key={index}>
                <div className="col-1">
                  <i className="bi bi-search fs-5 ps-3 align-item-start"></i>
                </div>
                <div className="col-8 ps-4 fs-6 text-start" onClick={() => handleOptionClick(specialty)}>{specialty}</div>
                <div className="col-3 f6-6 text-secondary">SPECIALITY</div>
              </div>
            )
          }) : ""
        }
      </div>
    </div>
  )
}

export default SpecialitiesSearch