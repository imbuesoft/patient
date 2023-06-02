import React, { useState } from 'react';

const LocationDetector = () => {
  const [location, setLocation] = useState(null);

  const handleMapClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <h2>Click to detect location</h2>
      <div style={{ width: '400px', height: '100px', border: '1px solid black' }} onClick={handleMapClick} > 
        click
      </div>
      {location && (
        <div>
          <h3>Detected Location:</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationDetector;