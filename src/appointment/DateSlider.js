import React, { useState } from 'react';
import "./style.css";
const DateSlider = () => {
  const [dates, setDates] = useState([
    '2023-06-01',
    '2023-06-02',
    '2023-06-03',
    '2023-06-04',
    '2023-06-05',
    // Add more dates as needed
  ]);

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < dates.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="date-slider">
      <button className="arrow" onClick={handlePrev} disabled={startIndex === 0}>
      <p>&lt;</p>  
      </button>
      <div className="dates">
        {dates.slice(startIndex, startIndex + 1).map((date, index) => (
          <div key={index} className="date">
            {date}
          </div> 
        ))}
      </div>
      <button className="arrow" onClick={handleNext} disabled={startIndex === dates.length - 1} >
        &gt;
      </button>
    </div>
  );
};

export default DateSlider;
